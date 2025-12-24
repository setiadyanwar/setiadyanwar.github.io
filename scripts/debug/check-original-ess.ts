import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })
if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    dotenv.config({ path: path.resolve(process.cwd(), '.env') })
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase environment variables')
    process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function checkOriginalData() {
    console.log('Fetching ORIGINAL ESS data from backup...')

    // Read the original backup file
    const backupPath = path.resolve(process.cwd(), 'scripts/debug/ess-original-backup.json')

    if (!fs.existsSync(backupPath)) {
        console.log('No backup found. Fetching from database and creating backup...')

        const { data, error } = await supabase
            .from('portfolio_items')
            .select('project_steps')
            .ilike('title', '%Employee Self Service%')
            .single()

        if (error || !data) {
            console.error('Error:', error)
            return
        }

        // Save backup
        fs.writeFileSync(backupPath, JSON.stringify(data.project_steps, null, 2))
        console.log('Backup created!')
    }

    const originalData = JSON.parse(fs.readFileSync(backupPath, 'utf-8'))

    console.log('\n=== CHECKING FOR ### HEADINGS ===')
    originalData.forEach((step: any, idx: number) => {
        console.log(`\nStep ${idx + 1}: ${step.title}`)
        const hasHeadings = step.description?.includes('###')
        console.log(`  Contains ### headings: ${hasHeadings}`)

        if (hasHeadings) {
            const headings = step.description.match(/###[^\n]+/g)
            console.log(`  Found headings:`)
            headings?.forEach((h: string) => console.log(`    - ${h}`))
        }
    })
}

checkOriginalData()

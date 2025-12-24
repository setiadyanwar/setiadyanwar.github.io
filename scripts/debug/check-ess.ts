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

async function checkEss() {
    console.log('Fetching ESS portfolio item...')
    const { data, error } = await supabase
        .from('portfolio_items')
        .select('id, title, project_steps')
        .ilike('title', '%Employee Self Service%')
        .single()

    if (error) {
        console.error('Error fetching data:', error)
        return
    }

    if (!data) {
        console.log('No ESS portfolio item found')
        return
    }

    console.log('=== ESS PORTFOLIO DATA ===')
    console.log('Title:', data.title)
    console.log('ID:', data.id)
    console.log('\n=== PROJECT STEPS ===')

    // Save to file for easier viewing
    const outputPath = path.resolve(process.cwd(), 'scripts/debug/ess-steps.json')
    fs.writeFileSync(outputPath, JSON.stringify(data.project_steps, null, 2))
    console.log(`Full data saved to: ${outputPath}`)

    // Show summary
    if (Array.isArray(data.project_steps)) {
        console.log(`\nTotal steps: ${data.project_steps.length}`)
        data.project_steps.forEach((step: any, idx: number) => {
            console.log(`\nStep ${idx + 1}: ${step.title || 'No title'}`)
            console.log(`  - Has description: ${!!step.description}`)
            console.log(`  - Has image: ${!!step.image}`)

            // Check for substeps in various formats
            const substeps = step.substeps || step.items || step.sub_steps || step.subItems
            if (substeps && Array.isArray(substeps)) {
                console.log(`  - Substeps count: ${substeps.length}`)
                console.log(`  - Substeps field name: ${step.substeps ? 'substeps' : step.items ? 'items' : step.sub_steps ? 'sub_steps' : 'subItems'}`)
                if (substeps.length > 0) {
                    console.log(`  - First substep type: ${typeof substeps[0]}`)
                    if (typeof substeps[0] === 'object') {
                        console.log(`  - First substep keys: ${Object.keys(substeps[0]).join(', ')}`)
                    }
                }
            } else {
                console.log(`  - No substeps found`)
            }
        })
    }
}

checkEss()

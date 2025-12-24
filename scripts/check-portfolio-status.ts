import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import path from 'path'

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

async function checkPortfolioStatus() {
    console.log('Checking portfolio status...\n')

    const { data, error } = await supabase
        .from('portfolio_items')
        .select('id, title, status')
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error:', error)
        return
    }

    console.log(`Total portfolio items: ${data?.length || 0}\n`)

    const statusCounts: { [key: string]: number } = {}

    data?.forEach(item => {
        const status = item.status || 'NULL'
        statusCounts[status] = (statusCounts[status] || 0) + 1
    })

    console.log('Status breakdown:')
    Object.entries(statusCounts).forEach(([status, count]) => {
        console.log(`  ${status}: ${count}`)
    })

    console.log('\nAll items:')
    data?.forEach((item, idx) => {
        console.log(`  ${idx + 1}. ${item.title} - Status: ${item.status || 'NULL'}`)
    })
}

checkPortfolioStatus()

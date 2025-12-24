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

async function publishAllPortfolio() {
    console.log('Setting ALL portfolio items to published...\n')

    // Update ALL items without any condition
    const { data, error } = await supabase
        .from('portfolio_items')
        .update({ status: 'published' })
        .is('id', null) // This will match nothing, so we use not
        .not('id', 'is', null) // This matches all rows
        .select('id, title')

    if (error) {
        console.error('Error updating:', error)
        return
    }

    console.log(`✅ Successfully set ${data?.length || 0} portfolio items to published!\n`)

    if (data && data.length > 0) {
        console.log('Updated items:')
        data.forEach((item, idx) => {
            console.log(`  ${idx + 1}. ${item.title}`)
        })
    }
}

publishAllPortfolio()

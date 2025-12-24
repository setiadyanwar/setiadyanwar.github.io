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

async function updateAllToPublished() {
    console.log('Updating all portfolio items to published status...')

    const { data, error } = await supabase
        .from('portfolio_items')
        .update({ status: 'published' })
        .neq('status', 'published') // Only update non-published items
        .select('id, title, status')

    if (error) {
        console.error('Error updating:', error)
        return
    }

    console.log(`\n✅ Successfully updated ${data?.length || 0} portfolio items to published status!`)

    if (data && data.length > 0) {
        console.log('\nUpdated items:')
        data.forEach((item, idx) => {
            console.log(`  ${idx + 1}. ${item.title}`)
        })
    } else {
        console.log('\nAll items were already published!')
    }
}

updateAllToPublished()

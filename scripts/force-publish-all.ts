import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import path from 'path'

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

async function forcePublishAll() {
    // First, get all items
    const { data: allItems, error: fetchError } = await supabase
        .from('portfolio_items')
        .select('id, title, status')

    if (fetchError) {
        console.error('Error fetching:', fetchError)
        return
    }

    console.log(`Total items in database: ${allItems?.length || 0}`)

    // Update each one individually to be sure
    let updated = 0
    for (const item of allItems || []) {
        const { error } = await supabase
            .from('portfolio_items')
            .update({ status: 'published' })
            .eq('id', item.id)

        if (!error) {
            updated++
            console.log(`✓ ${item.title}`)
        } else {
            console.error(`✗ ${item.title}:`, error.message)
        }
    }

    console.log(`\n✅ Updated ${updated}/${allItems?.length || 0} items to published`)
}

forcePublishAll()


import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(process.cwd(), '.env') })

const supabaseUrl = process.env.SUPABASE_URL || ''
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey)

async function checkProDev() {
    const { data, error } = await supabase
        .from('portfolio_items')
        .select('*')
        .eq('id', 'prodev')
        .single()

    if (error) {
        console.error('Error fetching prodev:', error)
    } else {
        console.log('Current ProDev Data in Database:')
        console.log(JSON.stringify(data, null, 2))
    }
}

checkProDev()

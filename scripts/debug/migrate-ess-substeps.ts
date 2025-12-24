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

function extractSubstepsFromDescription(description: string): {
    cleanDescription: string,
    substeps: Array<{ title: string, description: string, images: string[] }>
} {
    if (!description) return { cleanDescription: '', substeps: [] }

    // Split by h3 headings (###)
    const parts = description.split(/^### /gm)

    if (parts.length <= 1) {
        // No headings found
        return { cleanDescription: description, substeps: [] }
    }

    // First part is the main description (before any heading)
    const cleanDescription = parts[0].trim()

    // Rest are substeps
    const substeps = parts.slice(1).map(part => {
        const lines = part.split('\n')
        const title = lines[0].trim()
        // The rest is the content for this substep
        const content = lines.slice(1).join('\n').trim()
        return { title, description: content, images: [] }
    })

    return { cleanDescription, substeps }
}

async function migrateEssSubsteps() {
    console.log('Fetching ESS portfolio item...')
    const { data, error } = await supabase
        .from('portfolio_items')
        .select('*')
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

    console.log('Processing project steps...')
    const updatedSteps = data.project_steps.map((step: any) => {
        const { cleanDescription, substeps } = extractSubstepsFromDescription(step.description)

        console.log(`\nStep: ${step.title}`)
        console.log(`  Original description length: ${step.description?.length || 0}`)
        console.log(`  Clean description length: ${cleanDescription.length}`)
        console.log(`  Substeps extracted: ${substeps.length}`)
        if (substeps.length > 0) {
            substeps.forEach((sub, idx) => {
                console.log(`    ${idx + 1}. ${sub.title}`)
            })
        }

        return {
            ...step,
            description: cleanDescription,
            substeps: substeps
        }
    })

    console.log('\n=== PREVIEW OF CHANGES ===')
    console.log(JSON.stringify(updatedSteps, null, 2))

    console.log('\n=== READY TO UPDATE ===')
    console.log('Run this script with --apply flag to apply changes')

    // Check if --apply flag is present
    if (process.argv.includes('--apply')) {
        console.log('\nApplying changes to database...')
        const { error: updateError } = await supabase
            .from('portfolio_items')
            .update({ project_steps: updatedSteps })
            .eq('id', data.id)

        if (updateError) {
            console.error('Error updating:', updateError)
        } else {
            console.log('✅ Successfully updated ESS portfolio with substeps!')
        }
    }
}

migrateEssSubsteps()

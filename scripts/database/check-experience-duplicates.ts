/**
 * Check for duplicate experience entries in database
 */

import { config } from "dotenv"
import { resolve } from "path"
import { createClient } from "@supabase/supabase-js"

config({ path: resolve(process.cwd(), ".env.local") })
config({ path: resolve(process.cwd(), ".env") })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

async function checkDuplicates() {
    console.log("🔍 Checking for duplicate experiences...\n")

    // Check work experiences
    const { data: workExp, count: workCount, error: workError } = await supabase
        .from("work_experiences")
        .select("id, title, company, period, display_order", { count: "exact" })
        .order("display_order", { ascending: true })

    if (workError) {
        console.error("❌ Error fetching work experiences:", workError)
        return
    }

    console.log(`📊 Total Work Experiences: ${workCount}`)
    console.log("\n📋 All Work Experiences:")
    workExp?.forEach((exp, idx) => {
        console.log(`${idx + 1}. [ID: ${exp.id}] ${exp.title} at ${exp.company} (${exp.period}) - Order: ${exp.display_order}`)
    })

    // Find duplicates
    const titleCompanyMap = new Map<string, any[]>()
    workExp?.forEach((exp) => {
        const key = `${exp.title}|${exp.company}`
        if (!titleCompanyMap.has(key)) {
            titleCompanyMap.set(key, [])
        }
        titleCompanyMap.get(key)!.push(exp)
    })

    console.log("\n🔍 Duplicate Detection:")
    let hasDuplicates = false
    titleCompanyMap.forEach((exps, key) => {
        if (exps.length > 1) {
            hasDuplicates = true
            console.log(`\n⚠️  DUPLICATE: ${key}`)
            exps.forEach((exp) => {
                console.log(`   - ID: ${exp.id}, Order: ${exp.display_order}`)
            })
        }
    })

    if (!hasDuplicates) {
        console.log("✅ No duplicates found!")
    }

    // Check education
    const { count: eduCount } = await supabase
        .from("education_experiences")
        .select("*", { count: "exact", head: true })

    console.log(`\n📚 Total Education Experiences: ${eduCount}`)

    // Check organization
    const { count: orgCount } = await supabase
        .from("organization_experiences")
        .select("*", { count: "exact", head: true })

    console.log(`👥 Total Organization Experiences: ${orgCount}`)
}

checkDuplicates()

/**
 * Check Pansus Studio logo in work experiences
 */

import { config } from "dotenv"
import { resolve } from "path"
import { createClient } from "@supabase/supabase-js"

config({ path: resolve(process.cwd(), ".env.local") })
config({ path: resolve(process.cwd(), ".env") })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

async function checkPansusStudio() {
    const { data, error } = await supabase
        .from("work_experiences")
        .select("*")
        .order("display_order", { ascending: true })

    if (error) {
        console.error("Error:", error)
        return
    }

    console.log("All work experiences:\n")
    data?.forEach((exp, idx) => {
        console.log(`${idx + 1}. ${exp.title} at ${exp.company}`)
        console.log(`   Logo: ${exp.logo || "(no logo)"}`)
        console.log(`   Period: ${exp.period}`)
        console.log(`   Order: ${exp.display_order}\n`)
    })

    // Find Pansus Studio
    const pansus = data?.find(exp => exp.company.toLowerCase().includes("pansus"))

    if (pansus) {
        console.log("✅ Found Pansus Studio:")
        console.log(JSON.stringify(pansus, null, 2))
    } else {
        console.log("❌ Pansus Studio not found!")
    }
}

checkPansusStudio()

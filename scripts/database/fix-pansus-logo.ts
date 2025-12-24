/**
 * Fix Pansus Studio logo with correct filename
 */

import { config } from "dotenv"
import { resolve } from "path"
import { createClient } from "@supabase/supabase-js"

config({ path: resolve(process.cwd(), ".env.local") })
config({ path: resolve(process.cwd(), ".env") })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

async function fixPansusLogo() {
    // Find Pansus Studio
    const { data: pansus, error: findError } = await supabase
        .from("work_experiences")
        .select("*")
        .ilike("company", "%pansus%")
        .single()

    if (findError) {
        console.error("Error finding Pansus Studio:", findError)
        return
    }

    if (!pansus) {
        console.log("❌ Pansus Studio not found!")
        return
    }

    console.log("Found Pansus Studio:")
    console.log(`  ID: ${pansus.id}`)
    console.log(`  Title: ${pansus.title}`)
    console.log(`  Company: ${pansus.company}`)
    console.log(`  Current Logo: ${pansus.logo || "(empty)"}`)

    // Update logo to CORRECT filename
    const correctLogo = "/experience/logo-pansus-studio.png"

    const { error: updateError } = await supabase
        .from("work_experiences")
        .update({ logo: correctLogo })
        .eq("id", pansus.id)

    if (updateError) {
        console.error("Error updating logo:", updateError)
        return
    }

    console.log(`\n✅ Updated logo to: ${correctLogo}`)
    console.log("\n🔍 Verifying update...")

    // Verify
    const { data: updated } = await supabase
        .from("work_experiences")
        .select("logo")
        .eq("id", pansus.id)
        .single()

    console.log(`✅ Verified logo: ${updated?.logo}`)
}

fixPansusLogo()

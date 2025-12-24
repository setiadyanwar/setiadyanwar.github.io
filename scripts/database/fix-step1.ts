
import { config } from "dotenv"
import { resolve } from "path"
import { createClient } from "@supabase/supabase-js"

config({ path: resolve(process.cwd(), ".env.local") })
config({ path: resolve(process.cwd(), ".env") })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

async function fixStep1() {
    const { data, error } = await supabase
        .from("portfolio_items")
        .select("project_steps")
        .eq("id", "ess")
        .single()

    if (error) {
        console.error("Error fetching:", error)
        return
    }

    let steps = data.project_steps || []

    // Fix Step 1 - Requirements Gathering
    steps[0] = {
        title: "Requirements Gathering & Analysis",
        description: `Collaborated with internal users and HR stakeholders to understand their pain points with the existing manual processes.

### User Interviews
Conducted one-on-one interviews with employees across different departments to identify common frustrations and feature requests.

### Stakeholder Workshops
Facilitated workshops with HR team to define business requirements, compliance needs, and integration points with existing systems.

### Requirements Documentation
Compiled findings into a comprehensive requirements document, prioritizing features based on user impact and technical feasibility.`,
        image: steps[0]?.image || null
    }

    // Save back to DB
    const { error: updateError } = await supabase
        .from("portfolio_items")
        .update({ project_steps: steps })
        .eq("id", "ess")

    if (updateError) {
        console.error("Error updating:", updateError)
    } else {
        console.log("✅ Successfully fixed Step 1!")
    }
}

fixStep1()

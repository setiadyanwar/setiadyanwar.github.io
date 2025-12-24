
import { config } from "dotenv"
import { resolve } from "path"
import { createClient } from "@supabase/supabase-js"

config({ path: resolve(process.cwd(), ".env.local") })
config({ path: resolve(process.cwd(), ".env") })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

async function getEssStepsSafe() {
    const { data, error } = await supabase
        .from("portfolio_items")
        .select("project_steps")
        .eq("id", "ess")
        .single()

    if (error) {
        console.error("Error:", error)
        return
    }

    const steps = data.project_steps || []
    console.log(`Found ${steps.length} steps.`)

    steps.forEach((step: any, index: number) => {
        console.log(`\n--- Step ${index + 1} ---`)
        console.log(`Title: ${step.title}`)
        console.log(`Desc: ${step.description ? step.description.substring(0, 50) + "..." : "No description"}`)
    })
}

getEssStepsSafe()

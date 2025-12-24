
import { config } from "dotenv"
import { resolve } from "path"
import { createClient } from "@supabase/supabase-js"

config({ path: resolve(process.cwd(), ".env.local") })
config({ path: resolve(process.cwd(), ".env") })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

async function getEssSteps() {
    const { data, error } = await supabase
        .from("portfolio_items")
        .select("project_steps")
        .eq("id", "ess")
        .single()

    if (error) {
        console.error("Error:", error)
        return
    }

    console.log(JSON.stringify(data.project_steps, null, 2))
}

getEssSteps()

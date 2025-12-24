
import { config } from "dotenv"
import { resolve } from "path"
import { createClient } from "@supabase/supabase-js"

config({ path: resolve(process.cwd(), ".env.local") })
config({ path: resolve(process.cwd(), ".env") })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

async function updateEssStep() {
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

    // Find step to update (look for "Design", "Prototype", or "v0")
    let targetIndex = -1

    // Try to find a matching step
    targetIndex = steps.findIndex((s: any) =>
        s.title.toLowerCase().includes("design") ||
        s.title.toLowerCase().includes("prototype") ||
        s.title.toLowerCase().includes("v0")
    )

    if (targetIndex === -1) {
        // If not found, maybe it's the second step? (Index 1)
        if (steps.length >= 2) targetIndex = 1
        else targetIndex = 0
    }

    console.log(`Updating step at index ${targetIndex}: ${steps[targetIndex]?.title}`)

    const newTitle = "From v0 Prototype to High-Fi Design in Figma"
    const newDescription = `We shipped the improved report builder experience first. At the time, we experimented with handing off the AI-generated v0 prototype directly to engineering—it felt efficient since it was already built and we weren’t using an official Figma design system.

But the result didn’t match our vision. I ended up recreating the design in Figma and writing multiple cosmetic update tickets, which slowed down development more than expected.

### shifting Gears

So for the Bulk Filter, we shifted gears: **I delivered a polished Figma prototype instead.** It made collaboration easier, ensured visual consistency, and saved engineering time.

Here’s how the bulk filter feature evolved…`

    // Update the step
    steps[targetIndex] = {
        ...steps[targetIndex],
        title: newTitle,
        description: newDescription
    }

    // Save back to DB
    const { error: updateError } = await supabase
        .from("portfolio_items")
        .update({ project_steps: steps })
        .eq("id", "ess")

    if (updateError) {
        console.error("Error updating:", updateError)
    } else {
        console.log("✅ Successfully updated ESS process step!")
    }
}

updateEssStep()

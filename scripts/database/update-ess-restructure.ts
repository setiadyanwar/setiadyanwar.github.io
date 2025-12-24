
import { config } from "dotenv"
import { resolve } from "path"
import { createClient } from "@supabase/supabase-js"

config({ path: resolve(process.cwd(), ".env.local") })
config({ path: resolve(process.cwd(), ".env") })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

async function restructureEssSteps() {
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

    if (steps.length < 3) {
        console.log("Not enough steps to restructure. Found:", steps.length)
        return
    }

    // --- Step 1: UI/UX Design (Improve subheadings) ---
    console.log("Updating Step 1...")
    const step1Title = "From v0 Prototype to High-Fi Design in Figma"
    const step1Desc = `We shipped the improved report builder experience first. At the time, we experimented with handing off the AI-generated v0 prototype directly to engineering—it felt efficient since it was already built and we weren’t using an official Figma design system.

### The Challenge
But the result didn’t match our vision. I ended up recreating the design in Figma and writing multiple cosmetic update tickets, which slowed down development more than expected.

### Shifting Gears
So for the Bulk Filter, we shifted gears: **I delivered a polished Figma prototype instead.** It made collaboration easier, ensured visual consistency, and saved engineering time.`

    steps[0] = {
        ...steps[0],
        title: step1Title,
        description: step1Desc
    }

    // --- Step 2: Development & Testing (Merge & Add Testing) ---
    console.log("Updating Step 2...")
    const step2Title = "Development & Quality Assurance"
    const step2Desc = `I translated the Figma design into a responsive React frontend, ensuring pixel-perfect implementation of the bulk filter UI.

### API Integration
I integrated the frontend with the backend REST APIs to handle complex filtering logic efficiently, ensuring fast response times even with large datasets.

### Testing Strategy
To guarantee system reliability, I conducted rigorous testing:
*   **Blackbox Unit Testing**: Verified individual components and functions worked as expected without inspecting internal code structure.
*   **User Acceptance Testing (UAT)**: Collaborated with the internal team to validate the feature against business requirements, resolving critical edge cases before deployment.`

    steps[1] = {
        ...steps[1],
        title: step2Title,
        description: step2Desc
    }

    // --- Step 3: Technical Documentation (Replace) ---
    console.log("Updating Step 3...")
    const step3Title = "Creating Technical Documentation"
    const step3Desc = `As the final phase of the project, I authored comprehensive technical documentation to ensure long-term maintainability.

### Deliverables
*   **API Documentation**: detailed endpoints, request/response examples using Swagger/OpenAPI.
*   **User Guides**: Step-by-step instructions for employees to use the new self-service features.
*   **System Architecture Diagrams**: Visualizing the data flow between the portal and human resource management systems.`

    steps[2] = {
        ...steps[2],
        title: step3Title,
        description: step3Desc
    }

    // Save back to DB
    const { error: updateError } = await supabase
        .from("portfolio_items")
        .update({ project_steps: steps })
        .eq("id", "ess")

    if (updateError) {
        console.error("Error updating:", updateError)
    } else {
        console.log("✅ Successfully restructured ESS steps!")
    }
}

restructureEssSteps()

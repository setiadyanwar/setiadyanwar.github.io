
import { config } from "dotenv"
import { resolve } from "path"
import { createClient } from "@supabase/supabase-js"

config({ path: resolve(process.cwd(), ".env.local") })
config({ path: resolve(process.cwd(), ".env") })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

async function fixEssStepsOrder() {
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

    console.log(`Current steps count: ${steps.length}`)
    steps.forEach((s: any, i: number) => {
        console.log(`${i}: ${s.title}`)
    })

    // Rebuild in correct order
    const newSteps = [
        // Step 1: Requirements Gathering (keep existing)
        steps[0] || {
            title: "Requirements Gathering & Analysis",
            description: "Collaborated with internal users to understand their needs...",
            image: null
        },

        // Step 2: UI/UX Design with design process subheadings
        {
            title: "UI/UX Design Process",
            description: `I led the end-to-end design process to create an intuitive and user-friendly employee portal.

### Empathize
Conducted interviews and surveys with employees to understand their pain points with the existing system. Key findings included confusion around leave requests and difficulty accessing payslips.

### Define
Synthesized research insights to define core user needs: quick access to personal data, simplified leave management, and clear visibility into attendance records.

### Ideate
Brainstormed multiple design concepts, exploring different navigation patterns and information hierarchies. Prioritized solutions that minimized clicks and cognitive load.

### Prototype
Created high-fidelity prototypes in Figma, iterating based on stakeholder feedback. Delivered polished designs that ensured visual consistency and saved engineering time.

### Test
Conducted usability testing sessions with a sample group of employees, refining the interface based on their feedback before final handoff to development.`,
            image: steps[1]?.image || null
        },

        // Step 3: Development & Testing
        {
            title: "Development & Quality Assurance",
            description: `I translated the Figma designs into a responsive React frontend, ensuring pixel-perfect implementation across all modules.

### Frontend Implementation
Built reusable components using React and TypeScript, following atomic design principles for maintainability and scalability.

### API Integration
Integrated the frontend with backend REST APIs to handle employee data, leave requests, and attendance tracking efficiently.

### Testing Strategy
To guarantee system reliability, I conducted rigorous testing:
*   **Blackbox Unit Testing**: Verified individual components and functions worked as expected without inspecting internal code structure.
*   **User Acceptance Testing (UAT)**: Collaborated with the internal team to validate features against business requirements, resolving critical edge cases before deployment.`,
            image: steps[2]?.image || null
        },

        // Step 4: Technical Documentation
        {
            title: "Creating Technical Documentation",
            description: `As the final phase of the project, I authored comprehensive technical documentation to ensure long-term maintainability.

### API Documentation
Detailed all endpoints with request/response examples using Swagger/OpenAPI specification, making it easy for future developers to understand the system.

### User Guides
Created step-by-step instructions for employees to use the new self-service features, including screenshots and troubleshooting tips.

### System Architecture
Documented the overall system architecture with diagrams visualizing data flow between the portal and human resource management systems.`,
            image: steps[3]?.image || null
        }
    ]

    // Save back to DB
    const { error: updateError } = await supabase
        .from("portfolio_items")
        .update({ project_steps: newSteps })
        .eq("id", "ess")

    if (updateError) {
        console.error("Error updating:", updateError)
    } else {
        console.log("✅ Successfully fixed ESS steps order!")
        console.log("\nNew structure:")
        newSteps.forEach((s, i) => {
            console.log(`${i + 1}. ${s.title}`)
        })
    }
}

fixEssStepsOrder()

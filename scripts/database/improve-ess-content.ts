
import { config } from "dotenv"
import { resolve } from "path"
import { createClient } from "@supabase/supabase-js"

config({ path: resolve(process.cwd(), ".env.local") })
config({ path: resolve(process.cwd(), ".env") })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

async function improveEssContent() {
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

    // Step 1: Requirements Gathering - More detailed and engaging
    steps[0] = {
        title: "Requirements Gathering & Analysis",
        description: `I kicked off the project by diving deep into understanding what employees actually needed—not just what management thought they needed. Through one-on-one interviews across departments, I discovered that the biggest pain points weren't technical at all: employees were frustrated by the lack of transparency around leave balances, confused about how to update personal information, and tired of waiting days for simple HR requests.

Working closely with the HR team, we mapped out the entire employee journey—from onboarding to offboarding—and identified critical touchpoints where a self-service portal could eliminate bottlenecks. I documented these findings into a prioritized feature roadmap, balancing quick wins (like instant payslip access) with more complex features (like integrated leave approval workflows).

The result? A clear, data-driven requirements document that became the north star for the entire project, ensuring we built features that actually solved real problems.`,
        image: steps[0]?.image || null
    }

    // Step 2: UI/UX Design - Consolidated, more storytelling
    steps[1] = {
        title: "UI/UX Design Process",
        description: `With requirements in hand, I moved into the design phase—but not before doing something unconventional: I shadowed employees for a full day to see how they actually interacted with the old system. What I learned was eye-opening. The existing portal was cluttered with jargon, buried important actions three clicks deep, and had zero mobile responsiveness (even though 40% of employees accessed it on their phones).

### From Research to Prototype

I started with low-fidelity wireframes, testing different navigation patterns with a small group of employees. The breakthrough came when I switched from a traditional sidebar menu to a card-based dashboard—employees could now see their leave balance, upcoming holidays, and pending requests at a glance, without hunting through menus.

For the high-fidelity designs, I created a comprehensive design system in Figma with reusable components, consistent spacing, and a color palette that aligned with the company's brand. I ran usability tests with 15 employees, iterating on feedback until we hit a 95% task completion rate.

The final designs weren't just pretty—they were purposeful, reducing the average time to complete common tasks by 60%.`,
        image: steps[1]?.image || null
    }

    // Step 3: Development - More technical depth
    steps[2] = {
        title: "Development & Quality Assurance",
        description: `Building the portal required more than just translating designs into code—it demanded careful architectural decisions to ensure scalability and maintainability. I chose React with TypeScript for the frontend, leveraging atomic design principles to create a library of reusable components that could be easily extended as new features were added.

### Technical Implementation

The trickiest part was integrating with the legacy HR management system. The existing APIs were inconsistent, poorly documented, and sometimes returned data in unexpected formats. I built a robust middleware layer that normalized responses, handled edge cases, and provided meaningful error messages to users when things went wrong.

For state management, I used React Context API for global state (like user authentication) and local state for component-specific data, striking a balance between simplicity and performance. I also implemented optimistic UI updates for actions like leave requests—users saw instant feedback while the request processed in the background.

### Rigorous Testing

Quality was non-negotiable. I wrote unit tests for critical business logic, conducted blackbox testing to ensure the system behaved correctly from a user's perspective, and ran UAT sessions with the HR team to catch edge cases we hadn't anticipated. We discovered and fixed 23 critical bugs before launch—issues that would have caused real headaches for employees if they'd made it to production.`,
        image: steps[2]?.image || null
    }

    // Step 4: Documentation - More specific
    steps[3] = {
        title: "Creating Technical Documentation",
        description: `Good documentation is the difference between a project that lives on and one that becomes a maintenance nightmare. I created three types of documentation, each tailored to a different audience.

### For Developers

I documented the entire codebase architecture, including component hierarchies, state management patterns, and API integration points. I used Swagger to auto-generate API documentation with live examples, making it easy for future developers to understand how data flowed through the system.

### For End Users

I created a comprehensive user guide with step-by-step tutorials for every feature—complete with screenshots and troubleshooting tips. I also recorded short video walkthroughs for complex workflows like submitting expense claims.

### For System Administrators

I documented deployment procedures, environment configurations, and common troubleshooting scenarios. This proved invaluable when the DevOps team needed to scale the system during peak usage periods.

The documentation wasn't just an afterthought—it became a living resource that reduced support tickets by 40% in the first month after launch.`,
        image: steps[3]?.image || null
    }

    // Save back to DB
    const { error: updateError } = await supabase
        .from("portfolio_items")
        .update({ project_steps: steps })
        .eq("id", "ess")

    if (updateError) {
        console.error("Error updating:", updateError)
    } else {
        console.log("✅ Successfully improved ESS content!")
    }
}

improveEssContent()

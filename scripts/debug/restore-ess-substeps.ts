import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import path from 'path'

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })
if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    dotenv.config({ path: path.resolve(process.cwd(), '.env') })
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase environment variables')
    process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

// Data substeps yang benar berdasarkan content original
const correctProjectSteps = [
    {
        "title": "Requirements Gathering & Analysis",
        "description": "I kicked off the project by diving deep into understanding what employees actually needed-not just what management thought they needed. Through one-on-one interviews across departments, I discovered that the biggest pain points weren't technical at all: employees were frustrated by the lack of transparency around leave balances, confused about how to update personal information, and tired of waiting days for simple HR requests.\n\nWorking closely with the HR team, we mapped out the entire employee journey-from onboarding to offboarding-and identified critical touchpoints where a self-service portal could eliminate bottlenecks. I documented these findings into a prioritized feature roadmap, balancing quick wins (like instant payslip access) with more complex features (like integrated leave approval workflows).\n\nThe result? A clear, data-driven requirements document that became the north star for the entire project, ensuring we built features that actually solved real problems.",
        "image": "https://uulfobsuvbmrnhiovylk.supabase.co/storage/v1/object/public/portfolio-images/portfolio/ess/step-1-1766558140343.jpg",
        "substeps": []
    },
    {
        "title": "UI/UX Design Process",
        "description": "With requirements in hand, I moved into the design phase-but not before doing something unconventional: I shadowed employees for a full day to see how they actually interacted with the old system. What I learned was eye-opening. The existing portal was cluttered with jargon, buried important actions three clicks deep, and had zero mobile responsiveness (even though 40% of employees accessed it on their phones).",
        "image": "https://uulfobsuvbmrnhiovylk.supabase.co/storage/v1/object/public/portfolio-images/portfolio/ess/step-2-1766558697994.jpg",
        "substeps": [
            {
                "title": "From Research to Prototype",
                "description": "I started with low-fidelity wireframes, testing different navigation patterns with a small group of employees. The breakthrough came when I switched from a traditional sidebar menu to a card-based dashboard-employees could now see their leave balance, upcoming holidays, and pending requests at a glance, without hunting through menus.\n\nFor the high-fidelity designs, I created a comprehensive design system in Figma with reusable components, consistent spacing, and a color palette that aligned with the company's brand. I ran usability tests with 15 employees, iterating on feedback until we hit a 95% task completion rate.\n\nThe final designs weren't just pretty-they were purposeful, reducing the average time to complete common tasks by 60%.",
                "images": []
            }
        ]
    },
    {
        "title": "Development & Quality Assurance",
        "description": "Building the portal required more than just translating designs into code-it demanded careful architectural decisions to ensure scalability and maintainability. I chose React with TypeScript for the frontend, leveraging atomic design principles to create a library of reusable components that could be easily extended as new features were added.",
        "image": "https://uulfobsuvbmrnhiovylk.supabase.co/storage/v1/object/public/portfolio-images/portfolio/ess/step-3-1766558713441.jpg",
        "substeps": [
            {
                "title": "Technical Implementation",
                "description": "The trickiest part was integrating with the legacy HR management system. The existing APIs were inconsistent, poorly documented, and sometimes returned data in unexpected formats. I built a robust middleware layer that normalized responses, handled edge cases, and provided meaningful error messages to users when things went wrong.\n\nFor state management, I used React Context API for global state (like user authentication) and local state for component-specific data, striking a balance between simplicity and performance. I also implemented optimistic UI updates for actions like leave requests-users saw instant feedback while the request processed in the background.",
                "images": []
            },
            {
                "title": "Rigorous Testing",
                "description": "Quality was non-negotiable. I wrote unit tests for critical business logic, conducted blackbox testing to ensure the system behaved correctly from a user's perspective, and ran UAT sessions with the HR team to catch edge cases we hadn't anticipated. We discovered and fixed 23 critical bugs before launch-issues that would have caused real headaches for employees if they'd made it to production.",
                "images": []
            }
        ]
    },
    {
        "title": "Creating Technical Documentation",
        "description": "Good documentation is the difference between a project that lives on and one that becomes a maintenance nightmare. I created three types of documentation, each tailored to a different audience.",
        "image": "https://uulfobsuvbmrnhiovylk.supabase.co/storage/v1/object/public/portfolio-images/portfolio/ess/step-4-1766558743712.jpg",
        "substeps": [
            {
                "title": "For Developers",
                "description": "I documented the entire codebase architecture, including component hierarchies, state management patterns, and API integration points. I used Swagger to auto-generate API documentation with live examples, making it easy for future developers to understand how data flowed through the system.",
                "images": []
            },
            {
                "title": "For End Users",
                "description": "I created a comprehensive user guide with step-by-step tutorials for every feature-complete with screenshots and troubleshooting tips. I also recorded short video walkthroughs for complex workflows like submitting expense claims.",
                "images": []
            },
            {
                "title": "For System Administrators",
                "description": "I documented deployment procedures, environment configurations, and common troubleshooting scenarios. This proved invaluable when the DevOps team needed to scale the system during peak usage periods.\n\nThe documentation wasn't just an afterthought-it became a living resource that reduced support tickets by 40% in the first month after launch.",
                "images": []
            }
        ]
    }
]

async function restoreEssSubsteps() {
    console.log('Restoring ESS substeps...')

    const { data, error } = await supabase
        .from('portfolio_items')
        .select('id, title')
        .ilike('title', '%Employee Self Service%')
        .single()

    if (error || !data) {
        console.error('Error fetching ESS:', error)
        return
    }

    console.log(`Found: ${data.title}`)
    console.log('\n=== SUBSTEPS TO BE ADDED ===')
    correctProjectSteps.forEach((step, idx) => {
        console.log(`\nStep ${idx + 1}: ${step.title}`)
        console.log(`  Substeps: ${step.substeps.length}`)
        step.substeps.forEach((sub, subIdx) => {
            console.log(`    ${subIdx + 1}. ${sub.title}`)
            console.log(`       Description length: ${sub.description.length} chars`)
        })
    })

    if (process.argv.includes('--apply')) {
        console.log('\n\nApplying changes...')
        const { error: updateError } = await supabase
            .from('portfolio_items')
            .update({ project_steps: correctProjectSteps })
            .eq('id', data.id)

        if (updateError) {
            console.error('Error updating:', updateError)
        } else {
            console.log('✅ Successfully restored ESS substeps!')
        }
    } else {
        console.log('\n\nRun with --apply flag to apply changes')
    }
}

restoreEssSubsteps()

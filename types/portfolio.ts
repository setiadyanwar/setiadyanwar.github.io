export interface PortfolioItem {
    id: string
    title: string
    subtitle?: string
    description: string
    category: string
    image: string
    technologies: string[]
    date?: string
    created_at?: string
    display_order?: number
    status?: "draft" | "published"

    // Detail page fields
    demo_url?: string
    demoUrl?: string
    repo_url?: string
    repoUrl?: string
    role?: string
    timeline?: string

    // Content sections
    overview_heading?: string
    overviewHeading?: string
    process_heading?: string
    processHeading?: string
    challenges_heading?: string
    challengesHeading?: string
    problem_heading?: string
    problemHeading?: string
    solution_heading?: string
    solutionHeading?: string
    outcomes_heading?: string
    outcomesHeading?: string

    challenges?: string
    additional_images?: string[]
    additionalImages?: string[]

    // Problem/Solution
    problem_image?: string | null
    problemImage?: string | null
    solution_image?: string | null
    solutionImage?: string | null
    problem_description?: string
    problemDescription?: string
    problem_cards?: ProblemSolutionCard[]
    problemCards?: ProblemSolutionCard[]
    solution_description?: string
    solutionDescription?: string
    solution_cards?: ProblemSolutionCard[]
    solutionCards?: ProblemSolutionCard[]

    // Process
    project_steps?: ProjectStep[]
    projectSteps?: ProjectStep[]

    // Outcomes
    impact?: ImpactItem[]
    outcomes?: OutcomeItem[]
    next_steps?: string
    nextSteps?: string

    // Additional fields
    responsibilities?: string[] | string
    deliverables?: string
    business_objective?: string
    businessObjective?: string
}

export interface ProblemSolutionCard {
    title: string
    description: string
}

export interface ProjectStep {
    title?: string
    image?: string
    description?: string
    substeps?: Substep[]
}

export interface Substep {
    title?: string
    description?: string
    images?: string[]
    layout?: "grid" | "stack"
}

export interface ImpactItem {
    value?: number | string
    unit?: string
    title: string
    description?: string
}

export interface OutcomeItem {
    value?: number | string
    unit?: string
    title: string
    description?: string
}

// Transformed portfolio item for detail page
export interface PortfolioDetailItem extends Omit<PortfolioItem,
    "demo_url" | "repo_url" | "overview_heading" | "process_heading" |
    "challenges_heading" | "problem_heading" | "solution_heading" |
    "outcomes_heading" | "additional_images" | "problem_image" |
    "solution_image" | "problem_description" | "problem_cards" |
    "solution_description" | "solution_cards" | "project_steps" |
    "next_steps" | "business_objective"
> {
    demoUrl?: string
    repoUrl?: string
    overviewHeading: string
    processHeading: string
    challengesHeading: string
    problemHeading: string
    solutionHeading: string
    outcomesHeading: string
    additionalImages: string[]
    problemImage: string | null | undefined
    solutionImage: string | null | undefined
    problemDescription: string
    problemCards: ProblemSolutionCard[]
    solutionDescription: string
    solutionCards: ProblemSolutionCard[]
    projectSteps: ProjectStep[]
    nextSteps: string
    businessObjective?: string
}

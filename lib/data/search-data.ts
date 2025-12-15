export interface SearchItem {
    name: string;
    href: string;
    icon: string;
    keywords: string[];
    category: string;
    description: string;
    activityId?: number;
}

export const SEARCH_DATA: readonly SearchItem[] = [
    // Navigation
    {
        name: "Home",
        href: "/",
        icon: "Home",
        keywords: ["home", "beranda", "main", "landing", "utama"],
        category: "Navigation",
        description: "Main landing page"
    },
    {
        name: "Portfolio",
        href: "/portfolio",
        icon: "FolderOpen",
        keywords: ["portfolio", "projects", "work", "proyek", "karya", "showcase", "gallery"],
        category: "Navigation",
        description: "View my projects and work"
    },
    {
        name: "ESS API Contract",
        href: "/ess-api",
        icon: "Code",
        keywords: ["api", "ess", "sigma", "documentation", "laravel", "contract", "endpoint", "specification"],
        category: "Documentation",
        description: "Full ESS-Sigma Laravel API contract"
    },
    {
        name: "Experience",
        href: "/experience",
        icon: "Briefcase",
        keywords: ["experience", "work", "career", "pengalaman", "kerja", "job", "employment"],
        category: "Navigation",
        description: "My work experience and career"
    },
    {
        name: "About",
        href: "/about",
        icon: "User",
        keywords: ["about", "me", "profile", "tentang", "saya", "personal", "bio"],
        category: "Navigation",
        description: "Learn more about me"
    },

    // Skills & Technologies
    {
        name: "Frontend Development",
        href: "/#skills",
        icon: "Code",
        keywords: ["frontend", "react", "nextjs", "vue", "javascript", "typescript", "html", "css", "tailwind", "development"],
        category: "Skills",
        description: "Modern web development with React, Next.js, Vue.js"
    },
    {
        name: "UI/UX Design",
        href: "/#skills",
        icon: "Palette",
        keywords: ["ui", "ux", "design", "figma", "prototype", "wireframe", "user experience", "interface"],
        category: "Skills",
        description: "User interface and experience design"
    },
    {
        name: "Web Development",
        href: "/#skills",
        icon: "Globe",
        keywords: ["web", "development", "laravel", "php", "mysql", "api", "fullstack", "backend"],
        category: "Skills",
        description: "Full-stack web development solutions"
    },

    // Activities & Achievements
    {
        name: "GDGOC IPB University",
        href: "/#activities",
        icon: "Briefcase",
        keywords: ["gdgoc", "google", "developer", "group", "ipb", "university", "community", "leadership"],
        category: "Activities",
        description: "Core team member at Google Developer Group on Campus",
        activityId: 1
    },
    {
        name: "Company Visit Himavo",
        href: "/#activities",
        icon: "Briefcase",
        keywords: ["company", "visit", "himavo", "microit", "event", "organizer", "lead", "75 participants"],
        category: "Activities",
        description: "Lead organizer of company visit event",
        activityId: 2
    },
    {
        name: "Compfest 2024 Winner",
        href: "/#activities",
        icon: "Briefcase",
        keywords: ["compfest", "winner", "first place", "ux", "design", "competition", "academy"],
        category: "Activities",
        description: "1st place in User Experience Academy Compfest 2024",
        activityId: 3
    },
    {
        name: "UI/UX Competition Winner",
        href: "/#activities",
        icon: "Briefcase",
        keywords: ["ui", "ux", "competition", "winner", "champion", "vocational", "first place"],
        category: "Activities",
        description: "1st Winner UI/UX Competition Vocational Of Champions",
        activityId: 5
    },
    {
        name: "Smart IT Competition",
        href: "/#activities",
        icon: "Briefcase",
        keywords: ["smart it", "competition", "second place", "ui", "ux", "design", "runner up"],
        category: "Activities",
        description: "2nd Winner UI/UX Design at Smart IT Competition",
        activityId: 6
    },
    {
        name: "Telkomsigma Internship",
        href: "/#activities",
        icon: "Briefcase",
        keywords: ["telkomsigma", "internship", "frontend", "developer", "nuxt", "tailwind", "api"],
        category: "Activities",
        description: "Frontend Web Developer internship at Telkomsigma",
        activityId: 8
    },

    // Technologies & Tools
    {
        name: "React.js",
        href: "/#skills",
        icon: "Code",
        keywords: ["react", "reactjs", "javascript", "jsx", "hooks", "components", "frontend", "library"],
        category: "Technologies",
        description: "Modern JavaScript library for building user interfaces"
    },
    {
        name: "Next.js",
        href: "/#skills",
        icon: "Code",
        keywords: ["nextjs", "next", "react", "ssr", "ssg", "vercel", "framework", "fullstack"],
        category: "Technologies",
        description: "React framework for production-ready applications"
    },
    {
        name: "Vue.js",
        href: "/#skills",
        icon: "Code",
        keywords: ["vue", "vuejs", "javascript", "progressive", "framework", "frontend", "spa"],
        category: "Technologies",
        description: "Progressive JavaScript framework for building UIs"
    },
    {
        name: "TypeScript",
        href: "/#skills",
        icon: "Code",
        keywords: ["typescript", "ts", "javascript", "types", "static", "compiler", "superset"],
        category: "Technologies",
        description: "Typed superset of JavaScript for better development"
    },
    {
        name: "Tailwind CSS",
        href: "/#skills",
        icon: "Palette",
        keywords: ["tailwind", "css", "utility", "styling", "design", "responsive", "framework"],
        category: "Technologies",
        description: "Utility-first CSS framework for rapid UI development"
    },
    {
        name: "Laravel",
        href: "/#skills",
        icon: "Globe",
        keywords: ["laravel", "php", "backend", "framework", "mvc", "api", "database", "eloquent"],
        category: "Technologies",
        description: "PHP web application framework with elegant syntax"
    },
    {
        name: "Figma",
        href: "/#skills",
        icon: "Palette",
        keywords: ["figma", "design", "ui", "ux", "prototype", "wireframe", "collaboration", "tool"],
        category: "Technologies",
        description: "Collaborative interface design tool"
    },
    {
        name: "Git & GitHub",
        href: "/#skills",
        icon: "Code",
        keywords: ["git", "github", "version", "control", "repository", "collaboration", "devops"],
        category: "Technologies",
        description: "Version control and code collaboration platform"
    },
    {
        name: "MySQL",
        href: "/#skills",
        icon: "Globe",
        keywords: ["mysql", "database", "sql", "relational", "data", "backend", "storage"],
        category: "Technologies",
        description: "Relational database management system"
    },
    {
        name: "RESTful APIs",
        href: "/#skills",
        icon: "Globe",
        keywords: ["api", "rest", "restful", "http", "json", "backend", "integration", "endpoints"],
        category: "Technologies",
        description: "Architectural style for designing web services"
    },

    // Design & UI/UX
    {
        name: "User Interface Design",
        href: "/#skills",
        icon: "Palette",
        keywords: ["ui", "interface", "design", "visual", "layout", "components", "elements"],
        category: "Design",
        description: "Creating intuitive and visually appealing interfaces"
    },
    {
        name: "User Experience Design",
        href: "/#skills",
        icon: "Palette",
        keywords: ["ux", "experience", "usability", "research", "testing", "wireframe", "prototype"],
        category: "Design",
        description: "Designing user-centered digital experiences"
    },
    {
        name: "Responsive Design",
        href: "/#skills",
        icon: "Palette",
        keywords: ["responsive", "mobile", "desktop", "tablet", "breakpoints", "flexible", "adaptive"],
        category: "Design",
        description: "Creating designs that work across all devices"
    },
    {
        name: "Wireframing",
        href: "/#skills",
        icon: "Palette",
        keywords: ["wireframe", "sketch", "layout", "structure", "blueprint", "planning"],
        category: "Design",
        description: "Creating structural blueprints for digital products"
    },
    {
        name: "Prototyping",
        href: "/#skills",
        icon: "Palette",
        keywords: ["prototype", "interactive", "mockup", "testing", "validation", "framer"],
        category: "Design",
        description: "Building interactive prototypes for user testing"
    },

    // Development Practices
    {
        name: "Agile Development",
        href: "/#experience",
        icon: "Briefcase",
        keywords: ["agile", "scrum", "sprint", "methodology", "development", "process", "team"],
        category: "Practices",
        description: "Iterative development methodology for software projects"
    },
    {
        name: "Test-Driven Development",
        href: "/#skills",
        icon: "Code",
        keywords: ["tdd", "testing", "unit", "integration", "quality", "reliability", "automation"],
        category: "Practices",
        description: "Development approach emphasizing test-first programming"
    },
    {
        name: "Code Review",
        href: "/#skills",
        icon: "Code",
        keywords: ["review", "code", "quality", "collaboration", "feedback", "best practices"],
        category: "Practices",
        description: "Systematic examination of code for quality and standards"
    },
    {
        name: "Performance Optimization",
        href: "/#skills",
        icon: "Code",
        keywords: ["performance", "optimization", "speed", "loading", "efficiency", "metrics"],
        category: "Practices",
        description: "Improving application speed and efficiency"
    },

    // Certifications & Education
    {
        name: "BNSP Certification",
        href: "/#about",
        icon: "Briefcase",
        keywords: ["bnsp", "certification", "certified", "web developer", "indonesia", "professional"],
        category: "Certifications",
        description: "Certified Web Developer by BNSP Indonesia"
    },
    {
        name: "IPB University",
        href: "/#about",
        icon: "User",
        keywords: ["ipb", "university", "bogor", "education", "student", "academic", "learning"],
        category: "Education",
        description: "Studying at IPB University"
    },

    // Contact & Services
    {
        name: "Contact Information",
        href: "/#contact",
        icon: "User",
        keywords: ["contact", "email", "phone", "hire", "collaborate", "work together", "get in touch"],
        category: "Contact",
        description: "Get in touch for collaboration"
    },
    {
        name: "Specialist Services",
        href: "/#services",
        icon: "Code",
        keywords: ["services", "hire", "freelance", "consulting", "development", "design", "specialist"],
        category: "Services",
        description: "Professional development and design services"
    }
] as const;

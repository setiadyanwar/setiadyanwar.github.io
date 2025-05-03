export const portfolioItems = [
  {
    id: "kreavoks",
    title: "Kreavoks E-learning & Agency Website",
    category: "web",
    image: "/portfolio/web/kreavoks.png?height=400&width=600",
    additionalImages: ["/portfolio/web/kreavoks-1.png?height=180&width=320", "/portfolio/web/kreavoks-1.png?height=180&width=320"],
    technologies: ["React", "Laravel", "TailwindCSS"],
    description:
      "Kreavoks is a multi-purpose platform built to support personal branding, deliver e-learning content, and attract clients for custom software development services. Designed to empower digital talents, Kreavoks also aims to open job opportunities for mentors by connecting them with students and companies in need of guidance, training, or development services. The platform includes a service showcase, a mentorship recruitment form, an LMS feature, and a booking system.",
    role: "Lead Frontend Developer and UI/UX Designer responsible for the entire website from concept to implementation.",
    challenges:
      "Combining three distinct goals branding, education, and service sales—into a single unified experience without overwhelming the user. I applied a modular design approach using atomic components and consistent layout grids, Flexbox, enabling scalable and maintainable development. By focusing on clarity, navigation flow, and performance (lazy loading, optimized images), we delivered a platform that feels cohesive and efficient across all devices.",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/example",
  },
  {
    id: "project2",
    title: "Travel App UI Design",
    category: "ui",
    image: "/placeholder.svg?height=400&width=600",
    additionalImages: ["/placeholder.svg?height=180&width=320", "/placeholder.svg?height=180&width=320"],
    technologies: ["Figma", "Adobe XD", "Illustrator"],
    description:
      "A comprehensive UI/UX design for a travel application that helps users discover destinations, plan itineraries, and book accommodations.",
    role: "UI/UX Designer responsible for user research, wireframing, prototyping, and creating the final design system.",
    challenges:
      "Creating an intuitive navigation system that accommodates a large amount of content without overwhelming the user. I conducted multiple user testing sessions to refine the information architecture.",
    demoUrl: "https://figma.com/example",
    repoUrl: null,
  },
  {
    id: "project3",
    title: "Fitness Tracking App",
    category: "mobile",
    image: "/placeholder.svg?height=400&width=600",
    additionalImages: ["/placeholder.svg?height=180&width=320", "/placeholder.svg?height=180&width=320"],
    technologies: ["Flutter", "Firebase", "Google Fit API"],
    description:
      "A cross-platform mobile application that helps users track their workouts, set fitness goals, and monitor their progress over time.",
    role: "Mobile Developer responsible for building the app using Flutter and integrating with fitness tracking APIs.",
    challenges:
      "Ensuring accurate data synchronization between the app and external fitness tracking services. I implemented a robust caching mechanism to handle offline usage.",
    demoUrl: "https://play.google.com/example",
    repoUrl: "https://github.com/example",
  },
  {
    id: "project4",
    title: "Dashboard Interface",
    category: "web",
    image: "/placeholder.svg?height=400&width=600",
    additionalImages: ["/placeholder.svg?height=180&width=320", "/placeholder.svg?height=180&width=320"],
    technologies: ["Vue.js", "Chart.js", "TailwindCSS", "Firebase"],
    description:
      "An analytics dashboard that visualizes complex data sets in an intuitive and interactive way, helping businesses make data-driven decisions.",
    role: "Frontend Developer responsible for implementing the UI components and data visualization charts.",
    challenges:
      "Optimizing the rendering of multiple complex charts and data tables on a single page. I implemented virtualization for large data sets and optimized the update cycles.",
    demoUrl: "https://example.com/dashboard",
    repoUrl: "https://github.com/example",
  },
  {
    id: "project5",
    title: "Social Media App",
    category: "mobile",
    image: "/placeholder.svg?height=400&width=600",
    additionalImages: ["/placeholder.svg?height=180&width=320", "/placeholder.svg?height=180&width=320"],
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
    description:
      "A social networking application with real-time messaging, user profiles, and content sharing capabilities. Features include push notifications, media uploads, and social interactions.",
    role: "Full-stack Developer responsible for both the mobile frontend and backend API development.",
    challenges:
      "Implementing real-time features like messaging and notifications while maintaining app performance. I used Socket.io for real-time communication and optimized the data flow.",
    demoUrl: "https://example.com/social",
    repoUrl: "https://github.com/example",
  },
  {
    id: "project6",
    title: "Portfolio Website",
    category: "web",
    image: "/placeholder.svg?height=400&width=600",
    additionalImages: ["/placeholder.svg?height=180&width=320", "/placeholder.svg?height=180&width=320"],
    technologies: ["HTML/CSS", "JavaScript", "GSAP", "Three.js"],
    description:
      "A creative portfolio website with interactive animations, 3D elements, and smooth scrolling effects to showcase design and development work.",
    role: "Frontend Developer and Designer responsible for the entire website from concept to implementation.",
    challenges:
      "Creating performant animations and 3D effects that work across different browsers and devices. I implemented progressive enhancement to ensure a good experience for all users.",
    demoUrl: "https://example.com/portfolio",
    repoUrl: "https://github.com/example",
  },
]

export const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2021 - Present",
    description:
      "Leading frontend development for enterprise applications, implementing modern UI/UX practices, and mentoring junior developers.",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    title: "UI/UX Designer",
    company: "Creative Agency",
    period: "2019 - 2021",
    description:
      "Designed user interfaces for web and mobile applications, created wireframes, prototypes, and conducted user testing.",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
  },
  {
    title: "Frontend Developer",
    company: "Web Studio",
    period: "2017 - 2019",
    description: "Developed responsive websites and web applications for various clients across different industries.",
    skills: ["HTML/CSS", "JavaScript", "Vue.js", "SCSS"],
  },
]

export const technologies = [
  { name: "HTML", icon: "html5.svg" },
  { name: "CSS", icon: "css3.svg" },
  { name: "JavaScript", icon: "javascript.svg" },
  { name: "React", icon: "react.svg" },
  { name: "Vue", icon: "vue.svg" },
  { name: "TailwindCSS", icon: "tailwindcss.svg" },
  { name: "Bootstrap", icon: "bootstrap.svg" },
  { name: "Laravel", icon: "laravel.svg" },
  { name: "PHP", icon: "php.svg" },
  { name: "Java", icon: "java.svg" },
  { name: "Figma", icon: "figma.svg" },
  { name: "Adobe XD", icon: "adobexd.svg" },
  { name: "Flutter", icon: "flutter.svg" },
  { name: "After Effects", icon: "aftereffects.svg" },
  { name: "Photoshop", icon: "photoshop.svg" },
  { name: "Premiere Pro", icon: "premierepro.svg" },
]

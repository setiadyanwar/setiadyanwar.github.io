export const portfolioItems = [
  {
    id: "kreavoks",
    title: "Kreavoks E-learning & Agency Website",
    category: "web",
    image: "/portfolio/web/kreavoks.png?height=400&width=600",
    additionalImages: ["/portfolio/web/kreavoks-1.png?height=180&width=320", "/portfolio/web/kreavoks-2.png?height=180&width=320"],
    technologies: ["React", "Laravel", "TailwindCSS"],
    description:
      "Kreavoks is a multi-purpose platform built to support personal branding, deliver e-learning content, and attract clients for custom software development services. Designed to empower digital talents, Kreavoks also aims to open job opportunities for mentors by connecting them with students and companies in need of guidance, training, or development services. The platform includes a service showcase, a mentorship recruitment form, an LMS feature, and a booking system.",
    role: "Lead Frontend Developer and UI/UX Designer responsible for the entire website from concept to implementation.",
    challenges:
      "Combining three distinct goals branding, education, and service sales—into a single unified experience without overwhelming the user. I applied a modular design approach using atomic components and consistent layout grids, Flexbox, enabling scalable and maintainable development. By focusing on clarity, navigation flow, and performance (lazy loading, optimized images), we delivered a platform that feels cohesive and efficient across all devices.",
    demoUrl: "kreavoks.my.id",
    // repoUrl: "https://github.com/example",
    projectSteps: [
      {
        title: "Market Research & Planning ",
        description:
          "Identifying user needs, industry trends, and strategic goals for platform development.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "UI/UX Design & Prototyping",
        description:
          "Creating an intuitive interface and interactive prototype to validate the design.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Development & Feature Implementation",
        description:
          "Building the frontend with React, backend with Laravel, and integrating LMS and booking systems.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Optimization & Testing",
        description:
          "Enhancing performance with caching and lazy loading, followed by comprehensive system testing.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Deployment & Marketing",
        description:
          " Launching the website and developing digital marketing strategies to boost visibility and engagement.",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
    
  },
  {
    id: "upala",
    title: "Upala Company Profile Website",
    category: "web",
    image: "/portfolio/web/upala.png?height=400&width=600",
    additionalImages: ["/portfolio/web/upala-2.png?height=180&width=320", "/portfolio/web/upala-3.png?height=180&width=320"],
    technologies: ["Figma", "Adobe XD", "Illustrator"],
    description:
      "A comprehensive UI/UX design for a travel application that helps users discover destinations, plan itineraries, and book accommodations.",
    role: "UI/UX Designer responsible for user research, wireframing, prototyping, and creating the final design system.",
    challenges:
      "Creating an intuitive navigation system that accommodates a large amount of content without overwhelming the user. I conducted multiple user testing sessions to refine the information architecture.",
    demoUrl: "https://figma.com/example",
    // repoUrl: null,
    projectSteps: [
      {
        title: "User Research & Personas",
        description:
          "Conducted user interviews and surveys to gather insights on user needs and preferences. Created user personas to guide design decisions.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Wireframing & Prototyping",
        description:
          "Developed low-fidelity wireframes to outline the app's structure. Created high-fidelity prototypes for usability testing.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Design System & Handoff",
        description:
          "Created a comprehensive design system including typography, color palette, and UI components. Collaborated with developers for a smooth handoff.",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  {
    id: "freezemart",
    title: "Freezemart - E-commerce Frozen food Website",
    category: "mobile",
    image: "/portfolio/web/freezemart.png?height=400&width=600",
    // additionalImages: ["/placeholder.svg?height=180&width=320", "/placeholder.svg?height=180&width=320"],
    technologies: ["Flutter", "Firebase", "Google Fit API"],
    description:
      "A cross-platform mobile application that helps users track their workouts, set fitness goals, and monitor their progress over time.",
    role: "Mobile Developer responsible for building the app using Flutter and integrating with fitness tracking APIs.",
    challenges:
      "Ensuring accurate data synchronization between the app and external fitness tracking services. I implemented a robust caching mechanism to handle offline usage.",
    demoUrl: "freezemart.osk.dom.my.id",
    repoUrl: "https://github.com/setiadyanwar/freezemart",
    projectSteps: [
      {
        title: "User Research & Planning",
        description:
          "Conducted user interviews to understand pain points in fitness tracking. Created user personas and defined key features.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Wireframing & Prototyping",
        description:
          "Developed wireframes and interactive prototypes using Figma. Conducted usability testing to validate design decisions.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Development & Testing",
        description:
          "Built the app using Flutter, integrating with Firebase for backend services. Conducted extensive testing on multiple devices.",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  {
    id: "studylens",
    title: "Studylens - Ai Education Website",
    category: "web",
    image: "/portfolio/web/studylens.png?height=400&width=600",
    //additionalImages: ["/placeholder.svg?height=180&width=320", "/placeholder.svg?height=180&width=320"],
    technologies: ["Flask", "Tensorflow", "tailwind","opencv","yolov8","pytorch","python"],
    description:
      "StudyLens is an AI-powered platform designed to help students maintain focus during self-study sessions. Using head movement tracking, the application detects distractions and provides real-time feedback, allowing students to understand their learning patterns and stay engaged. By analyzing study behavior and offering personalized recommendations, StudyLens supports users in building disciplined and productive study habits through intelligent assistance.",
    role: "Web Developer.",
    challenges:
      "As a Web Developer, the main challenges include designing a responsive and interactive UI, ensuring efficient data processing, and optimizing AI integration for a seamless user experience.",
    //demoUrl: "https://example.com/dashboard",
    repoUrl: "https://github.com/egagaluh28/studylens",
    projectSteps: [
      {
        title: "Data Collection & Preprocessing",
        description:
          "The system gathers images of students' heads from various angles and lighting conditions. These images are processed using OpenCV to enhance quality, normalize colors, and remove noise, ensuring accurate head position detection.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Model Development (CNN & LSTM)",
        description:
          "Involves training a convolutional neural network to recognize head positions in images, followed by an LSTM model to analyze movement patterns over time and assess student focus levels.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Frontend Development & UI Design",
        description:
          "Focuses on creating an intuitive interface with Tailwind, enabling users to visualize their focus patterns and engagement levels.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Testing & Optimization",
        description:
          "Ensures high detection accuracy by evaluating the models with real user data and optimizing performance for smooth interactions.",
        image: "/placeholder.svg?height=300&width=400",
      },
        {
        title: "Deployment & User Feedback",
        description:
          "Finalizes the application for public use while gathering student input to refine features and enhance the overall learning experience.",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  {
    id: "nusoundtara",
    title: "Nusoundtara - Ticket Booking Website",
    category: "web",
    image: "/portfolio/web/Nusoundtara.png?height=400&width=600",
    // additionalImages: ["/placeholder.svg?height=180&width=320", "/placeholder.svg?height=180&width=320"],
    technologies: ["HTML/CSS", "Javascript", "PHP", "MySQL","Laravel"],
    description:
      "A social networking application with real-time messaging, user profiles, and content sharing capabilities. Features include push notifications, media uploads, and social interactions.",
    role: "Full-stack Developer responsible for both the mobile frontend and backend API development.",
    challenges:
      "Implementing real-time features like messaging and notifications while maintaining app performance. I used Socket.io for real-time communication and optimized the data flow.",
    // demoUrl: "https://example.com/social",
    // repoUrl: "https://github.com/example",
    projectSteps: [
      {
        title: "Data Analysis & Planning",
        description:
          "Analyzed the data structure and identified key metrics to visualize. Created a dashboard layout plan with stakeholders.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "UI/UX Design",
        description:
          "Designed an intuitive dashboard interface with a focus on data clarity and user experience. Created mockups for approval.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Chart Implementation",
        description:
          "Implemented various chart types using Chart.js to visualize different data sets. Optimized for performance and interactivity.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Real-time Data Integration",
        description:
          "Integrated with Firebase to provide real-time data updates. Implemented filtering and export capabilities for enhanced usability.",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  {
    id: "nexaid",
    title: "Nexaid - Dashboard Website",
    category: "web",
    image: "/portfolio/web/nexaid.png?height=400&width=600",
    additionalImages: ["/placeholder.svg?height=180&width=320", "/placeholder.svg?height=180&width=320"],
    technologies: ["React", "Typescript", "Laravel", "TailwindCSS"],
    description:
      "Nexaid is a web-based dashboard designed for managing electronic products efficiently. Built with React, TypeScript, Laravel, and TailwindCSS, it provides an intuitive interface for inventory management, stock tracking, and product data visualization. With a modern UI and smooth user interactions, Nexaid enables businesses to streamline product organization while maintaining a responsive and scalable system.",
    role: "Web Developer responsible for building a responsive and interactive dashboard for managing electronic products.",
    challenges:
      "Optimizing performance, integrating frontend and backend efficiently, ensuring scalable UI, managing state effectively, and maintaining data security.",
    demoUrl: "nexaid.osk.dom.my.id",
    repoUrl: "https://github.com/setiadyanwar/Nexaid",
    projectSteps: [
      {
        title: "Planning & Requirement Analysis",
        description:
          "Defining core features, such as inventory tracking and product management, while structuring the application’s design",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "UI/UX Design",
        description:
          "Creating a visually appealing and user-friendly interface using TailwindCSS, ensuring accessibility and clarity in navigation.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Frontend Development",
        description:
          "Developing dynamic and interactive elements using React and TypeScript, optimizing responsiveness for different devices.",
        image: "/placBuilding a dynamic and responsive user interface using React and Typescript to ensure smooth interactions.eholder.svg?height=300&width=400",
      },
      {
        title: "Backend Implementation",
        description:
          "Using Laravel for data management, authentication, and efficient handling of product-related operations.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Performance Optimization",
        description:
          "Enhancing load times, improving UI responsiveness, and ensuring smooth data handling across the dashboard.",
        image: "/placeholder.svg?height=300&width=400",
      },
       {
        title: "Testing & Deployment",
        description:
          "Conducting usability tests, debugging issues, and launching the dashboard with continuous maintenance for future improvements.",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
]

// Work experience data
export const workExperiences = [
  {
    title: "Front-End Developer (Internship)",
    company: "CODEPANDA",
    logo: "/experience/codepanda.png?height=40&width=40",
    period: "Feb 2025 – Present",
    description:
      "Developed responsive web applications using modern front-end technologies, collaborated with UI/UX designers, and implemented performance optimizations.",
    skills: ["React.js", "TailwindCSS", "JavaScript", "API Integration"],
    details: [
      "Developed and maintained responsive web applications to ensure seamless user experiences",
      "Translated wireframes and mockups into interactive web interfaces",
      "Collaborated with backend developers to integrate APIs",
      "Contributed to performance optimization and accessibility improvements"
    ],
  },
  {
    title: "UI/UX Designer (Internship)",
    company: "PT Kawan Kerja Indonesia",
    logo: "/experience/kawankerja.png?height=40&width=40",
    period: "Aug 2024 - Dec 2024",
    description:
      "Designed dashboard and improved user journey for Pembimbing ID’s website through user research, prototyping, and collaboration.",
    skills: ["Figma", "User Research", "Prototyping", "UI/UX Design"],
    details: [
      "Designed admin, mentor, and client dashboards",
      "Conducted user testing to refine interaction flow",
      "Created high-fidelity prototypes with consistent visual elements"
    ],
  },
  {
    title: "WordPress Developer (Internship)",
    company: "PT. Digimarly Solusi Digital",
    logo: "/experience/digimarly.png?height=40&width=40",
    period: "Jun 2024 - Nov 2024",
    description:
      "Developed websites using WordPress with a focus on SEO, system architecture, and UI consistency.",
    skills: ["WordPress", "SEO", "Plugin Integration", "Website Development"],
    details: [
      "Built website layouts and selected appropriate plugins",
      "Implemented SEO strategies to improve visibility",
      "Tested features to match system design requirements"
    ],
  },
  {
    title: "UI/UX Designer (Internship)",
    company: "Niagahoster",
    logo: "/experience/niagahoster.png?height=40&width=40",
    period: "Jan 2024 - Feb 2024",
    description:
      "Redesigned checkout flow for improved conversions and performed usability testing with over 50 users.",
    skills: ["UI/UX Optimization", "User Testing", "Information Architecture"],
    details: [
      "Redesigned checkout flow with 20% increase in conversions",
      "Improved UX by 30% through layout and flow enhancements",
      "Conducted usability testing and refined IA for better navigation"
    ],
  },
];

// Education data
export const educationExperiences = [
  {
    title: "Bachelor of Computer Science",
    company: "IPB University",
    logo: "/experience/ipb.png?height=40&width=40",
    period: "2021 - Present",
    description: "Specialized in Web Development and User Experience Design with strong academic performance.",
    skills: ["Web Development", "UI/UX Design", "Data Structures", "Algorithms"],
    details: [
      "GPA: 3.8/4.0",
      "Relevant coursework: Data Structures, Algorithms, Web Development, UI/UX Design",
      "Participated in hackathons and coding competitions"
    ],
  },
  {
    title: "Web Development Bootcamp",
    company: "Code Academy",
    logo: "/placeholder.svg?height=40&width=40",
    period: "2020",
    description: "Completed an intensive bootcamp focused on React, Node.js, and modern web practices.",
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    details: [
      "Built multiple full-stack applications using MERN stack",
      "Learned best practices in web development and deployment",
      "Collaborated on group projects to enhance teamwork skills"
    ],
  },
];

// Organization experience data
export const organizationExperiences = [
  {
    title: "Core Team Product Development & UX",
    company: "Google Developer Group on Campus (IPB University)",
    logo: "/placeholder.svg?height=40&width=40",
    period: "Dec 2024 – Present",
    description:
      "Conducted workshops and mentoring on UI/UX and no-code programming, managed social media, and fostered active community engagement.",
    skills: ["Mentorship", "UI/UX Design", "No-Code Tools", "Community Engagement"],
    details: [
      "Led hands-on workshops improving no-code tool skills by 40%",
      "Increased social media engagement by 30%",
      "Boosted active member participation by 25%"
    ],
  },
  {
    title: "Mentor UI/UX Designer",
    company: "HIMAVO MICRO IT",
    logo: "/placeholder.svg?height=40&width=40",
    period: "Jan 2024 – Sept 2024",
    description:
      "Mentored 30+ students in UI/UX, conducted design training, tool setup, and guided them through hands-on projects.",
    skills: ["Design Principles", "Mentorship", "Figma", "User Testing"],
    details: [
      "Improved students' design skills by 40%",
      "Conducted workshops leading to 25% increase in engagement",
      "Facilitated user research training for better design outcomes"
    ],
  },
  {
    title: "Head of Event Company Visit 2024",
    company: "HIMAVO MICRO IT",
    logo: "/placeholder.svg?height=40&width=40",
    period: "May 2024 - Jul 2024",
    description:
      "Led event planning and coordination for company visits involving 75 students, engaging stakeholders, and managing budgets.",
    skills: ["Event Management", "Team Leadership", "Stakeholder Engagement", "Budget Planning"],
    details: [
      "Successfully organized visits to 3 tech companies",
      "Increased student participation by 50%",
      "Managed a budget of $2000 for event logistics"
    ],
  },
  {
    title: "Web Developer & UI/UX",
    company: "AGRIDATION",
    logo: "/placeholder.svg?height=40&width=40",
    period: "Jan 2024 – Present",
    description:
      "Designed and developed an informational website and payment portal for competitions, increasing engagement and performance.",
    skills: ["Web Development", "UI/UX Design", "Frontend Development", "User Testing"],
    details: [
      "Developed 10+ pages improving performance by 30%",
      "Created 15+ UI designs enhancing UX by 35%",
      "Conducted user testing with 50+ participants to refine interface"
    ],
  },
];

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

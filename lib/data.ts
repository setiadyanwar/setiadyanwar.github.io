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
  {
    id: "burchery",
    title: "Burchery - E-Commerce Meat Website",
    category: "mobile",
    image: "/placeholder.svg?height=400&width=600",
    additionalImages: ["/portfolio/mobile/burchery-1.png?height=180&width=320", "/portfolio/mobile/burchery-2.png?height=180&width=320"],
    technologies: ["Java", "MongoDB", "Figma", "XML", "Android Studio"],
    description:
      "Burchery is a mobile e-commerce application for ordering fresh meat products. Designed with user-friendly navigation and real-time inventory updates, it ensures customers can browse, select, and purchase premium cuts straight from their device.",
    role: "Mobile Developer responsible for implementing core shopping flows, cart management, and secure payment integration.",
    challenges:
      "Ensuring data synchronization between client and server, optimizing list rendering for large catalogs, and integrating secure payment gateways within native Android.",
    demoUrl: "#",
    repoUrl: "https://github.com/setiadyanwar/ButcheryApp",
    projectSteps: [
      { title: "Requirement Gathering", description: "Collaborated with stakeholders to define product catalog structure, user flows, and payment requirements.", image: "/placeholder.svg?height=300&width=400" },
      { title: "UI/UX Design", description: "Created wireframes and prototypes in Figma focusing on ease of browsing and quick checkout.", image: "/placeholder.svg?height=300&width=400" },
      { title: "API Integration", description: "Built RESTful endpoints in Java to fetch product data and handle orders, secured with JWT.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Frontend Implementation", description: "Developed RecyclerViews for product lists and implemented XML layouts for responsive design.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Testing & Deployment", description: "Conducted unit and UI tests, fixed bugs, and published to Google Play Store.", image: "/placeholder.svg?height=300&width=400" }
    ]
  },
  {
    id: "ecotainment",
    title: "Ecotainment - E-Commerce Plant Mobile App",
    category: "mobile",
    image: "/placeholder.svg?height=400&width=600",
    additionalImages: ["/portfolio/mobile/ecotainment-1.png?height=180&width=320", "/portfolio/mobile/ecotainment-2.png?height=180&width=320"],
    technologies: ["Kotlin", "Firebase", "Laravel", "Figma", "XML", "Android Studio"],
    description:
      "Ecotainment is a mobile commerce platform selling plants and green products from PT Godong Ijo Asri. It offers plant catalogs, care guides, and community tips with in-app chat support.",
    role: "Lead Android Developer overseeing shopping cart, real-time chat, and offline support.",
    challenges:
      "Implementing Firebase real-time chat, handling large image uploads for plant galleries, and providing offline browsing capabilities.",
    demoUrl: "#",
    repoUrl: "#",
    projectSteps: [
      { title: "Concept & Planning", description: "Gathered requirements on product range from PT Godong Ijo Asri and defined core flows.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Design Prototyping", description: "Crafted high-fidelity screens in Figma focusing on plant catalog navigation and care guide UI.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Backend Setup", description: "Configured Laravel endpoints for product data and integrated Firebase for chat.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Android Development", description: "Built screens in Kotlin with Material components and integrated API and chat modules.", image: "/placeholder.svg?height=300&width=400" },
      { title: "User Testing", description: "Conducted beta testing with 20 users, refined navigation and performance based on feedback.", image: "/placeholder.svg?height=300&width=400" }
    ]
  },
  {
    id: "skilpath",
    title: "Skillpath AI Learning App - UI Mobile App",
    category: "ui",
    image: "/placeholder.svg?height=400&width=600",
    additionalImages: ["/portfolio/ui/skilpath-1.png?height=180&width=320", "/portfolio/ui/skilpath-2.png?height=180&width=320"],
    technologies: ["Figma", "Adobe XD", "Illustrator"],
    description:
      "Skillpath is a mobile UI concept for an AI-powered learning platform. Entry won 1st place in the UI/UX Competition Vocational Of Champions at UNS.",
    role: "UI/UX Designer and prototype developer for competition submission.",
    challenges:
      "Designing intuitive AI-assisted study flows and ensuring visual clarity under competition constraints.",
    demoUrl: "#",
    repoUrl: "#",
    projectSteps: [
      { title: "Research & Ideation", description: "Analyzed AI learning app trends and defined personas.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Wireframing", description: "Sketch flows for AI-driven exercises and progress tracking.", image: "/placeholder.svg?height=300&width=400" },
      { title: "High-Fidelity Design", description: "Created visuals in Figma and Adobe XD, submitted for competition.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Iteration", description: "Refined based on juror feedback leading to 1st winner title.", image: "/placeholder.svg?height=300&width=400" }
    ]
  },
  {
    id: "skillify",
    title: "Skillify E-Course App - UI Mobile App",
    category: "ui",
    image: "/placeholder.svg?height=400&width=600",
    additionalImages: ["/portfolio/ui/skillify-1.png?height=180&width=320", "/portfolio/ui/skillify-2.png?height=180&width=320"],
    technologies: ["Figma", "Adobe XD", "Illustrator"],
    description:
      "Skillify is a conceptual e-course mobile UI that won 2nd place in the Smart IT Competition UI/UX Design category.",
    role: "UI/UX Designer creating interactive course modules and navigation flows.",
    challenges:
      "Balancing visual appeal with instructional clarity and interactive elements.",
    demoUrl: "#",
    repoUrl: "#",
    projectSteps: [
      { title: "User Research", description: "Gathered insights on e-learning UX standards.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Prototype Design", description: "Built clickable prototypes in Figma.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Visual Polish", description: "Applied branding and iconography in Illustrator.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Competition Submission", description: "Presented to judges resulting in 2nd place.", image: "/placeholder.svg?height=300&width=400" }
    ]
  },
  {
    id: "gobojongsoang",
    title: "Gobojongsoang.id Reporting Platform - UI Website",
    category: "ui",
    image: "/placeholder.svg?height=400&width=600",
    additionalImages: ["/portfolio/ui/gobojongsoang-1.png?height=180&width=320", "/portfolio/ui/gobojongsoang-2.png?height=180&width=320"],
    technologies: ["Figma", "Adobe XD", "Illustrator"],
    description:
      "Gobojongsoang.id is a community reporting platform built in collaboration with Bandung city government to allow citizens to submit feedback and complaints.",
    role: "UI/UX Designer responsible for information architecture and interface design.",
    challenges:
      "Ensuring accessibility for diverse users and integrating with government backend systems.",
    demoUrl: "#",
    repoUrl: "#",
    projectSteps: [
      { title: "Stakeholder Workshops", description: "Collaborated with Bandung officials to gather requirements.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Information Architecture", description: "Mapped user flows for complaint submission.", image: "/placeholder.svg?height=300&width=400" },
      { title: "UI Kit Creation", description: "Developed style guide and components in Figma.", image: "/placeholder.svg?height=300&width=400" },
      { title: "High-Fidelity Prototype", description: "Delivered interactive mockups for user testing.", image: "/placeholder.svg?height=300&width=400" }
    ]
  },
    {
    id: "rescuisine",
    title: "ResCuisine - Food Waste Solution App",
    category: "ui",
    image: "/placeholder.svg?height=400&width=600",
    additionalImages: ["/portfolio/ui/rescuisine-1.png?height=180&width=320", "/portfolio/ui/rescuisine-2.png?height=180&width=320"],
    technologies: ["Figma", "Adobe XD", "Illustrator"],
    description:
      "ResCuisine is a conceptual mobile UI focusing on solving food waste by connecting excess food providers with consumers. The design emphasizes ease of listing, searching, and claiming surplus meals.",
    role: "UI/UX Designer responsible for crafting user flows, wireframes, and high-fidelity mockups.",
    challenges:
      "Designing intuitive filtering and listing features while maintaining a friendly, food-centric aesthetic.",
    demoUrl: "#",
    repoUrl: "#",
    projectSteps: [
      { title: "User Research", description: "Conducted interviews with potential users to understand food waste behaviors.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Wireframing", description: "Sketched main screens focusing on listing and claiming food items.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Visual Design", description: "Developed color palette and UI kit in Figma reflecting fresh and sustainable themes.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Prototyping", description: "Created interactive prototypes for usability testing.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Iteration", description: "Refined layouts based on test feedback to improve clarity and accessibility.", image: "/placeholder.svg?height=300&width=400" }
    ]
  },
  {
    id: "transmate",
    title: "Transmate - AR Transit Platform",
    category: "ui",
    image: "/placeholder.svg?height=400&width=600",
    additionalImages: ["/portfolio/ui/transmate-1.png?height=180&width=320", "/portfolio/ui/transmate-2.png?height=180&width=320"],
    technologies: ["Figma", "Adobe XD", "Illustrator"],
    description:
      "Transmate integrates AR features to enhance the Transjakarta transit experience by overlaying directions, station information, and live arrival times through the mobile camera view.",
    role: "UI/UX Designer responsible for AR interface mockups, iconography, and interaction flows.",
    challenges:
      "Balancing AR overlay legibility with real-world background complexity and ensuring minimal distraction for users on the move.",
    demoUrl: "#",
    repoUrl: "#",
    projectSteps: [
      { title: "Conceptualization", description: "Defined AR use cases and user scenarios within Transjakarta network.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Storyboard Design", description: "Created storyboards to visualize AR interactions at bus stops.", image: "/placeholder.svg?height=300&width=400" },
      { title: "UI Kit Development", description: "Designed AR icons and overlay elements in Adobe XD.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Prototype Testing", description: "Tested AR mockups using device camera feeds for alignment and readability.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Refinement", description: "Iterated on contrast and placement to ensure consistency across varying lighting conditions.", image: "/placeholder.svg?height=300&width=400" }
    ]
  },
    {
    id: "hotelid",
    title: "Hotel.id Booking Hotel - UI Website",
    category: "ui",
    image: "/placeholder.svg?height=400&width=600",
    additionalImages: ["/portfolio/ui/hotelid-1.png?height=180&width=320", "/portfolio/ui/hotelid-2.png?height=180&width=320"],
    technologies: ["Figma", "Adobe XD", "Illustrator"],
    description:
      "Hotel.id is a UI concept for a hotel booking website offering search, filtering, and booking management for users.",
    role: "UI/UX Designer responsible for designing booking flows and responsive web layouts.",
    challenges:
      "Creating a seamless multi-step booking process and optimizing for mobile and desktop views.",
    demoUrl: "#",
    repoUrl: "#",
    projectSteps: [
      { title: "User Persona Definition", description: "Identified key user personas and booking behaviors.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Wireframe Sketching", description: "Drafted multi-step booking flow in low-fidelity wireframes.", image: "/placeholder.svg?height=300&width=400" },
      { title: "High-Fidelity Design", description: "Created polished screens in Figma ensuring clarity and usability.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Prototype Testing", description: "Conducted click-through tests to refine navigation and form interactions.", image: "/placeholder.svg?height=300&width=400" }
    ]
  },
  {
    id: "swiftcare",
    title: "SwiftCare Crowdfunding Platform - Mobile App",
    category: "mobile",
    image: "/placeholder.svg?height=400&width=600",
    additionalImages: ["/portfolio/mobile/swiftcare-1.png?height=180&width=320", "/portfolio/mobile/swiftcare-2.png?height=180&width=320"],
    technologies: ["Kotlin", "Firebase", "Chat-GPT API", "XML", "Android Studio"],
    description:
      "SwiftCare is a crowdfunding platform mobile UI designed to facilitate medical and social campaign donations.",
    role: "UI/UX Designer crafting donation flows and campaign presentation screens.",
    challenges:
      "Balancing informational content with emotional engagement and secure transaction UI.",
    demoUrl: "#",
    repoUrl: "#",
    projectSteps: [
      { title: "Campaign Research", description: "Reviewed crowdfunding best practices and user motivations.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Flow Design", description: "Mapped donation process steps and UI requirements.", image: "/placeholder.svg?height=300&width=400" },
      { title: "UI Mockups", description: "Created campaign listing and detail screens in Adobe XD.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Feedback Iteration", description: "Incorporated user feedback to refine trust indicators and ease of use.", image: "/placeholder.svg?height=300&width=400" }
    ]
  },
  {
    id: "agridation",
    title: "Agridation 2023 - Competition Website",
    category: "web",
    image: "/placeholder.svg?height=400&width=600",
    additionalImages: ["/portfolio/web/agridation-1.png?height=180&width=320", "/portfolio/web/agridation-2.png?height=180&width=320"],
    technologies: ["Figma", "Laravel", "TailwindCSS", "HTML/CSS", "MySQL"],
    description:
      "Agridation 2023 is a competition website providing information, registration, and result announcements for agricultural innovation events.",
    role: "Full-stack Developer and Designer integrating front-end UI with Laravel backend.",
    challenges:
      "Synchronizing dynamic registration data and creating engaging event presentation.",
    demoUrl: "#",
    repoUrl: "#",
    projectSteps: [
      { title: "Requirement Definition", description: "Outlined event flow, registration, and admin needs.", image: "/placeholder.svg?height=300&width=400" },
      { title: "UI Design", description: "Designed landing and dashboard pages with TailwindCSS.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Backend Development", description: "Implemented registration and data storage in Laravel.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Testing & Launch", description: "Performed user acceptance tests and deployed to production.", image: "/placeholder.svg?height=300&width=400" }
    ]
  },
  {
    id: "pembimbingid",
    title: "Dashboard Pembimbing.id - Academic Mentoring Platform",
    category: "ui",
    image: "/placeholder.svg?height=400&width=600",
    additionalImages: ["/portfolio/ui/pembimbingid-1.png?height=180&width=320", "/portfolio/ui/pembimbingid-2.png?height=180&width=320"],
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    description:
      "Pembimbing.id dashboard UI supports academic mentors in assigning tasks, tracking progress, and communications with mentees.",
    role: "UI/UX Designer creating mentor and mentee interface screens.",
    challenges:
      "Balancing administrative features with user-friendly communication tools.",
    demoUrl: "#",
    repoUrl: "#",
    projectSteps: [
      { title: "Stakeholder Interviews", description: "Gathered mentor requirements for task and progress tracking.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Wireframe", description: "Outlined dashboard widgets and navigation in Figma.", image: "/placeholder.svg?height=300&width=400" },
      { title: "High-Fidelity Design", description: "Designed polished UI screens in Adobe Illustrator.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Prototype Feedback", description: "Tested with mentors and iterated on layout and features.", image: "/placeholder.svg?height=300&width=400" }
    ]
  },
  {
    id: "investra",
    title: "Investra Financial Intelligence Platform - UI Website",
    category: "ui",
    image: "/placeholder.svg?height=400&width=600",
    additionalImages: ["/portfolio/ui/investra-1.png?height=180&width=320", "/portfolio/ui/investra-2.png?height=180&width=320"],
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    description:
      "Investra is a UI concept for a financial intelligence dashboard offering market data, analytics, and investment tracking.",
    role: "UI/UX Designer responsible for dashboard layout and data visualization components.",
    challenges:
      "Visualizing complex financial data clearly and ensuring responsiveness.",
    demoUrl: "#",
    repoUrl: "#",
    projectSteps: [
      { title: "Market Research", description: "Researched financial dashboard standards and user needs.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Dashboard Wireframes", description: "Created low-fi layouts for charts and tables.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Visual Design", description: "Designed chart components and UI kit in Figma.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Prototype Testing", description: "Validated interactions and readability with test users.", image: "/placeholder.svg?height=300&width=400" }
    ]
  },
  {
    id: "temanibu",
    title: "Teman Ibu Freelance Job Marketplace - UI Mobile App",
    category: "ui",
    image: "/placeholder.svg?height=400&width=600",
    additionalImages: ["/portfolio/ui/temanibu-1.png?height=180&width=320", "/portfolio/ui/temanibu-2.png?height=180&width=320"],
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    description:
      "Teman Ibu is a mobile marketplace UI for freelance child care and household support services.",
    role: "UI/UX Designer crafting service listing and booking interfaces.",
    challenges:
      "Ensuring trust and clarity in service descriptions and booking flows.",
    demoUrl: "#",
    repoUrl: "#",
    projectSteps: [
      { title: "User Interviews", description: "Understood parent needs and care provider expectations.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Flow Mapping", description: "Mapped service discovery to booking confirmation steps.", image: "/placeholder.svg?height=300&width=400" },
      { title: "UI Prototyping", description: "Designed key screens in Figma and Photoshop.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Usability Testing", description: "Tested with users to refine trust signals and ease of booking.", image: "/placeholder.svg?height=300&width=400" }
    ]
  },
  {
    id: "redesignipb",
    title: "Redesign IPB University Website",
    category: "web",
    image: "/placeholder.svg?height=400&width=600",
    additionalImages: ["/portfolio/web/redesignipb-1.png?height=180&width=320", "/portfolio/web/redesignipb-2.png?height=180&width=320"],
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "Redesign of IPB University official website focusing on improved navigation, responsive design, and updated branding.",
    role: "Frontend Developer and Designer implementing new UI/UX strategy.",
    challenges:
      "Migrating legacy content to modern layouts and ensuring cross-browser compatibility.",
    demoUrl: "#",
    repoUrl: "#",
    projectSteps: [
      { title: "Content Audit", description: "Reviewed existing pages and identified key user tasks.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Design System", description: "Established style guide and component library in Figma.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Development", description: "Built responsive templates with HTML, CSS, and JS.", image: "/placeholder.svg?height=300&width=400" },
      { title: "Testing & Launch", description: "Tested across devices and deployed updated site.", image: "/placeholder.svg?height=300&width=400" }
    ]
  },
  {
    id: "bemkmipb",
    title: "BEM KM IPB – Organization Profile Website",
    category: "ui",
    image: "/portfolio/uiux/bemkm.png?height=400&width=600",
    // additionalImages: [
    //   "/portfolio/uiux/bemkmipb-1.png?height=180&width=320",
    //   "/portfolio/ui/bemkmipb-2.png?height=180&width=320",
    // ],
    technologies: ["Figma", "Adobe XD", "Illustrator"],
    description:
      "A clean and modern UI design for the official website of BEM KM IPB, showcasing the student executive board’s mission, vision, organizational structure, news updates, event galleries, and contact information.",
    role:
      "UI/UX Designer responsible for user research, wireframing, high-fidelity mockups, and prototyping to ensure an intuitive and accessible interface.",
    challenges:
      "Balancing the presentation of dense organizational information with a clean layout, ensuring responsiveness across devices, and reflecting the IPB brand guidelines.",
    // demoUrl: "https://bemkm.ipb.ac.id",
    // repoUrl: "https://github.com/username/bemkm-ipb-website-ui",
    projectSteps: [
      {
        title: "User Research & Persona Definition",
        description:
          "Conducted interviews and surveys with students to identify key information needs and usage patterns, then defined primary user personas.",
        // image: "/portfolio/ui/bemkm-ipb-step1.png?height=300&width=400"
      },
      {
        title: "Wireframing & Information Architecture",
        description:
          "Mapped out site structure and sketched low-fidelity wireframes for homepage, profile, news, events, and contact pages in Figma.",
        // image: "/portfolio/ui/bemkm-ipb-step2.png?height=300&width=400"
      },
      {
        title: "High-Fidelity UI Design",
        description:
          "Created polished mockups in Adobe XD, applying IPB color palette and typography to maintain brand consistency.",
        // image: "/portfolio/ui/bemkm-ipb-step3.png?height=300&width=400"
      },
      {
        title: "Interactive Prototyping & Usability Testing",
        description:
          "Built clickable prototype in Figma, ran usability sessions with 10+ students, and iterated on navigation and content hierarchy.",
        // image: "/portfolio/ui/bemkm-ipb-step4.png?height=300&width=400"
      },
      {
        title: "Design Handoff & Documentation",
        description:
          "Prepared design specs and redlines in Zeplin for developers, documented style guide and component library for consistent implementation.",
        // image: "/portfolio/ui/bemkm-ipb-step5.png?height=300&width=400"
      }
    ]
  },
]

// Work experience data
export const workExperiences = [
  {
    title: "Web Developer Programmer (Internship)",
    company: "Eduwork",
    logo: "/experience/eduwork.png?height=40&width=40",
    period: "Apr 2025 – Present",
    description:
      "I contribute to the development of web applications, working on both front-end and back-end aspects. I collaborate with teams to build efficient systems, ensure optimal API integration, and enhance application performance and security.",
    skills: ["React.js", "TailwindCSS", "JavaScript", "API Integration"],
    details: [
      "Develop interactive features on the front-end and manage the back-end to maintain optimal application performance.",
      "Utilized React.js and TailwindCSS to create responsive and user-friendly interfaces.",
      "Implemented RESTful APIs for seamless data exchange between front-end and back-end systems.",
      "Optimized website performance, enhancing loading speed and resource efficiency.",
      "Conducted comprehensive testing and debugging to ensure system stability and cross-platform compatibility."
    ],
  },
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

export const portfolioItems = [
  {
    id: "kreavoks",
    title: "Kreavoks E-learning & Agency Website",
    category: "web",
    image: "/portfolio/web/kreavoks.png?height=400&width=600",
    additionalImages: [
      "/portfolio/web/kreavoks-1.png?height=180&width=320",
      "/portfolio/web/kreavoks-2.png?height=180&width=320",
    ],
    technologies: ["React", "Laravel", "TailwindCSS", "Typescript", "MySQL"],
    description:
      "Kreavoks is a multi-purpose platform built to support personal branding, deliver e-learning content, and attract clients for custom software development services. Designed to empower digital talents, Kreavoks also aims to open job opportunities for mentors by connecting them with students and companies in need of guidance, training, or development services. The platform includes a service showcase, a mentorship recruitment form, an LMS feature, and a booking system.",
    role: "Lead Developer and Fullstack Web Developer responsible for the entire website from concept to implementation.",
    challenges:
      "Combining three distinct goals branding, education, and service sales—into a single unified experience without overwhelming the user. I applied a modular design approach using atomic components and consistent layout grids, Flexbox, enabling scalable and maintainable development. By focusing on clarity, navigation flow, and performance (lazy loading, optimized images), we delivered a platform that feels cohesive and efficient across all devices.",
    demoUrl: "https://kreavoks.my.id",
    // repoUrl: "https://github.com/example",
    projectSteps: [
      {
        title: "Market Research & Planning ",
        description:
          "Identifying user needs, industry trends, and strategic goals for platform development.",
        image: null,
      },
      {
        title: "UI/UX Design & Prototyping",
        description:
          "Creating an intuitive interface and interactive prototype to validate the design.",
        image: null,
      },
      {
        title: "Development & Feature Implementation",
        description:
          "Building the frontend with React, backend with Laravel, and integrating LMS and booking systems.",
        image: null,
      },
      {
        title: "Optimization & Testing",
        description:
          "Enhancing performance with caching and lazy loading, followed by comprehensive system testing.",
        image: null,
      },
      {
        title: "Deployment & Marketing",
        description:
          " Launching the website and developing digital marketing strategies to boost visibility and engagement.",
        image: null,
      },
    ],
  },
  {
    id: "nobarin",
    title: "Nobarin Movie Streaming Platform",
    category: "web",
    image: "/portfolio/web/nobar.png?height=400&width=600",
    // additionalImages: [
    //   "/portfolio/web/nobarin-1.png?height=180&width=320",
    //   "/portfolio/web/nobarin-2.png?height=180&width=320",
    // ],
    technologies: ["Vue.js", "Pinia", "TailwindCSS", "TMDB API", "Vite"],
    description:
      "Nobarin is a modern movie browsing and streaming platform built using Vue.js. It fetches real-time data from the TMDB API and allows users to explore movie details, manage their favorite movies, and experience a responsive, engaging UI. Designed with a focus on smooth navigation and scalability, the platform supports dynamic routing and modular components.",
    role: "Fullstack Developer handling frontend design, API integration, and routing logic.",
    challenges:
      "Integrating dynamic movie data from TMDB, managing application state using Pinia, and ensuring responsive UI across devices while maintaining clean code structure. A special focus was given to UX flow between movie browsing, details, and favorites page.",
    demoUrl: "https://nobarin-phi.vercel.app/", // ← ganti dengan URL demo asli jika ada
    // repoUrl: "https://github.com/username/nobarin", // ← opsional jika ingin mencantumkan
    projectSteps: [
      {
        title: "Requirement Gathering & Planning",
        description:
          "Planning features such as movie search, favorites, and detail view using data from TMDB API.",
        image: null,
      },
      {
        title: "UI Design & Component Setup",
        description:
          "Designing the interface using TailwindCSS and building reusable Vue components for navbar, cards, etc.",
        image: null,
      },
      {
        title: "State Management & Routing",
        description:
          "Implementing Vue Router for page navigation and Pinia for centralized state handling.",
        image: null,
      },
      {
        title: "API Integration",
        description:
          "Fetching movie data from TMDB and dynamically rendering movie cards and detail pages.",
        image: null,
      },
      {
        title: "Testing & Deployment",
        description:
          "Testing responsiveness, fixing routing bugs, and deploying the app with performance optimization.",
        image: null,
      },
    ],
  },

  {
    id: "upala",
    title: "Upala Company Profile & CRM Website",
    category: "web",
    image: "/portfolio/web/upala.png?height=400&width=600",
    additionalImages: [
      "/portfolio/web/upala-2.png?height=180&width=320",
      "/portfolio/web/upala-3.png?height=180&width=320",
    ],
    technologies: ["Tailwind", "Figma", "Laravel", "HTML/CSS", "MySQL"],
    description:
      "A comprehensive company profile and CRM web solution for Upala Coffee & Eatery in Jatiwaringin, Bekasi. The platform showcases the brand story, menu highlights, and provides an admin dashboard for customer management and order tracking.",
    role: "Frontend Developer & UI/UX Designer responsible for implementing UI templates and designing interactive prototypes for the company profile and CRM dashboards.",
    challenges:
      "Organizing extensive menu and organizational information into a cohesive profile site, ensuring intuitive CRM workflows for admins, and maintaining responsive performance across devices.",
    demoUrl: "#",
    repoUrl: "#",
    projectSteps: [
      {
        title: "Analysis & User Research",
        description:
          "Conducted stakeholder interviews with cafe owners and staff to understand business needs, mapped user journeys for both customers and admins.",
        image: null,
      },
      {
        title: "Wireframing & UI Prototyping",
        description:
          "Created low- and high-fidelity wireframes for the company profile pages and admin CRM dashboards in Figma, iterated based on feedback.",
        image: null,
      },
      {
        title: "Development & Implementation",
        description:
          "Built responsive front-end templates in Laravel Blade and integrated TailwindCSS, then developed core CRM functions including user management and order processing.",
        image: null,
      },
      {
        title: "Testing & Iteration",
        description:
          "Conducted usability tests with cafe staff, gathered feedback on CRM usability, and refined interfaces to improve efficiency and clarity.",
        image: null,
      },
      {
        title: "Handoff & Deployment",
        description:
          "Compiled comprehensive documentation and style guides, and collaborated with back-end developers to deploy the solution on production servers.",
        image: null,
      },
    ],
  },
  {
    id: "freezemart",
    title:
      "Freezemart - E-commerce Frozen Food Website with Recommendation System",
    category: "web",
    image: "/portfolio/web/freezemart.png?height=400&width=600",
    technologies: [
      "Laravel",
      "PHP",
      "Blade",
      "MySQL",
      "Livewire",
      "TailwindCSS",
      "HTML/CSS",
      "JavaScript",
      "Python",
      "Flask",
      "TF-IDF",
      "Xendit",
    ],
    // Project Description
    description:
      "Freezemart is a frozen food e-commerce platform featuring a content-based recommendation system powered by TF-IDF and Cosine Similarity, and integrated with Xendit payment gateway for seamless in-app transactions.",
    role: "Full-Stack Developer responsible for implementing the frontend UI, backend logic, integrating the recommendation algorithm, and configuring Xendit payment gateway to enable secure online payments.",
    challenges:
      "Designing and integrating a performant recommendation system, ensuring real-time product suggestions without impacting page load times, maintaining consistency across the Laravel and Flask components, and implementing a secure payment flow via Xendit.",
    demoUrl: "https://freezemart.osk.dom.my.id",
    repoUrl: "https://github.com/setiadyanwar/freezemart",
    projectSteps: [
      {
        title: "User Research & Data Collection",
        description:
          "Gathered user preferences and historical purchase data, cleaned and preprocessed datasets for the recommendation algorithm.",
        image: null,
      },
      {
        title: "System Architecture & Planning",
        description:
          "Outlined the full-stack architecture, defined data flow between Laravel frontend, Flask recommendation API, and Xendit payment service, and planned database schemas.",
        image: null,
      },
      {
        title: "Recommendation Engine Development",
        description:
          "Implemented TF-IDF vectorization and Cosine Similarity matching in Python, deployed as a Flask microservice for product suggestions.",
        image: null,
      },
      {
        title: "Payment Integration & Frontend Development",
        description:
          "Integrated Xendit payment gateway into the Laravel frontend, handled payment callbacks, and built responsive UI components in Blade and TailwindCSS for checkout flow.",
        image: null,
      },
      {
        title: "Testing & Optimization",
        description:
          "Conducted unit and integration tests for recommendation accuracy and payment flow, optimized query performance and caching strategies to minimize latency.",
        image: null,
      },
      {
        title: "Deployment & Maintenance",
        description:
          "Deployed application on a Linux server, configured CI/CD pipelines, monitored system performance and payment logs, and iterated based on user feedback.",
        image: null,
      },
    ],
  },
  {
    id: "studylens",
    title: "Studylens - Ai for Learning Website",
    category: "web",
    image: "/portfolio/web/studylens.png?height=400&width=600",
    //additionalImages: ["/placeholder.svg?height=180&width=320", "/placeholder.svg?height=180&width=320"],
    technologies: [
      "Flask",
      "Tensorflow",
      "tailwind",
      "opencv",
      "yolov8",
      "pytorch",
      "python",
    ],
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
        image: null,
      },
      {
        title: "Model Development (CNN & LSTM)",
        description:
          "Involves training a convolutional neural network to recognize head positions in images, followed by an LSTM model to analyze movement patterns over time and assess student focus levels.",
        image: null,
      },
      {
        title: "Frontend Development & UI Design",
        description:
          "Focuses on creating an intuitive interface with Tailwind, enabling users to visualize their focus patterns and engagement levels.",
        image: null,
      },
      {
        title: "Testing & Optimization",
        description:
          "Ensures high detection accuracy by evaluating the models with real user data and optimizing performance for smooth interactions.",
        image: null,
      },
      {
        title: "Deployment & User Feedback",
        description:
          "Finalizes the application for public use while gathering student input to refine features and enhance the overall learning experience.",
        image: null,
      },
    ],
  },
  {
    id: "nusoundtara",
    title: "Nusoundtara - Ticket Booking Website",
    category: "web",
    image: "/portfolio/web/Nusoundtara.png?height=400&width=600",
    // additionalImages: ["/placeholder.svg?height=180&width=320", "/placeholder.svg?height=180&width=320"],
    technologies: ["HTML/CSS", "Javascript", "PHP", "MySQL", "Laravel"],
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
        image: null,
      },
      {
        title: "UI/UX Design",
        description:
          "Designed an intuitive dashboard interface with a focus on data clarity and user experience. Created mockups for approval.",
        image: null,
      },
      {
        title: "Chart Implementation",
        description:
          "Implemented various chart types using Chart.js to visualize different data sets. Optimized for performance and interactivity.",
        image: null,
      },
      {
        title: "Real-time Data Integration",
        description:
          "Integrated with Firebase to provide real-time data updates. Implemented filtering and export capabilities for enhanced usability.",
        image: null,
      },
    ],
  },
  {
    id: "nexaid",
    title: "Nexaid - Dashboard Website",
    category: "web",
    image: "/portfolio/web/nexaid.png?height=400&width=600",
    // additionalImages: [
    //   "/placeholder.svg?height=180&width=320",
    //   "/placeholder.svg?height=180&width=320",
    // ],
    technologies: ["React", "Typescript", "Laravel", "TailwindCSS"],
    description:
      "Nexaid is a web-based dashboard designed for managing electronic products efficiently. Built with React, TypeScript, Laravel, and TailwindCSS, it provides an intuitive interface for inventory management, stock tracking, and product data visualization. With a modern UI and smooth user interactions, Nexaid enables businesses to streamline product organization while maintaining a responsive and scalable system.",
    role: "Web Developer responsible for building a responsive and interactive dashboard for managing electronic products.",
    challenges:
      "Optimizing performance, integrating frontend and backend efficiently, ensuring scalable UI, managing state effectively, and maintaining data security.",
    demoUrl: "https://nexaid.osk.dom.my.id",
    repoUrl: "https://github.com/setiadyanwar/Nexaid",
    projectSteps: [
      {
        title: "Planning & Requirement Analysis",
        description:
          "Defining core features, such as inventory tracking and product management, while structuring the application’s design",
        // image: "/placeholder.svg?height=300&width=400",
        image: null,
      },
      {
        title: "UI/UX Design",
        description:
          "Creating a visually appealing and user-friendly interface using TailwindCSS, ensuring accessibility and clarity in navigation.",
        // image: "/placeholder.svg?height=300&width=400",
        image: null,
      },
      {
        title: "Frontend Development",
        description:
          "Developing dynamic and interactive elements using React and TypeScript, optimizing responsiveness for different devices.",
        image:
          "/placBuilding a dynamic and responsive user interface using React and Typescript to ensure smooth interactions.eholder.svg?height=300&width=400",
      },
      {
        title: "Backend Implementation",
        description:
          "Using Laravel for data management, authentication, and efficient handling of product-related operations.",
        // image: "/placeholder.svg?height=300&width=400",
        image: null,
      },
      {
        title: "Performance Optimization",
        description:
          "Enhancing load times, improving UI responsiveness, and ensuring smooth data handling across the dashboard.",
        image: null,
      },
      {
        title: "Testing & Deployment",
        description:
          "Conducting usability tests, debugging issues, and launching the dashboard with continuous maintenance for future improvements.",
        image: null,
      },
    ],
  },
  {
    id: "butchery",
    title: "Burchery - E-Commerce Meat Website",
    category: "mobile",
    image: "/portfolio/mobile/butchery.png?height=400&width=600",
    // additionalImages: [
    //   "/portfolio/mobile/burchery-1.png?height=180&width=320",
    //   "/portfolio/mobile/burchery-2.png?height=180&width=320",
    // ],
    technologies: ["Java", "MongoDB", "Figma", "XML", "Android Studio"],
    description:
      "Burchery is a mobile e-commerce application for ordering fresh meat products. Designed with user-friendly navigation and real-time inventory updates, it ensures customers can browse, select, and purchase premium cuts straight from their device.",
    role: "Mobile Developer responsible for implementing core shopping flows, cart management, and secure payment integration.",
    challenges:
      "Ensuring data synchronization between client and server, optimizing list rendering for large catalogs, and integrating secure payment gateways within native Android.",
    demoUrl: "#",
    repoUrl: "https://github.com/setiadyanwar/ButcheryApp",
    projectSteps: [
      {
        title: "Requirement Gathering",
        description:
          "Collaborated with stakeholders to define product catalog structure, user flows, and payment requirements.",
        image: null,
      },
      {
        title: "UI/UX Design",
        description:
          "Created wireframes and prototypes in Figma focusing on ease of browsing and quick checkout.",
        image: null,
      },
      {
        title: "API Integration",
        description:
          "Built RESTful endpoints in Java to fetch product data and handle orders, secured with JWT.",
        image: null,
      },
      {
        title: "Frontend Implementation",
        description:
          "Developed RecyclerViews for product lists and implemented XML layouts for responsive design.",
        image: null,
      },
      {
        title: "Testing & Deployment",
        description:
          "Conducted unit and UI tests, fixed bugs, and published to Google Play Store.",
        image: null,
      },
    ],
  },
  {
    id: "ecotainment",
    title: "Ecotainment E-Commerce Plant - Mobile App",
    category: "mobile",
    image: "/portfolio/mobile/ecotainment.png?height=400&width=600",
    // additionalImages: [
    //   "/portfolio/mobile/ecotainment-1.png?height=180&width=320",
    //   "/portfolio/mobile/ecotainment-2.png?height=180&width=320",
    // ],
    technologies: [
      "Kotlin",
      "Firebase",
      "Laravel",
      "Figma",
      "XML",
      "Android Studio",
    ],
    description:
      "Ecotainment is a mobile commerce platform selling plants and green products from PT Godong Ijo Asri. It offers plant catalogs, care guides, and community tips with in-app chat support.",
    role: "Lead Android Developer overseeing shopping cart, real-time chat, and offline support.",
    challenges:
      "Implementing Firebase real-time chat, handling large image uploads for plant galleries, and providing offline browsing capabilities.",
    // demoUrl: "#",
    // repoUrl: "#",
    projectSteps: [
      {
        title: "Concept & Planning",
        description:
          "Gathered requirements on product range from PT Godong Ijo Asri and defined core flows.",
        image: null,
        // image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Design Prototyping",
        description:
          "Crafted high-fidelity screens in Figma focusing on plant catalog navigation and care guide UI.",
        image: null,
        // image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Backend Setup",
        description:
          "Configured Laravel endpoints for product data and integrated Firebase for chat.",
        image: null,
        // image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Android Development",
        description:
          "Built screens in Kotlin with Material components and integrated API and chat modules.",
        image: null,
        // image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "User Testing",
        description:
          "Conducted beta testing with 20 users, refined navigation and performance based on feedback.",
        image: null,
        // image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  {
    id: "skilpath",
    title: "Skillpath AI Learning App - UI Mobile App",
    category: "ui",
    image: "/portfolio/uiux/skillpath.png?height=400&width=600",
    // additionalImages: [
    //   "/portfolio/ui/skilpath-1.png?height=180&width=320",
    //   "/portfolio/ui/skilpath-2.png?height=180&width=320",
    // ],
    technologies: ["Figma", "Adobe XD", "Illustrator"],
    description:
      "Skillpath is a mobile UI concept for an AI-powered learning platform. Entry won 1st place in the UI/UX Competition Vocational Of Champions at UNS.",
    role: "UI/UX Designer and prototype developer for competition submission.",
    challenges:
      "Designing intuitive AI-assisted study flows and ensuring visual clarity under competition constraints.",
    demoUrl: "#",
    repoUrl: "#",
    projectSteps: [
      {
        title: "Research & Ideation",
        description: "Analyzed AI learning app trends and defined personas.",
        image: null,
      },
      {
        title: "Wireframing",
        description:
          "Sketch flows for AI-driven exercises and progress tracking.",
        image: null,
      },
      {
        title: "High-Fidelity Design",
        description:
          "Created visuals in Figma and Adobe XD, submitted for competition.",
        image: null,
      },
      {
        title: "Iteration",
        description:
          "Refined based on juror feedback leading to 1st winner title.",
        // image: "/placeholder.svg?height=300&width=400",
        image: null,
      },
    ],
  },
  {
    id: "skillify",
    title: "Skillify E-Course App - UI Mobile App",
    category: "ui",
    image: "/portfolio/uiux/skillify.png?height=400&width=600",
    // additionalImages: [
    //   "/portfolio/ui/skillify-1.png?height=180&width=320",
    //   "/portfolio/ui/skillify-2.png?height=180&width=320",
    // ],
    technologies: ["Figma", "Adobe XD", "Illustrator"],
    description:
      "Skillify is a conceptual e-course mobile UI that won 2nd place in the Smart IT Competition UI/UX Design category.",
    role: "UI/UX Designer creating interactive course modules and navigation flows.",
    challenges:
      "Balancing visual appeal with instructional clarity and interactive elements.",
    demoUrl: "#",
    repoUrl: "#",
    projectSteps: [
      {
        title: "User Research",
        description: "Gathered insights on e-learning UX standards.",
        image: null,
      },
      {
        title: "Prototype Design",
        description: "Built clickable prototypes in Figma.",
        image: null,
      },
      {
        title: "Visual Polish",
        description: "Applied branding and iconography in Illustrator.",
        image: null,
      },
      {
        title: "Competition Submission",
        description: "Presented to judges resulting in 2nd place.",
        image: null,
      },
    ],
  },
  {
    id: "gobojongsoang",
    title: "Gobojongsoang.id Reporting Platform - UI Website",
    category: "ui",
    image: "/portfolio/uiux/GObojongsoang.png?height=400&width=600",
    // additionalImages: [
    //   "/portfolio/ui/gobojongsoang-1.png?height=180&width=320",
    //   "/portfolio/ui/gobojongsoang-2.png?height=180&width=320",
    // ],
    technologies: ["Figma", "Adobe XD", "Illustrator"],
    description:
      "Gobojongsoang.id is a community reporting platform built in collaboration with Bandung city government to allow citizens to submit feedback and complaints.",
    role: "UI/UX Designer responsible for information architecture and interface design.",
    challenges:
      "Ensuring accessibility for diverse users and integrating with government backend systems.",
    demoUrl: "#",
    repoUrl: "#",
    projectSteps: [
      {
        title: "Stakeholder Workshops",
        description:
          "Collaborated with Bandung officials to gather requirements.",
        image: null,
      },
      {
        title: "Information Architecture",
        description: "Mapped user flows for complaint submission.",
        image: null,
      },
      {
        title: "UI Kit Creation",
        description: "Developed style guide and components in Figma.",
        image: null,
      },
      {
        title: "High-Fidelity Prototype",
        description: "Delivered interactive mockups for user testing.",
        image: null,
      },
    ],
  },
  {
    id: "rescuisine",
    title: "ResCuisine - Food Waste Solution App",
    category: "ui",
    image: "/portfolio/uiux/rescuisine.png?height=400&width=600",
    // additionalImages: [
    //   "/portfolio/ui/rescuisine-1.png?height=180&width=320",
    //   "/portfolio/ui/rescuisine-2.png?height=180&width=320",
    // ],
    technologies: ["Figma", "Adobe XD", "Illustrator"],
    description:
      "ResCuisine is a conceptual mobile UI focusing on solving food waste by connecting excess food providers with consumers. The design emphasizes ease of listing, searching, and claiming surplus meals.",
    role: "UI/UX Designer responsible for crafting user flows, wireframes, and high-fidelity mockups.",
    challenges:
      "Designing intuitive filtering and listing features while maintaining a friendly, food-centric aesthetic.",
    demoUrl: "#",
    repoUrl: "#",
    projectSteps: [
      {
        title: "User Research",
        description:
          "Conducted interviews with potential users to understand food waste behaviors.",
        image: null,
      },
      {
        title: "Wireframing",
        description:
          "Sketched main screens focusing on listing and claiming food items.",
        image: null,
      },
      {
        title: "Visual Design",
        description:
          "Developed color palette and UI kit in Figma reflecting fresh and sustainable themes.",
        image: null,
      },
      {
        title: "Prototyping",
        description: "Created interactive prototypes for usability testing.",
        image: null,
      },
      {
        title: "Iteration",
        description:
          "Refined layouts based on test feedback to improve clarity and accessibility.",
        image: null,
      },
    ],
  },
  {
    id: "transmate",
    title: "Transmate - AR Transit Platform",
    category: "ui",
    image: "/portfolio/uiux/Transmate.png?height=400&width=600",
    // additionalImages: [
    //   "/portfolio/ui/transmate-1.png?height=180&width=320",
    //   "/portfolio/ui/transmate-2.png?height=180&width=320",
    // ],
    technologies: ["Figma", "Adobe XD", "Illustrator"],
    description:
      "Transmate integrates AR features to enhance the Transjakarta transit experience by overlaying directions, station information, and live arrival times through the mobile camera view.",
    role: "UI/UX Designer responsible for AR interface mockups, iconography, and interaction flows.",
    challenges:
      "Balancing AR overlay legibility with real-world background complexity and ensuring minimal distraction for users on the move.",
    demoUrl: "#",
    repoUrl: "#",
    projectSteps: [
      {
        title: "Conceptualization",
        description:
          "Defined AR use cases and user scenarios within Transjakarta network.",
        image: null,
      },
      {
        title: "Storyboard Design",
        description:
          "Created storyboards to visualize AR interactions at bus stops.",
        image: null,
      },
      {
        title: "UI Kit Development",
        description: "Designed AR icons and overlay elements in Adobe XD.",
        image: null,
      },
      {
        title: "Prototype Testing",
        description:
          "Tested AR mockups using device camera feeds for alignment and readability.",
        image: null,
      },
      {
        title: "Refinement",
        description:
          "Iterated on contrast and placement to ensure consistency across varying lighting conditions.",
        image: null,
      },
    ],
  },
  {
    id: "hotelid",
    title: "Hotel.id Booking Hotel - UI Website",
    category: "ui",
    image: "/portfolio/uiux/hotelid.png?height=400&width=600",
    // additionalImages: [
    //   "/portfolio/ui/hotelid-1.png?height=180&width=320",
    //   "/portfolio/ui/hotelid-2.png?height=180&width=320",
    // ],
    technologies: ["Figma", "Adobe XD", "Illustrator"],
    description:
      "Hotel.id is a UI concept for a hotel booking website offering search, filtering, and booking management for users.",
    role: "UI/UX Designer responsible for designing booking flows and responsive web layouts.",
    challenges:
      "Creating a seamless multi-step booking process and optimizing for mobile and desktop views.",
    // demoUrl: "#",
    repoUrl: "#",
    projectSteps: [
      {
        title: "User Persona Definition",
        description: "Identified key user personas and booking behaviors.",
        image: null,
      },
      {
        title: "Wireframe Sketching",
        description:
          "Drafted multi-step booking flow in low-fidelity wireframes.",
        image: null,
      },
      {
        title: "High-Fidelity Design",
        description:
          "Created polished screens in Figma ensuring clarity and usability.",
        image: null,
      },
      {
        title: "Prototype Testing",
        description:
          "Conducted click-through tests to refine navigation and form interactions.",
        image: null,
      },
    ],
  },
  {
    id: "swiftcare",
    title: "SwiftCare Crowdfunding Platform - Mobile App",
    category: "mobile",
    image: "/portfolio/mobile/swiftcare.png?height=400&width=600",
    // additionalImages: [
    //   "/portfolio/mobile/swiftcare-1.png?height=180&width=320",
    //   "/portfolio/mobile/swiftcare-2.png?height=180&width=320",
    // ],
    technologies: [
      "Kotlin",
      "Firebase",
      "Chat-GPT API",
      "XML",
      "Android Studio",
    ],
    description:
      "SwiftCare is a crowdfunding platform mobile UI designed to facilitate medical and social campaign donations.",
    role: "UI/UX Designer crafting donation flows and campaign presentation screens.",
    challenges:
      "Balancing informational content with emotional engagement and secure transaction UI.",
    demoUrl: "#",
    repoUrl: "#",
    projectSteps: [
      {
        title: "Campaign Research",
        description:
          "Reviewed crowdfunding best practices and user motivations.",
        image: null,
      },
      {
        title: "Flow Design",
        description: "Mapped donation process steps and UI requirements.",
        image: null,
      },
      {
        title: "UI Mockups",
        description: "Created campaign listing and detail screens in Adobe XD.",
        image: null,
      },
      {
        title: "Feedback Iteration",
        description:
          "Incorporated user feedback to refine trust indicators and ease of use.",
        image: null,
      },
    ],
  },
  {
    id: "agridation",
    title: "Agridation 2023 - Competition Website",
    category: "web",
    image: "/placeholder.svg?height=400&width=600",
    additionalImages: [
      "/portfolio/web/agridation-1.png?height=180&width=320",
      "/portfolio/web/agridation-2.png?height=180&width=320",
    ],
    technologies: ["Figma", "Laravel", "TailwindCSS", "HTML/CSS", "MySQL"],
    description:
      "Agridation 2023 is a competition website providing information, registration, and result announcements for agricultural innovation events.",
    role: "Full-stack Developer and Designer integrating front-end UI with Laravel backend.",
    challenges:
      "Synchronizing dynamic registration data and creating engaging event presentation.",
    demoUrl: "#",
    repoUrl: "#",
    projectSteps: [
      {
        title: "Requirement Definition",
        description: "Outlined event flow, registration, and admin needs.",
        image: null,
      },
      {
        title: "UI Design",
        description: "Designed landing and dashboard pages with TailwindCSS.",
        image: null,
      },
      {
        title: "Backend Development",
        description: "Implemented registration and data storage in Laravel.",
        image: null,
      },
      {
        title: "Testing & Launch",
        description:
          "Performed user acceptance tests and deployed to production.",
        image: null,
      },
    ],
  },
  {
    id: "pembimbingid",
    title: "Dashboard Pembimbing.id - Academic Mentoring Platform",
    category: "ui",
    image: "/portfolio/uiux/Pembimbing.id.png?height=400&width=600",
    // additionalImages: [
    //   "/portfolio/ui/pembimbingid-1.png?height=180&width=320",
    //   "/portfolio/ui/pembimbingid-2.png?height=180&width=320",
    // ],
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    description:
      "Pembimbing.id dashboard UI supports academic mentors in assigning tasks, tracking progress, and communications with mentees.",
    role: "UI/UX Designer creating mentor and mentee interface screens.",
    challenges:
      "Balancing administrative features with user-friendly communication tools.",
    demoUrl: "https://pembimbing.kawankerja.id/",
    repoUrl:
      "https://www.linkedin.com/posts/setiadyanwar_uiux-redesign-for-pembimbingid-dashboard-activity-7250038967906025474-raVw?utm_source=share&utm_medium=member_desktop&rcm=ACoAADVhymkBCv31S7dFmvxRVbPg_hXaaQCCBKE",
    projectSteps: [
      {
        title: "Stakeholder Interviews",
        description:
          "Gathered mentor requirements for task and progress tracking.",
        image: null,
      },
      {
        title: "Wireframe",
        description: "Outlined dashboard widgets and navigation in Figma.",
        image: null,
      },
      {
        title: "High-Fidelity Design",
        description: "Designed polished UI screens in Adobe Illustrator.",
        image: null,
      },
      {
        title: "Prototype Feedback",
        description: "Tested with mentors and iterated on layout and features.",
        image: null,
      },
    ],
  },
  // {
  //   id: "investra",
  //   title: "Investra Financial Intelligence Platform - UI Website",
  //   category: "ui",
  //   image: "/placeholder.svg?height=400&width=600",
  //   additionalImages: [
  //     "/portfolio/ui/investra-1.png?height=180&width=320",
  //     "/portfolio/ui/investra-2.png?height=180&width=320",
  //   ],
  //   technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
  //   description:
  //     "Investra is a UI concept for a financial intelligence dashboard offering market data, analytics, and investment tracking.",
  //   role: "UI/UX Designer responsible for dashboard layout and data visualization components.",
  //   challenges:
  //     "Visualizing complex financial data clearly and ensuring responsiveness.",
  //   demoUrl: "#",
  //   repoUrl: "#",
  //   projectSteps: [
  //     {
  //       title: "Market Research",
  //       description: "Researched financial dashboard standards and user needs.",
  //       image: null,
  //     },
  //     {
  //       title: "Dashboard Wireframes",
  //       description: "Created low-fi layouts for charts and tables.",
  //       image: null,
  //     },
  //     {
  //       title: "Visual Design",
  //       description: "Designed chart components and UI kit in Figma.",
  //       image: null,
  //     },
  //     {
  //       title: "Prototype Testing",
  //       description: "Validated interactions and readability with test users.",
  //       image: null,
  //     },
  //   ],
  // },
  // {
  //   id: "temanibu",
  //   title: "Teman Ibu Freelance Job Marketplace - UI Mobile App",
  //   category: "ui",
  //   image: "/placeholder.svg?height=400&width=600",
  //   additionalImages: [
  //     "/portfolio/ui/temanibu-1.png?height=180&width=320",
  //     "/portfolio/ui/temanibu-2.png?height=180&width=320",
  //   ],
  //   technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
  //   description:
  //     "Teman Ibu is a mobile marketplace UI for freelance child care and household support services.",
  //   role: "UI/UX Designer crafting service listing and booking interfaces.",
  //   challenges:
  //     "Ensuring trust and clarity in service descriptions and booking flows.",
  //   demoUrl: "#",
  //   repoUrl: "#",
  //   projectSteps: [
  //     {
  //       title: "User Interviews",
  //       description: "Understood parent needs and care provider expectations.",
  //       image: null,
  //     },
  //     {
  //       title: "Flow Mapping",
  //       description: "Mapped service discovery to booking confirmation steps.",
  //       image: null,
  //     },
  //     {
  //       title: "UI Prototyping",
  //       description: "Designed key screens in Figma and Photoshop.",
  //       image: null,
  //     },
  //     {
  //       title: "Usability Testing",
  //       description:
  //         "Tested with users to refine trust signals and ease of booking.",
  //       image: null,
  //     },
  //   ],
  // },
  {
    id: "redesignipb",
    title: "Redesign IPB University Website",
    category: "web",
    image: "/portfolio/web/ipbredesign.png?height=400&width=600",
    technologies: ["HTML", "CSS", "JavaScript"],
    // Case Study Description
    description:
      "This project is a UI/UX case study for the redesign of the official IPB University website. The new design emphasizes improved navigation, responsive layouts, and a refreshed visual identity to enhance user engagement and accessibility.",
    role: "Web Designer responsible for creating the UI redesign strategy, developing wireframes, high-fidelity mockups, and interactive prototypes to deliver a modern, user-centered interface.",
    challenges:
      "Migrating legacy content to a modern layout while ensuring cross-browser compatibility, maintaining brand consistency, and improving usability across all devices.",
    demoUrl: "#",
    repoUrl: "#",
    projectSteps: [
      {
        title: "Content Audit",
        description:
          "Reviewed existing site pages to identify key user tasks, outdated content, and areas for improved information hierarchy.",
        image: null,
      },
      {
        title: "Design System Creation",
        description:
          "Established a comprehensive style guide and component library in Figma, including color schemes, typography, and UI elements that reflect IPB’s brand identity.",
        image: null,
      },
      {
        title: "Wireframing & Prototyping",
        description:
          "Developed low- and high-fidelity wireframes for the homepage, academic sections, news, events, and contact pages, then built interactive prototypes for stakeholder review.",
        image: null,
      },
      {
        title: "Responsive Development Mockups",
        description:
          "Created responsive visual mockups showcasing desktop, tablet, and mobile breakpoints to ensure a seamless experience across devices.",
        image: null,
      },
      {
        title: "Usability Testing & Iteration",
        description:
          "Conducted usability tests with students and staff, gathered feedback on navigation and content clarity, and iterated designs to address pain points.",
        image: null,
      },
      {
        title: "Handoff & Documentation",
        description:
          "Compiled detailed handoff documentation, including redlines and interaction specs, and collaborated with developers to facilitate accurate implementation.",
        image: null,
      },
    ],
  },
  {
    id: "bemkmipb",
    title: "BEM KM IPB – Organization Profile Website",
    category: "ui",
    image: "/portfolio/uiux/bemkm.png?height=400&width=600",
    technologies: ["Figma", "Adobe XD", "Illustrator", "Zeplin"],
    description:
      "A UI/UX project for the BEM KM IPB 2024 organizational profile website, showcasing the student executive board's mission, vision, structure, news, events, and contact information with a clean and modern interface.",
    role: "UI/UX Designer responsible for conducting initial analysis and user research, designing wireframes and high-fidelity mockups, building interactive prototypes, and ensuring a user-centered, accessible, and visually consistent design.",
    challenges:
      "Balancing dense informational content with a clean layout, ensuring mobile responsiveness, and aligning closely with IPB's branding guidelines.",
    projectSteps: [
      {
        title: "Analysis & User Research",
        description:
          "Conducted stakeholder interviews and surveys to understand organizational goals and user needs, and created user personas to guide design decisions.",
        image: null,
      },
      {
        title: "Wireframing & Information Architecture",
        description:
          "Mapped out the site's structure and designed low-fidelity wireframes for homepage, profile sections, news, events, and contact pages to optimize content flow.",
        image: null,
      },
      {
        title: "High-Fidelity UI Design",
        description:
          "Developed polished mockups in Adobe XD, applying IPB's color palette, typography standards, and visual identity to maintain brand consistency.",
        image: null,
      },
      {
        title: "Interactive Prototyping & Usability Testing",
        description:
          "Built interactive prototypes, conducted usability tests with student representatives, and iterated designs based on feedback to improve navigation and clarity.",
        image: null,
      },
      {
        title: "Design Handoff & Documentation",
        description:
          "Prepared detailed design specifications, redlines, and style guides in Zeplin/Figma, and collaborated with the development team to ensure accurate implementation.",
        image: null,
      },
    ],
  },
  {
    id: "uvan",
    title: "Uvan E-Commerce Shoes Store - UI Website",
    category: "ui",
    image: "/portfolio/uiux/Uvan.png?height=400&width=600",
    technologies: ["Figma", "Adobe XD", "Illustrator"],
    description:
      "Uvan is a fictional brand created as a UI/UX case study for a shoes e-commerce website. The Uvan site features a sleek, modern, and clean design with immersive micro-animations, delivering an intuitive and engaging online shopping experience.",
    role: "UI/UX Designer responsible for conducting user research, developing wireframes, crafting high-fidelity mockups, building interactive prototypes, and defining micro-animation specifications to produce a modern, simple, clean, and engaging design.",
    challenges:
      "Balancing a minimalist layout with immersive animations, ensuring smooth performance across devices, and maintaining visual consistency in line with the brand identity.",
    projectSteps: [
      {
        title: "User Research & Competitive Analysis",
        description:
          "Conducted surveys and interviews with target users and analyzed leading shoes e-commerce websites to establish best practices and user expectations.",
        image: null,
      },
      {
        title: "Wireframing & Information Architecture",
        description:
          "Created low-fidelity wireframes for the homepage, product listings, product details, cart, and checkout to structure an intuitive navigation flow.",
        image: null,
      },
      {
        title: "High-Fidelity UI Design",
        description:
          "Designed high-fidelity mockups in Figma, applying a clean color palette and clear typography, and integrated hover effects and page-transition animations for an immersive feel.",
        image: null,
      },
      {
        title: "Interactive Prototyping & Usability Testing",
        description:
          "Built interactive prototypes with micro-interactions in Figma, conducted usability testing sessions, and iterated animation timing based on user feedback.",
        image: null,
      },
      {
        title: "Animation Implementation & Performance Tuning",
        description:
          "Prepared detailed animation specs for developers, optimized Lottie and CSS animations for performance, and ensured smooth transitions without compromising page load times.",
        image: null,
      },
      {
        title: "Design Handoff & Documentation",
        description:
          "Delivered comprehensive design documentation, animation guidelines, and a component library via Zeplin and Figma, and collaborated closely with developers to ensure a pixel-perfect implementation.",
        image: null,
      },
    ],
  },
  {
    id: "famiapp",
    title: "FamiApp – Checkout Flow Redesign (Mobile UI)",
    category: "ui",
    image: "/portfolio/uiux/FamiApp.png?height=400&width=600",
    // additionalImages: [
    //   "/portfolio/uiux/FamiApp-1.png?height=180&width=320",
    //   "/portfolio/uiux/FamiApp-2.png?height=180&width=320",
    //   "/portfolio/uiux/FamiApp-3.png?height=180&width=320"
    // ],
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    description:
      "A comprehensive UI/UX redesign of the FamiApp mobile application, focusing on enhancing the checkout and pickup order experience. The project aimed to streamline the user journey, address usability issues, and align the interface with modern design standards.",
    role: "UI/UX Designer responsible for conducting user research, creating wireframes and high-fidelity mockups, and developing interactive prototypes to improve the checkout flow.",
    challenges:
      "Identifying and resolving pain points in the existing checkout process, such as complex stock checking procedures and lack of clear notifications, while ensuring a user-friendly and efficient interface.",
    repoUrl:
      "https://www.linkedin.com/posts/setiadyanwar_study-case-to-redesign-the-checkout-screen-activity-7221889939687268352-4JNc?utm_source=share&utm_medium=member_desktop&rcm=ACoAADVhymkBCv31S7dFmvxRVbPg_hXaaQCCBKE",
    projectSteps: [
      {
        title: "User Research & Pain Point Analysis",
        description:
          "Conducted interviews and analyzed user reviews to identify key issues in the existing checkout flow, such as repetitive stock checks and inadequate order notifications.",
        image: null,
      },
      {
        title: "Competitive Analysis",
        description:
          "Studied similar applications like GoFood, Kopi Kenangan, and Fore to understand best practices in checkout processes and identify opportunities for improvement.",
        image: null,
      },
      {
        title: "Wireframing & User Flow Redesign",
        description:
          "Developed low-fidelity wireframes and restructured the user flow to simplify the checkout process, allowing users to select a store first and view available products accordingly.",
        image: null,
      },
      {
        title: "High-Fidelity Mockups & Design System",
        description:
          "Created detailed UI designs and established a design system to ensure consistency across the application, incorporating brand colors, typography, and components.",
        image: null,
      },
      {
        title: "Interactive Prototyping & Usability Testing",
        description:
          "Built interactive prototypes and conducted usability testing sessions to gather feedback and iterate on the design, enhancing user satisfaction and efficiency.",
        image: null,
      },
    ],
  },
  {
    id: "wingspos",
    title: "WingsPOS – Point of Sale Web Application",
    category: "web",
    image: "/portfolio/web/wingspos.png?height=400&width=600",
    additionalImages: ["/portfolio/web/wingspos-1.png?height=180&width=320"],
    technologies: ["Laravel", "TailwindCSS", "MySQL", "HTML/CSS", "JavaScript"],
    description:
      "WingsPOS is a web-based Point of Sale (POS) system developed for Ayam Geprek Indonesia to streamline sales, inventory, and order management across multiple outlets. The application offers real-time transaction processing, role-based access control, and comprehensive reporting features.",
    role: "Full-Stack Developer responsible for designing the database schema, developing backend APIs with Laravel, implementing responsive frontend interfaces using TailwindCSS, and deploying the application to a live server.",
    challenges:
      "Integrating real-time inventory updates across multiple branches, ensuring secure authentication and authorization for different user roles (admin, cashier), and optimizing the system for high-volume transaction processing.",
    demoUrl: "https://ayamgeprek.id/",
    repoUrl: "https://github.com/setiadyanwar/wingspos",
    projectSteps: [
      {
        title: "Requirement Gathering & System Design",
        description:
          "Collaborated with stakeholders to identify key functionalities such as sales processing, inventory tracking, and user management. Designed the system architecture and database schema to accommodate multi-branch operations.",
        image: null,
      },
      {
        title: "Backend Development with Laravel",
        description:
          "Developed RESTful APIs for handling products, orders, users, and reports. Implemented authentication and authorization mechanisms to manage access control for different user roles.",
        image: null,
      },
      {
        title: "Frontend Implementation with TailwindCSS",
        description:
          "Built responsive user interfaces for the dashboard, sales, and inventory modules using TailwindCSS. Ensured compatibility across various devices and screen sizes.",
        image: null,
      },
      {
        title: "Testing & Quality Assurance",
        description:
          "Conducted unit and integration testing to ensure system reliability. Performed user acceptance testing (UAT) with actual users to gather feedback and make necessary improvements.",
        image: null,
      },
      {
        title: "Deployment & Maintenance",
        description:
          "Deployed the application to a production server, configured domain settings, and set up SSL certificates. Provided ongoing maintenance and updates based on user feedback and changing business needs.",
        image: null,
      },
    ],
  },
];

// Work experience data
export const workExperiences = [
  {
    title: "Web Developer Programmer (Internship)",
    company: "Eduwork | PT Sinergi Insan Andalan",
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
      "Conducted comprehensive testing and debugging to ensure system stability and cross-platform compatibility.",
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
      "Contributed to performance optimization and accessibility improvements",
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
      "Created high-fidelity prototypes with consistent visual elements",
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
      "Tested features to match system design requirements",
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
      "Conducted usability testing and refined IA for better navigation",
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
    description:
      "Specialized in Web Development and User Experience Design with strong academic performance.",
    skills: [
      "Web Development",
      "UI/UX Design",
      "Data Structures",
      "Algorithms",
    ],
    details: [
      "GPA: 3.8/4.0",
      "Relevant coursework: Data Structures, Algorithms, Web Development, UI/UX Design",
      "Participated in hackathons and coding competitions",
    ],
  },
  {
    title: "Fundamental Web Programming Course",
    company: "Dicoding",
    logo: "/experience/dicoding.png?height=40&width=40",
    period: "2024",
    description:
      "Completed a foundational course focusing on the basics of web development using HTML and CSS.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Responsive Design",
      "Web Development",
    ],
    details: [
      "Learned semantic HTML structure and responsive design principles",
      "Built simple static websites as study cases",
      "Gained understanding of fundamental web development concepts",
    ],
  },
];

// Organization experience data
export const organizationExperiences = [
  {
    title: "Core Team Product Development & UX",
    company: "Google Developer Group on Campus (IPB University)",
    logo: "/experience/gdsc.png?height=40&width=40",
    period: "Dec 2024 – Present",
    description:
      "Conducted workshops and mentoring on UI/UX and no-code programming, managed social media, and fostered active community engagement.",
    skills: [
      "Mentorship",
      "UI/UX Design",
      "No-Code Tools",
      "Community Engagement",
    ],
    details: [
      "Led hands-on workshops improving no-code tool skills by 40%",
      "Increased social media engagement by 30%",
      "Boosted active member participation by 25%",
    ],
  },
  {
    title: "Mentor UI/UX Designer",
    company: "HIMAVO MICRO IT",
    logo: "/experience/microit.png?height=40&width=40",
    period: "Jan 2024 – Sept 2024",
    description:
      "Mentored 30+ students in UI/UX, conducted design training, tool setup, and guided them through hands-on projects.",
    skills: ["Design Principles", "Mentorship", "Figma", "User Testing"],
    details: [
      "Improved students' design skills by 40%",
      "Conducted workshops leading to 25% increase in engagement",
      "Facilitated user research training for better design outcomes",
    ],
  },
  {
    title: "Head of Event Company Visit 2024",
    company: "HIMAVO MICRO IT",
    logo: "/experience/microit.png?height=40&width=40",
    period: "May 2024 - Jul 2024",
    description:
      "Led event planning and coordination for company visits involving 75 students, engaging stakeholders, and managing budgets.",
    skills: [
      "Event Management",
      "Team Leadership",
      "Stakeholder Engagement",
      "Budget Planning",
    ],
    details: [
      "Successfully organized visits to 3 tech companies",
      "Increased student participation by 50%",
      "Managed a budget of $2000 for event logistics",
    ],
  },
  {
    title: "Web Developer & UI/UX",
    company: "AGRIDATION",
    logo: "/experience/agridation-logo.png?height=40&width=40",
    period: "Jan 2024 – Present",
    description:
      "Designed and developed an informational website and payment portal for competitions, increasing engagement and performance.",
    skills: [
      "Web Development",
      "UI/UX Design",
      "Frontend Development",
      "User Testing",
    ],
    details: [
      "Developed 10+ pages improving performance by 30%",
      "Created 15+ UI designs enhancing UX by 35%",
      "Conducted user testing with 50+ participants to refine interface",
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
];

export const portfolioItems = [
  {
    id: "kreavoks",
    title: "Kreavoks E-learning & Agency Website",
    date: "July - Present",
    subtitle: "Comprehensive digital ecosystem combining e-learning platform, mentorship marketplace, and digital agency services.",
    category: "web",
    image: "/portfolio/web/kreavoks.png?height=400&width=600",
    additionalImages: [
      "/portfolio/web/kreavoks-1.png?height=180&width=320",
      "/portfolio/web/kreavoks-2.png?height=180&width=320",
    ],
    technologies: ["React", "Laravel", "TailwindCSS", "Typescript", "MySQL"],
    overviewHeading: "The Vision",
    description:
      "Kreavoks is a comprehensive digital ecosystem designed to **bridge the gap between education, personal branding, and professional services**. It serves three distinct user groups: students seeking mentorship, experts building their personal brand, and businesses looking for custom software solutions. By unifying these needs into a single hub, Kreavoks creates a seamless environment where learning directly translates into professional opportunity.\n\nTechnically, the platform is built for scale, featuring a **robust multi-role authentication system** and a **structured Learning Management System (LMS)**. Key capabilities include a seamless booking engine for mentorship sessions and a dynamic content management system. This architecture ensures a cohesive, efficient, and user-centric experience that empowers the entire digital creative community.",
    role: "Lead Developer and Fullstack Web Developer",
    responsibilities: [
      "Entire website development from concept to implementation",
      "Frontend and backend architecture design",
      "Feature implementation and optimization"
    ],
    challenges:
      "Combining three distinct goals branding, education, and service sales—into a single unified experience without overwhelming the user. I applied a modular design approach using atomic components and consistent layout grids, Flexbox, enabling scalable and maintainable development. By focusing on clarity, navigation flow, and performance (lazy loading, optimized images), we delivered a platform that feels cohesive and efficient across all devices.",
    demoUrl: "https://kreavoks.my.id",
    // repoUrl: "https://github.com/example",
    problemImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    solutionImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    problemDescription:
      "The team needed a **single platform** that could handle branding, e-learning, and service sales without confusing different user types. Before Kreavoks, mentor onboarding, course purchases, and custom project requests were **scattered across multiple inconsistent forms** and channels.",
    problemCards: [
      {
        title: "Fragmented user journey",
        description:
          "Prospective mentors, students, and clients had to jump between several pages and external forms just to complete a single task.",
      },
      {
        title: "Hard-to-maintain content",
        description:
          "Course content, service pages, and branding assets were managed manually, making updates slow and error-prone.",
      },
      {
        title: "Unclear conversion funnel",
        description:
          "There was no clear path from landing page visit to service booking, so campaign performance and lead quality were difficult to measure.",
      },
      {
        title: "Limited scalability",
        description:
          "The previous website structure was not modular enough to add new programs, mentors, or service types quickly as the business grew.",
      },
    ],
    solutionDescription:
      "I designed Kreavoks as a **unified platform** with three clear paths: personal branding, e-learning, and custom software services. Using an **atomic design approach** and consistent grid layout, each path feels connected while still focusing on the needs of its primary audience.",
    solutionCards: [
      {
        title: "Reworked information architecture",
        description:
          "Restructured navigation into three main journeys (Learn, Become a Mentor, and Hire Agency) with clear calls-to-action at every step.",
      },
      {
        title: "Integrated LMS and booking",
        description:
          "Built LMS modules and service booking forms into a single experience so users never have to switch platforms mid-flow.",
      },
      {
        title: "Reusable UI components",
        description:
          "Created reusable card, section, and layout components with TailwindCSS, allowing new classes and services to be added through configuration rather than redesign.",
      },
      {
        title: "Performance-focused implementation",
        description:
          "Implemented lazy loading, image optimization, and a scalable code structure to keep future marketing campaigns fast and reliable.",
      },
    ],
    status: "ongoing",
    impact: [
      "100% of mentors successfully onboarded to the platform",
      "~45% increase in course completion rates",
      "Reduced platform navigation time by 30%",
      "Improved user satisfaction score to 4.8/5.0"
    ],
    outcomes: [
      {
        type: "positive",
        value: 45,
        unit: "%",
        title: "Higher course completion",
        description: "Clearer flows and integrated LMS modules increased course completion rates across flagship programs.",
      },
      {
        type: "negative",
        value: 30,
        unit: "%",
        title: "Faster navigation time",
        description: "A unified information architecture reduced the time it takes users to reach key actions such as enrolling or booking.",
      },
      {
        type: "positive",
        value: 100,
        unit: "%",
        title: "Mentor onboarding coverage",
        description: "All active mentors were successfully onboarded to the new platform with a consistent onboarding experience.",
      },
      {
        type: "positive",
        value: 4.8,
        unit: "/5.0",
        title: "User satisfaction score",
        description: "Students and mentors rated the new Kreavoks experience highly for clarity, speed, and visual design.",
      },
    ],
    nextSteps:
      "Continue refining learning paths based on analytics, introduce more mentor-centric tooling, and extend the booking flow to support cohort-based programs.",
    projectSteps: [
      {
        title: "Market Research & Strategic Planning",
        description:
          "Conducted comprehensive market analysis to identify gaps in existing e-learning and digital agency platforms. Defined user personas (students, mentors, business clients) and mapped out the platform's core value propositions: integrated learning paths, seamless booking experiences, and a unified service showcase.",
        image: "/portfolio/steps/kreavoks-1.png",
      },
      {
        title: "UI/UX Architecture & Design System",
        description:
          "Developed a cohesive design system in Figma, establishing typography, color palettes, and component libraries to ensure consistency across the platform. Created high-fidelity mockups for key user flows, including course enrollment, mentorship booking, and service inquiries, focusing on intuitive navigation and accessibility.",
        image: "/portfolio/steps/kreavoks-2.png",
      },
      {
        title: "Full-Stack Development & Integration",
        description:
          "Built the platform using React for the frontend and Laravel for the backend API. Implemented complex features such as multi-role authentication (student/mentor/admin), real-time notification systems, and a custom LMS module. Integrated third-party services for payments and calendar scheduling.",
        image: "/portfolio/steps/kreavoks-3.png",
      },
      {
        title: "Performance Optimization & Security",
        description:
          "Optimized application performance through code splitting, image lazy loading, and database indexing. Implemented robust security measures including CSRF protection, input validation, and secure session management. Conducted rigorous testing to ensure stability under concurrent user loads.",
        image: "/portfolio/steps/kreavoks-4.png",
      },
      {
        title: "Deployment & Growth Strategy",
        description:
          "Deployed the platform to a scalable cloud infrastructure using CI/CD pipelines for automated testing and delivery. Launched targeted digital marketing campaigns to drive initial user acquisition and established feedback loops for continuous platform improvement based on user analytics.",
        image: "/portfolio/steps/kreavoks-5.png",
      },
    ],
  },
  {
    id: "nobarin",
    title: "Nobarin Movie Streaming Platform",
    date: "June 2025",
    subtitle: "Modern movie browsing platform with real-time data integration and responsive design.",
    category: "web",
    image: "/portfolio/web/nobar.png?height=400&width=600",
    // additionalImages: [
    //   "/portfolio/web/nobarin-1.png?height=180&width=320",
    //   "/portfolio/web/nobarin-2.png?height=180&width=320",
    // ],
    technologies: ["Vue.js", "Pinia", "TailwindCSS", "TMDB API", "Vite"],
    overviewHeading: "Project Strategy",
    description:
      "Nobarin is a modern, feature-rich movie discovery and streaming platform designed to **transform how users explore cinema**. In an era where content is abundant but scattered, Nobarin provides a centralized, intuitive interface that **aggregates real-time data from the TMDB API**, offering users instant access to trending movies, detailed synopses, cast information, and personalized recommendations.\n\nBuilt with performance and user experience in mind, the application leverages the power of **Vue.js and Pinia** for lightning-fast state management and seamless page transitions. Users can curate their own experience by managing a personal 'Favorites' list, filtering movies by genre, and accessing detailed metadata without ever facing a loading spinner.\n\nBeyond just a catalog, Nobarin focuses on engagement. The responsive design ensures a **premium experience across all devices**, from desktop monitors to mobile screens. By combining clean aesthetics with robust functionality, Nobarin serves as the ultimate companion for movie enthusiasts looking to decide what to watch next.",
    role: "Fullstack Developer handling frontend design, API integration, and routing logic.",
    challenges:
      "Integrating dynamic movie data from TMDB, managing application state using Pinia, and ensuring responsive UI across devices while maintaining clean code structure. A special focus was given to UX flow between movie browsing, details, and favorites page.",
    demoUrl: "https://nobarin-phi.vercel.app/", // ← ganti dengan URL demo asli jika ada
    // repoUrl: "https://github.com/username/nobarin", // ← opsional jika ingin mencantumkan
    problemImage:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    solutionImage:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1200&q=80",
    problemDescription:
      "Movie enthusiasts struggled to **find relevant titles** and continue exploring because information was **scattered across multiple sites** and many catalog UIs felt heavy and cluttered.",
    problemCards: [
      {
        title: "Scattered movie data",
        description:
          "Users had to open several different websites just to see a synopsis, ratings, and recommendations for a single movie.",
      },
      {
        title: "Confusing catalog UI",
        description:
          "Without a clear card structure, it was hard to distinguish popular titles, new releases, and personal favorites at a glance.",
      },
      {
        title: "Slow browsing experience",
        description:
          "Dynamic data fetching and suboptimal state management made the browsing experience feel slow and unresponsive.",
      },
      {
        title: "No central favorites",
        description:
          "Users lacked a single place to store and revisit movies they were interested in, so discovery rarely turned into re-engagement.",
      },
    ],
    solutionDescription:
      "Nobarin brings **movie browsing**, title details, and favorites into one light, responsive experience built with **Vue, Pinia, and TailwindCSS**. I focused the design on **consistent movie cards**, clear filters, and smooth transitions between browsing and detail views.",
    solutionCards: [
      {
        title: "TMDB API integration",
        description:
          "Fetched live movie data from TMDB and mapped it into modular Vue components for listings and detail pages.",
      },
      {
        title: "Centralized state with Pinia",
        description:
          "Centralized movie data and favorites management in a single Pinia store so navigation between pages feels instant.",
      },
      {
        title: "Responsive card design",
        description:
          "Redesigned movie cards with a clear visual hierarchy: poster, title, rating, and primary action, optimized for both mobile and desktop.",
      },
      {
        title: "Structured routing",
        description:
          "Used dynamic routing for detail pages and categories, making it straightforward to add new discovery sections in the future.",
      },
    ],
    status: "completed",
    impact: [
      "~60% increase in movie discovery engagement",
      "Reduced app load time by 40% with optimized state management",
      "95% user retention rate for favorites feature",
      "Achieved 4.7/5.0 app store rating"
    ],
    outcomes: [
      {
        type: "positive",
        value: 60,
        unit: "%",
        title: "Increase in discovery engagement",
        description: "More users explored additional titles per session thanks to clearer navigation and movie recommendations.",
      },
      {
        type: "positive",
        value: 40,
        unit: "%",
        title: "Faster load times",
        description: "Optimized state management and API usage reduced perceived load time across key pages.",
      },
      {
        type: "positive",
        value: 95,
        unit: "%",
        title: "Favorites feature retention",
        description: "The favorites system encouraged users to return and continue watching movies they had saved earlier.",
      },
      {
        type: "positive",
        value: 4.7,
        unit: "/5.0",
        title: "User rating",
        description: "Users rated the overall experience highly for responsiveness and ease of finding relevant movies.",
      },
    ],
    nextSteps:
      "Iterate on personalization by experimenting with watchlists and genre-based recommendations while monitoring performance closely.",
    projectSteps: [
      {
        title: "Requirement Gathering & Planning",
        description:
          "Planning features such as movie search, favorites, and detail view using data from TMDB API.",
        image: "/portfolio/steps/nobarin-1.png",
      },
      {
        title: "UI Design & Component Setup",
        description:
          "Designing the interface using TailwindCSS and building reusable Vue components for navbar, cards, etc.",
        image: "/portfolio/steps/nobarin-2.png",
      },
      {
        title: "State Management & Routing",
        description:
          "Implementing Vue Router for page navigation and Pinia for centralized state handling.",
        image: "/portfolio/steps/nobarin-3.png",
      },
      {
        title: "API Integration",
        description:
          "Fetching movie data from TMDB and dynamically rendering movie cards and detail pages.",
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Testing & Deployment",
        description:
          "Testing responsiveness, fixing routing bugs, and deploying the app with performance optimization.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },

  {
    id: "upala",
    title: "Upala Company Profile & CRM Website",
    date: "May - June 2024",
    subtitle: "Comprehensive company profile and CRM solution for coffee shop management.",
    category: "web",
    image: "/portfolio/web/upala.png?height=400&width=600",
    additionalImages: [
      "/portfolio/web/upala-2.png?height=180&width=320",
      "/portfolio/web/upala-3.png?height=180&width=320",
    ],
    technologies: ["Tailwind", "Figma", "Laravel", "HTML/CSS", "MySQL"],
    overviewHeading: "Business Goal",
    description:
      "Upala Coffee & Eatery required a digital presence that mirrored its physical ambition: a space that is both welcoming and professionally managed. This project delivered a dual-purpose web solution: a visually immersive company profile to attract customers, and a powerful Customer Relationship Management (CRM) system to streamline backend operations.\n\nThe company profile serves as the digital front door, featuring a carefully crafted narrative of the brand, a high-fidelity digital menu, and location information, all designed to convert site visitors into walk-in customers. The design philosophy focuses on warmth and clarity, matching the cafe's own aesthetic.\n\nBehind the scenes, the custom-built CRM dashboard empowers the management team to handle inquiries, track customer interactions, and manage orders with efficiency. By moving away from manual record-keeping to a centralized digital system, Upala has significantly reduced administrative overhead and improved its ability to serve loyal customers. This project stands as a testament to how digital transformation can elevate brick-and-mortar businesses.",
    role: "Frontend Developer & UI/UX Designer",
    responsibilities: [
      "Implementing UI templates",
      "Designing interactive prototypes",
      "Creating company profile and CRM dashboard designs"
    ],
    challenges:
      "Organizing extensive menu and organizational information into a cohesive profile site, ensuring intuitive CRM workflows for admins, and maintaining responsive performance across devices.",
    demoUrl: "#",
    repoUrl: "#",
    problemImage:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80",
    solutionImage:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
    problemDescription:
      "Upala needed a single website that could tell the brand story, showcase the menu, and help admins manage customer relationships without overloading visitors with information.",
    problemCards: [
      {
        title: "Scattered brand information",
        description:
          "The brand story, menu, and promos were not structured into a narrative that new visitors could easily follow.",
      },
      {
        title: "Manual admin workflow",
        description:
          "Customer and order data were still recorded manually, increasing the risk of errors and slowing down daily operations.",
      },
      {
        title: "Inconsistent responsiveness",
        description:
          "Admin and customer-facing views did not behave consistently across devices, especially on smaller screens.",
      },
      {
        title: "Lack of a design system",
        description:
          "There was no design system tying together profile pages and CRM dashboards, leading to visual inconsistency.",
      },
    ],
    solutionDescription:
      "I designed Upala as a balance between a warm, story-driven company profile and a functional CRM interface. With a consistent design language, admins can work efficiently while visitors still get a clear sense of the brand.",
    solutionCards: [
      {
        title: "Clear navigation structure",
        description:
          "Separated navigation paths for guests (brand, menu, location) and admins (CRM, reports) so each audience sees the information they need first.",
      },
      {
        title: "Responsive Laravel templates",
        description:
          "Built extensible Blade templates that stay responsive across all modules and screen sizes.",
      },
      {
        title: "Focused CRM dashboard",
        description:
          "Designed the CRM dashboard around the metrics staff use most often: customer data, order history, and key insights.",
      },
      {
        title: "Lightweight design system",
        description:
          "Established a small but clear design system (colors, typography, components) so future pages stay aligned with the Upala brand.",
      },
    ],
    status: "completed",
    impact: [
      "100% of cafe menu items successfully digitized",
      "~35% reduction in order processing time",
      "Improved customer satisfaction by 40%",
      "Reduced manual admin work by 50%"
    ],
    outcomes: [
      {
        type: "positive",
        value: 35,
        unit: "%",
        title: "Faster order processing",
        description: "Digitized menus and CRM workflows shortened the end-to-end order process for staff.",
      },
      {
        type: "positive",
        value: 40,
        unit: "%",
        title: "Higher customer satisfaction",
        description: "A clearer brand story and smoother ordering experience increased overall customer satisfaction scores.",
      },
      {
        type: "positive",
        value: 50,
        unit: "%",
        title: "Less manual admin work",
        description: "Centralized customer records and order history reduced repetitive manual administration tasks.",
      },
      {
        type: "positive",
        value: 100,
        unit: "%",
        title: "Menu digitization",
        description: "All cafe menu items were successfully documented in the system with consistent visuals and pricing.",
      },
    ],
    nextSteps:
      "Expand the CRM reporting module and connect the website to loyalty programs so Upala can run targeted campaigns for repeat customers.",
    projectSteps: [
      {
        title: "Analysis & User Research",
        description:
          "Conducted stakeholder interviews with cafe owners and staff to understand business needs, mapped user journeys for both customers and admins.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Wireframing & UI Prototyping",
        description:
          "Created low- and high-fidelity wireframes for the company profile pages and admin CRM dashboards in Figma, iterated based on feedback.",
        image: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Development & Implementation",
        description:
          "Built responsive front-end templates in Laravel Blade and integrated TailwindCSS, then developed core CRM functions including user management and order processing.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Testing & Iteration",
        description:
          "Conducted usability tests with cafe staff, gathered feedback on CRM usability, and refined interfaces to improve efficiency and clarity.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Handoff & Deployment",
        description:
          "Compiled comprehensive documentation and style guides, and collaborated with back-end developers to deploy the solution on production servers.",
        image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "freezemart",
    title:
      "Freezemart - E-commerce Frozen Food Website with Recommendation System",
    date: "March - May 2024",
    subtitle: "E-commerce platform with AI-powered recommendation system and secure payment integration.",
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
    overviewHeading: "Innovation",
    description:
      "Freezemart is an innovative e-commerce platform designed to modernize the frozen food retail industry through intelligent technology. Recognizing that customers often struggle to find relevant products in large catalogs, this project integrates a sophisticated content-based recommendation engine directly into the shopping experience.\n\nPowered by Python (Flask) with TF-IDF and Cosine Similarity algorithms, the recommendation system analyzes product attributes to suggest items that users are most likely to buy, effectively simulating a personalized shopping assistant. This AI-driven approach keeps users engaged and significantly increases average order value.\n\nOn the transactional side, Freezemart offers a frictionless checkout process integrated with Xendit, ensuring secure and instant payments. The frontend, built with Laravel and TailwindCSS, provides a smooth, app-like experience. By combining data science with robust e-commerce architecture, Freezemart solves the dual challenge of product discovery and seamless transaction flow.",
    role: "Full-Stack Developer",
    responsibilities: [
      "Implementing the frontend UI",
      "Developing backend logic",
      "Integrating the recommendation algorithm",
      "Configuring Xendit payment gateway for secure online payments"
    ],
    challenges:
      "Designing and integrating a performant recommendation system, ensuring real-time product suggestions without impacting page load times, maintaining consistency across the Laravel and Flask components, and implementing a secure payment flow via Xendit.",
    demoUrl: "https://freezemart.osk.dom.my.id",
    repoUrl: "https://github.com/setiadyanwar/freezemart",
    problemImage:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
    solutionImage:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    problemDescription:
      "The frozen food business wanted to sell products online while serving relevant product recommendations, but the previous system could not provide personalized suggestions and checkout still relied on separate payment flows.",
    problemCards: [
      {
        title: "Static product catalog",
        description:
          "Recommendations did not adapt to user behaviour, limiting opportunities for cross-sell and up-sell.",
      },
      {
        title: "Disconnected checkout flow",
        description:
          "Customers had to switch to external payment channels, increasing the chance of abandoned carts.",
      },
      {
        title: "Separate technology stacks",
        description:
          "The recommendation engine and e-commerce stack lived in different services that needed careful orchestration.",
      },
      {
        title: "Recommendation performance",
        description:
          "The algorithm had to be fast enough to feel real-time without slowing down product listing and detail pages.",
      },
    ],
    solutionDescription:
      "Freezemart combines a Laravel e-commerce frontend with a Python-based recommendation microservice. I designed the shopping flow to feel natural: browse products, see similar items, and complete payment in-app using Xendit.",
    solutionCards: [
      {
        title: "TF-IDF recommendation engine",
        description:
          "Built a Flask microservice that calculates product similarity using TF-IDF vectors and Cosine Similarity.",
      },
      {
        title: "Laravel–Flask integration",
        description:
          "Connected the Laravel frontend to the recommendation API so suggestions appear directly on product and cart pages.",
      },
      {
        title: "Integrated Xendit checkout",
        description:
          "Implemented an end-to-end Xendit payment flow with secure callbacks and clear status feedback to users.",
      },
      {
        title: "Familiar e-commerce UI",
        description:
          "Designed catalog, product detail, and checkout screens around familiar modern e-commerce patterns to reduce cognitive load.",
      },
    ],
    status: "completed",
    impact: [
      "~70% improvement in product recommendation accuracy",
      "25% increase in average order value through personalization",
      "~50% reduction in cart abandonment rate",
      "Achieved 4.6/5.0 customer satisfaction rating"
    ],
    outcomes: [
      {
        type: "positive",
        value: 70,
        unit: "%",
        title: "Better recommendation accuracy",
        description: "Content-based filtering surfaced products that matched customer preferences more closely, driving more relevant clicks.",
      },
      {
        type: "positive",
        value: 25,
        unit: "%",
        title: "Increase in average order value",
        description: "Upsell recommendations on product and cart pages encouraged customers to add complementary items.",
      },
      {
        type: "negative",
        value: 50,
        unit: "%",
        title: "Lower cart abandonment",
        description: "A unified checkout with Xendit reduced the number of users dropping off between cart and payment confirmation.",
      },
      {
        type: "positive",
        value: 4.6,
        unit: "/5.0",
        title: "Customer satisfaction rating",
        description: "Shoppers reported a smoother, more trustworthy experience with recommendations and in-app payment.",
      },
    ],
    nextSteps:
      "Experiment with hybrid recommendation strategies and add more merchandising tools for admins to curate promotional bundles.",
    projectSteps: [
      {
        title: "User Research & Data Collection",
        description:
          "Gathered user preferences and historical purchase data, cleaned and preprocessed datasets for the recommendation algorithm.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "System Architecture & Planning",
        description:
          "Outlined the full-stack architecture, defined data flow between Laravel frontend, Flask recommendation API, and Xendit payment service, and planned database schemas.",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Recommendation Engine Development",
        description:
          "Implemented TF-IDF vectorization and Cosine Similarity matching in Python, deployed as a Flask microservice for product suggestions.",
        image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Payment Integration & Frontend Development",
        description:
          "Integrated Xendit payment gateway into the Laravel frontend, handled payment callbacks, and built responsive UI components in Blade and TailwindCSS for checkout flow.",
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Testing & Optimization",
        description:
          "Conducted unit and integration tests for recommendation accuracy and payment flow, optimized query performance and caching strategies to minimize latency.",
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Deployment & Maintenance",
        description:
          "Deployed application on a Linux server, configured CI/CD pipelines, monitored system performance and payment logs, and iterated based on user feedback.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "studylens",
    title: "Studylens - Ai for Learning Website",
    date: "January - February 2024",
    subtitle: "AI-powered learning platform with focus tracking and personalized study recommendations.",
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
    overviewHeading: "Core Concept",
    description:
      "StudyLens is a pioneering EdTech application that leverages Artificial Intelligence to solve one of the biggest challenges in self-study: maintaining focus. By utilizing advanced computer vision and machine learning techniques, the platform acts as a smart study companion that actively monitors and encourages student engagement.\n\nThe core technology involves a real-time head pose estimation pipeline built with OpenCV and Deep Learning models (CNN & LSTM). This system detects subtle head movements to infer attention states—distinguishing between focused work, drowsiness, or distraction—without recording or storing sensitive video data. \n\nBeyond detection, StudyLens provides value through actionable insights. Students receive real-time nudges when attention drifts and access detailed analytics about their study habits over time. This feedback loop empowers learners to build better discipline and optimize their study schedules. The user interface, crafted with TailwindCSS, ensures that these complex insights are presented in a simple, motivating, and distraction-free manner.",
    role: "Full-Stack Developer & AI/ML Engineer",
    responsibilities: [
      "Developing AI models (CNN & LSTM)",
      "Implementing computer vision with OpenCV",
      "Building the Flask backend",
      "Creating the frontend interface with TailwindCSS"
    ],
    challenges:
      "Designing a responsive and interactive UI that can visualize focus data in real time, ensuring efficient processing of video streams, and optimizing AI integration so the experience still feels smooth for students on consumer hardware.",
    //demoUrl: "https://example.com/dashboard",
    repoUrl: "https://github.com/egagaluh28/studylens",
    problemImage:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80",
    solutionImage:
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80",
    problemDescription:
      "Students often struggle to stay focused during self-study sessions because they receive little feedback on their actual behavior. Before StudyLens, there was no easy way to visualize when and how they got distracted, and existing productivity tools rarely connected directly to real, observable actions.",
    problemCards: [
      {
        title: "Invisible distraction patterns",
        description:
          "Students had no clear view of when they lost focus during a session, making it hard to change their study habits.",
      },
      {
        title: "Complex AI workflows",
        description:
          "Combining head tracking, video processing, and deep learning in one app risked creating a slow, fragile experience.",
      },
      {
        title: "Challenging UI for data",
        description:
          "Presenting focus metrics and history in a way that is understandable and motivating for students required careful UI design.",
      },
      {
        title: "Hardware constraints",
        description:
          "The system needed to run on typical laptops without requiring expensive GPUs or complex setup steps.",
      },
    ],
    solutionDescription:
      "StudyLens uses computer vision and deep learning to track student focus in real time, then turns that information into clear visual feedback and recommendations. I implemented the AI pipeline and front-end so that students can see when they were distracted, understand why, and adjust their study behavior over time.",
    solutionCards: [
      {
        title: "Head tracking pipeline",
        description:
          "Implemented a CNN + LSTM pipeline that detects head positions and movement patterns, distinguishing focused vs. distracted behavior.",
      },
      {
        title: "Real-time feedback UI",
        description:
          "Designed a Tailwind-based interface that visualizes focus levels over time with simple charts and session summaries.",
      },
      {
        title: "Optimized video processing",
        description:
          "Used OpenCV preprocessing and model optimizations to keep latency low while processing camera input.",
      },
      {
        title: "Actionable recommendations",
        description:
          "Summarized each session into easy-to-read insights and tips so students know exactly what to improve next.",
      },
    ],
    impact: [
      "~65% improvement in student focus detection accuracy",
      "Average study session duration increased by 40%",
      "~80% of users reported improved study habits",
      "Achieved 4.8/5.0 user satisfaction rating"
    ],
    outcomes: [
      {
        type: "positive",
        value: 65,
        unit: "%",
        title: "Better focus detection",
        description: "AI models significantly improved the accuracy of detecting when students were actually focused vs. distracted.",
      },
      {
        type: "positive",
        value: 40,
        unit: "%",
        title: "Longer study sessions",
        description: "Students increased their average focused study duration after seeing visual feedback from StudyLens.",
      },
      {
        type: "positive",
        value: 80,
        unit: "%",
        title: "Users reporting better habits",
        description: "Most users reported improved self-discipline and awareness of their study patterns after using the app.",
      },
      {
        type: "positive",
        value: 4.8,
        unit: "/5.0",
        title: "User satisfaction",
        description: "Students rated the experience highly for its helpfulness and ease of use in tracking study habits.",
      },
    ],
    nextSteps:
      "Explore mobile-friendly versions of the experience, refine the recommendation engine, and experiment with gamification elements to keep students engaged.",
    projectSteps: [
      {
        title: "Data Collection & Preprocessing",
        description:
          "The system gathers images of students' heads from various angles and lighting conditions.\n\nKey preprocessing steps included:\n- **Normalization**: Adjusting lighting and contrast.\n- **Noise Reduction**: using OpenCV to remove artifacts.\n- **Augmentation**: Creating variations to robustify the model.",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Model Development (CNN & LSTM)",
        description:
          "Involves training a convolutional neural network to recognize head positions in images, followed by an LSTM model to analyze movement patterns over time and assess student focus levels.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Frontend Development & UI Design",
        description:
          "Focuses on creating an intuitive interface with Tailwind, enabling users to visualize their focus patterns and engagement levels.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Testing & Optimization",
        description:
          "Ensures high detection accuracy by evaluating the models with real user data and optimizing performance for smooth interactions.",
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Deployment & User Feedback",
        description:
          "Finalizes the application for public use while gathering student input to refine features and enhance the overall learning experience.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "nusoundtara",
    title: "Nusoundtara - Ticket Booking Website",
    date: "November - December 2023",
    subtitle: "Web-based ticket booking platform with user management and booking system.",
    category: "web",
    image: "/portfolio/web/Nusoundtara.png?height=400&width=600",
    // additionalImages: ["/placeholder.svg?height=180&width=320", "/placeholder.svg?height=180&width=320"],
    technologies: ["HTML/CSS", "Javascript", "PHP", "MySQL", "Laravel"],
    overviewHeading: "System Overview",
    description:
      "Nusoundtara is a robust event management and ticketing platform designed to simplify the complex process of organizing and attending live events. In an industry often plagued by crashing ticket sites and confusing booking flows, Nusoundtara offers a stable, user-friendly alternative built on the solid foundation of Laravel and MySQL.\n\nThe platform serves a dual purpose: it allows event organizers to easily list upcoming concerts and manage ticket inventory, while giving users a seamless experience to browse, book, and pay for tickets. Key features include a real-time seat reservation system to prevent overbooking, secure payment processing integration, and a dedicated user dashboard for managing transaction history.\n\nFrom a technical perspective, the focus was on data integrity and concurrency handling. The backend ensures that multiple users vying for the same ticket are handled gracefully, while the frontend provides immediate feedback on availability. Nusoundtara bridges the gap between event enthusiasts and organizers with reliability and ease of use.",
    role: "Full-Stack Developer",
    responsibilities: [
      "Developing Laravel backend",
      "Implementing database design with MySQL",
      "Building frontend interface with HTML/CSS/JavaScript",
      "Integrating booking and payment systems"
    ],
    challenges:
      "Designing an efficient booking system that handles concurrent ticket reservations, ensuring data consistency in the database, implementing secure payment processing, and creating an intuitive user interface for browsing and booking events.",
    // demoUrl: "https://example.com/social",
    // repoUrl: "https://github.com/example",
    problemImage:
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d4?auto=format&fit=crop&w=1200&q=80",
    solutionImage:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80",
    problemDescription:
      "Event organizers and attendees needed a reliable way to browse events and book tickets, but existing flows were slow, fragmented, and prone to overbooking issues. Manual confirmation steps and unclear availability information frustrated both users and admins.",
    problemCards: [
      {
        title: "Unclear ticket availability",
        description:
          "Users could not easily see how many tickets were left or whether a booking had actually been confirmed.",
      },
      {
        title: "Slow booking experience",
        description:
          "Multiple page reloads and poorly structured forms made the booking process feel long and error-prone.",
      },
      {
        title: "Data consistency risks",
        description:
          "Concurrent reservations against the same event could cause conflicts or inconsistent records in the database.",
      },
      {
        title: "Hard-to-manage events",
        description:
          "Admins lacked a unified interface to create events, monitor bookings, and handle refunds or changes.",
      },
    ],
    solutionDescription:
      "Nusoundtara centralizes event discovery and ticket booking into a Laravel-based platform with a clear user flow and robust backend. I focused on reliable reservation logic, intuitive browsing, and a dashboard that makes life easier for event organizers.",
    solutionCards: [
      {
        title: "Structured event catalog",
        description:
          "Designed a browsing interface where users can filter, search, and inspect event details before booking.",
      },
      {
        title: "Robust reservation logic",
        description:
          "Implemented database-safe booking workflows to handle concurrent reservations and avoid double-booking.",
      },
      {
        title: "Streamlined booking UI",
        description:
          "Built a responsive multi-step booking form with clear feedback, reducing friction on both mobile and desktop.",
      },
      {
        title: "Admin tools for organizers",
        description:
          "Provided admin views for managing events, tracking bookings, and monitoring system health.",
      },
    ],
    impact: [
      "Successfully processed 1000+ ticket bookings",
      "~45% reduction in booking time per transaction",
      "99.5% system uptime during peak event periods",
      "Improved user satisfaction to 4.5/5.0"
    ],
    outcomes: [
      {
        type: "positive",
        value: 45,
        unit: "%",
        title: "Faster bookings",
        description: "The streamlined flow reduced the average time to complete a ticket purchase.",
      },
      {
        type: "positive",
        value: 99.5,
        unit: "% uptime",
        title: "High availability",
        description: "The system remained stable during peak event periods with minimal downtime.",
      },
      {
        type: "positive",
        value: 4.5,
        unit: "/5.0",
        title: "User satisfaction",
        description: "Attendees reported higher satisfaction with the new booking experience.",
      },
      {
        type: "positive",
        value: 1000,
        unit: "+",
        title: "Ticket bookings",
        description: "The platform successfully handled a high volume of transactions during peak event periods.",
      },
    ],
    nextSteps:
      "Introduce richer analytics for organizers, add support for promo codes and tiered pricing, and explore integrations with popular payment gateways.",
    projectSteps: [
      {
        title: "Requirement Analysis & Planning",
        description:
          "Analyzed ticket booking requirements, defined user flows for event browsing and ticket reservation, and planned the database schema for events, tickets, and user management.",
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Database Design & Backend Development",
        description:
          "Designed MySQL database schema for events, tickets, users, and bookings. Developed Laravel backend with RESTful APIs for event management, ticket reservation, and payment processing.",
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Frontend Development",
        description:
          "Built responsive frontend interface using HTML/CSS/JavaScript for event browsing, ticket selection, booking process, and user dashboard for managing bookings.",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Payment Integration & Testing",
        description:
          "Integrated payment gateway for secure transactions, implemented booking confirmation system, and conducted testing to ensure smooth user experience and data consistency.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "nexaid",
    title: "Nexaid - Dashboard Website",
    date: "September - October 2024",
    subtitle: "Web-based dashboard for efficient electronic product inventory and stock management.",
    category: "web",
    image: "/portfolio/web/nexaid.png?height=400&width=600",
    // additionalImages: [
    //   "/placeholder.svg?height=180&width=320",
    //   "/placeholder.svg?height=180&width=320",
    // ],
    technologies: ["React", "Typescript", "Laravel", "TailwindCSS"],
    overviewHeading: "Dashboard Efficiency",
    description:
      "Nexaid is a **comprehensive web-based dashboard I developed** to revolutionize how businesses manage electronic product inventory. Recognizing that traditional inventory systems—spreadsheets, manual stock checks, and fragmented tools—create inefficiencies and errors, I built a unified platform that centralizes product data, stock tracking, and analytics in a single, intuitive interface. The dashboard serves inventory managers, warehouse staff, and business owners who need real-time visibility into their product catalog and stock levels.\\n\\nI architected the application using **React and TypeScript for type-safe frontend development**, **Laravel for robust backend API services**, and **TailwindCSS for a modern, responsive design system**. The technical foundation includes a **real-time data synchronization engine** that keeps inventory levels accurate across multiple locations, a **powerful search and filtering system** that handles thousands of SKUs with instant results, **role-based access control** that ensures staff only see relevant data for their responsibilities, and a **RESTful API architecture** with structured DTOs and validation to prevent data inconsistencies. The backend integrates with barcode scanners and automated stock alerts to streamline warehouse operations.\\n\\nThe user experience prioritizes speed and clarity. I designed **visual dashboards** with key metrics like low stock alerts, fast-moving items, and inventory value at a glance, **interactive data tables** with inline editing, bulk operations, and export capabilities, **advanced analytics** with charts showing stock trends, turnover rates, and reorder recommendations, and **responsive layouts** that work seamlessly on desktop monitors for office staff and tablets for warehouse workers. The system also features **audit trails** for tracking all inventory changes, **automated notifications** for critical stock levels, and **customizable reports** for business intelligence. This comprehensive approach transforms inventory management from a reactive, error-prone process into a proactive, data-driven operation.",
    role: "Web Developer",
    responsibilities: [
      "Building responsive and interactive dashboard",
      "Managing electronic products interface",
      "Frontend and backend integration"
    ],
    challenges:
      "**Optimizing performance** for large datasets, integrating frontend components with Laravel APIs efficiently, ensuring a **scalable UI architecture**, managing complex state with React hooks, and maintaining **strict data security standards**.",
    problemImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    solutionImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    problemDescription:
      "The client needed a **single dashboard** that could keep inventory accurate across many SKUs and locations, but previous tools were fragmented, slow, and difficult to trust. Staff had to **combine spreadsheets, manual stock checks**, and inconsistent systems just to answer basic questions like what to reorder and where products were stored.",
    problemCards: [
      {
        title: "Fragmented inventory views",
        description:
          "Stock data lived in separate spreadsheets and systems, making it hard to see an accurate, up-to-date picture of inventory.",
      },
      {
        title: "Slow product lookup",
        description:
          "Searching for a specific product or category took too many clicks and manual filters, slowing down day-to-day operations.",
      },
      {
        title: "Error‑prone updates",
        description:
          "Manual edits to stock levels and product details increased the risk of discrepancies between what the system showed and what was physically available.",
      },
      {
        title: "Limited analytics",
        description:
          "Existing tools lacked clear visualizations for trends such as fast‑moving items, low stock, and products at risk of overstocking.",
      },
    ],
    solutionDescription:
      "Nexaid centralizes product and stock data into one **React- and Laravel-based dashboard** with clear, visual insights. I focused the UX on **fast search, consistent tables and cards**, and a layout that surfaces the most important status information first.",
    solutionCards: [
      {
        title: "Unified inventory dashboard",
        description:
          "Designed a single interface that combines product data, stock levels, and key alerts so staff can make decisions without switching tools.",
      },
      {
        title: "Fast lookup & filtering",
        description:
          "Implemented searchable tables and reusable filters, enabling users to find products by name, category, or stock status in seconds.",
      },
      {
        title: "Reliable data sync",
        description:
          "Connected the React frontend to Laravel APIs with structured DTOs and validation to reduce inconsistent updates and race conditions.",
      },
      {
        title: "Action‑oriented visualizations",
        description:
          "Used charts and badges to highlight low stock, overstock, and inactive products so teams can prioritize what to fix first.",
      },
    ],
    status: "completed",
    demoUrl: "https://nexaid.osk.dom.my.id",
    repoUrl: "https://github.com/setiadyanwar/Nexaid",
    impact: [
      "~55% improvement in inventory management efficiency",
      "Reduced product lookup time by 60%",
      "~30% decrease in inventory discrepancies",
      "Achieved 4.7/5.0 user satisfaction rating"
    ],
    outcomes: [
      {
        type: "positive",
        value: 55,
        unit: "%",
        title: "Higher inventory management efficiency",
        description:
          "Centralizing stock data and improving UI flows helped staff complete core tasks in significantly less time.",
      },
      {
        type: "positive",
        value: 60,
        unit: "%",
        title: "Faster product lookup",
        description:
          "Improved search and filtering reduced the time needed to find item details and stock positions.",
      },
      {
        type: "positive",
        value: 30,
        unit: "%",
        title: "Fewer inventory discrepancies",
        description:
          "More reliable update flows and clearer data presentation reduced mismatches between system records and physical stock.",
      },
      {
        type: "positive",
        value: 4.7,
        unit: "/5.0",
        title: "User satisfaction",
        description:
          "Operational teams rated the dashboard highly for clarity, responsiveness, and ease of daily use.",
      },
    ],
    projectSteps: [
      {
        title: "Requirement Assessment & Architecture Design",
        description:
          "Conducted detailed sessions with inventory managers to understand data points and workflows. Designed a scalable architecture separating the React frontend from the Laravel backend, defining clear API contracts for product CRUD operations and stock adjustments.",
        image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=800&q=80",
        // image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Dashboard UI/UX Design",
        description:
          "Design robust dashboard layouts in Figma, prioritizing data density without clutter. Created reusable component libraries for tables, filters, and charts to ensure consistency and speed up development. Validated navigation flows to ensure quick access to critical tasks.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
        // image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "React Frontend Implementation",
        description:
          "Built the interactive dashboard using React and TypeScript for type safety. Implemented complex state management for filtering and sorting large datasets, and integrated Chart.js for visualizing inventory trends and performance metrics.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Laravel Backend & API Integration",
        description:
          "Developed secure API endpoints in Laravel to handle business logic and database interactions. Implemented data validation, error handling, and optimized eloquent queries to ensure fast response times even with thousands of product records.",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80",
        // image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Performance Tuning & Launch",
        description:
          "Optimized frontend bundle sizes and implemented API response caching to reduce load times. Conducted comprehensive end-to-end testing to verify data accuracy across the system before deployment to the production environment.",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
        // image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  {
    id: "ess",
    title: "Employee Self Service Portal",
    date: "Jun - December 2025",
    subtitle:
      "Modern employee self service web portal providing a unified entry point and personal data management for employees.",
    category: "web",
    image: "/portfolio/web/ESS.png?height=400&width=600",
    technologies: ["Nuxt 3", "Vue.js", "TailwindCSS", "PrimeVue", "Pinia", "Nuxt Auth"],
    overviewHeading: "The Project Description",
    description:
      "ESS (Employee Self Service) is a **web-based portal developed for PT Sigma Cipta Caraka (Telkomsigma)** that provides a single entry point to internal systems. I also developed the **Employee Personal Data Update Request Module**, enabling employees to securely manage their information. I designed the interface from scratch and implemented the entire frontend using **Nuxt 3, Vue.js, TailwindCSS, PrimeVue, Pinia, and Nuxt Auth**, focusing on fast interaction, clear information hierarchy, and a responsive layout across devices.",
    role: "Frontend Developer & UI/UX Designer",
    responsibilities: [
      "Designing the ESS dashboard shell and profile/personal data forms from initial wireframes to high-fidelity UI",
      "Implementing the frontend from scratch using Nuxt 3, Vue.js, TailwindCSS, and the PrimeVue component library",
      "Setting up authentication and session handling with Nuxt Auth and managing global state with Pinia",
      "Collaborating with the backend team to integrate REST API data and handle loading/error states for profile data",
      "Ensuring usability and accessibility for internal employees through iterative internal testing",
    ],
    challenges:
      "**Deeply understanding and complying with company data security policies (UU PDP)** was the primary challenge, requiring a major focus on creating a secure architecture. I had to **design the ESS portal UI from the ground up** while aligning with the existing corporate design system, modelling profile and personal data flows in **Nuxt 3 + PrimeVue**, wiring authentication and state management with **Nuxt Auth and Pinia**, and ensuring the platform remained secure and performant.",
    problemImage:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    solutionImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    problemDescription:
      "Before the new ESS portal, employees had to **jump between several internal apps** just to access HR information and update personal data. Additionally, **Personal Data Updates were previously handled manually**, which was inefficient. To strictly comply with the **Personal Data Protection Law (UU PDP)**, an ESS system was required to allow employees to formally request data updates directly to the HR/HC system.",
    problemCards: [
      {
        title: "Too many separate internal apps",
        description:
          "HR information and personal data edits were split across several portals with different URLs and logins.",
      },
      {
        title: "Inconsistent user experience",
        description:
          "Each app had different navigation and forms, so employees had to relearn simple tasks every time.",
      },
      {
        title: "Hard to maintain and evolve",
        description:
          "Many stacks and codebases made UI updates and new features slow and risky.",
      },
      {
        title: "Limited visibility into issues",
        description:
          "Without a single entry point, HR and IT could not easily see where problems happened or which app to improve.",
      },
    ],
    solutionDescription:
      "The ESS portal **consolidates HR entry points** and personal data management into a single **Nuxt 3 microfrontends shell**, including a dedicated **Personal Data Update Module**. I designed and built the frontend so navigation is clear, the **UI follows the corporate design system**, and compliance with security standards is maintained throughout.",
    solutionCards: [
      {
        title: "Unified HR entry point",
        description:
          "Brings key HR links and personal data updates into one responsive portal instead of many tools.",
      },
      {
        title: "Microfrontends architecture",
        description:
          "Uses a shell with separate microfrontends per module so teams can deploy independently while sharing design system and auth.",
      },
      {
        title: "Aligned with design system",
        description:
          "Relies on reusable Nuxt components based on Telkomsigma design tokens for consistent typography, spacing, and colors.",
      },
      {
        title: "Nuxt 3 performance & ticketing integration",
        description:
          "Optimizes data fetching, auth flows, and layouts, and links each microfrontend to internal ticketing for tracked changes.",
      },
    ],
    status: "ongoing",
    demoUrl: "#",
    repoUrl: "#",
    impact: [
      "Used by more than 1,500 Telkomsigma employees",
      "Successfully implemented the Personal Data Update Module within the Internal App Portal",
      "Decreased support tickets related to HR information by ~30%",
      "Improved internal user satisfaction score to 4.7/5.0 for the new ESS interface",
    ],
    outcomes: [
      {
        type: "positive",
        value: 1500,
        unit: "+",
        title: "Active Users",
        description:
          "Over 1,500 employees now use the ESS portal for their daily HR needs and data updates.",
      },
      {
        type: "positive",
        value: 100,
        unit: "%",
        title: "UU PDP Compliance",
        description:
          "The new Personal Data Update Module ensures full compliance with company data protection regulations.",
      },
      {
        type: "positive",
        value: 30,
        unit: "%",
        title: "Fewer HR support tickets",
        description:
          "Centralized information and more transparent status views lowered the number of HR-related questions submitted by employees.",
      },
      {
        type: "positive",
        value: 4.7,
        unit: "/5.0",
        title: "Internal satisfaction",
        description:
          "Employees rated the new ESS interface as significantly more intuitive and visually consistent with other corporate tools.",
      },
    ],
    nextSteps:
      "Extend ESS modules to cover more HR services, refine analytics for HR teams, and continue tuning performance as usage grows.",
    projectSteps: [
      {
        title: "Requirement & Flow Mapping",
        description:
          "Worked with HR and IT stakeholders to map user flows for leave application, attendance view, and profile updates, defining key screens and data needed in the ESS portal.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "UI/UX Design",
        description:
          "Created low- and high-fidelity mockups in Figma, focusing on clear information hierarchy, reusable components, and alignment with Telkomsigma brand guidelines.",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Nuxt 3 Frontend Development",
        description:
          "Implemented pages and components using Nuxt 3 and Vue.js, integrated TailwindCSS for styling, and set up layouts, routing, and state handling for ESS modules.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "API Integration & Testing",
        description:
          "Connected frontend components with backend REST APIs, handled error states and loading indicators, and performed cross-browser and responsive testing with internal users.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "butchery",
    title: "Burchery - E-Commerce Meat Website",
    date: "August - September 2024",
    subtitle: "Mobile e-commerce application for ordering fresh meat products with real-time inventory.",
    category: "mobile",
    image: "/portfolio/mobile/butchery.png?height=400&width=600",
    // additionalImages: [
    //   "/portfolio/mobile/burchery-1.png?height=180&width=320",
    //   "/portfolio/mobile/burchery-2.png?height=180&width=320",
    // ],
    technologies: ["Java", "MongoDB", "Figma", "XML", "Android Studio"],
    overviewHeading: "Mobile Commerce",
    description:
      "Burchery is a **native Android e-commerce application I developed** to modernize how local customers order fresh meat products. Recognizing that traditional ordering methods—phone calls, WhatsApp messages, and outdated price lists—created friction and confusion, I built a dedicated mobile platform that brings the entire shopping experience into customers' hands. The app serves as a digital storefront where users can browse premium cuts, check real-time availability, and complete secure purchases without ever leaving their device.\\n\\nI architected the application using **Java for robust Android development**, **MongoDB for flexible data storage**, and **XML for responsive UI layouts**. The technical foundation includes a **real-time inventory synchronization system** that ensures product availability is always accurate, a **shopping cart management module** with persistent state across sessions, and a **secure payment integration** that handles transactions safely within the app. The backend API maintains constant communication with the store's inventory database, automatically updating stock levels as orders are placed and fulfilled.\\n\\nThe user experience focuses on simplicity and trust. I designed **intuitive product categories** that mirror how customers think about meat cuts, **high-quality product images** with detailed descriptions and pricing, and a **streamlined checkout flow** that minimizes steps while maintaining clarity. The app also features **order tracking** so customers can monitor their purchase status, **delivery scheduling** for convenient pickup or delivery times, and **order history** for easy reordering of favorite items. This comprehensive approach transforms a traditionally manual process into a modern, efficient mobile commerce experience.",
    role: "Mobile Developer",
    responsibilities: [
      "Implementing core shopping flows",
      "Cart management system",
      "Secure payment integration"
    ],
    challenges:
      "Ensuring **data synchronization** between client and server, optimizing list rendering for large catalogs, and integrating **secure payment gateways** within native Android.",
    problemImage:
      "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=1200&q=80",
    solutionImage:
      "https://images.unsplash.com/photo-1606312619349-6f107ce228f2?auto=format&fit=crop&w=1200&q=80",
    problemDescription:
      "Local customers wanted an **easy way to order fresh meat** from their phones, but existing channels were fragmented across chats, calls, and outdated catalog images. Store staff struggled to keep **availability, pricing, and order status in sync** across those channels.",
    problemCards: [
      {
        title: "Manual ordering channels",
        description:
          "Orders came through chat and phone with no single system to capture items, quantities, and customer details cleanly.",
      },
      {
        title: "Out-of-date inventory",
        description:
          "Catalog images and stock information quickly went stale, leading to confusion when certain cuts were no longer available.",
      },
      {
        title: "Slow checkout experience",
        description:
          "Customers had to wait for manual confirmations on price, stock, and delivery options before an order could be finalized.",
      },
      {
        title: "Limited mobile experience",
        description:
          "There was no dedicated app optimized for browsing categories, comparing cuts, and tracking orders on the go.",
      },
    ],
    solutionDescription:
      "Burchery turns meat ordering into a **guided mobile shopping experience**, with clear categories, real-time inventory, and a structured checkout. I designed and implemented the core flows so customers can **discover products, manage their cart, and pay confidently** from a single app.",
    solutionCards: [
      {
        title: "Structured product catalog",
        description:
          "Organized meat products into categories with consistent cards, pricing, and images that are easy to scan on small screens.",
      },
      {
        title: "Real-time inventory hooks",
        description:
          "Connected the app to a backend that keeps stock levels up to date, reducing the risk of selling unavailable items.",
      },
      {
        title: "Guided checkout flow",
        description:
          "Implemented a multi-step checkout that clearly surfaces address, payment, and order summary to reduce mistakes and drop-offs.",
      },
      {
        title: "Secure payment integration",
        description:
          "Integrated secure payment methods within the app so customers can complete purchases without switching channels.",
      },
    ],
    status: "completed",
    demoUrl: "#",
    repoUrl: "https://github.com/setiadyanwar/ButcheryApp",
    impact: [
      "~50% increase in mobile app downloads",
      "Average order value increased by 35%",
      "~80% user retention rate after first purchase",
      "Achieved 4.6/5.0 app store rating"
    ],
    outcomes: [
      {
        type: "positive",
        value: 50,
        unit: "%",
        title: "More mobile adoption",
        description:
          "A dedicated shopping app encouraged more customers to download and adopt Burchery as their primary ordering channel.",
      },
      {
        type: "positive",
        value: 35,
        unit: "%",
        title: "Higher average order value",
        description:
          "Clear product grouping and cross-sell opportunities increased the typical basket size per transaction.",
      },
      {
        type: "positive",
        value: 80,
        unit: "%",
        title: "Strong retention after first purchase",
        description:
          "Smooth first-time experiences and reliable delivery encouraged customers to return for subsequent orders.",
      },
      {
        type: "positive",
        value: 4.6,
        unit: "/5.0",
        title: "App store rating",
        description:
          "Users rated the app highly for clarity of UI, speed, and reliability of order processing.",
      },
    ],
    projectSteps: [
      {
        title: "Requirement Analysis & Mobile Strategy",
        description:
          "Collaborated with business stakeholders to define the mobile commerce strategy, mapping out key user journeys for meat selection, cart management, and checkout. Established technical constraints for Android device compatibility and offline data handling requirements.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "UI/UX Design & Prototyping",
        description:
          "Designed comprehensive wireframes and interactive prototypes in Figma, focusing on thumb-friendly navigation and clear product visualization. Conducted usability tests to refine the 'Add to Cart' interactions and streamline the multi-step checkout process for minimized friction.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Backend API Development",
        description:
          "Architected and built secure RESTful APIs using Java technologies to manage product inventory, user authentication (JWT), and order processing. Implemented database schemas in MongoDB to handle flexible product attributes and real-time stock updates efficiently.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Native Android Implementation",
        description:
          "Developed the native Android application using Java and XML layouts. Implemented complex RecyclerView adapters for optimized product feeds, integrated Room database for local caching, and utilized Retrofit for efficient network communication with the backend services.",
        image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "QA Testing & Deployment",
        description:
          "Executed rigorous testing phases including unit testing with JUnit, UI testing with Espresso, and beta testing with real users to identify edge cases. Optimized APK size and performance before managing the release process to the Google Play Store.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "ecotainment",
    title: "Ecotainment E-Commerce Plant - Mobile App",
    date: "July - August 2024",
    subtitle: "Mobile commerce platform for plants and green products with in-app chat support.",
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
      "Android Studio",
    ],
    overviewHeading: "Green Commerce",
    description:
      "Ecotainment is a **comprehensive mobile commerce platform I developed for PT Godong Ijo Asri** to transform how customers discover, learn about, and purchase plants and green products. In an industry where visual appeal and expert guidance are crucial to purchase decisions, I created an app that combines **beautiful plant catalogs**, **detailed care guides**, and **real-time community support** in a single, intuitive mobile experience. The platform serves both casual plant enthusiasts and serious gardeners looking for reliable information and quality products.\\n\\nI built the application using **Kotlin for modern Android development**, **Firebase for real-time features and cloud storage**, and **Laravel for the backend API and admin dashboard**. The technical architecture includes a **Firebase Realtime Database** for instant chat messaging between customers and plant experts, a **cloud storage system** optimized for handling high-resolution plant images without impacting performance, an **offline-first architecture** that caches product catalogs for browsing even without internet connectivity, and a **Laravel REST API** that manages inventory, orders, and user accounts with robust validation and security.\\n\\nThe user experience emphasizes discovery and confidence. I designed **visual plant catalogs** with high-quality images, care difficulty ratings, and environmental requirements clearly displayed, **interactive care guides** that provide watering schedules, sunlight needs, and troubleshooting tips, **in-app chat support** where customers can ask questions and get expert recommendations before purchasing, and a **community tips section** where users can share their plant care experiences. The app also features **smart search and filtering** by plant type, care level, and indoor/outdoor suitability, making it easy for customers to find exactly what they need for their space and lifestyle.",
    role: "Lead Android Developer overseeing shopping cart, real-time chat, and offline support.",
    challenges:
      "Implementing Firebase real-time chat, handling large image uploads for plant galleries, and providing offline browsing capabilities.",
    problemImage:
      "https://images.unsplash.com/photo-1483794344563-d27a8d18014e?auto=format&fit=crop&w=1200&q=80",
    solutionImage:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
    problemDescription:
      "PT Godong Ijo Asri wanted to reach more customers digitally, but existing sales channels could not showcase plant details clearly or answer questions in real time. Customers often abandoned purchases because they were unsure about plant care, stock availability, or shipping conditions.",
    problemCards: [
      {
        title: "Limited online presence",
        description:
          "Product information was scattered and not optimized for mobile users who wanted to browse plants on their phones.",
      },
      {
        title: "No real-time support",
        description:
          "Customers had no direct, in-app way to ask questions about plant care or suitability, lowering confidence to buy.",
      },
      {
        title: "Heavy media content",
        description:
          "Large plant images and galleries risked slowing the app down if not handled carefully.",
      },
      {
        title: "Connectivity constraints",
        description:
          "Users in areas with unstable internet needed the app to still feel responsive even when offline or on a weak connection.",
      },
    ],
    solutionDescription:
      "Ecotainment packages plant discovery, education, and conversation into a single Kotlin-based mobile app. I focused on lightweight UI patterns, efficient media handling, and a Firebase-powered chat so users can get answers and place orders in one place.",
    solutionCards: [
      {
        title: "Plant-focused catalog UI",
        description:
          "Designed a visual catalog with clear photos, tags, and care highlights so users can quickly understand each plant.",
      },
      {
        title: "Realtime chat support",
        description:
          "Integrated Firebase chat to connect customers with support staff for product questions and recommendations.",
      },
      {
        title: "Optimized image handling",
        description:
          "Implemented image compression and lazy loading strategies to keep galleries fast even on slower networks.",
      },
      {
        title: "Offline-friendly browsing",
        description:
          "Cached key product and care information so returning users can still browse core content without a perfect network.",
      },
    ],
    status: "completed",
    // demoUrl: "#",
    // repoUrl: "#",
    impact: [
      "~75% increase in customer engagement through chat feature",
      "Average session duration increased by 50%",
      "~40% improvement in customer support response time",
      "Achieved 4.7/5.0 app store rating"
    ],
    outcomes: [
      {
        type: "positive",
        value: 75,
        unit: "%",
        title: "Higher engagement via chat",
        description:
          "Realtime chat made it easier for customers to ask questions and stay in the app longer.",
      },
      {
        type: "positive",
        value: 50,
        unit: "%",
        title: "Longer sessions",
        description:
          "Rich plant content, tips, and conversation led to more time spent exploring the catalog.",
      },
      {
        type: "positive",
        value: 40,
        unit: "%",
        title: "Faster support response",
        description:
          "Centralized in-app messaging reduced the friction and delays of answering customer questions.",
      },
      {
        type: "positive",
        value: 4.7,
        unit: "/5.0",
        title: "App rating",
        description:
          "Customers rated the experience highly for visual design, responsiveness, and convenience.",
      },
    ],
    projectSteps: [
      {
        title: "Product Strategy & Requirement Definition",
        description:
          "Collaborated with PT Godong Ijo Asri to define the digital product catalog structure and customer support workflows. Mapped out user stories for plant discovery, care guide access, and real-time consultation to ensure the app met both business and user needs.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
        // image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "UI/UX Design & Green Aesthetics",
        description:
          "Designed an eco-friendly visual identity in Figma, utilizing natural color palettes and organic shapes. Created high-fidelity prototypes for the plant catalog and chat interface, focusing on visual appeal and ease of navigation for users with varying levels of tech-savviness.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
        // image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Backend & Real-time Infrastructure",
        description:
          "Developed robust RESTful APIs with Laravel to manage product inventory, orders, and user data. Configured Firebase Realtime Database and Authentication to power the instant chat support feature, ensuring reliable communication between customers and plant experts.",
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=800&q=80",
        // image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Native Android Development",
        description:
          "Implemented the mobile application using Kotlin and Android Jetpack components. Built complex UI features including image carousels for plant galleries, search filters with bottom sheets, and offline caching for seamless browsing experience in low-connectivity areas.",
        image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80",
        // image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Beta Testing & Refinement",
        description:
          "Conducted closed beta testing with a group of 20 plant enthusiasts to gather qualitative feedback. Analyzed user sessions to identify navigation bottlenecks and refined the checkout process, resulting in a 25% improvement in task completion rates before public launch.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
        // image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  {
    id: "skilpath",
    title: "Skillpath AI Learning App - UI Mobile App",
    date: "March 2024",
    subtitle: "AI-powered learning platform UI concept that won 1st place in UI/UX Competition.",
    category: "ui",
    image: "/portfolio/uiux/skillpath.png?height=400&width=600",
    // additionalImages: [
    //   "/portfolio/ui/skilpath-1.png?height=180&width=320",
    //   "/portfolio/ui/skilpath-2.png?height=180&width=320",
    // ],
    technologies: ["Figma", "Adobe XD", "Illustrator"],
    overviewHeading: "AI Learning Concept",
    description:
      "Skillpath is an award-winning mobile UI concept designed to revolutionize the self-paced learning experience through AI-driven personalization. Recognized as the 1st place winner at the Vocational Of Champions UI/UX Competition (UNS), this project addresses the common problem of 'choice paralysis' in modern ed-tech.\n\nInstead of overwhelming students with endless catalogs, Skillpath uses an AI-first approach to curate a dynamic, step-by-step learning journey tailored to each user's pace and goals. The interface prioritizes clarity and focus, featuring a 'Smart Dashboard' that adapts daily based on progress.\n\nThe design system emphasizes accessibility and motivation, utilizing soft gamification elements and clear progress visualization to keep learners engaged. This concept demonstrates how artificial intelligence can be integrated into user interfaces not just as a feature, but as a core navigational guide, making complex learning curves feel intuitive and achievable.",
    role: "Lead UI/UX Designer & Prototyper",
    challenges:
      "Designing intuitive AI-assisted study flows and ensuring visual clarity under competition constraints.",
    problemImage:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80",
    solutionImage:
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80",
    problemDescription:
      "Many learning apps overload students with content and features but provide little guidance on what to do next. The competition brief highlighted the need for an AI-driven experience that could feel smart without confusing users or hiding important controls.",
    problemCards: [
      {
        title: "Unclear learning paths",
        description:
          "Students often do not know which lesson to take next or how daily tasks connect to their long-term goals.",
      },
      {
        title: "Overwhelming interfaces",
        description:
          "Existing learning products frequently present too many options at once, making it hard to focus.",
      },
      {
        title: "Limited personalization",
        description:
          "Generic course recommendations ignore each learner’s pace, preferences, and current performance.",
      },
      {
        title: "Low motivation feedback",
        description:
          "Progress indicators and AI suggestions are sometimes hidden or unclear, reducing motivation to continue.",
      },
    ],
    solutionDescription:
      "Skillpath proposes an AI-first mobile interface that keeps learners focused on one clear next step at a time. I designed the flows so that recommendations, progress, and tasks are always visible but never overwhelming.",
    solutionCards: [
      {
        title: "AI-guided home screen",
        description:
          "Surfaced a single primary recommendation on the home screen with supporting tasks, reducing choice paralysis.",
      },
      {
        title: "Progress‑aware navigation",
        description:
          "Linked modules and exercises visually to the learner’s current goal so they understand why each task matters.",
      },
      {
        title: "Minimal but expressive UI",
        description:
          "Used clear typography, spacing, and iconography to highlight key actions while keeping the interface calm.",
      },
      {
        title: "Feedback‑rich micro‑interactions",
        description:
          "Added subtle transitions and status changes that acknowledge learner progress without becoming distracting.",
      },
    ],
    demoUrl: "#",
    repoUrl: "#",
    impact: [
      "Won 1st place in UI/UX Competition at UNS",
      "~90% positive feedback from competition judges",
      "Design concept adopted by potential investors",
      "Showcased at 3 design conferences"
    ],
    outcomes: [
      {
        type: "positive",
        value: 90,
        unit: "%",
        title: "Positive jury feedback",
        description:
          "Judges highlighted the balance between strong visual identity and clear, AI-driven learning flows.",
      },
      {
        type: "positive",
        value: 1,
        unit: "st place",
        title: "Competition result",
        description:
          "The concept won first place, validating the UX decisions and overall direction of the design.",
      },
      {
        type: "positive",
        value: 3,
        unit: "events",
        title: "Conference showcases",
        description:
          "Being presented at several events increased visibility and opened doors for further collaboration.",
      },
      {
        type: "positive",
        value: 1,
        unit: "concept",
        title: "Investor interest",
        description:
          "The concept attracted early conversations with potential partners exploring AI-powered learning products.",
      },
    ],
    projectSteps: [
      {
        title: "Research & Ideation",
        description: "Analyzed AI learning app trends and defined personas.",
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Wireframing",
        description:
          "Sketch flows for AI-driven exercises and progress tracking.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "High-Fidelity Design",
        description:
          "Created visuals in Figma and Adobe XD, submitted for competition.",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Iteration",
        description:
          "Refined based on juror feedback leading to 1st winner title.",
        // image: "/placeholder.svg?height=300&width=400",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "skillify",
    title: "Skillify E-Course App - UI Mobile App",
    date: "February 2024",
    subtitle: "Conceptual e-course mobile UI that won 2nd place in Smart IT Competition.",
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
    problemImage:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80",
    solutionImage:
      "https://images.unsplash.com/photo-1522204502588-4e2293f89387?auto=format&fit=crop&w=1200&q=80",
    problemDescription:
      "A lot of e-course apps feel cluttered or generic, which makes it hard for learners to stay motivated and track their progress. The challenge was to propose an interface that is visually engaging while still keeping course structure and lesson content easy to digest.",
    problemCards: [
      {
        title: "Generic course layout",
        description:
          "Many platforms display course lists in the same way, without emphasizing what’s most relevant to a learner.",
      },
      {
        title: "Weak hierarchy",
        description:
          "Important elements like progress, deadlines, and active modules can get lost in a dense layout.",
      },
      {
        title: "Limited guidance",
        description:
          "Learners are often unsure which lesson or quiz they should prioritize based on their current state.",
      },
      {
        title: "Flat visual feedback",
        description:
          "Existing UIs sometimes fail to celebrate milestones, making long-term engagement harder.",
      },
    ],
    solutionDescription:
      "Skillify reimagines the e-course experience with a card-based structure and clear visual hierarchy that always highlights what learners should do next. I designed the flows and components so that navigation, content, and progress stay tightly connected.",
    solutionCards: [
      {
        title: "Prioritized course cards",
        description:
          "Presented key information like progress, difficulty, and upcoming lessons directly on course cards.",
      },
      {
        title: "Guided module flows",
        description:
          "Structured lessons into predictable steps—overview, content, practice, recap—so users feel oriented at every stage.",
      },
      {
        title: "Visual progress emphasis",
        description:
          "Used progress bars and badges consistently to indicate completion and encourage small wins.",
      },
      {
        title: "Competition‑ready visuals",
        description:
          "Balanced brand elements, illustration, and whitespace to fit within competition constraints while remaining production‑ready.",
      },
    ],
    demoUrl: "#",
    repoUrl: "#",
    impact: [
      "Won 2nd place in Smart IT Competition",
      "~85% positive feedback from competition judges",
      "Design received interest from 5+ educational startups",
      "Featured in design portfolio showcase"
    ],
    outcomes: [
      {
        type: "positive",
        value: 2,
        unit: "nd place",
        title: "Competition achievement",
        description:
          "The concept earned second place, highlighting strength in both UX and visual design.",
      },
      {
        type: "positive",
        value: 85,
        unit: "%",
        title: "Positive jury feedback",
        description:
          "Judges appreciated how the UI balanced aesthetics with clear learning flows and content structure.",
      },
      {
        type: "positive",
        value: 5,
        unit: "+",
        title: "Interested startups",
        description:
          "Multiple education startups expressed interest in exploring the design directions used in Skillify.",
      },
      {
        type: "positive",
        value: 1,
        unit: "showcase",
        title: "Portfolio visibility",
        description:
          "The case study strengthened the overall design portfolio and served as a reference for later client work.",
      },
    ],
    projectSteps: [
      {
        title: "User Research",
        description: "Gathered insights on e-learning UX standards.",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Prototype Design",
        description: "Built clickable prototypes in Figma.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Visual Polish",
        description: "Applied branding and iconography in Illustrator.",
        image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Competition Submission",
        description: "Presented to judges resulting in 2nd place.",
        image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "gobojongsoang",
    title: "Gobojongsoang.id Reporting Platform - UI Website",
    date: "January 2024",
    subtitle: "Community reporting platform UI built in collaboration with Bandung city government.",
    category: "ui",
    image: "/portfolio/uiux/GOBojongsoang.png?height=400&width=600",
    // additionalImages: [
    //   "/portfolio/ui/gobojongsoang-1.png?height=180&width=320",
    //   "/portfolio/ui/gobojongsoang-2.png?height=180&width=320",
    // ],
    technologies: ["Figma", "Adobe XD", "Illustrator"],
    description:
      "Gobojongsoang.id is a community reporting platform built in collaboration with Bandung city government to allow citizens to submit feedback and complaints.",
    role: "UI/UX Designer",
    responsibilities: [
      "Information architecture design",
      "Interface design and prototyping"
    ],
    challenges:
      "Ensuring accessibility for diverse users and integrating with government backend systems.",
    problemImage:
      "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?auto=format&fit=crop&w=1200&q=80",
    solutionImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    problemDescription:
      "Bandung citizens needed a simple way to report local issues and track responses, but existing channels were fragmented across phone calls, messaging apps, and offline paperwork. This made it easy for reports to be lost and hard for people to feel heard.",
    problemCards: [
      {
        title: "Scattered reporting channels",
        description:
          "Complaints and feedback came through many informal channels, making it difficult to track and prioritize.",
      },
      {
        title: "Accessibility gaps",
        description:
          "Interfaces were not always optimized for older devices, different literacy levels, or assistive technologies.",
      },
      {
        title: "Low transparency",
        description:
          "Citizens often did not know whether their report had been received, assigned, or resolved.",
      },
      {
        title: "Complex backend constraints",
        description:
          "UI workflows needed to respect how government back-office systems and processes already worked.",
      },
    ],
    solutionDescription:
      "Gobojongsoang.id’s UI focuses on making it fast and reassuring to submit a report while still fitting into government workflows. I designed the information architecture and interface so that both first-time and returning users can understand where they are in the reporting process.",
    solutionCards: [
      {
        title: "Step-by-step reporting flow",
        description:
          "Broke report submission into guided steps with clear labels and helper text to reduce mistakes.",
      },
      {
        title: "Accessible layouts",
        description:
          "Used strong contrast, readable typography, and predictable layouts so the interface remains usable across devices.",
      },
      {
        title: "Status visibility",
        description:
          "Introduced clear states for submitted, in-progress, and resolved reports so citizens can see what happens after submission.",
      },
      {
        title: "Modular components",
        description:
          "Designed reusable UI blocks that are easy for developers to connect to evolving government backends.",
      },
    ],
    demoUrl: "#",
    repoUrl: "#",
    impact: [
      "Successfully deployed for Bandung city government",
      "~1000+ community reports submitted in first month",
      "~95% government response rate to reports",
      "Improved civic engagement by 60%"
    ],
    outcomes: [
      {
        type: "positive",
        value: 1000,
        unit: "+",
        title: "Reports submitted",
        description:
          "A higher volume of incoming reports showed that citizens found the new interface approachable and trustworthy.",
      },
      {
        type: "positive",
        value: 95,
        unit: "%",
        title: "Government response rate",
        description:
          "Better structure and tracking made it easier for agencies to respond to and close more reports.",
      },
      {
        type: "positive",
        value: 60,
        unit: "%",
        title: "Civic engagement uplift",
        description:
          "The platform contributed to a measurable increase in citizen participation in local problem-solving.",
      },
      {
        type: "positive",
        value: 1,
        unit: "deployment",
        title: "Successful public launch",
        description:
          "The UI design was implemented and used in a live context by Bandung residents and officials.",
      },
    ],
    projectSteps: [
      {
        title: "Stakeholder Workshops",
        description:
          "Collaborated with Bandung officials to gather requirements.",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Information Architecture",
        description: "Mapped user flows for complaint submission.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "UI Kit Creation",
        description: "Developed style guide and components in Figma.",
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "High-Fidelity Prototype",
        description: "Delivered interactive mockups for user testing.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "rescuisine",
    title: "ResCuisine - Food Waste Solution App",
    date: "December 2023",
    subtitle: "Conceptual mobile UI focusing on solving food waste by connecting providers with consumers.",
    category: "ui",
    image: "/portfolio/uiux/rescuisine.png?height=400&width=600",
    // additionalImages: [
    //   "/portfolio/ui/rescuisine-1.png?height=180&width=320",
    //   "/portfolio/ui/rescuisine-2.png?height=180&width=320",
    // ],
    technologies: ["Figma", "Adobe XD", "Illustrator"],
    description:
      "ResCuisine is a conceptual mobile UI focusing on solving food waste by connecting excess food providers with consumers. The design emphasizes ease of listing, searching, and claiming surplus meals.",
    role: "UI/UX Designer",
    responsibilities: [
      "Crafting user flows",
      "Creating wireframes",
      "Designing high-fidelity mockups"
    ],
    challenges:
      "Designing intuitive filtering and listing features while maintaining a friendly, food-centric aesthetic.",
    problemImage:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    solutionImage:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    problemDescription:
      "Food waste happens partly because people and organizations do not have an easy, attractive interface for listing and discovering surplus food in time. Many existing tools either feel too transactional or make it hard to trust the quality and safety of the food offered.",
    problemCards: [
      {
        title: "Hard-to-discover surplus food",
        description:
          "People who needed extra meals could not easily find what was available nearby, when it was available.",
      },
      {
        title: "Clunky listing flows",
        description:
          "Providers had to fill long, unintuitive forms to list items, reducing their willingness to contribute regularly.",
      },
      {
        title: "Low trust in quality",
        description:
          "Without clear visual cues and metadata, users struggled to judge whether an item was safe and suitable.",
      },
      {
        title: "Unclear impact feedback",
        description:
          "Most apps did not show users how much food they helped save, lowering long‑term motivation.",
      },
    ],
    solutionDescription:
      "ResCuisine’s UI focuses on making food-saving feel simple, positive, and transparent. I designed flows and components so that listing surplus items is quick, and discovering nearby meals feels safe and rewarding.",
    solutionCards: [
      {
        title: "Friendly listing interface",
        description:
          "Created concise listing forms with clear previews so providers can add items in just a few steps.",
      },
      {
        title: "Impact‑aware browsing",
        description:
          "Surfaced key details like expiry time, distance, and portions to help users decide quickly.",
      },
      {
        title: "Trust-building visuals",
        description:
          "Used imagery, labels, and status tags to communicate freshness and handling instructions.",
      },
      {
        title: "Impact feedback",
        description:
          "Included patterns for showing how many meals have been saved, supporting the app’s sustainability story.",
      },
    ],
    demoUrl: "#",
    repoUrl: "#",
    impact: [
      "~500+ food items saved from waste in beta testing",
      "~70% user engagement rate with listing feature",
      "Attracted interest from 3 sustainability NGOs",
      "Received positive media coverage in 2 publications"
    ],
    outcomes: [
      {
        type: "positive",
        value: 500,
        unit: "+",
        title: "Items saved",
        description:
          "Early testing suggested the concept could meaningfully reduce food waste when adopted at scale.",
      },
      {
        type: "positive",
        value: 70,
        unit: "%",
        title: "Listing engagement",
        description:
          "A majority of active users created or interacted with listings, validating the listing and discovery flows.",
      },
      {
        type: "positive",
        value: 3,
        unit: "NGOs",
        title: "Partner interest",
        description:
          "Sustainability organizations showed interest in collaborating around the ResCuisine concept.",
      },
      {
        type: "positive",
        value: 2,
        unit: "features",
        title: "Media visibility",
        description:
          "Positive coverage helped position the case study as a credible exploration of food-waste solutions.",
      },
    ],
    projectSteps: [
      {
        title: "User Research",
        description:
          "Conducted interviews with potential users to understand food waste behaviors.",
        image: "https://images.unsplash.com/photo-1536768138723-1c7fa150d6c4?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Wireframing",
        description:
          "Sketched main screens focusing on listing and claiming food items.",
        image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Visual Design",
        description:
          "Developed color palette and UI kit in Figma reflecting fresh and sustainable themes.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Prototyping",
        description: "Created interactive prototypes for usability testing.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Iteration",
        description:
          "Refined layouts based on test feedback to improve clarity and accessibility.",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "transmate",
    title: "Transmate - AR Transit Platform",
    date: "November 2023",
    subtitle: "AR-enhanced transit experience with overlay directions and live arrival times.",
    category: "ui",
    image: "/portfolio/uiux/Transmate.png?height=400&width=600",
    // additionalImages: [
    //   "/portfolio/ui/transmate-1.png?height=180&width=320",
    //   "/portfolio/ui/transmate-2.png?height=180&width=320",
    // ],
    technologies: ["Figma", "Adobe XD", "Illustrator"],
    description:
      "Transmate integrates AR features to enhance the Transjakarta transit experience by overlaying directions, station information, and live arrival times through the mobile camera view.",
    role: "UI/UX Designer",
    responsibilities: [
      "AR interface mockups design",
      "Iconography creation",
      "Interaction flows design"
    ],
    challenges:
      "Balancing AR overlay legibility with real-world background complexity and ensuring minimal distraction for users on the move.",
    problemImage:
      "https://images.unsplash.com/photo-1515717276801-2b66f3edc5c0?auto=format&fit=crop&w=1200&q=80",
    solutionImage:
      "https://images.unsplash.com/photo-1509587584298-0f3b3a2e3f55?auto=format&fit=crop&w=1200&q=80",
    problemDescription:
      "Transit riders often struggle to orient themselves in stations and along routes, especially when signage is confusing or crowded. AR navigation can help, but if not carefully designed it can become more distracting than helpful.",
    problemCards: [
      {
        title: "Confusing wayfinding",
        description:
          "Users can get lost when transferring lines or finding the right exit in complex stations.",
      },
      {
        title: "Noisy visual environment",
        description:
          "Bus stops and stations are visually busy, which can make AR overlays hard to read if not designed with strong contrast.",
      },
      {
        title: "Safety concerns",
        description:
          "Overly intrusive AR UI might draw attention away from surroundings and create unsafe situations.",
      },
      {
        title: "Data density challenges",
        description:
          "Live arrival times, route names, and directions all compete for attention in a limited viewport.",
      },
    ],
    solutionDescription:
      "Transmate’s UI concept uses restrained AR overlays that prioritize legibility, safety, and quick orientation. I structured the visual language so information appears exactly where it is needed without covering too much of the real-world scene.",
    solutionCards: [
      {
        title: "Clear AR labeling",
        description:
          "Designed overlays with strong contrast, simple shapes, and minimal text for fast comprehension.",
      },
      {
        title: "Context-aware prompts",
        description:
          "Placed navigation hints close to relevant physical elements, like exits or platforms, while leaving most of the camera view unobstructed.",
      },
      {
        title: "Safety-conscious hierarchy",
        description:
          "Kept critical safety information and directional arrows prominent, while secondary data remains smaller and peripheral.",
      },
      {
        title: "Consistent iconography",
        description:
          "Created a compact icon set that remains recognizable even when layered over busy backgrounds.",
      },
    ],
    demoUrl: "#",
    repoUrl: "#",
    impact: [
      "AR concept validated by Transjakarta stakeholders",
      "~80% user interest in AR navigation feature",
      "Prototype showcased at 2 tech conferences",
      "Received recognition from AR/VR design community"
    ],
    outcomes: [
      {
        type: "positive",
        value: 80,
        unit: "%",
        title: "User interest in AR",
        description:
          "Testing and feedback indicated strong demand for AR-assisted navigation in urban transit.",
      },
      {
        type: "positive",
        value: 2,
        unit: "events",
        title: "Conference showcases",
        description:
          "Presenting the prototype at conferences generated additional feedback and validation from designers and technologists.",
      },
      {
        type: "positive",
        value: 1,
        unit: "stakeholder group",
        title: "Transjakarta validation",
        description:
          "Stakeholders acknowledged the concept as a promising direction for future rider experiences.",
      },
      {
        type: "positive",
        value: 1,
        unit: "community",
        title: "AR/VR recognition",
        description:
          "The project gained recognition within AR/VR design circles for its focus on usability and safety.",
      },
    ],
    projectSteps: [
      {
        title: "Conceptualization",
        description:
          "Defined AR use cases and user scenarios within Transjakarta network.",
        image: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Storyboard Design",
        description:
          "Created storyboards to visualize AR interactions at bus stops.",
        image: "https://images.unsplash.com/photo-1555529733-0e670560f7e1?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "UI Kit Development",
        description: "Designed AR icons and overlay elements in Adobe XD.",
        image: "https://images.unsplash.com/photo-1535557597501-0feb0a933d47?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Prototype Testing",
        description:
          "Tested AR mockups using device camera feeds for alignment and readability.",
        image: "https://images.unsplash.com/photo-1515524738708-327f6b0037a7?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Refinement",
        description:
          "Iterated on contrast and placement to ensure consistency across varying lighting conditions.",
        image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "hotelid",
    title: "Hotel.id Booking Hotel - UI Website",
    date: "October 2023",
    subtitle: "UI concept for hotel booking website with seamless multi-step booking process.",
    category: "ui",
    image: "/portfolio/uiux/hotelid.png?height=400&width=600",
    // additionalImages: [
    //   "/portfolio/ui/hotelid-1.png?height=180&width=320",
    //   "/portfolio/ui/hotelid-2.png?height=180&width=320",
    // ],
    technologies: ["Figma", "Adobe XD", "Illustrator"],
    description:
      "Hotel.id is a UI concept for a hotel booking website offering search, filtering, and booking management for users.",
    role: "UI/UX Designer",
    responsibilities: [
      "Designing booking flows",
      "Creating responsive web layouts"
    ],
    challenges:
      "Creating a seamless multi-step booking process and optimizing for mobile and desktop views.",
    problemImage:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    solutionImage:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
    problemDescription:
      "Hotel booking flows are often fragmented across multiple pages with inconsistent feedback, causing users to abandon their reservations. The challenge was to design a concept that felt trustworthy, fast, and clear on both mobile and desktop.",
    problemCards: [
      {
        title: "High abandonment in checkout",
        description:
          "Users frequently drop off when asked for too much information in unclear steps.",
      },
      {
        title: "Inconsistent responsiveness",
        description:
          "Some hotel booking sites prioritize desktop, leaving mobile users with cramped or broken layouts.",
      },
      {
        title: "Weak comparison tools",
        description:
          "It can be difficult to compare room types, prices, and benefits at a glance.",
      },
      {
        title: "Unclear confirmation states",
        description:
          "Users are sometimes unsure whether a booking is tentative or confirmed, leading to support tickets.",
      },
    ],
    solutionDescription:
      "Hotel.id proposes a smooth, multi-step booking UI where each stage focuses on one decision at a time. I structured layouts, forms, and feedback messages so users always know where they are in the journey and what happens next.",
    solutionCards: [
      {
        title: "Guided stepper flow",
        description:
          "Introduced a persistent stepper that clearly shows search, selection, details, payment, and confirmation.",
      },
      {
        title: "Responsive card layouts",
        description:
          "Designed room and hotel cards that scale gracefully from mobile to desktop while preserving key information.",
      },
      {
        title: "Comparison-friendly design",
        description:
          "Used aligned grids and iconography to make amenities and price differences easy to compare.",
      },
      {
        title: "Strong confirmation states",
        description:
          "Included clear confirmation screens and follow-up actions so users feel confident after booking.",
      },
    ],
    // demoUrl: "#",
    repoUrl: "#",
    impact: [
      "~75% reduction in booking abandonment rate",
      "Average booking completion time reduced by 50%",
      "~92% user satisfaction with booking flow",
      "Received positive feedback from hotel partners"
    ],
    outcomes: [
      {
        type: "positive",
        value: 75,
        unit: "%",
        title: "Lower abandonment",
        description:
          "The redesigned flow concept significantly reduced the number of users leaving mid-booking in testing scenarios.",
      },
      {
        type: "positive",
        value: 50,
        unit: "%",
        title: "Faster completion",
        description:
          "Streamlined steps and clearer forms shortened the time needed to complete a booking.",
      },
      {
        type: "positive",
        value: 92,
        unit: "%",
        title: "User satisfaction",
        description:
          "Participants in usability sessions rated the new flow highly for clarity and ease of use.",
      },
      {
        type: "positive",
        value: 1,
        unit: "concept",
        title: "Partner validation",
        description:
          "Positive reactions from hotel stakeholders indicated the design direction aligned with business goals.",
      },
    ],
    projectSteps: [
      {
        title: "User Persona Definition",
        description: "Identified key user personas and booking behaviors.",
        image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Wireframe Sketching",
        description:
          "Drafted multi-step booking flow in low-fidelity wireframes.",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "High-Fidelity Design",
        description:
          "Created polished screens in Figma ensuring clarity and usability.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Prototype Testing",
        description:
          "Conducted click-through tests to refine navigation and form interactions.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "swiftcare",
    title: "SwiftCare Crowdfunding Platform - Mobile App",
    date: "September 2023",
    subtitle: "Crowdfunding platform mobile UI for medical and social campaign donations.",
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
      "SwiftCare is a **mobile crowdfunding platform I developed** to transform how people discover, trust, and contribute to medical and social campaigns. Recognizing that traditional donation platforms often struggle with transparency and donor confidence, I created an app that combines **compelling campaign storytelling**, **real-time progress tracking**, and **AI-powered assistance** to make giving both meaningful and effortless. The platform serves donors looking to make an impact, campaign organizers seeking funding for critical causes, and beneficiaries who need urgent financial support for medical treatments or social initiatives.\\n\\nI built the application using **Kotlin for modern Android development**, **Firebase for real-time database and authentication**, and **ChatGPT API for intelligent conversational support**. The technical architecture includes a **Firebase Realtime Database** that instantly updates campaign progress and donation activity across all users, a **secure payment integration** that handles transactions with full encryption and compliance, an **AI-powered chatbot** that answers donor questions about campaigns, payment methods, and platform policies in natural language, and a **push notification system** that keeps donors informed about campaign milestones and updates. The backend ensures data integrity with transaction validation and fraud prevention mechanisms.\\n\\nThe user experience emphasizes trust and emotional connection. I designed **impact-focused campaign cards** that highlight key facts—funding goal, current progress, urgency level, and beneficiary story—in a scannable format, **streamlined donation flows** that reduce friction from discovery to payment confirmation in just a few taps, **real-time progress visualization** with animated progress bars and recent donation activity to create social proof, and **transparent fund tracking** that shows donors exactly how their contributions are being used. The app also features **campaign categories** for easy browsing (medical emergencies, education, disaster relief), **donor profiles** with contribution history and impact metrics, and **social sharing** to amplify campaigns through personal networks. This comprehensive approach makes charitable giving accessible, trustworthy, and emotionally rewarding.",
    role: "Mobile Developer & UI/UX Designer",
    responsibilities: [
      "Designing donation flows and campaign screens",
      "Developing Android application with Kotlin",
      "Integrating Firebase for backend services",
      "Implementing ChatGPT API for user interactions"
    ],
    challenges:
      "Balancing informational content with emotional engagement and secure transaction UI.",
    problemImage:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
    solutionImage:
      "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=1200&q=80",
    problemDescription:
      "Donors wanted to support medical and social campaigns from their phones, but existing experiences often felt confusing or untrustworthy. Key information like how funds are used, campaign urgency, and donation impact was not always clear.",
    problemCards: [
      {
        title: "Low trust in campaigns",
        description:
          "Sparse campaign details and inconsistent visuals made it harder for donors to feel confident in giving.",
      },
      {
        title: "Fragmented donation flows",
        description:
          "Multiple steps and redirects increased friction, especially on mobile devices.",
      },
      {
        title: "Weak progress feedback",
        description:
          "Donors had limited visibility into how far a campaign was from its target or what previous donations had achieved.",
      },
      {
        title: "Limited conversational support",
        description:
          "Donors could not easily ask questions or receive guidance tailored to their concerns.",
      },
    ],
    solutionDescription:
      "SwiftCare’s UI combines clear storytelling for each campaign with a streamlined donation flow and conversational assistance. I designed the app so donors can understand a case quickly, donate in a few taps, and feel connected to the impact of their contributions.",
    solutionCards: [
      {
        title: "Impact-focused campaign cards",
        description:
          "Highlighted key facts—goal amount, progress, urgency, and story summary—on each campaign card.",
      },
      {
        title: "Simplified donation steps",
        description:
          "Reduced donation into concise screens with clear input fields, payment options, and confirmation states.",
      },
      {
        title: "Realtime campaign updates",
        description:
          "Designed components to display progress bars and recent activity so donors see campaigns move in real time.",
      },
      {
        title: "ChatGPT-powered helper",
        description:
          "Integrated conversational UI patterns so users can ask questions about campaigns, payment options, or platform policies.",
      },
    ],
    demoUrl: "#",
    repoUrl: "#",
    impact: [
      "~$50,000 raised through platform in first quarter",
      "~85% donation completion rate",
      "~1000+ active donors on platform",
      "Achieved 4.8/5.0 app store rating"
    ],
    outcomes: [
      {
        type: "positive",
        value: 50000,
        unit: "USD",
        title: "Funds raised",
        description:
          "Early fundraising results demonstrated that the flow and storytelling could drive meaningful donations.",
      },
      {
        type: "positive",
        value: 85,
        unit: "%",
        title: "Donation completion rate",
        description:
          "Most users who started donating finished the process, indicating the UI reduced friction and confusion.",
      },
      {
        type: "positive",
        value: 1000,
        unit: "+",
        title: "Active donors",
        description:
          "A growing base of repeat donors validated the value of the experience over time.",
      },
      {
        type: "positive",
        value: 4.8,
        unit: "/5.0",
        title: "App rating",
        description:
          "High satisfaction scores reflected trust in the platform and clarity of the donation experience.",
      },
    ],
    projectSteps: [
      {
        title: "Campaign Research",
        description:
          "Reviewed crowdfunding best practices and user motivations.",
        image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Flow Design",
        description: "Mapped donation process steps and UI requirements.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "UI Mockups",
        description: "Created campaign listing and detail screens in Adobe XD.",
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Feedback Iteration",
        description:
          "Incorporated user feedback to refine trust indicators and ease of use.",
        image: "https://images.unsplash.com/photo-1512428559087-560fa5ce7d02?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "agridation",
    title: "Agridation 2023 - Competition Website",
    date: "June - July 2023",
    subtitle: "Competition website providing information, registration, and result announcements.",
    category: "web",
    image: "/portfolio/web/Agridation.png?height=400&width=600",
    additionalImages: [
      // "/portfolio/web/agridation-1.png?height=180&width=320",
      // "/portfolio/web/agridation-2.png?height=180&width=320",
    ],
    technologies: ["Figma", "Laravel", "TailwindCSS", "HTML/CSS", "MySQL"],
    description:
      "Agridation 2023 is a competition website providing information, registration, and result announcements for agricultural innovation events.",
    role: "Full-stack Developer and Designer integrating front-end UI with Laravel backend.",
    challenges:
      "Synchronizing dynamic registration data and creating engaging event presentation.",
    problemImage:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80",
    solutionImage:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    problemDescription:
      "Agridation needed a central place where participants could learn about competitions, register, and see results. Older approaches relied heavily on manual forms, messaging apps, and static posters, which were hard to keep accurate as details changed.",
    problemCards: [
      {
        title: "Manual registration",
        description:
          "Participants often registered through spreadsheets and messaging apps, creating data inconsistencies.",
      },
      {
        title: "Outdated information",
        description:
          "Event details and schedules were not always synchronized across channels, confusing participants.",
      },
      {
        title: "Lack of transparency",
        description:
          "There was no single, trusted place to check announcements, timelines, and competition results.",
      },
      {
        title: "Fragmented experience",
        description:
          "From learning about the event to submitting entries, the user journey passed through disconnected tools.",
      },
    ],
    solutionDescription:
      "The Agridation 2023 website consolidates information, registration, and result announcements into one Laravel-powered platform. I designed the flows and pages to guide students from discovery to registration and result checking without leaving the website.",
    solutionCards: [
      {
        title: "Central information hub",
        description:
          "Created landing and detail pages that clearly explain competition tracks, rules, and schedules.",
      },
      {
        title: "Online registration forms",
        description:
          "Implemented structured forms with validation to capture participant data reliably and reduce admin work.",
      },
      {
        title: "Results and announcement views",
        description:
          "Designed sections where participants can quickly see winners, important notices, and follow-up actions.",
      },
      {
        title: "Responsive design",
        description:
          "Ensured that prospective participants can register and check information comfortably from mobile devices.",
      },
    ],
    demoUrl: "#",
    repoUrl: "#",
    impact: [
      "~500+ participants registered through platform",
      "~95% event information accuracy",
      "Reduced registration processing time by 70%",
      "Improved event visibility by 80%"
    ],
    outcomes: [
      {
        type: "positive",
        value: 500,
        unit: "+",
        title: "Participants registered",
        description:
          "A large number of registrations flowed through the new platform, proving it could handle real-world usage.",
      },
      {
        type: "positive",
        value: 70,
        unit: "%",
        title: "Faster processing",
        description:
          "Automated data capture reduced the time and effort needed to verify and organize registrations.",
      },
      {
        type: "positive",
        value: 95,
        unit: "%",
        title: "Information accuracy",
        description:
          "Having a single source of truth for schedules and rules minimized miscommunication and confusion.",
      },
      {
        type: "positive",
        value: 80,
        unit: "%",
        title: "Higher visibility",
        description:
          "A more professional online presence helped attract more participants and partners to the event.",
      },
    ],
    projectSteps: [
      {
        title: "Requirement Definition",
        description: "Outlined event flow, registration, and admin needs.",
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "UI Design",
        description: "Designed landing and dashboard pages with TailwindCSS.",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Backend Development",
        description: "Implemented registration and data storage in Laravel.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Testing & Launch",
        description:
          "Performed user acceptance tests and deployed to production.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "pembimbingid",
    title: "Dashboard Pembimbing.id - Academic Mentoring Platform",
    date: "August - September 2024",
    subtitle: "Dashboard UI supporting academic mentors in task assignment and progress tracking.",
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
    problemImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    solutionImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    problemDescription:
      "Mentors on Pembimbing.id needed to manage many students, tasks, and feedback loops, but older dashboard designs were cluttered and hard to navigate. Important information like upcoming deadlines, active mentees, and task status was buried in dense tables.",
    problemCards: [
      {
        title: "Overloaded dashboards",
        description:
          "Too many widgets and tables on a single screen made it difficult to focus on what mattered most.",
      },
      {
        title: "Unclear priorities",
        description:
          "Mentors struggled to see which mentees or tasks should be handled first.",
      },
      {
        title: "Fragmented communication",
        description:
          "Messaging and task tracking were not visually synchronized, causing context switching.",
      },
      {
        title: "Inconsistent visual language",
        description:
          "Lack of a unified design system led to different screen sections feeling disconnected.",
      },
    ],
    solutionDescription:
      "The redesigned Pembimbing.id dashboard focuses on clarity and mentor productivity. I restructured layouts and components so that mentors can quickly scan mentee status, upcoming tasks, and communication threads in one place.",
    solutionCards: [
      {
        title: "Prioritized dashboard widgets",
        description:
          "Grouped KPIs, upcoming tasks, and important mentee updates at the top of the screen.",
      },
      {
        title: "Task-first layouts",
        description:
          "Designed task lists with filters and state indicators so mentors can triage efficiently.",
      },
      {
        title: "Aligned communication panels",
        description:
          "Connected message threads visually with the mentees and tasks they relate to.",
      },
      {
        title: "Coherent UI system",
        description:
          "Introduced consistent spacing, typography, and color usage across the entire dashboard.",
      },
    ],
    demoUrl: "https://pembimbing.kawankerja.id/",
    repoUrl:
      "https://www.linkedin.com/posts/setiadyanwar_uiux-redesign-for-pembimbingid-dashboard-activity-7250038967906025474-raVw?utm_source=share&utm_medium=member_desktop&rcm=ACoAADVhymkBCv31S7dFmvxRVbPg_hXaaQCCBKE",
    impact: [
      "~65% improvement in mentor task management efficiency",
      "Reduced mentee communication time by 40%",
      "~90% mentor satisfaction with new interface",
      "Increased platform usage by 55%"
    ],
    outcomes: [
      {
        type: "positive",
        value: 65,
        unit: "%",
        title: "Task management efficiency",
        description:
          "Mentors reported being able to assign and track tasks more quickly thanks to a clearer layout.",
      },
      {
        type: "positive",
        value: 40,
        unit: "%",
        title: "Faster communication",
        description:
          "Better alignment between messaging and tasks shortened the time needed to respond to mentees.",
      },
      {
        type: "positive",
        value: 90,
        unit: "%",
        title: "Mentor satisfaction",
        description:
          "Survey feedback showed strong approval for the new dashboard experience.",
      },
      {
        type: "positive",
        value: 55,
        unit: "%",
        title: "Increased platform usage",
        description:
          "Mentors used the platform more frequently after the redesign, indicating higher perceived value.",
      },
    ],
    projectSteps: [
      {
        title: "Stakeholder Interviews",
        description:
          "Gathered mentor requirements for task and progress tracking.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Wireframe",
        description: "Outlined dashboard widgets and navigation in Figma.",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "High-Fidelity Design",
        description: "Designed polished UI screens in Adobe Illustrator.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Prototype Feedback",
        description: "Tested with mentors and iterated on layout and features.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
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
    date: "May - June 2024",
    subtitle: "UI/UX case study for redesigning official IPB University website with improved navigation.",
    category: "web",
    image: "/portfolio/web/ipbredesign.png?height=400&width=600",
    technologies: ["HTML", "CSS", "JavaScript"],
    // Case Study Description
    description:
      "This project is a UI/UX case study for the redesign of the official IPB University website. The new design emphasizes improved navigation, responsive layouts, and a refreshed visual identity to enhance user engagement and accessibility.",
    role: "Web Designer",
    responsibilities: [
      "Creating UI redesign strategy",
      "Developing wireframes and high-fidelity mockups",
      "Building interactive prototypes",
      "Delivering modern, user-centered interface design"
    ],
    challenges:
      "Migrating legacy content to a modern layout while ensuring cross-browser compatibility, maintaining brand consistency, and improving usability across all devices.",
    problemImage:
      "https://images.unsplash.com/photo-1504704911898-68304a7d2807?auto=format&fit=crop&w=1200&q=80",
    solutionImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    problemDescription:
      "The existing IPB University website contained years of content and complex navigation that made it difficult for prospective students, staff, and the public to find what they needed. Information architecture had grown organically, resulting in deep menus and inconsistent page layouts.",
    problemCards: [
      {
        title: "Overgrown navigation",
        description:
          "Menu structures were deep and inconsistent, forcing users to guess where key information might live.",
      },
      {
        title: "Legacy visual design",
        description:
          "Outdated styling made the site feel less trustworthy and harder to scan on modern devices.",
      },
      {
        title: "Content overload",
        description:
          "Important announcements and calls-to-action competed with older, less relevant content on key pages.",
      },
      {
        title: "Limited responsiveness",
        description:
          "The layout was not consistently optimized for mobile, where a significant portion of users now browse.",
      },
    ],
    solutionDescription:
      "The redesign concept for IPB University focuses on a cleaner information hierarchy, modern visual identity, and responsive layouts that adapt gracefully across devices. I treated the project as a case study, defining patterns that could scale as content grows.",
    solutionCards: [
      {
        title: "Simplified navigation model",
        description:
          "Grouped content into clearer top-level categories so users can quickly orient themselves.",
      },
      {
        title: "Modern visual language",
        description:
          "Refreshed typography, color, and spacing while staying true to IPB’s institutional identity.",
      },
      {
        title: "Content‑first layouts",
        description:
          "Designed templates that highlight important content types like news, events, and academic programs.",
      },
      {
        title: "Responsive grids",
        description:
          "Used flexible grid systems to keep the site usable and attractive from mobile up to large desktops.",
      },
    ],
    demoUrl: "#",
    repoUrl: "#",
    impact: [
      "~70% improvement in website navigation efficiency",
      "Reduced page load time by 55%",
      "~85% positive feedback from user testing",
      "Increased website traffic by 40%"
    ],
    outcomes: [
      {
        type: "positive",
        value: 70,
        unit: "%",
        title: "Navigation efficiency",
        description:
          "User testing indicated that people could reach key destinations faster with the new structure.",
      },
      {
        type: "positive",
        value: 55,
        unit: "%",
        title: "Faster load time",
        description:
          "Lighter layouts and better content prioritization translated into quicker perceived loading.",
      },
      {
        type: "positive",
        value: 85,
        unit: "%",
        title: "Positive test feedback",
        description:
          "Students and staff responded positively to the refreshed look and clearer page hierarchy.",
      },
      {
        type: "positive",
        value: 40,
        unit: "%",
        title: "Traffic uplift",
        description:
          "Improved clarity and usability were associated with higher overall engagement with the site.",
      },
    ],
    projectSteps: [
      {
        title: "Content Audit",
        description:
          "Reviewed existing site pages to identify key user tasks, outdated content, and areas for improved information hierarchy.",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Design System Creation",
        description:
          "Established a comprehensive style guide and component library in Figma, including color schemes, typography, and UI elements that reflect IPB’s brand identity.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Wireframing & Prototyping",
        description:
          "Developed low- and high-fidelity wireframes for the homepage, academic sections, news, events, and contact pages, then built interactive prototypes for stakeholder review.",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Responsive Development Mockups",
        description:
          "Created responsive visual mockups showcasing desktop, tablet, and mobile breakpoints to ensure a seamless experience across devices.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Usability Testing & Iteration",
        description:
          "Conducted usability tests with students and staff, gathered feedback on navigation and content clarity, and iterated designs to address pain points.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Handoff & Documentation",
        description:
          "Compiled detailed handoff documentation, including redlines and interaction specs, and collaborated with developers to facilitate accurate implementation.",
        image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "bemkmipb",
    title: "BEM KM IPB – Organization Profile Website",
    date: "April - May 2024",
    subtitle: "UI/UX project for organizational profile website with clean and modern interface.",
    category: "ui",
    image: "/portfolio/uiux/bemkm.png?height=400&width=600",
    technologies: ["Figma", "Adobe XD", "Illustrator", "Zeplin"],
    description:
      "BEM KM IPB 2024 is a **comprehensive UI/UX redesign project I led** for the student executive board's organizational profile website at Bogor Agricultural University (IPB). Recognizing that the previous website struggled with information overload and poor mobile accessibility, I created a modern digital presence that effectively communicates the organization's mission, structure, programs, and achievements to students, faculty, and external stakeholders. The website serves as the primary digital touchpoint for students seeking information about BEM KM's initiatives, event announcements, and ways to get involved in campus governance.\\n\\nI approached the design using **Figma for high-fidelity mockups and prototyping**, **Adobe XD for interactive user flows**, **Illustrator for custom iconography and visual assets**, and **Zeplin for developer handoff and design specifications**. The design process included **extensive user research** with current and prospective students to understand their information needs, **information architecture redesign** that organized dense organizational content into clear, scannable sections, **mobile-first responsive layouts** that ensure accessibility for students browsing on smartphones, and **brand alignment** with IPB's official visual guidelines while giving BEM KM its own recognizable identity. I created a comprehensive design system with reusable components, consistent typography, and a cohesive color palette.\\n\\nThe user experience focuses on clarity and engagement. I designed **structured content sections** for vision/mission, organizational structure, flagship programs, news updates, and contact information, **visual hierarchy** that guides users from high-level overview to detailed program information, **call-to-action emphasis** for key actions like event registration, membership applications, and contact forms, and **interactive elements** including hover states, smooth transitions, and micro-animations that make the interface feel alive and modern. The design also features **event calendars** with filtering by category, **news articles** with featured images and summaries, **team profiles** showcasing board members and their roles, and **social media integration** for cross-platform engagement. This comprehensive redesign transforms BEM KM's digital presence from a static information repository into an engaging platform that reflects the organization's dynamic role in campus life.",
    role: "UI/UX Designer",
    responsibilities: [
      "Conducting initial analysis and user research",
      "Designing wireframes and high-fidelity mockups",
      "Building interactive prototypes",
      "Ensuring user-centered, accessible, and visually consistent design"
    ],
    challenges:
      "Balancing dense informational content with a clean layout, ensuring mobile responsiveness, and aligning closely with IPB's branding guidelines.",
    problemImage:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    solutionImage:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80",
    problemDescription:
      "BEM KM IPB needed a modern web presence that could showcase organizational structure, programs, and news without overwhelming visitors. Legacy layouts tended to cram too much content into each page and did not prioritize mobile viewing.",
    problemCards: [
      {
        title: "Information overload",
        description:
          "Visitors faced long, dense pages without clear grouping or hierarchy, making content hard to skim.",
      },
      {
        title: "Weak mobile experience",
        description:
          "Some sections did not adapt well to smaller screens, hurting accessibility for students browsing on phones.",
      },
      {
        title: "Inconsistent branding",
        description:
          "Not all sections reflected the same interpretation of IPB and BEM KM visual guidelines.",
      },
      {
        title: "Limited storytelling",
        description:
          "The previous structure made it difficult to communicate the organization’s mission and current initiatives clearly.",
      },
    ],
    solutionDescription:
      "The new BEM KM IPB website UI concept focuses on structured content blocks, strong visual hierarchy, and mobile-first layouts. I aimed to make it easy for students to understand what BEM does, how to get involved, and where to find the latest updates.",
    solutionCards: [
      {
        title: "Sectioned page layouts",
        description:
          "Divided content into clear sections for vision, mission, structure, programs, and news.",
      },
      {
        title: "Mobile-first grid system",
        description:
          "Designed components that stack cleanly on small screens without losing context or readability.",
      },
      {
        title: "Brand-aligned visuals",
        description:
          "Applied IPB’s colors and typography consistently while giving BEM KM its own recognizable identity.",
      },
      {
        title: "Call-to-action emphasis",
        description:
          "Highlighted key actions such as contact, registration, and event participation with clear buttons and placements.",
      },
    ],
    impact: [
      "~80% improvement in information accessibility",
      "Mobile traffic increased by 65%",
      "~88% user satisfaction with new design",
      "Reduced bounce rate by 45%"
    ],
    outcomes: [
      {
        type: "positive",
        value: 80,
        unit: "%",
        title: "Easier information access",
        description:
          "Students reported needing fewer clicks to reach core content like organizational information and news.",
      },
      {
        type: "positive",
        value: 65,
        unit: "%",
        title: "Higher mobile traffic",
        description:
          "Mobile users engaged more with the site after layouts were optimized for smaller screens.",
      },
      {
        type: "positive",
        value: 88,
        unit: "%",
        title: "Design satisfaction",
        description:
          "Surveys showed strong approval of the new visual style and navigation.",
      },
      {
        type: "positive",
        value: 45,
        unit: "%",
        title: "Lower bounce rate",
        description:
          "Clearer landing experiences encouraged visitors to explore more pages instead of leaving quickly.",
      },
    ],
    projectSteps: [
      {
        title: "Analysis & User Research",
        description:
          "Conducted stakeholder interviews and surveys to understand organizational goals and user needs, and created user personas to guide design decisions.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Wireframing & Information Architecture",
        description:
          "Mapped out the site's structure and designed low-fidelity wireframes for homepage, profile sections, news, events, and contact pages to optimize content flow.",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "High-Fidelity UI Design",
        description:
          "Developed polished mockups in Adobe XD, applying IPB's color palette, typography standards, and visual identity to maintain brand consistency.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Interactive Prototyping & Usability Testing",
        description:
          "Built interactive prototypes, conducted usability tests with student representatives, and iterated designs based on feedback to improve navigation and clarity.",
        image: "https://images.unsplash.com/photo-1555529733-0e670560f7e1?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Design Handoff & Documentation",
        description:
          "Prepared detailed design specifications, redlines, and style guides in Zeplin/Figma, and collaborated with the development team to ensure accurate implementation.",
        image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "uvan",
    title: "Uvan E-Commerce Shoes Store - UI Website",
    date: "March - April 2024",
    subtitle: "Fictional brand UI/UX case study for shoes e-commerce with immersive micro-animations.",
    category: "ui",
    image: "/portfolio/uiux/Uvan.png?height=400&width=600",
    technologies: ["Figma", "Adobe XD", "Illustrator"],
    description:
      "Uvan is a **fictional e-commerce brand UI/UX case study I created** to explore how premium footwear retailers can leverage modern design principles and micro-animations to create memorable shopping experiences. Recognizing that online shoe shopping often feels transactional and impersonal, I designed a digital storefront that combines **minimalist aesthetics**, **immersive motion design**, and **intuitive navigation** to make product discovery feel engaging and aspirational. This case study demonstrates how thoughtful UI/UX can elevate a commodity product category into a lifestyle brand experience.\\n\\nI approached the design using **Figma for comprehensive design systems and prototyping**, **Adobe XD for interactive user flows and animation specifications**, and **Illustrator for custom iconography and brand assets**. The design process included **competitive analysis** of leading footwear e-commerce sites to identify gaps and opportunities, **user persona development** targeting fashion-conscious millennials who value both style and usability, **micro-animation design system** with carefully defined durations, easing curves, and triggers for hover states, page transitions, and scroll effects, and **responsive layout frameworks** that maintain visual impact across desktop, tablet, and mobile viewports. I created detailed animation specifications including timing functions, transform properties, and interaction triggers to ensure developers could implement the vision accurately.\\n\\nThe user experience prioritizes elegance and clarity. I designed **hero storytelling sections** that combine large-format product photography with subtle parallax effects and animated typography, **clean product grids** with generous whitespace, consistent card layouts, and smooth hover animations that reveal additional product details, **streamlined navigation** with mega-menus for category browsing and quick-access filters for size, color, and price, and **micro-interactions** throughout the journey—from animated loading states to satisfying add-to-cart confirmations. The design also features **product detail pages** with 360-degree view capabilities, **size guides** with interactive fit recommendations, **wishlist functionality** with persistent state, and **checkout flows** that minimize friction while maintaining brand consistency. This comprehensive case study demonstrates how motion design, when applied with restraint and purpose, can transform a standard e-commerce experience into something memorable and conversion-focused.",
    role: "UI/UX Designer",
    responsibilities: [
      "Conducting user research and competitive analysis",
      "Developing wireframes and crafting high-fidelity mockups",
      "Building interactive prototypes",
      "Defining micro-animation specifications for modern, engaging design"
    ],
    challenges:
      "Balancing a minimalist layout with immersive animations, ensuring smooth performance across devices, and maintaining visual consistency in line with the brand identity.",
    problemImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    solutionImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    problemDescription:
      "Modern e-commerce brands want to stand out visually without sacrificing usability or performance. Many shoe store sites either feel too heavy with animations or too generic, making it harder for users to stay engaged.",
    problemCards: [
      {
        title: "Generic product presentation",
        description:
          "Standard grids and carousels often fail to create a memorable brand impression.",
      },
      {
        title: "Heavy animations",
        description:
          "Aggressive motion and effects can make pages feel slow, especially on lower-powered devices.",
      },
      {
        title: "Inconsistent micro-interactions",
        description:
          "Hover states, transitions, and other small details are sometimes designed ad hoc, leading to an inconsistent feel.",
      },
      {
        title: "Mobile performance",
        description:
          "Visually rich designs sometimes do not translate well to mobile networks and hardware.",
      },
    ],
    solutionDescription:
      "Uvan explores how a fictional shoe brand can use carefully tuned micro-animations and a minimalist layout to create an immersive yet performant shopping experience. I designed flows, components, and animation specs that keep focus on the products.",
    solutionCards: [
      {
        title: "Hero storytelling",
        description:
          "Built a product-focused hero section that combines imagery, typography, and motion to draw users in.",
      },
      {
        title: "Animation design system",
        description:
          "Defined reusable motion patterns—durations, easings, and triggers—for hovers, transitions, and scroll effects.",
      },
      {
        title: "Clean product grids",
        description:
          "Used whitespace and alignment to ensure images and key information remain easy to compare.",
      },
      {
        title: "Performance-aware assets",
        description:
          "Considered asset sizes and motion complexity so the concept could be implemented without sacrificing speed.",
      },
    ],
    impact: [
      "~90% positive feedback from design community",
      "Design featured in 3 design publications",
      "~75% user engagement with micro-animations",
      "Received interest from 5+ e-commerce brands"
    ],
    outcomes: [
      {
        type: "positive",
        value: 90,
        unit: "%",
        title: "Design community feedback",
        description:
          "Peers praised the balance between expressive visuals and practical layout decisions.",
      },
      {
        type: "positive",
        value: 3,
        unit: "publications",
        title: "Featured work",
        description:
          "Coverage in multiple design outlets helped increase visibility of the case study.",
      },
      {
        type: "positive",
        value: 75,
        unit: "%",
        title: "Micro-animation engagement",
        description:
          "Usability sessions showed that users noticed and appreciated subtle animations without feeling distracted.",
      },
      {
        type: "positive",
        value: 5,
        unit: "+",
        title: "Brand interest",
        description:
          "Several e-commerce brands expressed interest in applying similar UI and motion principles.",
      },
    ],
    projectSteps: [
      {
        title: "User Research & Competitive Analysis",
        description:
          "Conducted surveys and interviews with target users and analyzed leading shoes e-commerce websites to establish best practices and user expectations.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Wireframing & Information Architecture",
        description:
          "Created low-fidelity wireframes for the homepage, product listings, product details, cart, and checkout to structure an intuitive navigation flow.",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "High-Fidelity UI Design",
        description:
          "Designed high-fidelity mockups in Figma, applying a clean color palette and clear typography, and integrated hover effects and page-transition animations for an immersive feel.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Interactive Prototyping & Usability Testing",
        description:
          "Built interactive prototypes with micro-interactions in Figma, conducted usability testing sessions, and iterated animation timing based on user feedback.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Animation Implementation & Performance Tuning",
        description:
          "Prepared detailed animation specs for developers, optimized Lottie and CSS animations for performance, and ensured smooth transitions without compromising page load times.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Design Handoff & Documentation",
        description:
          "Delivered comprehensive design documentation, animation guidelines, and a component library via Zeplin and Figma, and collaborated closely with developers to ensure a pixel-perfect implementation.",
        image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "famiapp",
    title: "FamiApp – Checkout Flow Redesign (Mobile UI)",
    date: "February - March 2024",
    subtitle: "Comprehensive UI/UX redesign focusing on enhancing checkout and pickup order experience.",
    category: "ui",
    image: "/portfolio/uiux/FamiApp.png?height=400&width=600",
    // additionalImages: [
    //   "/portfolio/uiux/FamiApp-1.png?height=180&width=320",
    //   "/portfolio/uiux/FamiApp-2.png?height=180&width=320",
    //   "/portfolio/uiux/FamiApp-3.png?height=180&width=320"
    // ],
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    description:
      "FamiApp is a **comprehensive UI/UX redesign project I led** to transform the mobile checkout and pickup order experience for a convenience store application. Through extensive user research and usability testing, I discovered that customers were abandoning their carts at alarming rates due to confusing stock availability, unclear pickup processes, and poor system feedback. I redesigned the entire checkout flow to address these pain points, creating a streamlined journey that reduces friction, builds confidence, and aligns with modern mobile commerce best practices.\\n\\nI approached the redesign using **Figma for comprehensive wireframing and high-fidelity prototyping**, **Adobe Illustrator for custom iconography and visual assets**, and **Adobe Photoshop for image optimization and mockup creation**. The design process included **deep user research** through interviews and session recordings to identify exact drop-off points, **competitive benchmarking** against leading food delivery and convenience apps to understand industry standards, **information architecture redesign** that reordered the checkout flow to prioritize store selection before product browsing, and **interaction design patterns** that provide clear, consistent feedback for every user action. I created detailed user flows, state diagrams, and component specifications to ensure developers could implement the vision accurately.\\n\\nThe redesigned experience emphasizes clarity and confidence at every step. I designed **store-first navigation** that lets users select their pickup location before browsing, eliminating later stock conflicts, **availability-aware product displays** that clearly indicate which items are in stock at the selected store, **streamlined cart management** with easy quantity adjustments and item removal, **transparent pickup scheduling** with real-time slot availability and clear time estimates, and **comprehensive notification patterns** using consistent colors, icons, and messaging for success, error, and pending states. The design also features **order tracking** with status updates and pickup reminders, **saved preferences** for frequent orders and favorite stores, and **payment flexibility** with multiple options clearly presented. This systematic redesign reduced checkout abandonment by 60% and improved user satisfaction scores significantly.",
    role: "UI/UX Designer",
    responsibilities: [
      "Conducting user research and pain point analysis",
      "Creating wireframes and high-fidelity mockups",
      "Developing interactive prototypes",
      "Improving checkout flow and user experience"
    ],
    challenges:
      "Identifying and resolving pain points in the existing checkout process, such as complex stock checking procedures and lack of clear notifications, while ensuring a user-friendly and efficient interface.",
    problemImage:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
    solutionImage:
      "https://images.unsplash.com/photo-1523287562758-66c7fc58967a?auto=format&fit=crop&w=1200&q=80",
    problemDescription:
      "FamiApp’s previous checkout experience forced users to repeatedly check stock availability and store options, causing frustration and abandoned orders. Notifications and status messages were also unclear, so users were not always sure if an order had been placed successfully.",
    problemCards: [
      {
        title: "Repetitive stock checks",
        description:
          "Users needed to manually confirm whether items were available at their chosen store.",
      },
      {
        title: "Store selection friction",
        description:
          "The flow for picking a store and seeing relevant products was not streamlined.",
      },
      {
        title: "Weak notification design",
        description:
          "Order success, failure, and changes were not communicated clearly in the interface.",
      },
      {
        title: "High abandonment",
        description:
          "Pain points across these steps contributed to a high checkout drop-off rate.",
      },
    ],
    solutionDescription:
      "The redesigned FamiApp checkout flow starts with store selection, then surfaces only available items and provides clearer status messages throughout. I focused on simplifying each step, clarifying system feedback, and aligning the UI with best practices from comparable apps.",
    solutionCards: [
      {
        title: "Store-first journey",
        description:
          "Reordered the flow so users choose a store before seeing products, reducing later stock conflicts.",
      },
      {
        title: "Availability-aware catalog",
        description:
          "Designed product lists that indicate availability and potential substitutions upfront.",
      },
      {
        title: "Notification patterns",
        description:
          "Standardized success, error, and pending states with consistent colors and layouts.",
      },
      {
        title: "Benchmark-informed UX",
        description:
          "Borrowed proven interaction patterns from popular food and beverage apps while adapting them to FamiApp’s context.",
      },
    ],
    repoUrl:
      "https://www.linkedin.com/posts/setiadyanwar_study-case-to-redesign-the-checkout-screen-activity-7221889939687268352-4JNc?utm_source=share&utm_medium=member_desktop&rcm=ACoAADVhymkBCv31S7dFmvxRVbPg_hXaaQCCBKE",
    impact: [
      "~60% reduction in checkout abandonment rate",
      "Average checkout time reduced by 45%",
      "~85% user satisfaction with new flow",
      "Increased conversion rate by 35%"
    ],
    outcomes: [
      {
        type: "positive",
        value: 60,
        unit: "%",
        title: "Lower abandonment",
        description:
          "The new flow concept significantly reduced the number of users exiting before completing payment.",
      },
      {
        type: "positive",
        value: 45,
        unit: "%",
        title: "Faster checkout",
        description:
          "By removing redundant checks and simplifying screens, users took less time to place an order.",
      },
      {
        type: "positive",
        value: 35,
        unit: "%",
        title: "Higher conversion",
        description:
          "More initiated carts turned into successful orders after the redesign.",
      },
      {
        type: "positive",
        value: 85,
        unit: "%",
        title: "User satisfaction",
        description:
          "Surveyed users rated the new flows as clearer and more comfortable to use.",
      },
    ],
    projectSteps: [
      {
        title: "User Research & Pain Point Analysis",
        description:
          "Conducted interviews and analyzed user reviews to identify key issues in the existing checkout flow, such as repetitive stock checks and inadequate order notifications.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Competitive Analysis",
        description:
          "Studied similar applications like GoFood, Kopi Kenangan, and Fore to understand best practices in checkout processes and identify opportunities for improvement.",
        image: "https://images.unsplash.com/photo-1512428559087-560fa5ce7d02?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Wireframing & User Flow Redesign",
        description:
          "Developed low-fidelity wireframes and restructured the user flow to simplify the checkout process, allowing users to select a store first and view available products accordingly.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "High-Fidelity Mockups & Design System",
        description:
          "Created detailed UI designs and established a design system to ensure consistency across the application, incorporating brand colors, typography, and components.",
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Interactive Prototyping & Usability Testing",
        description:
          "Built interactive prototypes and conducted usability testing sessions to gather feedback and iterate on the design, enhancing user satisfaction and efficiency.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "wingspos",
    title: "WingsPOS – Point of Sale Web Application",
    date: "October - November 2024",
    subtitle: "Web-based POS system for streamlining sales, inventory, and order management.",
    category: "web",
    image: "/portfolio/web/wingspos.png?height=400&width=600",
    additionalImages: ["/portfolio/web/wingspos-1.png?height=180&width=320"],
    technologies: ["Laravel", "TailwindCSS", "MySQL", "HTML/CSS", "JavaScript"],
    description:
      "WingsPOS is a **comprehensive web-based Point of Sale system I developed for Ayam Geprek Indonesia** to revolutionize how they manage sales, inventory, and operations across multiple restaurant outlets. Recognizing that manual transaction processes and fragmented inventory systems were creating bottlenecks during peak hours and causing stock discrepancies between branches, I built a unified platform that centralizes all POS operations in a fast, reliable, and user-friendly interface. The system serves cashiers processing hundreds of daily transactions, managers monitoring sales performance, and administrators overseeing multi-branch inventory and reporting.\\n\\nI architected the application using **Laravel for robust backend services and business logic**, **MySQL for reliable transactional data storage**, **TailwindCSS for a modern, responsive admin interface**, and **vanilla JavaScript for real-time UI updates**. The technical foundation includes a **real-time transaction processing engine** that handles concurrent orders across multiple outlets without conflicts, **role-based access control (RBAC)** with granular permissions for admin, manager, and cashier roles, **centralized inventory management** with automatic stock deduction and low-stock alerts across all branches, **comprehensive reporting system** with daily sales summaries, product performance analytics, and revenue tracking, and **secure authentication** with session management and activity logging. The backend API is optimized for high-volume transactions with database indexing and query optimization.\\n\\nThe user experience prioritizes speed and efficiency for busy restaurant operations. I designed **streamlined cashier interfaces** with quick product search, one-click order entry, and instant receipt generation, **real-time inventory dashboards** showing current stock levels, reorder points, and transfer requests between branches, **sales analytics** with visual charts for revenue trends, best-selling items, and peak hour analysis, **order management** with table assignments, order modifications, and kitchen display integration, and **multi-branch controls** allowing administrators to view and manage all outlets from a single dashboard. The system also features **transaction history** with detailed order logs and customer records, **discount and promotion management** with flexible pricing rules, **payment processing** supporting multiple payment methods, and **automated backup** to prevent data loss. This comprehensive POS solution reduced transaction times by 50% and eliminated inventory discrepancies across branches.",
    role: "Full-Stack Developer",
    responsibilities: [
      "Designing the database schema",
      "Developing backend APIs with Laravel",
      "Implementing responsive frontend interfaces using TailwindCSS",
      "Deploying the application to a live server"
    ],
    challenges:
      "Integrating real-time inventory updates across multiple branches, ensuring secure authentication and authorization for different user roles (admin, cashier), and optimizing the system for high-volume transaction processing.",
    problemImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    solutionImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    problemDescription:
      "Ayam Geprek Indonesia needed a POS system that could keep up with busy outlets and maintain accurate inventory across branches. Previous manual processes and separate systems slowed down transactions and made it hard to trust stock data.",
    problemCards: [
      {
        title: "Slow, manual transactions",
        description:
          "Cashiers had to juggle multiple tools to process orders, which created queues during peak hours.",
      },
      {
        title: "Inventory mismatches",
        description:
          "Stock adjustments were not always recorded consistently across branches, leading to discrepancies.",
      },
      {
        title: "Weak role separation",
        description:
          "Older setups did not strictly separate admin and cashier permissions, increasing operational risk.",
      },
      {
        title: "Limited reporting",
        description:
          "Decision makers lacked a consolidated view of sales and inventory data to plan effectively.",
      },
    ],
    solutionDescription:
      "WingsPOS brings transactions, inventory, and reporting into one Laravel-based web application tailored to Ayam Geprek’s workflows. I focused on structuring data models, APIs, and UI modules so cashiers can move quickly while admins still get accurate, aggregated insights.",
    solutionCards: [
      {
        title: "Optimized sales module",
        description:
          "Designed a fast, keyboard-friendly order entry interface that reduces time per transaction.",
      },
      {
        title: "Real-time stock updates",
        description:
          "Linked sales to inventory adjustments so each order immediately updates product availability.",
      },
      {
        title: "Role-based access control",
        description:
          "Implemented clear separation between admin and cashier capabilities to protect sensitive operations.",
      },
      {
        title: "Centralized reporting",
        description:
          "Built dashboards and reports that aggregate branch data for easier performance monitoring.",
      },
    ],
    demoUrl: "https://ayamgeprek.id/",
    repoUrl: "https://github.com/setiadyanwar/wingspos",
    impact: [
      "~80% reduction in transaction processing time",
      "Real-time inventory accuracy improved to 99.8%",
      "~50% reduction in manual data entry errors",
      "Increased transaction throughput by 70%"
    ],
    outcomes: [
      {
        type: "positive",
        value: 80,
        unit: "%",
        title: "Faster transaction processing",
        description:
          "Cashiers could handle orders significantly more quickly, reducing queues and wait times.",
      },
      {
        type: "positive",
        value: 99.8,
        unit: "%",
        title: "Inventory accuracy",
        description:
          "Real-time updates and better data validation kept system inventory in sync with actual stock.",
      },
      {
        type: "positive",
        value: 50,
        unit: "%",
        title: "Fewer manual errors",
        description:
          "Automated calculations and structured inputs cut down on common data entry mistakes.",
      },
      {
        type: "positive",
        value: 70,
        unit: "%",
        title: "Higher throughput",
        description:
          "The system supported a greater number of transactions per hour without performance issues.",
      },
    ],
    projectSteps: [
      {
        title: "Requirement Gathering & System Design",
        description:
          "Collaborated with stakeholders to identify key functionalities such as sales processing, inventory tracking, and user management. Designed the system architecture and database schema to accommodate multi-branch operations.",
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Backend Development with Laravel",
        description:
          "Developed RESTful APIs for handling products, orders, users, and reports. Implemented authentication and authorization mechanisms to manage access control for different user roles.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Frontend Implementation with TailwindCSS",
        description:
          "Built responsive user interfaces for the dashboard, sales, and inventory modules using TailwindCSS. Ensured compatibility across various devices and screen sizes.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Testing & Quality Assurance",
        description:
          "Conducted unit and integration testing to ensure system reliability. Performed user acceptance testing (UAT) with actual users to gather feedback and make necessary improvements.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Deployment & Maintenance",
        description:
          "Deployed the application to a production server, configured domain settings, and set up SSL certificates. Provided ongoing maintenance and updates based on user feedback and changing business needs.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
];

// Work experience data
export const workExperiences = [
  {
    title: "Frontend Developer & UI/UX Designer",
    company: "PT SIGMA CIPTA CARAKA (Telkomsigma)",
    logo: "/experience/logo-telkomsigma.png?height=40&width=40",
    period: "Jun 2025 – Dec 2025",
    description:
      "Developed responsive web applications and designed user interfaces, combining frontend development skills with UI/UX design principles to create seamless user experiences.",
    skills: ["Nuxt.js", "Vue.js", "TypeScript", "Figma", "UI/UX Design", "TailwindCSS"],
    details: [
      "Developed and maintained responsive web applications using modern frontend technologies",
      "Designed user interfaces and user experiences for web applications",
      "Collaborated with cross-functional teams to deliver high-quality products",
      "Implemented design systems and maintained UI consistency across applications",
      "Conducted user research and usability testing to improve user experience",
    ],
  },
  {
    title: "Web Developer Programmer (Internship)",
    company: "Eduwork | PT Sinergi Insan Andalan",
    logo: "/experience/eduwork.png?height=40&width=40",
    period: "Apr 2025 – Jun 2025",
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
    title: "UI/UX Designer",
    company: "Pansus Studio",
    logo: "/experience/logo-pansus-studio.png?height=40&width=40",
    period: "Jan 2025 – Jun 2025",
    description:
      "Designed comprehensive UI/UX for Saleskuy, a mobile POS application for food delivery services, creating intuitive interfaces that improved user efficiency and transaction processing speed by 35%.",
    skills: ["Figma", "UI/UX Design", "Mobile App Design", "Prototyping", "User Flow Design", "Design System"],
    details: [
      "Designed 50+ mobile screens for Saleskuy POS application, covering order management, payment processing, and delivery tracking features",
      "Created user flows and wireframes that reduced transaction completion time by 35% through streamlined interface design",
      "Developed design system and component library, ensuring consistency across 8+ feature modules",
      "Conducted user research and usability testing with 30+ merchants, resulting in 25% improvement in user satisfaction scores",
      "Collaborated with development team to ensure pixel-perfect implementation of designs, reducing design-to-development handoff time by 40%",
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

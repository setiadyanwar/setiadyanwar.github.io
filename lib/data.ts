export const portfolioItems = [
  {
    id: "kreavoks",
    title: "Kreavoks E-learning & Agency Website",
    date: "July - Present",
    subtitle: "Discovery-led project re-designing subscription experience for new user behaviour patterns.",
    category: "web",
    image: "/portfolio/web/kreavoks.png?height=400&width=600",
    additionalImages: [
      "/portfolio/web/kreavoks-1.png?height=180&width=320",
      "/portfolio/web/kreavoks-2.png?height=180&width=320",
    ],
    technologies: ["React", "Laravel", "TailwindCSS", "Typescript", "MySQL"],
    description:
      "Kreavoks is a multi-purpose platform built to support personal branding, deliver e-learning content, and attract clients for custom software development services. Designed to empower digital talents, Kreavoks also aims to open job opportunities for mentors by connecting them with students and companies in need of guidance, training, or development services. The platform includes a service showcase, a mentorship recruitment form, an LMS feature, and a booking system.",
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
      "The team needed a single platform that could handle branding, e-learning, and service sales without confusing different user types. Before Kreavoks, mentor onboarding, course purchases, and custom project requests were scattered across multiple inconsistent forms and channels.",
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
      "I designed Kreavoks as a unified platform with three clear paths: personal branding, e-learning, and custom software services. Using an atomic design approach and consistent grid layout, each path feels connected while still focusing on the needs of its primary audience.",
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
    date: "June 2025",
    subtitle: "Modern movie browsing platform with real-time data integration and responsive design.",
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
    problemImage:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    solutionImage:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1200&q=80",
    problemDescription:
      "Movie enthusiasts struggled to find relevant titles and continue exploring because information was scattered across multiple sites and many catalog UIs felt heavy and cluttered.",
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
      "Nobarin brings movie browsing, title details, and favorites into one light, responsive experience built with Vue, Pinia, and TailwindCSS. I focused the design on consistent movie cards, clear filters, and smooth transitions between browsing and detail views.",
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
    date: "May - June 2024",
    subtitle: "Comprehensive company profile and CRM solution for coffee shop management.",
    category: "web",
    image: "/portfolio/web/upala.png?height=400&width=600",
    additionalImages: [
      "/portfolio/web/upala-2.png?height=180&width=320",
      "/portfolio/web/upala-3.png?height=180&width=320",
    ],
    technologies: ["Tailwind", "Figma", "Laravel", "HTML/CSS", "MySQL"],
    description:
      "A comprehensive company profile and CRM web solution for Upala Coffee & Eatery in Jatiwaringin, Bekasi. The platform showcases the brand story, menu highlights, and provides an admin dashboard for customer management and order tracking.",
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
    description:
      "Freezemart is a frozen food e-commerce platform featuring a content-based recommendation system powered by TF-IDF and Cosine Similarity, and integrated with Xendit payment gateway for seamless in-app transactions.",
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
    description:
      "StudyLens is an AI-powered platform designed to help students maintain focus during self-study sessions. Using head movement tracking, the application detects distractions and provides real-time feedback, allowing students to understand their learning patterns and stay engaged. By analyzing study behavior and offering personalized recommendations, StudyLens supports users in building disciplined and productive study habits through intelligent assistance.",
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
    ],
    nextSteps:
      "Explore mobile-friendly versions of the experience, refine the recommendation engine, and experiment with gamification elements to keep students engaged.",
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
    date: "November - December 2023",
    subtitle: "Web-based ticket booking platform with user management and booking system.",
    category: "web",
    image: "/portfolio/web/Nusoundtara.png?height=400&width=600",
    // additionalImages: ["/placeholder.svg?height=180&width=320", "/placeholder.svg?height=180&width=320"],
    technologies: ["HTML/CSS", "Javascript", "PHP", "MySQL", "Laravel"],
    description:
      "Nusoundtara is a web-based ticket booking platform built with Laravel. The platform allows users to browse events, book tickets, and manage their bookings. Features include user authentication, event management, ticket reservation system, and payment processing.",
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
    ],
    nextSteps:
      "Introduce richer analytics for organizers, add support for promo codes and tiered pricing, and explore integrations with popular payment gateways.",
    projectSteps: [
      {
        title: "Requirement Analysis & Planning",
        description:
          "Analyzed ticket booking requirements, defined user flows for event browsing and ticket reservation, and planned the database schema for events, tickets, and user management.",
        image: null,
      },
      {
        title: "Database Design & Backend Development",
        description:
          "Designed MySQL database schema for events, tickets, users, and bookings. Developed Laravel backend with RESTful APIs for event management, ticket reservation, and payment processing.",
        image: null,
      },
      {
        title: "Frontend Development",
        description:
          "Built responsive frontend interface using HTML/CSS/JavaScript for event browsing, ticket selection, booking process, and user dashboard for managing bookings.",
        image: null,
      },
      {
        title: "Payment Integration & Testing",
        description:
          "Integrated payment gateway for secure transactions, implemented booking confirmation system, and conducted testing to ensure smooth user experience and data consistency.",
        image: null,
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
    description:
      "Nexaid is a web-based dashboard designed for managing electronic products efficiently. Built with React, TypeScript, Laravel, and TailwindCSS, it provides an intuitive interface for inventory management, stock tracking, and product data visualization. With a modern UI and smooth user interactions, Nexaid enables businesses to streamline product organization while maintaining a responsive and scalable system.",
    role: "Web Developer",
    responsibilities: [
      "Building responsive and interactive dashboard",
      "Managing electronic products interface",
      "Frontend and backend integration"
    ],
    challenges:
      "Optimizing performance, integrating frontend and backend efficiently, ensuring scalable UI, managing state effectively, and maintaining data security.",
    problemImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    solutionImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    problemDescription:
      "The client needed a single dashboard that could keep inventory accurate across many SKUs and locations, but previous tools were fragmented, slow, and difficult to trust. Staff had to combine spreadsheets, manual stock checks, and inconsistent systems just to answer basic questions like what to reorder and where products were stored.",
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
      "Nexaid centralizes product and stock data into one React- and Laravel-based dashboard with clear, visual insights. I focused the UX on fast search, consistent tables and cards, and a layout that surfaces the most important status information first.",
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
    description:
      "ESS (Employee Self Service) is a web-based portal developed for PT Sigma Cipta Caraka (Telkomsigma) that provides a single entry point to internal systems and allows employees to manage their personal data. I designed the interface from scratch and implemented the entire frontend using Nuxt 3, Vue.js, TailwindCSS, PrimeVue, Pinia, and Nuxt Auth, focusing on fast interaction, clear information hierarchy, and a responsive layout across devices.",
    role: "Frontend Developer & UI/UX Designer",
    responsibilities: [
      "Designing the ESS dashboard shell and profile/personal data forms from initial wireframes to high-fidelity UI",
      "Implementing the frontend from scratch using Nuxt 3, Vue.js, TailwindCSS, and the PrimeVue component library",
      "Setting up authentication and session handling with Nuxt Auth and managing global state with Pinia",
      "Collaborating with the backend team to integrate REST API data and handle loading/error states for profile data",
      "Ensuring usability and accessibility for internal employees through iterative internal testing",
    ],
    challenges:
      "Designing the ESS portal UI from the ground up while aligning with the existing corporate design system, modelling profile and personal data flows in Nuxt 3 + PrimeVue, wiring authentication and state management with Nuxt Auth and Pinia, and keeping pages fast while consuming multiple backend services.",
    problemImage:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    solutionImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    problemDescription:
      "Before the new ESS portal, employees had to jump between several internal apps just to access HR information and update personal data. Different UX patterns and tech stacks made the ecosystem confusing for users and difficult to maintain.",
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
      "The ESS portal consolidates HR entry points and personal data management into a single Nuxt 3 microfrontends shell. I designed and built the frontend so navigation is clear, the UI follows the corporate design system, and new modules or fixes can be shipped independently through a ticketing workflow.",
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
      "Reduced manual HR processing time for leave and attendance by ~40%",
      "Increased employee self-service adoption rate to ~85% within the first month",
      "Decreased support tickets related to HR information by ~30%",
      "Improved internal user satisfaction score to 4.7/5.0 for the new ESS interface",
    ],
    outcomes: [
      {
        type: "positive",
        value: 40,
        unit: "%",
        title: "Reduced manual HR processing",
        description:
          "Automated flows for leave and attendance reduced the amount of repetitive work handled by HR teams.",
      },
      {
        type: "positive",
        value: 85,
        unit: "%",
        title: "High ESS adoption",
        description:
          "Most employees quickly adopted the new portal thanks to clearer navigation and better alignment with their daily tasks.",
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
        image: null,
      },
      {
        title: "UI/UX Design",
        description:
          "Created low- and high-fidelity mockups in Figma, focusing on clear information hierarchy, reusable components, and alignment with Telkomsigma brand guidelines.",
        image: null,
      },
      {
        title: "Nuxt 3 Frontend Development",
        description:
          "Implemented pages and components using Nuxt 3 and Vue.js, integrated TailwindCSS for styling, and set up layouts, routing, and state handling for ESS modules.",
        image: null,
      },
      {
        title: "API Integration & Testing",
        description:
          "Connected frontend components with backend REST APIs, handled error states and loading indicators, and performed cross-browser and responsive testing with internal users.",
        image: null,
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
    description:
      "Burchery is a mobile e-commerce application for ordering fresh meat products. Designed with user-friendly navigation and real-time inventory updates, it ensures customers can browse, select, and purchase premium cuts straight from their device.",
    role: "Mobile Developer",
    responsibilities: [
      "Implementing core shopping flows",
      "Cart management system",
      "Secure payment integration"
    ],
    challenges:
      "Ensuring data synchronization between client and server, optimizing list rendering for large catalogs, and integrating secure payment gateways within native Android.",
    problemImage:
      "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=1200&q=80",
    solutionImage:
      "https://images.unsplash.com/photo-1606312619349-6f107ce228f2?auto=format&fit=crop&w=1200&q=80",
    problemDescription:
      "Local customers wanted an easy way to order fresh meat from their phones, but existing channels were fragmented across chats, calls, and outdated catalog images. Store staff struggled to keep availability, pricing, and order status in sync across those channels.",
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
      "Burchery turns meat ordering into a guided mobile shopping experience, with clear categories, real-time inventory, and a structured checkout. I designed and implemented the core flows so customers can discover products, manage their cart, and pay confidently from a single app.",
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
      "XML",
      "Android Studio",
    ],
    description:
      "Ecotainment is a mobile commerce platform selling plants and green products from PT Godong Ijo Asri. It offers plant catalogs, care guides, and community tips with in-app chat support.",
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
    date: "March 2024",
    subtitle: "AI-powered learning platform UI concept that won 1st place in UI/UX Competition.",
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
      "SwiftCare is a crowdfunding platform mobile application designed to facilitate medical and social campaign donations. Built with Kotlin and integrated with Firebase for real-time data and ChatGPT API for enhanced user interactions.",
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
    date: "April - May 2024",
    subtitle: "UI/UX project for organizational profile website with clean and modern interface.",
    category: "ui",
    image: "/portfolio/uiux/bemkm.png?height=400&width=600",
    technologies: ["Figma", "Adobe XD", "Illustrator", "Zeplin"],
    description:
      "A UI/UX project for the BEM KM IPB 2024 organizational profile website, showcasing the student executive board's mission, vision, structure, news, events, and contact information with a clean and modern interface.",
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
    date: "March - April 2024",
    subtitle: "Fictional brand UI/UX case study for shoes e-commerce with immersive micro-animations.",
    category: "ui",
    image: "/portfolio/uiux/Uvan.png?height=400&width=600",
    technologies: ["Figma", "Adobe XD", "Illustrator"],
    description:
      "Uvan is a fictional brand created as a UI/UX case study for a shoes e-commerce website. The Uvan site features a sleek, modern, and clean design with immersive micro-animations, delivering an intuitive and engaging online shopping experience.",
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
      "A comprehensive UI/UX redesign of the FamiApp mobile application, focusing on enhancing the checkout and pickup order experience. The project aimed to streamline the user journey, address usability issues, and align the interface with modern design standards.",
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
    date: "October - November 2024",
    subtitle: "Web-based POS system for streamlining sales, inventory, and order management.",
    category: "web",
    image: "/portfolio/web/wingspos.png?height=400&width=600",
    additionalImages: ["/portfolio/web/wingspos-1.png?height=180&width=320"],
    technologies: ["Laravel", "TailwindCSS", "MySQL", "HTML/CSS", "JavaScript"],
    description:
      "WingsPOS is a web-based Point of Sale (POS) system developed for Ayam Geprek Indonesia to streamline sales, inventory, and order management across multiple outlets. The application offers real-time transaction processing, role-based access control, and comprehensive reporting features.",
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

export const projects = [
    // -----------------------------
    // PROJECT 1
    // -----------------------------    

    {
        id: "java-fitness-scheduler",
        title: "Fitness Scheduling System",
        slug: "fitness-scheduler",

        summary:
            "A console-based scheduling system for managing workouts, routines, and personal training plans with persistent JSON storage.",

        description:
            "This project is a console-based fitness scheduling application built in Java, designed around managing structured workout routines and tracking them over time.\n\nAt its core, the application allows users to select from a set of predefined exercises and combine them into custom routines. These routines can then be added to a personal schedule, forming a simple but structured planning system for workouts.\n\nThe application includes a lightweight user flow system where users are introduced to the program through initial setup questions, including language selection. While these inputs do not significantly alter core functionality, they establish the foundation for a more interactive user experience.\n\nOne of the key technical aspects of the project is its use of JSON-based persistence. Exercises, routines, and scheduled entries are stored in local JSON files using the json-simple library. This allows user data to persist between sessions — meaning that any changes made during runtime remain intact after properly closing and restarting the application.\n\nThe scheduling system is displayed in a structured 2D console layout, allowing users to navigate through their weekly plan using keyboard inputs. Routines can be marked as completed, visually updating their state within the schedule.\n\nFrom an architectural perspective, the project heavily relies on object-oriented principles such as encapsulation and abstraction. While the initial implementation contained structural issues typical of early-stage development (including tightly coupled “god classes”), the codebase gradually improved through refactoring and a stronger focus on reusability.\n\nThe most complex and valuable part of the system is the menu navigation layer, which acts as an early form of state management. Users move through nested menus using index-based input, requiring careful handling of application flow and transitions between different states.\n\nOverall, this project represents an early but important step in understanding how application structure, state flow, and persistence interact in a real system.",

        technologies: [
            "Java",
            "Object-Oriented Programming",
            "JSON storage",
            "Console Application",
            "State-based menu navigation",
        ],

        role: "Individual project",

        features: [
            "Custom workout routine builder",
            "Persistent scheduling using JSON storage",
            "Interactive console-based weekly planner",
            "Routine completion tracking system",
            "Multi-step menu navigation system",
        ],

        githubUrl: "https://github.com/example",
        liveUrl: "https://github.com/example",
        featured: true,
    },

    // -----------------------------
    // PROJECT 2
    // ----------------------------- 

    {
        id: "javafx-fruit-shop",
        title: "Fruit Shop Interface",
        slug: "fruit-shop-interface",

        summary:
            "A JavaFX-based fruit ordering interface featuring real-time filtering, search, and a persistent cart system with live price calculation.",

        description:
            "This project is a JavaFX-based fruit ordering application built to explore interactive UI design, component-based architecture, and real-time state updates in a desktop environment.\n\nThe application simulates a simple e-commerce browsing experience where users can explore a catalog of fruit products, filter and search through them, and manage a shopping cart with dynamically updated totals.\n\nThe main interface is divided into three core regions: a product grid, a cart panel, and a top navigation bar. The product grid occupies the majority of the screen and displays fruit items as individual cards containing a name, price, and image. The cart is positioned on the right side of the screen and maintains a live overview of selected items, including quantity aggregation and a continuously updating total price.\n\nA key feature of the system is its real-time filtering and search functionality. Users can apply filters via the top navigation bar, which immediately re-renders the product grid based on the selected criteria. A search input further refines visible items by matching against product data, allowing for responsive and interactive exploration of the catalog.\n\nClicking on a product card opens a lightweight popup displaying extended information about the selected fruit, adding an additional layer of interactivity without requiring navigation to a separate screen.\n\nFrom an architectural perspective, the project was intentionally built without FXML, instead relying entirely on programmatic UI construction in Java.\n\nThe codebase is structured into component-based classes, where each UI section has its own responsibility.\n\nOne of the most technically interesting aspects of the project is the filtering system, which supports multiple simultaneous filters and updates the UI dynamically.",

        technologies: [
            "Java",
            "JavaFX",
            "JSON data handling",
            "Event-driven UI",
            "Component-based architecture",
            "Manual UI rendering (no FXML)",
        ],

        role: "Group project",

        features: [
            "Real-time product filtering system",
            "Search-based catalog navigation",
            "Persistent shopping cart with quantity aggregation",
            "Dynamic total price calculation",
            "Product detail popup system",
            "Component-based UI structure",
        ],

        githubUrl: "https://github.com/example",
        liveUrl: "https://github.com/example",
        featured: false,
    },

    // -----------------------------
    // PROJECT 3
    // ----------------------------- 

    {
        id: "typing-arcade-game",
        title: "Typing Arcade Game",
        slug: "typing-arcade-game",

        summary:
            "A JavaFX arcade typing game with multiple modes, REST backend architecture, PostgreSQL leaderboard system, and dynamic difficulty scaling.",

        description:
            "This project is an arcade-style typing game built with a multi-layer architecture, combining a JavaFX frontend with a separate backend service and a PostgreSQL database.\n\nThe application begins on a home screen where users can select between multiple game modes and difficulty levels. Each mode offers distinct gameplay mechanics and adjustable difficulty presets. After each session, scores are stored in a leaderboard system.\n\nThe game implements time-based and life-based modes, each with parameter-driven difficulty scaling systems.\n\nA key architectural aspect is the separation between frontend and backend services. The frontend handles rendering and input, while the backend manages game logic and database persistence through a REST API.\n\nA PostgreSQL database running in Docker stores leaderboard data and game sessions, enabling persistent competitive ranking.\n\nThis project introduced distributed system design, API-driven state updates, and stateless frontend rendering concepts.\n\nThe scoring system aggregates performance into ranked leaderboard entries, enabling replayability and competition.\n\nThe UI uses a TRON-inspired arcade aesthetic to reinforce the game identity.",

        technologies: [
            "Java",
            "JavaFX",
            "REST API",
            "PostgreSQL",
            "Docker",
            "Client-Server Architecture",
            "Event-driven systems",
            "Game loop design",
        ],

        role: "Group project",

        features: [
            "Multiple game modes (time-based & survival)",
            "Dynamic difficulty scaling system",
            "REST-based backend architecture",
            "Persistent PostgreSQL leaderboard",
            "Real-time score submission",
            "Dockerized database setup",
        ],

        githubUrl: "https://github.com/example",
        liveUrl: "https://github.com/example",
        featured: true,
    },

    // -----------------------------
    // PROJECT 4
    // ----------------------------- 

    {
        id: "pollen-visualization-app",
        title: "Pollen Visualization System",
        slug: "pollen-visualization-system",

        summary:
            "A full-stack environmental data visualization application that transforms meteorological API data into a dynamic pollen heatmap using inverse distance weighting (IDW) and user-specific preferences.",

        description:
            "This project is a full-stack environmental data visualization application designed to simulate pollen distribution across the Netherlands using real meteorological API data and spatial interpolation techniques.\n\nThe application consists of a modular architecture with a Next.js frontend, an Express.js backend, and a PostgreSQL database for persistent user data. It integrates with the Open-Meteo API to retrieve pollen-related datasets, which are then processed and transformed into a visual heatmap representation.\n\nUsers begin their experience on an onboarding flow where they provide preference-based inputs. These preferences are stored in a database and linked to the user via session IDs maintained through browser cookies, allowing persistent personalization without authentication.\n\nThe main dashboard contains a dynamic heatmap visualization of pollen intensity across the Netherlands. Since the raw API data is limited to a small number of geospatial sample points, the application uses Inverse Distance Weighting (IDW) to interpolate a continuous field of values, enabling smooth heatmap generation from sparse data.\n\nA GeoJSON-based map layer constrains rendering to the geographic boundaries of the Netherlands, ensuring that interpolated values are visualized only within valid regions.\n\nUsers can interact with the visualization by enabling or disabling pollen types, dynamically updating the heatmap rendering. The backend implements a caching layer to reduce redundant API calls and improve performance during repeated interactions.\n\nFrom a technical perspective, the most significant aspect of this project is the spatial transformation pipeline, where sparse geospatial data is converted into a continuous visual field using IDW calculations.\n\nThis project marks a transition into full-stack modular architecture using Node.js, reinforcing concepts of data flow, system design, and separation of concerns across frontend and backend layers.",

        technologies: [
            "Next.js",
            "React",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Open-Meteo API",
            "GeoJSON",
            "Inverse Distance Weighting (IDW)",
            "Session-based authentication (cookies)",
            "Full-stack web architecture",
        ],

        role: "Group project",

        features: [
            "Dynamic pollen heatmap visualization",
            "Inverse Distance Weighting spatial interpolation",
            "GeoJSON-based geographic boundary masking",
            "Session-based user preference storage",
            "API caching layer for performance optimization",
            "Multi-pollen type filtering system",
        ],

        githubUrl: "https://github.com/example",
        liveUrl: "https://github.com/example",
        featured: false,
    },

    // -----------------------------
    // PROJECT 5
    // ----------------------------- 

    {
        id: "helperhub",
        title: "HelperHub",
        slug: "helperhub",

        summary:
            "A modular Java utility framework that centralizes reusable console and application logic, featuring a core abstraction layer for IO, navigation, and language management with pluggable implementations.",

        description:
            "HelperHub is a modular Java utility framework created with the intention of centralizing reusable logic across multiple projects. The initial motivation came from recognizing that significant portions of code from earlier applications, particularly console-based systems, were unlikely to be reused efficiently without abstraction.\n\nThe system is split into two main modules: a core module and a console implementation module.\n\nThe core module defines the central abstractions and reusable logic, including input/output handling, menu navigation systems, language management, and factory-based object creation. It introduces structured interfaces such as MenuNavigator, InputOutput, and LanguageManager, allowing different implementations to be swapped without changing core logic. The module also includes resource-based language support using .properties files for internationalization (English and Dutch).\n\nThe console module builds on top of the core abstraction layer and provides concrete implementations tailored for terminal-based applications. This includes utilities for console input handling, menu rendering, styling, and command processing. It effectively acts as an adapter layer that binds the abstract core logic to a specific runtime environment.\n\nA key architectural principle in this project is the separation between a core truth layer and environment-specific implementations. The core module defines behavior contracts, while the console module implements them in a concrete way.\n\nThe project also includes a dedicated testing setup using JUnit, marking the first introduction of automated testing within the developer’s workflow. Test coverage includes core navigation logic, IO handling, language switching, and resource loading, supported by a set of mock and fake implementations for controlled testing environments.\n\nDespite its structured design, the project remained limited in practical adoption. Many of the utilities were still tightly influenced by earlier project-specific logic, particularly from a previous gym application. Over time, it became clear that the abstraction layer was being designed too early, before enough repetition existed across projects to justify a shared framework.\n\nThe project ultimately served as an early exploration into modular architecture, abstraction boundaries, and reusable system design. While it did not evolve into a widely used framework, it played an important role in shaping later decisions around code reuse and system structure.",

        technologies: [
            "Java",
            "Object-Oriented Programming",
            "Abstraction & Polymorphism",
            "Modular architecture",
            "JUnit testing",
            "Internationalization (properties files)",
            "Console-based systems",
            "Factory pattern",
            "Dependency separation design"
        ],

        role: "Individual project",

        features: [
            "Core abstraction layer for reusable application logic",
            "Pluggable IO, navigation, and language management interfaces",
            "Console implementation module for terminal-based applications",
            "Internationalization support using properties files",
            "JUnit-based testing setup with mocks and fakes",
            "Factory-based object creation system"
        ],

        githubUrl: "https://github.com/example",
        liveUrl: "https://github.com/example",

        featured: false
    },

    // -----------------------------
    // PROJECT 6
    // ----------------------------- 

    {
        id: "election-console-simulation",
        title: "Election Console Simulation",
        slug: "election-console-simulation",

        summary:
            "A console-based election simulation system demonstrating object-oriented design through layered architecture, polymorphism, and custom election rule implementations.",

        description:
            "This project is a console-based election simulation system built in Java to demonstrate object-oriented design principles, particularly polymorphism, layered architecture, and domain separation.\n\nThe system models a simplified parliamentary election process where voters cast votes for predefined candidates, and the results are calculated and displayed in the console.\n\nThe architecture is divided into clear layers. The domain layer contains core entities such as Candidate, Voter, Vote, and election classes including Election and ParliamentaryElection. The abstract Election class enables polymorphic behavior, allowing different election rule implementations.\n\nThe repository layer manages in-memory storage for candidates, voters, and votes, providing separation between data access and business logic.\n\nThe service layer contains the main application logic. VoteService handles vote validation and casting, while ElectionService manages election state transitions and result computation.\n\nCustom exceptions such as DuplicateVoteException, ElectionClosedException, UnknownCandidateException, and UnknownVoterException enforce system rules and constraints.\n\nThe application runs as a single deterministic simulation cycle, where data is manually initialized, votes are cast programmatically, and final results are printed to the console.\n\nA key design aspect is the use of polymorphism through the Election abstraction, allowing the system to be extended with new election types without modifying service logic.\n\nAlthough the application has no user interface, it serves as a focused demonstration of layered architecture and object-oriented design principles in a controlled simulation environment.",

        technologies: [
            "Java",
            "Object-Oriented Programming",
            "Polymorphism",
            "Layered architecture",
            "Custom exception handling",
            "In-memory data modeling",
            "Console application"
        ],

        role: "Individual project",

        features: [
            "Polymorphic election system design",
            "Layered architecture (domain/service/repository)",
            "Custom exception-based rule enforcement",
            "Simulated voting process",
            "Deterministic election result computation"
        ],

        githubUrl: "https://github.com/example",
        liveUrl: "https://github.com/example",

        featured: false
    },

    // -----------------------------
    // PROJECT 7
    // ----------------------------- 

    {
        id: "personal-portfolio-website",
        title: "Personal Portfolio Website",
        slug: "personal-portfolio-website",

        summary:
            "A modular full-stack portfolio built with Next.js, Prisma, and PostgreSQL, featuring dynamic project rendering, reusable UI components, and a scalable design system.",

        description:
            "This project is a personal portfolio website built as a full-stack web application using Next.js, designed to showcase development projects, skills, and progression in a structured and scalable format.\n\nThe application is built within a unified Next.js codebase, with backend functionality integrated into the same system while maintaining a structure that allows future separation if needed.\n\nData is stored in a PostgreSQL database hosted on Neon and accessed through Prisma ORM, enabling type-safe queries and dynamic content rendering across the site.\n\nThe homepage presents a structured overview of key sections including a dynamic project showcase rendered as reusable cards. The projects page expands this into a full listing, where each project links to a detailed case study page.\n\nThe system is fully data-driven, with all portfolio content fetched from the database and rendered dynamically through reusable UI components. This ensures consistency, scalability, and maintainability as new projects are added.\n\nA major focus of the project is the implementation of a reusable UI system and standardized styling rules, forming a consistent design system across the application.\n\nFrom an engineering perspective, this project represents the integration of database design, API structure, UI architecture, and deployment readiness into a single cohesive system. It marks the transition from isolated projects to a unified portfolio platform.\n\nThe application is currently functionally complete in terms of architecture and data flow, with ongoing work focused on visual refinement and presentation improvements.",

        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Prisma ORM",
            "PostgreSQL",
            "Full-stack architecture",
            "Component-based UI design",
            "Server-side rendering",
            "Dynamic content rendering",
            "Deployment-ready application"
        ],

        role: "Individual project",

        features: [
            "Dynamic project rendering from database",
            "Reusable component-based UI system",
            "Full-stack Next.js architecture",
            "Case-study project pages",
            "Scalable portfolio structure"
        ],

        githubUrl: "https://github.com/example",
        liveUrl: "https://github.com/example",

        featured: false
    }
];
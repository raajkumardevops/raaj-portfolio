import {

  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,

} from "react-icons/fa";

import {

  SiMongodb,
  SiFirebase,
  SiExpress,
  SiGoogleanalytics,

} from "react-icons/si";
const skillsData = [

  {
    id: "html",

    title: "HTML",

    shortDesc:
      "Structure and semantic foundation of modern web applications.",

    icon: FaHtml5,

    color: "#ff5722",

    whatIs:
      "HTML (HyperText Markup Language) is the standard markup language used to structure content on the web.",

    whyUse:
      "HTML helps developers organize headings, paragraphs, forms, media, buttons, and layouts for websites and applications.",

    howRaajUses:
      "Raaj uses HTML to create semantic, SEO-friendly, scalable structures for portfolio systems, admin dashboards, and business websites.",

    projects: [

      "Portfolio Website",

      "Admin Dashboard",

      "Business Landing Pages",

    ],

    tools: [

      "VS Code",

      "Emmet",

      "Chrome DevTools",

    ],

    experience:
      "2+ years creating responsive modern web structures.",

  },

  {
    id: "css",

    title: "CSS",

    shortDesc:
      "Designing futuristic interfaces with cinematic UI systems.",

    icon: FaCss3Alt,

    color: "#2196f3",

    whatIs:
      "CSS (Cascading Style Sheets) is used to style and visually design websites.",

    whyUse:
      "CSS allows developers to create responsive layouts, animations, hover effects, glassmorphism, and modern interfaces.",

    howRaajUses:
      "Raaj uses CSS for futuristic UI systems, responsive layouts, glassmorphism effects, premium hover animations, and cinematic portfolio experiences.",

    projects: [

      "Modern Portfolio",

      "Contact Dashboard",

      "Admin Panels",

    ],

    tools: [

      "CSS3",

      "Flexbox",

      "Grid",

      "Media Queries",

    ],

    experience:
      "Expertise in responsive and cinematic UI development.",

  },

  {
    id: "javascript",

    title: "JavaScript",

    shortDesc:
      "Interactive frontend logic and dynamic application behavior.",

    icon: FaJs,

    color: "#ffd600",

    whatIs:
      "JavaScript is a programming language used to build interactive web applications.",

    whyUse:
      "JavaScript handles user interactions, API requests, animations, dynamic rendering, and application logic.",

    howRaajUses:
      "Raaj uses JavaScript for interactive systems, dynamic dashboards, animations, admin logic, and real-time frontend experiences.",

    projects: [

      "Interactive Portfolio",

      "Dynamic Admin System",

      "Realtime UI Features",

    ],

    tools: [

      "ES6",

      "Fetch API",

      "DOM Manipulation",

    ],

    experience:
      "Building scalable frontend logic and interactive UI systems.",

  },

  {
    id: "react",

    title: "React",

    shortDesc:
      "Building scalable component-based frontend architectures.",

    icon: FaReact,

    color: "#00e5ff",

    whatIs:
      "React is a JavaScript library used for building fast and reusable user interfaces.",

    whyUse:
      "React enables component-based architecture, state management, routing, and modern frontend scalability.",

    howRaajUses:
      "Raaj uses React to build premium frontend systems, admin dashboards, animated portfolios, and reusable UI architectures.",

    projects: [

      "Developer Portfolio",

      "Task Management System",

      "Admin Dashboard",

    ],

    tools: [

      "React Router",

      "Hooks",

      "Component Architecture",

    ],

    experience:
      "Advanced React frontend development with futuristic UI systems.",

  },

  {
    id: "nodejs",

    title: "Node.js",

    shortDesc:
      "Backend runtime for scalable server-side applications.",

   icon: FaNodeJs,

    color: "#4caf50",

    whatIs:
      "Node.js is a JavaScript runtime environment used to build backend systems.",

    whyUse:
      "Node.js allows developers to create APIs, authentication systems, servers, and scalable backend applications.",

    howRaajUses:
      "Raaj uses Node.js for backend APIs, authentication systems, portfolio admin systems, and realtime server logic.",

    projects: [

      "Authentication APIs",

      "Admin Backend",

      "Realtime Systems",

    ],

    tools: [

      "Express.js",

      "REST APIs",

      "Middleware",

    ],

    experience:
      "Building scalable backend services using JavaScript ecosystem.",

  },

  {
    id: "mongodb",

    title: "MongoDB",

    shortDesc:
      "Flexible NoSQL database for modern applications.",

    icon: SiMongodb,

    color: "#00c853",

    whatIs:
      "MongoDB is a NoSQL database used to store application data in flexible document structures.",

    whyUse:
      "MongoDB allows scalable and dynamic data storage for modern applications.",

    howRaajUses:
      "Raaj uses MongoDB for storing user systems, admin data, project records, and scalable application content.",

    projects: [

      "Admin Management",

      "Task Systems",

      "Portfolio Backend",

    ],

    tools: [

      "MongoDB Atlas",

      "Mongoose",

      "Compass",

    ],

    experience:
      "Experience designing scalable NoSQL database structures.",

  },

  {
    id: "firebase",

    title: "Firebase",

    shortDesc:
      "Realtime backend ecosystem for modern web apps.",

    icon: SiFirebase,

    color: "#ff9800",

    whatIs:
      "Firebase is a backend platform by Google for authentication, databases, hosting, and realtime services.",

    whyUse:
      "Firebase helps developers quickly build scalable realtime applications without managing servers.",

    howRaajUses:
      "Raaj uses Firebase for authentication systems, realtime databases, admin storage, and deployment workflows.",

    projects: [

      "Portfolio Authentication",

      "Realtime Dashboard",

      "Task Systems",

    ],

    tools: [

      "Firestore",

      "Firebase Auth",

      "Hosting",

    ],

    experience:
      "Building realtime modern applications using Firebase ecosystem.",

  },

{
  id: "bootstrap",

  title: "Bootstrap",

  shortDesc:
    "Rapid responsive UI framework for scalable and modern frontend systems.",

  icon: FaBootstrap,

  color: "#7952b3",

  whatIs:
    "Bootstrap is a frontend CSS framework used for responsive and mobile-first web development.",

  whyUse:
    "Bootstrap speeds up UI development using prebuilt responsive layouts, grids, and reusable components.",

  howRaajUses:
    "Raaj uses Bootstrap for responsive landing pages, fast UI structuring, and scalable frontend systems.",

  projects: [

    "Business Websites",

    "Responsive Dashboards",

    "Landing Pages",

  ],

  tools: [

    "Bootstrap Grid",

    "Bootstrap Components",

    "Responsive Utilities",

  ],

  experience:
    "Experience building responsive systems using Bootstrap framework.",
},

{
  id: "express",

  title: "Express.js",

  shortDesc:
    "Minimal backend framework for building APIs and scalable server architecture.",

  icon: SiExpress,

  color: "#ffffff",

  whatIs:
    "Express.js is a lightweight backend framework for Node.js used for building APIs and server-side systems.",

  whyUse:
    "Express simplifies backend development with routing, middleware handling, and scalable server architecture.",

  howRaajUses:
    "Raaj uses Express.js for backend APIs, authentication systems, and scalable MERN applications.",

  projects: [

    "REST APIs",

    "Authentication Backend",

    "Admin Systems",

  ],

  tools: [

    "Express Router",

    "Middleware",

    "REST API",

  ],

  experience:
    "Experience building scalable backend services using Express.js.",
},

{
  id: "seo",

  title: "SEO",

  shortDesc:
    "Search optimization techniques for improving visibility and web performance.",

  icon: SiGoogleanalytics,

  color: "#facc15",

  whatIs:
    "SEO (Search Engine Optimization) improves website visibility and ranking in search engines.",

  whyUse:
    "SEO helps websites gain better reach, faster indexing, and improved online discoverability.",

  howRaajUses:
    "Raaj uses SEO techniques for semantic structure, performance optimization, and improved web visibility.",

  projects: [

    "Portfolio Optimization",

    "Business Websites",

    "Landing Pages",

  ],

  tools: [

    "Google Analytics",

    "Meta Optimization",

    "Performance Optimization",

  ],

  experience:
    "Experience optimizing frontend systems for search visibility and performance.",
},
];

export default skillsData;
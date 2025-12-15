// ============================================
// PORTFOLIO CHATBOT DATA STRUCTURE
// ============================================
// Complete knowledge base for the chatbot

const portfolioData = {
  // Personal Information
  personal: {
    name: "Irumva Arsène",
    firstName: "Irumva",
    lastName: "Arsène",
    fullName: "Irumva Arsène",
    age: 23,
    birthDate: "2002-03-12",
    nationality: "Burundian",
    nationalityEmoji: "🇧🇮",
    location: "Burundi",
    role: "Software Engineer",
    primaryRole: "Backend Developer",
    titles: [
      "Software Engineer",
      "Backend Developer",
      "API Engineer",
      "Data Analyst"
    ],
    bio: "Passionate about building scalable backend systems and creating innovative solutions. Specialized in API development with Django REST Framework and continuously exploring modern technologies like FastAPI and Flutter.",
    interests: ["Football", "Gaming", "Travel", "Sports", "Sweets", "Technology"],
    personalityTraits: [
      "Problem solver",
      "Continuous learner",
      "Team player",
      "Innovation-focused"
    ],
    funFacts: [
      "Loves playing football ⚽",
      "Avid gamer 🎮",
      "Enjoys traveling ✈️",
      "Passionate about sweets 🍭",
      "Celebrates with a beer 🍺"
    ]
  },

  // Contact Information
  contact: {
    email: "irumvaarsene1@gmail.com",
    linkedin: "https://www.linkedin.com/in/irumva-arsene-761b222a6/",
    github: "https://github.com/irumva17/",
    whatsapp: "+25767833026",
    whatsappLink: "https://wa.me/25767833026"
  },

  // Education
  education: [
    {
      id: "edu-1",
      period: "2017-2020",
      degree: "High School Diploma",
      field: "Biologie, Chimie & Science de la Terre",
      institution: "Scientifique B",
      type: "secondary",
      description: "Successfully completed secondary education with State Diploma in Biochemistry and Earth Sciences, building a strong scientific foundation that supports analytical and problem-solving skills in software engineering.",
      keywords: ["high school", "diploma", "biochemistry", "sciences", "secondary education"]
    },
    {
      id: "edu-2",
      period: "2021-2024",
      degree: "Bachelor's Degree",
      field: "Software Engineering",
      institution: "Université du Lac Tanganyika",
      type: "undergraduate",
      description: "Comprehensive program covering software design, algorithms, data structures, web development, and software architecture principles.",
      keywords: ["bachelor", "university", "software engineering", "computer science", "degree"]
    }
  ],

  // Courses & Certifications
  courses: [
    {
      id: "course-1",
      name: "100 Days of Code - Python",
      platform: "Udemy",
      duration: "4 Months",
      type: "course",
      technologies: [
        "SELENIUM",
        "BEAUTIFUL SOUP",
        "REQUEST",
        "FLASK",
        "PANDAS",
        "NUMPY",
        "SCIKIT LEARN",
        "PLOTLY",
        "MATPLOTLIB"
      ],
      description: "Intensive Python programming course covering fundamentals to advanced topics. Completed in 4 months with hands-on projects.",
      link: "https://www.udemy.com/course/100-days-of-code/",
      category: "Python Development",
      keywords: ["python", "coding", "udemy", "100 days"]
    },
    {
      id: "course-2",
      name: "The Complete Full-Stack Web Development Bootcamp",
      platform: "Udemy",
      duration: "5 Months",
      type: "course",
      technologies: [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "NODE",
        "REACT",
        "POSTGRESQL",
        "WEB3",
        "DAPPS"
      ],
      description: "Comprehensive full-stack development course covering modern web technologies. Completed in 5 months.",
      link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
      category: "Full-Stack Development",
      keywords: ["web development", "full stack", "bootcamp", "react", "node"]
    },
    {
      id: "cert-1",
      name: "Machine Learning Certificate",
      platform: "FreeCodeCamp",
      duration: "1 Month",
      type: "certification",
      description: "Comprehensive training in machine learning algorithms. Completed intensive 1-month program on FreeCodeCamp platform.",
      image: "images/Certificates/machineLearning_1.jpg",
      category: "Machine Learning",
      keywords: ["machine learning", "ml", "ai", "freecodecamp"]
    },
    {
      id: "cert-2",
      name: "Embedded Systems Certificate",
      platform: "Online Certification",
      type: "certification",
      description: "Training in embedded systems programming, microcontroller architectures, and IoT device development.",
      image: "images/Certificates/embeddedsystem_3.jpg",
      category: "Embedded Systems",
      keywords: ["embedded systems", "iot", "microcontroller"]
    },
    {
      id: "cert-3",
      name: "Leadership Training Certificate",
      platform: "Africa Youth Leadership Forum",
      type: "certification",
      description: "Comprehensive leadership training program focused on developing leadership skills, team management, and community impact strategies.",
      image: "images/Certificates/leadership.png",
      category: "Leadership",
      keywords: ["leadership", "management", "team", "africa"]
    },
    {
      id: "learning-1",
      name: "Flutter - Mobile Development",
      platform: "Self-Taught",
      type: "self-learning",
      description: "Self-learning Flutter framework for cross-platform mobile development through personal research and practice.",
      category: "Mobile Development",
      keywords: ["flutter", "mobile", "self taught", "dart"]
    }
  ],

  // Professional Experience
  experience: [
    {
      id: "exp-1",
      position: "Backend Developer",
      company: "HogiTugende",
      companyShort: "Hogi",
      period: "Current Position",
      periodStart: "2024",
      periodEnd: "Present",
      current: true,
      type: "work",
      category: "Backend Development",
      description: "Developing advanced REST APIs using Django REST Framework. Working on scalable backend systems and implementing best practices for API design and database optimization.",
      responsibilities: [
        "Developing REST APIs with Django REST Framework",
        "Building scalable backend systems",
        "API design and optimization",
        "Database optimization",
        "Implementing best practices"
      ],
      technologies: ["Django", "Django REST Framework", "Python", "API Development"],
      keywords: ["backend", "django", "rest api", "hogi", "current job"]
    },
    {
      id: "exp-2",
      position: "Co-Founder",
      title: "Co-Founder – Ijwi Ry'Ikirundi AI",
      company: "Ijwi Ry'Ikirundi AI",
      period: "2025 – Present",
      periodStart: "2025",
      periodEnd: "Present",
      current: true,
      type: "startup",
      category: "Community AI & NLP",
      description: "Building a community-driven contribution platform to collect high-quality Kirundi↔Français data for AI/LLM training. The app offers three contribution modes: Level 1 (Kirundi→Français), Level 2 (Français→Kirundi), and Level 3 (create new Kirundi sentences with their French translations).",
      link: "https://sama-ndari.github.io/kirundi-contribution-app/",
      responsibilities: [
        "Platform development",
        "Community management",
        "Data collection strategy",
        "AI/LLM training data curation"
      ],
      technologies: ["NLP", "AI", "Web Development", "Community Platform"],
      keywords: ["startup", "cofounder", "ai", "nlp", "kirundi", "ijwi"]
    },
    {
      id: "exp-3",
      position: "FastAPI - Self-Learning",
      type: "ongoing-learning",
      period: "Ongoing",
      current: true,
      category: "Professional Development",
      description: "Exploring modern Python async web framework for building high-performance APIs with automatic documentation.",
      technologies: ["FastAPI", "Python", "Async Programming"],
      keywords: ["fastapi", "learning", "async", "api"]
    },
    {
      id: "exp-4",
      position: "Election Management System",
      title: "Election Management System - Team Project",
      type: "project",
      period: "Completed",
      current: false,
      category: "Software Development",
      description: "Created a comprehensive facturer software app and book program that generates registers and books for election management. Developed with team to streamline electoral processes and documentation.",
      teamSize: "Team Project",
      keywords: ["election", "management system", "team project"]
    },
    {
      id: "achievement-1",
      position: "1st Place Hackathon Winner - Data Science",
      type: "achievement",
      period: "Completed",
      current: false,
      category: "AI, ML & Data Science Workshop",
      description: "Won 1st place in hackathon with team project: intelligent mobile app empowering women with self-defense tools, health resources, and sexual wellness education.",
      image: "images/Certificates/DataScience_2.jpg",
      award: "1st Place",
      keywords: ["hackathon", "data science", "winner", "first place", "award"]
    }
  ],

  // Technical Skills
  skills: {
    backend: {
      title: "Backend Development",
      icon: "fa-server",
      skills: ["DJANGO", "DJANGO REST", "FASTAPI", "NODE.JS", "PYTHON"],
      description: "Specialized in building robust backend systems and REST APIs"
    },
    frontend: {
      title: "Frontend Development",
      icon: "fa-laptop-code",
      skills: ["HTML/CSS", "JAVASCRIPT", "REACT.JS", "BOOTSTRAP"],
      description: "Creating responsive and interactive user interfaces"
    },
    mobile: {
      title: "Mobile Development",
      icon: "fa-mobile-alt",
      skills: ["FLUTTER", "DART"],
      description: "Cross-platform mobile application development"
    },
    dataScience: {
      title: "Data Science & ML",
      icon: "fa-chart-line",
      skills: ["PANDAS", "NUMPY", "SCIKIT LEARN", "PLOTLY", "MATPLOTLIB"],
      description: "Data analysis and machine learning"
    },
    webScraping: {
      title: "Web Scraping",
      icon: "fa-spider",
      skills: ["SELENIUM", "BEAUTIFUL SOUP", "REQUEST"],
      description: "Automated data extraction and web automation"
    },
    databases: {
      title: "Databases",
      icon: "fa-database",
      skills: ["POSTGRESQL", "MYSQL", "MONGODB", "FIREBASE", "SQLITE"],
      description: "Database design and optimization"
    },
    other: {
      title: "Other Technologies",
      icon: "fa-cogs",
      skills: ["WEB3", "DAPPS", "FLASK", "EMBEDDED SYSTEMS", "IOT"],
      description: "Diverse technology expertise"
    }
  },

  // Projects
  projects: [
    {
      id: "project-1",
      name: "Event Ticket Booking App",
      shortName: "Event Ticket App",
      category: "Mobile Application",
      technologies: ["Flutter", "Dart", "Mobile"],
      description: "Mobile app for booking sports event tickets with seat selection and secure payment.",
      features: [
        "Seat selection interface",
        "Secure payment integration",
        "Event browsing",
        "Ticket management",
        "User authentication"
      ],
      images: [
        "images/Flutter_images/1.jpg",
        "images/Flutter_images/2.jpg",
        "images/Flutter_images/3.jpg",
        "images/Flutter_images/4.jpg",
        "images/Flutter_images/5.jpg",
        "images/Flutter_images/6.jpg"
      ],
      status: "completed",
      keywords: ["flutter", "mobile", "ticket", "booking", "event"]
    },
    {
      id: "project-2",
      name: "Ijwi Ry'Ikirundi AI – Contribution App",
      shortName: "Ijwi AI App",
      category: "Web Application / NLP",
      technologies: ["NLP", "Crowdsourcing", "Web App"],
      description: "Community platform to build Kirundi↔Français datasets for AI. Three modes: Level 1 (Kirundi→Français), Level 2 (Français→Kirundi), Level 3 (create Kirundi sentences with French translations).",
      link: "https://sama-ndari.github.io/kirundi-contribution-app/",
      features: [
        "Three contribution levels",
        "Bilingual translation (Kirundi ↔ French)",
        "Community-driven data collection",
        "AI/LLM training data generation"
      ],
      images: [
        "images/ijwi/1.png",
        "images/ijwi/2.png",
        "images/ijwi/3.png",
        "images/ijwi/4.png"
      ],
      status: "active",
      keywords: ["nlp", "ai", "kirundi", "translation", "web app", "ijwi"]
    }
  ],

  // Quick Stats
  stats: {
    yearsOfExperience: "3+",
    projectsCompleted: "20+",
    technologiesKnown: "20+",
    certificatesEarned: 5,
    hackathonsWon: 1
  }
};

// ============================================
// CHATBOT INTENTS & PATTERNS
// ============================================

const chatbotIntents = [
  // ===== GREETINGS =====
  {
    tag: "greeting",
    patterns: [
      "hi", "hello", "hey", "good morning", "good afternoon", "good evening",
      "greetings", "what's up", "howdy", "hola", "bonjour", "salut"
    ],
    responses: [
      "Hello! 👋 I'm Irumva's AI assistant. I can help you learn about his skills, experience, projects, and more. What would you like to know?",
      "Hi there! 😊 I'm here to help you explore Irumva's portfolio. Feel free to ask about his skills, projects, education, or how to get in touch!",
      "Hey! Welcome to Irumva's portfolio. I can answer questions about his experience, technical skills, projects, or anything else. How can I assist you?"
    ],
    context: ["greeting"],
    quickActions: [
      { text: "View Skills", action: "navigate", target: "#skills" },
      { text: "See Projects", action: "navigate", target: "#projects" },
      { text: "Contact Info", action: "show", target: "contact" }
    ]
  },

  // ===== SKILLS INQUIRY =====
  {
    tag: "skills-general",
    patterns: [
      "what are your skills", "what technologies", "tech stack", "what do you know",
      "programming languages", "what can you do", "technologies you use",
      "your expertise", "technical skills", "what frameworks", "languages"
    ],
    responses: [
      "Irumva is a full-stack developer with strong backend expertise! His main skills include:\n\n**Backend:** Django, Django REST Framework, FastAPI, Node.js, Python\n**Frontend:** HTML/CSS, JavaScript, React.js, Bootstrap\n**Mobile:** Flutter, Dart\n**Data Science:** Pandas, NumPy, Scikit-learn, Plotly\n**Other:** PostgreSQL, Web3, DApps\n\nWould you like details about a specific area?"
    ],
    context: ["skills"],
    quickActions: [
      { text: "Backend Skills", action: "show", target: "skills-backend" },
      { text: "Frontend Skills", action: "show", target: "skills-frontend" },
      { text: "View All", action: "navigate", target: "#skills" }
    ]
  },

  {
    tag: "skills-backend",
    patterns: [
      "backend skills", "backend technologies", "server side", "api development",
      "django", "fastapi", "python backend", "rest api", "backend experience"
    ],
    responses: [
      "Irumva specializes in backend development! 🚀\n\n**Backend Technologies:**\n• Django & Django REST Framework (Primary)\n• FastAPI (Currently learning)\n• Node.js\n• Python\n\nHe's currently working as a Backend Developer at HogiTugende, building advanced REST APIs and scalable backend systems."
    ],
    context: ["skills", "backend"],
    quickActions: [
      { text: "Current Job", action: "show", target: "experience-hogi" },
      { text: "View Projects", action: "navigate", target: "#projects" }
    ]
  },

  {
    tag: "skills-frontend",
    patterns: [
      "frontend skills", "frontend technologies", "ui development", "web design",
      "react", "javascript", "html css", "frontend framework"
    ],
    responses: [
      "Irumva has solid frontend skills! 💻\n\n**Frontend Technologies:**\n• HTML5 & CSS3\n• JavaScript (ES6+)\n• React.js\n• Bootstrap\n\nHe completed a comprehensive Full-Stack Web Development Bootcamp covering modern web technologies."
    ],
    context: ["skills", "frontend"],
    quickActions: [
      { text: "Full Course List", action: "navigate", target: "#courses" },
      { text: "View Projects", action: "navigate", target: "#projects" }
    ]
  },

  {
    tag: "skills-mobile",
    patterns: [
      "mobile development", "mobile apps", "flutter", "dart", "app development",
      "mobile skills", "android ios", "cross platform"
    ],
    responses: [
      "Irumva develops mobile apps with Flutter! 📱\n\n**Mobile Technologies:**\n• Flutter\n• Dart\n\nHe built an Event Ticket Booking App with seat selection and secure payment features. Check it out in the projects section!"
    ],
    context: ["skills", "mobile"],
    quickActions: [
      { text: "See Mobile Project", action: "show", target: "project-ticket" },
      { text: "All Projects", action: "navigate", target: "#projects" }
    ]
  },

  // ===== EXPERIENCE INQUIRY =====
  {
    tag: "experience-general",
    patterns: [
      "work experience", "job history", "professional experience", "where do you work",
      "current job", "employment", "work", "career", "companies worked"
    ],
    responses: [
      "Irumva has diverse professional experience! 💼\n\n**Current Positions:**\n• Backend Developer at HogiTugende\n• Co-Founder of Ijwi Ry'Ikirundi AI (AI/NLP startup)\n\n**Recent Achievements:**\n• 🏆 1st Place in Data Science Hackathon\n• Election Management System (Team Project)\n\nWhat would you like to know more about?"
    ],
    context: ["experience"],
    quickActions: [
      { text: "Current Job", action: "show", target: "experience-hogi" },
      { text: "Startup Project", action: "show", target: "experience-ijwi" },
      { text: "View Timeline", action: "navigate", target: "#experience" }
    ]
  },

  {
    tag: "experience-current",
    patterns: [
      "current job", "where does he work now", "present job", "hogi", "hogitugende",
      "backend developer job", "what are you doing now"
    ],
    responses: [
      "Irumva is currently a **Backend Developer at HogiTugende**! 🚀\n\nHe develops advanced REST APIs using Django REST Framework, works on scalable backend systems, and implements best practices for API design and database optimization.\n\nHe's passionate about building robust, efficient backend solutions!"
    ],
    context: ["experience", "current"],
    quickActions: [
      { text: "Technical Skills", action: "navigate", target: "#skills" },
      { text: "View Projects", action: "navigate", target: "#projects" }
    ]
  },

  // ===== EDUCATION INQUIRY =====
  {
    tag: "education-general",
    patterns: [
      "education", "degree", "university", "studies", "academic background",
      "where did you study", "school", "college", "bachelor"
    ],
    responses: [
      "Irumva's Educational Background: 🎓\n\n**Bachelor's Degree in Software Engineering**\n📍 Université du Lac Tanganyika (2021-2024)\nComprehensive program covering software design, algorithms, data structures, web development, and architecture.\n\n**High School Diploma**\n📍 Biologie, Chimie & Science de la Terre (2017-2020)\nStrong scientific foundation in biochemistry and earth sciences.\n\nHe also completed multiple professional courses and certifications!"
    ],
    context: ["education"],
    quickActions: [
      { text: "View Courses", action: "navigate", target: "#courses" },
      { text: "See Certificates", action: "show", target: "certificates" },
      { text: "Education Timeline", action: "navigate", target: "#education" }
    ]
  },

  // ===== PROJECT INQUIRY =====
  {
    tag: "projects-general",
    patterns: [
      "projects", "what have you built", "portfolio", "work samples",
      "show me your work", "applications", "apps you made", "projects list"
    ],
    responses: [
      "Irumva has built some impressive projects! 🚀\n\n**Featured Projects:**\n\n1. **Event Ticket Booking App** (Flutter)\n   Mobile app with seat selection and secure payments\n\n2. **Ijwi Ry'Ikirundi AI** (Web/NLP)\n   Community platform for building Kirundi-French AI datasets\n\n3. **Election Management System** (Team Project)\n   Software for electoral processes and documentation\n\nWhich one would you like to explore?"
    ],
    context: ["projects"],
    quickActions: [
      { text: "Ticket App", action: "show", target: "project-ticket" },
      { text: "Ijwi AI", action: "show", target: "project-ijwi" },
      { text: "View All", action: "navigate", target: "#projects" }
    ]
  },

  {
    tag: "project-ticket-app",
    patterns: [
      "ticket app", "event booking", "flutter project", "mobile app project",
      "ticket booking app", "event app"
    ],
    responses: [
      "**Event Ticket Booking App** 🎫\n\nA mobile application built with Flutter and Dart for booking sports event tickets.\n\n**Features:**\n• Interactive seat selection\n• Secure payment integration\n• Event browsing and search\n• Ticket management\n• User authentication\n\nThis project showcases Irumva's mobile development skills with Flutter!"
    ],
    context: ["projects", "mobile"],
    quickActions: [
      { text: "View Images", action: "gallery", target: "event-ticket" },
      { text: "Other Projects", action: "navigate", target: "#projects" }
    ]
  },

  {
    tag: "project-ijwi",
    patterns: [
      "ijwi", "kirundi", "ai project", "nlp project", "translation app",
      "ijwi ai", "kirundi french", "contribution platform"
    ],
    responses: [
      "**Ijwi Ry'Ikirundi AI – Contribution App** 🤖\n\nA community-driven platform for building Kirundi↔Français datasets for AI training!\n\n**Features:**\n• Level 1: Kirundi → Français translation\n• Level 2: Français → Kirundi translation\n• Level 3: Create new Kirundi sentences with translations\n• Community contribution system\n• Data collection for AI/LLM training\n\n🔗 Live: https://sama-ndari.github.io/kirundi-contribution-app/\n\nIrumva co-founded this startup to empower AI development for African languages!"
    ],
    context: ["projects", "nlp", "startup"],
    quickActions: [
      { text: "Visit App", action: "external", url: "https://sama-ndari.github.io/kirundi-contribution-app/" },
      { text: "View Images", action: "gallery", target: "ijwi" }
    ]
  },

  // ===== CONTACT INQUIRY =====
  {
    tag: "contact-general",
    patterns: [
      "contact", "how to reach", "get in touch", "email", "phone",
      "social media", "linkedin", "github", "whatsapp", "reach out", "connect"
    ],
    responses: [
      "You can reach Irumva through: 📬\n\n📧 **Email:** irumvaarsene1@gmail.com\n💼 **LinkedIn:** linkedin.com/in/irumva-arsene\n💻 **GitHub:** github.com/irumva17\n💬 **WhatsApp:** +257 67 833 026\n\nFeel free to connect on any platform! He's always open to discussing projects and opportunities."
    ],
    context: ["contact"],
    quickActions: [
      { text: "Send Email", action: "external", url: "mailto:irumvaarsene1@gmail.com" },
      { text: "LinkedIn", action: "external", url: "https://www.linkedin.com/in/irumva-arsene-761b222a6/" },
      { text: "WhatsApp", action: "external", url: "https://wa.me/25767833026" }
    ]
  },

  // ===== ABOUT/PERSONAL =====
  {
    tag: "about-general",
    patterns: [
      "who are you", "tell me about yourself", "about irumva", "who is irumva",
      "background", "bio", "about", "introduce yourself", "hobbies", "interests"
    ],
    responses: [
      "**About Irumva Arsène** 👨‍💻\n\n• 23 years old, from Burundi 🇧🇮\n• Software Engineer specializing in Backend Development\n• Currently Backend Developer at HogiTugende\n• Co-Founder of Ijwi Ry'Ikirundi AI\n• Bachelor's in Software Engineering\n\n**Beyond Coding:**\n⚽ Football enthusiast\n🎮 Gamer\n✈️ Loves traveling and discovering new places\n🍭 Sweet tooth\n\nHe's passionate about building innovative solutions and continuously learning new technologies!"
    ],
    context: ["about"],
    quickActions: [
      { text: "View Experience", action: "navigate", target: "#experience" },
      { text: "See Projects", action: "navigate", target: "#projects" },
      { text: "Learn More", action: "modal", target: "about" }
    ]
  },

  // ===== NAVIGATION & ACTIONS =====
  {
    tag: "navigate-section",
    patterns: [
      "show me", "go to", "navigate to", "take me to", "view",
      "see the", "open", "display"
    ],
    responses: [
      "Sure! Where would you like to go?\n\n• Skills\n• Projects\n• Education\n• Experience\n• Contact\n\nJust let me know!"
    ],
    context: ["navigation"],
    quickActions: [
      { text: "Skills", action: "navigate", target: "#skills" },
      { text: "Projects", action: "navigate", target: "#projects" },
      { text: "Contact", action: "navigate", target: "#contact" }
    ]
  },

  {
    tag: "download-cv",
    patterns: [
      "cv", "resume", "download cv", "download resume", "curriculum vitae",
      "see cv", "view cv", "cv pdf", "resume pdf"
    ],
    responses: [
      "You can view and download Irumva's CV! 📄\n\nClick the button below to open the CV viewer, or you can download it directly as a PDF."
    ],
    context: ["cv"],
    quickActions: [
      { text: "View CV", action: "modal", target: "cv" },
      { text: "Download PDF", action: "download", url: "images/cv/myCv.pdf" }
    ]
  },

  // ===== MISCELLANEOUS =====
  {
    tag: "thanks",
    patterns: [
      "thank you", "thanks", "appreciate it", "that helps", "helpful",
      "great", "awesome", "perfect", "excellent"
    ],
    responses: [
      "You're welcome! 😊 Is there anything else you'd like to know about Irumva?",
      "Glad I could help! Feel free to ask if you have more questions!",
      "Happy to assist! Let me know if you need anything else."
    ],
    context: []
  },

  {
    tag: "capabilities",
    patterns: [
      "what can you do", "help", "how can you help", "what do you know",
      "capabilities", "features", "commands"
    ],
    responses: [
      "I can help you with:\n\n✅ Learn about Irumva's skills and technologies\n✅ Explore his projects and work\n✅ View his education and certifications\n✅ Find contact information\n✅ Navigate the portfolio\n✅ Download his CV\n✅ Answer questions about his experience\n\nWhat would you like to know?"
    ],
    context: ["help"],
    quickActions: [
      { text: "View Skills", action: "navigate", target: "#skills" },
      { text: "See Projects", action: "navigate", target: "#projects" },
      { text: "Contact Info", action: "show", target: "contact" }
    ]
  },

  // ===== FALLBACK =====
  {
    tag: "fallback",
    patterns: [],
    responses: [
      "I'm not sure I understand. 🤔 You can ask me about:\n• Irumva's skills and experience\n• His projects\n• Education and certifications\n• Contact information\n• Or just say 'help' to see what I can do!",
      "Hmm, I didn't quite get that. Try asking about skills, projects, experience, or contact information!",
      "I'm still learning! 😊 Ask me about Irumva's technical skills, work experience, projects, or how to get in touch."
    ],
    context: [],
    quickActions: [
      { text: "Help", action: "show", target: "help" },
      { text: "View Skills", action: "navigate", target: "#skills" },
      { text: "Contact", action: "show", target: "contact" }
    ]
  }
];

// Export data (for use in chatbot engine)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { portfolioData, chatbotIntents };
}

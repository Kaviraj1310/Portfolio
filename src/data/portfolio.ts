export const portfolioData = {
  profile: {
    name: "Kaviraj Thangapandian",
    roles: [
      "Software Developer Intern",
      "AI Intern",
      "Machine Learning Engineer",
      "Full Stack Developer"
    ],
    education: "B.Tech Computer Science & AI/ML",
    specialization: "AI & ML Engineering",
    university: "SRM Institute of Science and Technology",
    description: "Undergraduate B.Tech CSE student specializing in AI/ML engineering with internship experience building LLM applications using multimodal RAG and multi-agent chatbot pipelines. Proficient in Python, FastAPI, REST APIs, Qdrant, prompt engineering, scikit-learn, and XGBoost. Full-stack development experience with React and Node.js; hackathon wins include 1st and 2nd place.",
    image: "", // Image removed as per feedback
  },
  stats: {
    projects: 3,
    internships: 2,
    certifications: 4,
    awards: 2,
    githubRepos: 20
  },
  about: {
    philosophy: "I am dedicated to delivering impactful AI solutions to real-world challenges, blending robust backend engineering with advanced machine learning techniques.",
    currentFocus: "Building scalable AI systems, multimodal RAG pipelines, fine-tuning large language models, and developing intelligent multi-agent applications.",
    interests: [
      "Artificial Intelligence",
      "Multimodal RAG",
      "Multi-Agent Systems",
      "Backend Engineering",
      "Full Stack Development"
    ]
  },
  experience: [
    {
      id: "jio",
      company: "Jio Platform Limited",
      role: "Software Developer Engineering Intern",
      duration: "06/2026 - 08/2028",
      location: "Mumbai, India",
      logo: "jio", 
      techStack: ["Python", "FastAPI", "Qdrant", "LLMs", "Multimodal RAG", "Server-Sent Events", "OpenCV"],
      responsibilities: [
        "Built GET-IT, a multilingual IT helpdesk assistant that resolves employee troubleshooting queries using a RAG pipeline on a vector database (Qdrant), incorporating source citations to enhance answer reliability.",
        "Integrated multimodal and multilingual input for GET-IT, enabling screenshot error analysis with a vision-language model, voice queries with speech recognition, and translation for English, regional languages, Hinglish, and Tanglish.",
        "Implemented intent classification, an Assumption Guard that asks for missing context (such as the OS) before answering, and a dynamic troubleshooting planner. Streamed responses in real time with FastAPI and Server-Sent Events.",
        "Developed a multi-purpose chatbot-creation platform where admins create domain-specific AI agents by uploading files. Each agent gets its own system prompt, documents, and isolated Qdrant collection.",
        "Built the multimodal ingestion pipeline for PDFs, scanned documents (vision-model OCR fallback), images, video keyframes (OpenCV) and audio, and improved retrieval with page-ordered context, semantic ranking boosts, and page/timestamp-linked citations."
      ]
    },
    {
      id: "reliance",
      company: "Reliance Industries",
      role: "Artificial Intelligence Intern",
      duration: "12/2025 - 12/2025",
      location: "Jamnagar, India",
      logo: "reliance",
      techStack: ["NLP", "n8n", "Ollama", "Generative AI"],
      responsibilities: [
        "Applied NLP for intent detection and query classification, managing vague or partial inputs and writing system prompts for accurate, consistent responses.",
        "Built generative AI help desk that answered employee questions in natural language and generated troubleshooting guidance.",
        "Automated workflow in n8n by routing requests to AI engine, applying conditional logic by query type, and creating priority-based tickets to reduce manual effort.",
        "Built modular backend with structured data handling for queries, ticket status, and resolution history, tested real-world cases and refining prompts and logic flow for improved response consistency.",
        "Worked with Ollama and Open WebUI to run LLMs locally for secure inference."
      ]
    }
  ],
  projects: [
    {
      id: "fintech-credit",
      name: "FinTech Credit Scoring System",
      description: "AI-based financial eligibility platform for gig workers.",
      longDescription: "Built a full-stack credit scoring platform that evaluates gig workers on earnings, expenses, EMIs, and digital payment behavior, with a transparent factor-by-factor score breakdown and visual analytics. Developed a What-If simulator that recalculates the credit score as users change inputs, and implemented a loan product matcher and score history tracker. Integrated an LLM to explain scores in regional languages.",
      techStack: ["React.js", "Node.js", "Express.js", "JavaScript", "LLM Integration"],
      category: "Full Stack AI",
      status: "Completed",
      github: "https://github.com",
      liveDemo: "https://demo.com",
      image: "",
      featured: true,
      metrics: [
        { label: "Accuracy", value: "High" },
        { label: "Languages", value: "Regional" },
        { label: "Target", value: "Gig Workers" }
      ]
    },
    {
      id: "restaurant-rating",
      name: "Restaurant Rating & Cuisine Classification",
      description: "Rating prediction and cuisine classification models with content-based recommendation.",
      longDescription: "Built rating prediction and cuisine classification models achieving 85-90% accuracy. Developed a content-based recommendation engine and performed geospatial analysis of location trends.",
      techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      category: "Machine Learning",
      status: "Completed",
      github: "https://github.com",
      liveDemo: "",
      image: "",
      featured: false,
      metrics: [
        { label: "Accuracy", value: "85-90%" }
      ]
    },
    {
      id: "car-price-diabetes",
      name: "Car Price & Diabetes Risk Models",
      description: "End-to-end ML pipelines for predictive modeling.",
      longDescription: "Built end-to-end ML pipelines including ingestion, cleaning, training, and evaluation on Kaggle datasets, achieving 85-92% accuracy, improved through rigorous hyperparameter tuning.",
      techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      category: "Machine Learning",
      status: "Completed",
      github: "https://github.com",
      liveDemo: "",
      image: "",
      featured: false,
      metrics: [
        { label: "Accuracy", value: "85-92%" }
      ]
    }
  ],
  skills: {
    programming: ["Python", "Java", "JavaScript", "SQL"],
    backend: ["Node.js", "Express.js", "FastAPI", "REST APIs", "Server-Sent Events"],
    frontend: ["React.js", "HTML", "CSS"],
    ai_ml: ["LLMs", "RAG", "Multimodal RAG", "Multi-Agent Systems", "NLP", "Prompt Engineering", "Scikit-learn", "XGBoost"],
    tools: ["Git", "GitHub", "Docker", "Postman", "n8n", "OpenCV"],
    databases: ["Qdrant (Vector DB)", "MySQL", "NoSQL", "Pandas", "NumPy"],
    cloud: ["Oracle Cloud Infrastructure"]
  },
  socials: {
    github: "https://github.com/Kaviraj1310",
    linkedin: "https://www.linkedin.com/in/kaviraj-thangapandian",
    leetcode: "https://leetcode.com/u/kavirajt1310/",
    email: "kaviraj.thangapandian@gmail.com"
  },
  seo: {
    title: "Kaviraj Thangapandian - AI Engineer Portfolio",
    description: "Undergraduate B.Tech CSE student specializing in AI/ML engineering, LLMs, and Full Stack Development.",
    keywords: ["AI Engineer", "Machine Learning", "Software Developer", "Portfolio", "RAG", "LLM"]
  }
};

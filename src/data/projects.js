const projects = [
  {
    id: "1",
    title: "DROWSINESS AND YAWN DETECTION SYSTEM",
    description:
      " Developed a real-time driver safety system using Python, OpenCV, and MediaPipe to detect drowsiness (EAR) and yawning (MAR), with live alerts via Pygame Mixer and on-screen metrics. Achieved accurate face landmark detection, smooth performance, and effective fatigue monitoring.",
    image: "/d_resized.jpeg",
    technologies: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    
    githubUrl: "https://github.com/iamVinothKumar27/Drowsiness",
    category: "Prototype"
  },
  {
    id: "2",
    title: "Facial Emotion Detection Using Deep Learning",
    description:
      "Built a real-time emotion detection system using MobileNetV2 fine-tuned on the FER-2013 dataset, achieving 81% accuracy across 7 emotions. Integrated Haarcascade and OpenCV for live facial detection and emotion prediction.",
    image: "/f_resized.webp",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
    githubUrl: "https://github.com/iamVinothKumar27/Face_Emotion_Detection",
    category: "Prototype"
  },
  
  {
    id: "3",
    title: "AI-Powered Recommendation System",
    description:
      "Built a personalized movie and food recommendation system using Gemini Flash 1.5, adapting suggestions based on mood, emotion, time, and location for a seamless user experience.",
    image: "/g2_resized.png",
    technologies: ["Python", "Google Generative AI API", "pyttsx3", "geocoder", "pytz"],
    liveUrl: "https://airecommendation.vinothkumarts.com/",
    githubUrl: "https://github.com/iamVinothKumar27/AI_Recommendation",
    category: "Web App"
  },
  {
    id: "4",
    title: "E-Learning Website",
    description:
      "Built an interactive e-learning platform using React.js and YouTube API with AI-generated course roadmaps, video-based quizzes, and personalized assessments to enhance learning efficiency.",
    image: "/e_resized.jpg",
    technologies: ["React.js", "Google Generative AI API", "YouTube API", "Firebase"],
    liveUrl: "https://zenith.vinothkumarts.com/",
    githubUrl: "https://github.com/iamVinothKumar27/E-learning-Frontend",
    category: "Web App"
  },
  
  {
    id: "5",
    title: "SHA512 Web Tool – Client-Side Secure Hash Generator",
    description:"Built a lightweight, client-side web application to generate SHA-512 hashes from user input text or uploaded files, ensuring complete privacy.",
    image: "/resized_c_re.png",
    technologies: ["Python", "TensorFlow", "Flask", "NLP"],
    liveUrl: "https://sha256.vinothkumarts.com/",
    githubUrl: "https://github.com/iamVinothKumar27/SHA256",
    category: "Web App"
  },
  {
    id: "6",
    title: "DocuWeb AI",
    description: "DocuWeb AI is an intelligent chatbot for querying PDF, DOCX, XLSX, and website content using natural language, built using LangChain, FAISS, Gemini Pro, and Flask. Features session saving, file/URL upload, and conversational interaction.",
    image: "/resized_logo.png",
    technologies: ["Flask", "LangChain", "Gemini Pro", "FAISS", "JavaScript"],
    liveUrl: "https://docubot.vinothkumarts.com/",
    githubUrl: "https://github.com/iamVinothKumar27/Website-QA-bot",
    category: "Web App"
  },
  {
    id: "7",
    title: "Automated Road Assessment System",
    description: "Real-time pothole and crack detection system using CNN and OpenCV with 93% and 89% accuracy, GPS tagging, heatmaps, and admin dashboard. Deployed on Render with custom domain.",
    image: "/resized_r.jpg",
    technologies: ["TensorFlow", "Flask", "OpenCV", "HTML/CSS/JS", "Render"],
    liveUrl: "https://pothole.vinothkumarts.com/",
    githubUrl: "https://github.com/iamVinothKumar27/Pothole",
    category: "Web App"
  },
  {
    id: "8",
    title: "SBW Trust Official Website",
    description: "Official website developed for STAR Blind Welfare Trust, featuring accessible design, activity highlights, contact forms, and real-time updates for visually impaired individuals.",
    image: "/logo.png",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "GitHub Pages"],
    liveUrl: "https://sbwtrust.org/",
    githubUrl: "https://github.com/iamVinothKumar27/sbwt",
    category: "Web App"
  },
  {
    id: "9",
    title: "Modern Weather App",
    description:
      "A sleek Kotlin-based weather app with real-time updates, animated UI via MotionLayout, and smooth navigation. Features include hourly/weekly forecasts, UV index, humidity, wind speed, and more using Retrofit and Coroutines.",
    image: "/w.jpg",
    technologies: [
      "Android Studio",
      "Kotlin",
      "Retrofit",
      "MotionLayout",
      "ViewModel & LiveData",
      "Coroutines & Flow",
      "Navigation Component"
    ],
    githubUrl: "https://github.com/iamVinothKumar27/Weather-App",
    category: "Mobile App"
  },
  
  {
    id: "10",
    title: "Goal Tracker - Habit Tracking App",
    description:
      "A Kotlin-based habit tracking app built with Jetpack Compose and Firebase. Features include goal setting, progress tracking, reports, Google sign-in, and real-time updates with MVVM architecture.",
    image: "/resized_goal_tracker.png",
    technologies: ["Android Studio", "Kotlin", "Firebase", "Jetpack Compose", "MVVM", "Material Design"],
    githubUrl: "https://github.com/iamVinothKumar27/Goal-Tracking",
    category: "Mobile App"
  },
  
  {
    id: "11",
    title: "My News - Kotlin News Aggregator App",
    description:
      "A modern news app built with Kotlin and Jetpack Compose, fetching real-time headlines via News API. Features category tabs, dark mode, bottom navigation, and MVVM architecture for a smooth user experience.",
    image: "/resized_news_logo.png",
    technologies: ["Android Studio", "Kotlin", "News API", "Retrofit", "Jetpack Compose", "Material 3"],
    githubUrl: "https://github.com/iamVinothKumar27/News-App",
    category: "Mobile App"
  }
  
  
];

export default projects;

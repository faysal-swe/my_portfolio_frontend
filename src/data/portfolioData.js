export const personalInfo = {
  name: "MD. Faysal Ahmed",
  role: "Flutter Developer",
  location: "295/4 Hazaribagh, TaliOffice road, Dhaka 1209",
  availability: "Available for full-time & freelance roles",
  bioShort: "Dedicated Flutter Developer focused on building reliable, clean, and maintainable cross-platform mobile apps for Android & iOS.",
  bioLong: [
    "I have completed a BSc in Software Engineering and work as a passionate Flutter developer.",
    "I build reliable mobile apps, write clean and maintainable code, and manage applications. I work with intention, stay aligned with best practices, and aim to add real value to any team I join."
  ],
  email: "faysaloniahmed@gmail.com",
  phone: "+8801748051553",
  socials: {
    github: "https://github.com/faysal-swe",
    linkedin: "https://www.linkedin.com/in/faysal-ahmed-swe"
  },
  resumeUrl: "#"
};

export const heroCodeSnippet = `// faysal_developer.dart
import 'package:flutter/material.dart';

class FaysalAhmed extends StatelessWidget {
  final String name = 'MD. Faysal Ahmed';
  final String role = 'Flutter Developer';
  final String status = 'Available for hire';

  final List<String> skills = const [
    'Flutter', 'Dart', 'Riverpod',
    'GetX', 'Provider', 'Firebase', 'RESTful API'
  ];

  @override
  Widget build(BuildContext context) {
    return const SuperCleanApp(
      performance: '60 FPS',
      pixelPerfect: true,
      userDelight: true,
    );
  }
}`;

export const skillCategories = [
  {
    category: "Framework & Mobile",
    icon: "Smartphone",
    skills: [
      { name: "Flutter", level: 95 },
      { name: "Android & iOS App Development", level: 92 },
      { name: "Reusable UI Widgets", level: 95 },
      { name: "Responsive Mobile UI", level: 90 }
    ]
  },
  {
    category: "Programming Languages",
    icon: "Layout",
    skills: [
      { name: "Dart", level: 95 },
      { name: "Basic Java", level: 70 },
      { name: "Basic C", level: 68 }
    ]
  },
  {
    category: "State Management & Architecture",
    icon: "Server",
    skills: [
      { name: "GetX", level: 92 },
      { name: "Riverpod", level: 90 },
      { name: "Provider", level: 90 },
      { name: "RESTful API Integration", level: 92 }
    ]
  },
  {
    category: "Database & Version Control",
    icon: "Palette",
    skills: [
      { name: "Firebase (Auth, Firestore, Cloud Messaging)", level: 90 },
      { name: "Basic SQL", level: 75 },
      { name: "GitHub / Git Version Control", level: 92 }
    ]
  }
];

export const featuredProjects = [
  {
    id: 1,
    title: "Motive Entertainment",
    category: "Mobile Application",
    description: "Connects users with local food and drink specials through an easy-to-use mobile app. Provides real-time venue updates and personalized search to help users find the best dining deals while helping venues attract more customers.",
    tags: ["Flutter", "Dart", "Firebase", "RESTful API", "Google Play"],
    previewType: "mobile",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
    mockupColor: "#8b5cf6",
    features: [
      "Connects users with local food and drink specials seamlessly",
      "Real-time venue updates and personalized search for top dining deals",
      "Benefits diners with affordable deals and venues with customer engagement"
    ],
    liveUrl: "https://play.google.com/store/apps/details?id=com.oscaru.motive",
    githubUrl: "https://github.com/faysal-swe"
  },
  {
    id: 2,
    title: "Lola Football",
    category: "Live Streaming & Sports App",
    description: "Built a live football streaming mobile application that lets users watch matches in real time. Designed sections for league-specific matches, top players, and season winners, with detailed match result lists and reliable performance.",
    tags: ["Flutter", "Dart", "Live Streaming", "RESTful API", "Google Play"],
    previewType: "mobile",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop",
    mockupColor: "#06b6d4",
    features: [
      "Live football streaming for watching matches in real time",
      "Dedicated sections for league-specific matches, top players & season winners",
      "Match result pages with live, upcoming, and recent match lists with detailed stats"
    ],
    liveUrl: "https://play.google.com/store/apps/details?id=com.lolafootball.app",
    githubUrl: "https://github.com/faysal-swe"
  },
  {
    id: 3,
    title: "Yoga with Jen",
    category: "Health & Fitness Training App",
    description: "Developed a yoga training application with video-based learning modules. Added features for users to rate and comment on training videos, alongside an interactive community section where users can post, like, and comment with smooth navigation.",
    tags: ["Flutter", "Dart", "Video Modules", "Community Feed", "Google Play"],
    previewType: "mobile",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
    mockupColor: "#10b981",
    features: [
      "Video-based structured yoga training learning modules",
      "Interactive ratings and user comments on training sessions",
      "Engaging community section allowing users to post, like, and interact"
    ],
    liveUrl: "https://play.google.com/store/apps/details?id=com.yoga.users&hl=en",
    githubUrl: "https://github.com/faysal-swe"
  }
];

export const services = [
  {
    icon: "Smartphone",
    title: "Flutter Mobile App Development",
    description: "High-performance cross-platform applications for Android and iOS using Flutter and Dart, built with scalable clean architecture.",
    perks: ["Android & iOS Support", "Smooth 60 FPS Performance", "Clean Maintainable Code"]
  },
  {
    icon: "Layers",
    title: "Reusable & Responsive UI Design",
    description: "Developing reusable, accessible, and responsive UI components using Flutter widgets that look stunning across all screen sizes.",
    perks: ["Pixel-Perfect Widgets", "Responsive Layouts", "Fluid Transitions"]
  },
  {
    icon: "Zap",
    title: "State Management Architecture",
    description: "Implementing robust and predictable state management solutions utilizing Riverpod, GetX, or Provider according to project needs.",
    perks: ["Riverpod / GetX / Provider", "Decoupled Logic", "Easy Maintainability"]
  },
  {
    icon: "Server",
    title: "RESTful API & Backend Integration",
    description: "Seamlessly connecting mobile apps to backend services through RESTful APIs, JSON serialization, and real-time networking.",
    perks: ["RESTful Endpoints", "Robust Error Handling", "Offline Data Sync"]
  },
  {
    icon: "ShieldCheck",
    title: "Firebase & Cloud Services",
    description: "Full Firebase backend integration including Authentication, Firestore database, Cloud Messaging push notifications, and analytics.",
    perks: ["Firebase Auth & Firestore", "Push Notifications", "Cloud Storage"]
  },
  {
    icon: "Code2",
    title: "App Release & Maintenance",
    description: "Preparing, testing, and deploying mobile apps to Google Play Store, managing versioning, bug fixes, and continuous improvements.",
    perks: ["Google Play Store Release", "Performance Profiling", "Issue Resolution"]
  }
];

export const experiences = [
  {
    period: "July 2025 – Dec 2025",
    role: "Junior Flutter Developer",
    company: "Root Devs",
    description: "Built mobile applications for Android and iOS using Flutter. Developed reusable and responsive UI components using Flutter widgets. Worked closely with designers, backend developers, and project managers to implement app features and fix issues."
  },
  {
    period: "Oct 2024 – Jun 2025",
    role: "Junior Flutter Developer",
    company: "Spark Tech",
    description: "Built applications for mobile platforms using Flutter. Developed reusable and responsive UI components using Flutter widgets. Worked closely with designers, backend developers, and project managers to implement app features and fix issues."
  }
];

export const education = [
  {
    period: "2019 – 2023",
    role: "B.Sc. in Software Engineering",
    company: "Daffodil International University",
    description: "Graduated with CGPA 3.40 / 4.00, focusing on software engineering principles, algorithms, mobile computing, and clean software architecture."
  },
  {
    period: "2019",
    role: "HSC (Science)",
    company: "Mohammadpur Kendriya College",
    description: "Completed Higher Secondary Certificate in Science division with GPA 3.30 / 5.00."
  },
  {
    period: "2017",
    role: "SSC (Science)",
    company: "Rayer Bazar High School",
    description: "Completed Secondary School Certificate in Science division with GPA 4.55 / 5.00."
  }
];

export const testimonials = [
  {
    quote: "Faysal is an exceptional Flutter developer. His ability to craft responsive, fluid mobile interfaces and cleanly integrate APIs made our product launch a huge success.",
    author: "Root Devs Team",
    role: "Project Manager",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Working with Faysal was a breeze. He writes clean, maintainable Dart code, communicates effectively, and reliably delivers production-ready Flutter apps.",
    author: "Spark Tech Lead",
    role: "Senior Engineering Lead",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  }
];

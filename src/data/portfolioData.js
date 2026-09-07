export const personalInfo = {
  name: "Faysal Ahmed",
  role: "Flutter Developer",
  location: "Dhaka, Bangladesh / Remote Worldwide",
  availability: "Available for freelance & full-time roles",
  bioShort: "Passionate Flutter developer dedicated to building fast, beautiful, and fluid mobile and cross-platform applications.",
  bioLong: [
    "I'm a dedicated Flutter Developer with experience building cross-platform mobile apps for iOS and Android with Dart, clean architecture, and responsive UI.",
    "My focus is on creating fluid animations, scalable state management (Getx, Provider, Riverpod), and seamless RESTful API and Firebase integrations."
  ],
  email: "faysal.dev@example.com",
  phone: "+880 1700-000000",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    dribbble: "https://dribbble.com",
    discord: "https://discord.com"
  },
  resumeUrl: "#"
};

export const heroCodeSnippet = `// faysal_developer.dart
import 'package:flutter/material.dart';

class FaysalAhmed extends StatelessWidget {
  final String name = 'Faysal Ahmed';
  final String role = 'Flutter Developer';
  final String status = 'Available for hire';

  final List<String> skills = const [
    'Flutter', 'Dart', 'BLoC',
    'Provider', 'Firebase', 'REST APIs'
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
    category: "Flutter & Mobile Development",
    icon: "Smartphone",
    skills: [
      { name: "Flutter & Dart", level: 96 },
      { name: "State Management (BLoC / Provider / Riverpod)", level: 94 },
      { name: "REST APIs & JSON Integration", level: 92 },
      { name: "Firebase (Auth, Firestore, Cloud Messaging)", level: 90 },
      { name: "Clean Architecture & Design Patterns", level: 92 },
      { name: "CI/CD & App Store / Play Store Release", level: 88 }
    ]
  },
  {
    category: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "React / Next.js", level: 92 },
      { name: "JavaScript / TypeScript", level: 90 },
      { name: "Modern CSS / CSS3 / Animations", level: 94 },
      { name: "HTML5 / Semantic Web", level: 96 },
      { name: "Redux / Zustand / React Query", level: 88 },
      { name: "TailwindCSS & Styled Systems", level: 90 }
    ]
  },
  {
    category: "Backend & Databases",
    icon: "Server",
    skills: [
      { name: "Node.js & Express", level: 88 },
      { name: "PostgreSQL / Prisma", level: 85 },
      { name: "MongoDB & Mongoose", level: 86 },
      { name: "REST & GraphQL APIs", level: 92 },
      { name: "Redis Caching", level: 80 },
      { name: "Firebase & Supabase", level: 88 }
    ]
  },
  {
    category: "Mobile & DevOps",
    icon: "Smartphone",
    skills: [
      { name: "Flutter / Android / iOS", level: 96 },
      { name: "Docker & Containerization", level: 78 },
      { name: "Git / GitHub Actions CI/CD", level: 90 },
      { name: "Vercel / AWS / Cloudflare", level: 84 },
      { name: "Performance Profiling & Optimization", level: 92 },
      { name: "Unit & Widget Testing", level: 85 }
    ]
  },
  {
    category: "UI/UX & Product Design",
    icon: "Figma",
    skills: [
      { name: "Figma UI/UX & Wireframing", level: 94 },
      { name: "Design System Architecture", level: 90 },
      { name: "Interactive Prototyping", level: 92 },
      { name: "Design Handoff & Tokens", level: 95 },
      { name: "Responsive & Mobile-First", level: 98 },
      { name: "Motion & Micro-interactions", level: 88 }
    ]
  }
];

export const featuredProjects = [
  {
    id: 1,
    title: "Nova E-Commerce App",
    category: "Mobile & Full-Stack",
    description: "A luxury mobile e-commerce platform built with React Native and Node.js featuring real-time inventory synchronization, dynamic dark UI, and seamless Stripe checkout integration.",
    tags: ["React Native", "TypeScript", "Node.js", "Stripe", "Figma", "Redux Toolkit"],
    previewType: "mobile",
    image: "https://images.unsplash.com/photo-1556742049-0a67c57750c9?q=80&w=800&auto=format&fit=crop",
    mockupColor: "#8b5cf6",
    features: [
      "Custom audio hardware & lifestyle catalog",
      "Instant 1-tap Apple Pay & Stripe checkout",
      "Real-time order tracker with push updates"
    ],
    liveUrl: "https://example.com/nova",
    githubUrl: "https://github.com/example/nova-app"
  },
  {
    id: 2,
    title: "Pulse Health & Fitness Tracker",
    category: "Mobile & Web",
    description: "Comprehensive biometric dashboard and mobile tracker visualizing heart rate variability, training loads, recovery sleep metrics, and automated AI workout suggestions.",
    tags: ["React", "Chart.js", "TailwindCSS", "Node.js", "PostgreSQL", "HealthKit"],
    previewType: "mobile",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    mockupColor: "#06b6d4",
    features: [
      "Dynamic activity & sleep stage charts",
      "Real-time heart rate zones & recovery score",
      "Personalized daily target recommendations"
    ],
    liveUrl: "https://example.com/pulse",
    githubUrl: "https://github.com/example/pulse-health"
  },
  {
    id: 3,
    title: "Apex Analytics SaaS Dashboard",
    category: "Web Application",
    description: "High-throughput analytics platform processing millions of data points per second with customizable widgets, funnels, cohort analysis, and dark glass aesthetics.",
    tags: ["Next.js", "TypeScript", "GraphQL", "Redis", "TailwindCSS", "Docker"],
    previewType: "dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    mockupColor: "#6366f1",
    features: [
      "Ultra-low latency real-time data streaming",
      "Interactive cohort & conversion funnels",
      "Multi-tenant team management & role-based ACL"
    ],
    liveUrl: "https://example.com/apex",
    githubUrl: "https://github.com/example/apex-analytics"
  },
  {
    id: 4,
    title: "Quantum AI Studio",
    category: "AI & Web Application",
    description: "Interactive generative AI playground featuring live code sandbox execution, dynamic prompt engineering templates, multi-model LLM comparisons, and streaming voice synthesis.",
    tags: ["React 19", "Vite", "OpenAI API", "WebSockets", "PrismJS", "CSS Modules"],
    previewType: "dashboard",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    mockupColor: "#ec4899",
    features: [
      "Multi-modal prompt experimentation studio",
      "Real-time streamed code sandbox preview",
      "Automated evaluation matrix and cost calculator"
    ],
    liveUrl: "https://example.com/quantum",
    githubUrl: "https://github.com/example/quantum-ai"
  }
];

export const services = [
  {
    icon: "Code2",
    title: "Full-Stack Development",
    description: "End-to-end web applications crafted with modern architectures like React, Next.js, Node.js, and scalable SQL/NoSQL databases.",
    perks: ["Clean Architecture", "Fast API Endpoints", "Maintainable Codebases"]
  },
  {
    icon: "Palette",
    title: "UI/UX & Product Design",
    description: "User-centered design from research and wireframing to pixel-perfect design systems, high-fidelity Figma prototypes, and micro-interactions.",
    perks: ["Figma Design Systems", "Interactive Prototypes", "Accessible & Modern"]
  },
  {
    icon: "Smartphone",
    title: "Mobile App Development",
    description: "Cross-platform mobile applications using React Native with native performance, offline support, and smooth gestures.",
    perks: ["iOS & Android Support", "Smooth 60fps Animations", "Offline First"]
  },
  {
    icon: "Zap",
    title: "Performance & SEO",
    description: "Auditing and optimizing web applications for lightning-fast load times, 95+ Core Web Vitals scores, and superior search rankings.",
    perks: ["Lighthouse Optimization", "Core Web Vitals", "SSR / Edge Caching"]
  },
  {
    icon: "ShieldCheck",
    title: "API & Backend Systems",
    description: "Robust REST and GraphQL backend services with bulletproof authentication, security validations, and real-time WebSocket sync.",
    perks: ["Scalable DB Schema", "Secure Auth Flow", "Webhook Integrations"]
  },
  {
    icon: "Layers",
    title: "Design System Engineering",
    description: "Building resilient reusable component libraries and CSS token architectures for fast developer velocity and visual consistency.",
    perks: ["Atomic Design Tokens", "Theme Switching Support", "Comprehensive Docs"]
  }
];

export const experiences = [
  {
    period: "2023 — Present",
    role: "Senior Full-Stack Engineer",
    company: "TechNova Solutions",
    description: "Lead frontend and full-stack architecture for enterprise SaaS clients, improving application performance by 40%."
  },
  {
    period: "2021 — 2023",
    role: "Full-Stack Developer & UI Designer",
    company: "CyberCraft Studio",
    description: "Engineered scalable web applications and built cross-platform mobile apps for fast-growing global startups."
  },
  {
    period: "2019 — 2021",
    role: "Frontend Developer",
    company: "PixelForge Digital",
    description: "Crafted interactive, responsive web applications, design systems, and component libraries."
  }
];

export const testimonials = [
  {
    quote: "Faysal delivered an exceptional web application ahead of schedule. His attention to design aesthetics and clean code made the entire collaboration a dream.",
    author: "Sarah Jenkins",
    role: "CTO, CloudScale Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "One of the most talented full-stack developers we've worked with. The UX was silky smooth and the codebase was modular, clean, and easily maintainable.",
    author: "David Chen",
    role: "Founder, Apex AI",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  }
];

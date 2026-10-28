"use client";

import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  Code2,
  Brain,
  Server,
  Sparkles,
  ArrowRight,
  MapPin,
  Calendar,
  Zap,
  Target,
  Rocket,
} from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/icons";
import { useEffect, useState } from "react";

const skills = {
  "Programming": ["C#", "Java", "Python", "JavaScript", "SQL", "C++", "C", "Linux Programming"],
  "Backend & Architecture": [".NET", "REST APIs", "API Integration", "Microservices Architecture"],
  "Databases & Search": ["PostgreSQL", "Oracle Database", "SQL", "NoSQL", "Vector Databases", "FAISS"],
  "AI / ML": ["LangChain", "HuggingFace", "Retrieval-Augmented Generation (RAG)", "NLP", "Prompt Engineering"],
  "AI-Assisted Tools": ["ChatGPT", "Claude", "GitHub Copilot", "Google Gemini"],
  "Web Development": ["MERN Stack", "Flask", "Streamlit"],
  "Engineering Practices": ["Kafka", "CI/CD", "Unit/Integration Testing", "Code Reviews", "Debugging", "Production Support", "Git"],
  "Product & Platforms": ["Product/Requirements Analysis", "Agile/Scrum", "VTEX", "Data Structures & Algorithms", "OS", "Computer Networks"],
};

const experiences = [
  {
    title: "Associate Software Engineer",
    company: "GlobalLogic",
    period: "Oct 2025 – Present",
    location: "Hyderabad, India",
    type: "Full-time",
    highlights: [
      "Migrated 15–20 commerce features from OMNI to VTEX, redesigning API integration flows",
      "Built scalable .NET 8 REST APIs and microservices for Dollar General e-commerce platform",
      "Implemented Kafka consumers for DoorDash fulfillment with MongoDB & VTEX integration",
      "Applied Polly resilience patterns (retry, circuit-breaker) and Clean Architecture",
      "Worked across PostgreSQL, MongoDB, Oracle, and Redis for distributed systems",
    ],
  },
  {
    title: "Trainee Software Engineer",
    company: "GlobalLogic",
    period: "Apr 2025 – Oct 2025",
    location: "Bangalore, India",
    type: "Internship",
    highlights: [
      "Built AI-powered apps with Python, LangChain, HuggingFace, FAISS & Streamlit",
      "Designed end-to-end RAG pipelines with vector embeddings & semantic search",
      "Engineered intelligent chatbot workflows with advanced prompt engineering",
    ],
  },
];

const projects = [
  {
    title: "Constitutional RAG Chatbot",
    subtitle: "Intelligent Constitution Assistant",
    description:
      "An intelligent RAG-based system that answers questions about the Indian Constitution with accurate, fact-based responses. It also provides latest updates and amendments to the Constitution, ensuring users stay informed about constitutional changes.",
    tags: ["RAG", "LangChain", "LLM", "NLP", "Vector DB"],
    icon: Brain,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "Legacy Whisperer",
    subtitle: "Legacy Code Intelligence Platform",
    description:
      "AI-driven platform to map code behavior, trace dependencies, and analyze change impact for faster legacy system modernization.",
    tags: ["AI", "Code Analysis", "Developer Tools", "Documentation"],
    icon: Code2,
    gradient: "from-rose-500 to-pink-500",
  },
  {
    title: "Multimodal Document Intelligence",
    subtitle: "Intelligent Document Processing",
    description:
      "LLM-powered system for summarization, NER, keyword extraction, multilingual processing, semantic retrieval & structured PDF exports.",
    tags: ["LLM", "NLP", "RAG", "FAISS", "Streamlit"],
    icon: Brain,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    title: "AI-Powered Mental Health Chatbot",
    subtitle: "Conversational AI Companion",
    description:
      "Empathic NLP chatbot with context-aware responses, sentiment analysis, and safety guardrails for mental wellness support.",
    tags: ["Chatbot", "NLP", "Flask", "Mental Health"],
    icon: Sparkles,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Vehicle Breakdown Assistance",
    subtitle: "On-Demand Emergency Services",
    description:
      "Real-time platform connecting stranded motorists with nearby repair providers using geolocation matching within 15km radius.",
    tags: ["MERN", "Geolocation", "Real-time", "Full Stack"],
    icon: Server,
    gradient: "from-cyan-500 to-blue-500",
  },
];

const achievements = [
  { icon: Award, text: "SPOTLIGHT of the MONTH award for 2 times" },
  { icon: Award, text: "Finalist – Smart India Hackathon 2023 (Ministry of Education, Govt. of India)" },
  { icon: Target, text: "Finalist – Ideathon 2024 – Narayanamma Institute of Technology" },
  { icon: Zap, text: "VTEX 101, VTEX APIs, VTEX IO & VTEX DevOps Certified" },
  { icon: Rocket, text: "Microsoft Certified: Azure Fundamentals" },
  { icon: Code2, text: "Salesforce Developer Virtual Certification" },
  { icon: Sparkles, text: "A1 German Certification – Goethe Zentrum Hyderabad" },
  { icon: Award, text: "'A' Certificate in NCC" },
];

function AnimatedBackground() {
  const [stars, setStars] = useState<Array<{id: number, x: number, y: number, delay: number, size: number}>>([]);
  
  useEffect(() => {
    const newStars = Array.from({length: 100}, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      size: Math.random() * 2 + 1,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
      
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-primary/60 animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
      
      {/* Animated arrows/lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="oklch(0.65 0.18 25)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(0.65 0.18 25)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="oklch(0.65 0.18 25)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 0 200 Q 400 100 800 200 T 1600 200"
          stroke="url(#arrowGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
        />
        <path
          d="M 0 400 Q 600 300 1200 400 T 2400 400"
          stroke="url(#arrowGradient)"
          strokeWidth="1.5"
          fill="none"
          className="animate-pulse"
          style={{animationDelay: '1s'}}
        />
      </svg>
    </div>
  );
}

function NavigationArrow({ href, label }: { href: string, label: string }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="group relative flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-card/40 to-card/60 backdrop-blur-sm border border-primary/30 hover:border-primary transition-all duration-500 hover:scale-110 overflow-hidden shadow-lg hover:shadow-primary/20"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 left-1/2 w-1 h-1 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 animate-ping" />
        <div className="absolute bottom-0 left-1/4 w-1 h-1 bg-rose-500 rounded-full animate-ping" style={{animationDelay: '0.2s'}} />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-orange-500 rounded-full animate-ping" style={{animationDelay: '0.4s'}} />
      </div>
      <span className="relative text-xs sm:text-sm font-medium group-hover:text-primary transition-colors duration-300">{label}</span>
      <div className="relative flex items-center">
        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-3 group-hover:scale-125 group-hover:text-primary transition-all duration-500" />
        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 -ml-2 sm:-ml-2 opacity-0 group-hover:opacity-70 group-hover:translate-x-3 group-hover:scale-110 transition-all duration-700" />
        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 -ml-2 sm:-ml-2 opacity-0 group-hover:opacity-40 group-hover:translate-x-3 group-hover:scale-90 transition-all duration-900" />
      </div>
    </a>
  );
}

export default function Portfolio() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-primary/40 shadow-lg shadow-primary/5">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-r from-primary to-rose-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-primary rounded-full animate-ping opacity-75" />
              </div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary via-rose-500 to-orange-500 bg-clip-text text-transparent">
                G Sneha
              </span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="hidden xl:flex items-center gap-1">
                <NavigationArrow href="#about" label="About" />
                <NavigationArrow href="#skills" label="Skills" />
                <NavigationArrow href="#experience" label="Experience" />
                <NavigationArrow href="#projects" label="Projects" />
                <NavigationArrow href="#achievements" label="Milestones" />
                <NavigationArrow href="#contact" label="Connect" />
              </div>
              <div className="lg:hidden flex items-center gap-1">
                <Button size="sm" variant="ghost" className="h-8 px-2 text-xs" onClick={() => {
                  const menu = document.getElementById('mobile-menu');
                  if (menu) menu.classList.toggle('hidden');
                }}>
                  Menu
                </Button>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
        <div id="mobile-menu" className="hidden xl:hidden border-t border-primary/20 bg-background/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-3 py-2 flex flex-wrap gap-1.5">
            <NavigationArrow href="#about" label="About" />
            <NavigationArrow href="#skills" label="Skills" />
            <NavigationArrow href="#experience" label="Experience" />
            <NavigationArrow href="#projects" label="Projects" />
            <NavigationArrow href="#achievements" label="Milestones" />
            <NavigationArrow href="#contact" label="Connect" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-8 animate-slide-up">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-primary">Available for opportunities</span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-primary via-rose-500 to-orange-500 bg-clip-text text-transparent">
                    G Sneha
                  </span>
                </h1>
                <p className="text-2xl sm:text-3xl text-muted-foreground font-light">
                  Software Engineer
                </p>
                <p className="text-xl text-primary font-medium">
                  Backend • Microservices • AI/ML
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Crafting scalable architectures and intelligent solutions at the intersection of 
                robust backend systems and cutting-edge AI. Transforming complex problems into 
                elegant, performant code.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-rose-500 hover:from-primary/90 hover:to-rose-500/90 shadow-lg hover:shadow-primary/25 transition-all duration-300" onClick={() => window.location.href = "#contact"}>
                  <Mail className="mr-2 h-5 w-5" />
                  Let's Connect
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10 hover:border-primary/60" onClick={() => window.open("https://github.com/snehagopishetty", "_blank")}>
                  <GitHubIcon className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
                <Button size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10 hover:border-primary/60" onClick={() => window.open("https://www.linkedin.com/in/sneha-gopishetty/", "_blank")}>
                  <LinkedInIcon className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-rose-500 to-orange-500 rounded-full blur-2xl opacity-30 animate-pulse-glow" />
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden ring-2 ring-primary/50 shadow-2xl">
                  <Image
                    src="/profile.jpg"
                    alt="G Sneha"
                    width={400}
                    height={400}
                    className="object-cover object-top w-full h-full scale-110"
                    priority
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/40 animate-float">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-rose-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-rose-500/40 animate-float" style={{animationDelay: '1s'}}>
                  <Brain className="h-7 w-7 text-rose-500" />
                </div>
                <div className="absolute top-1/2 -right-8 w-10 h-10 bg-orange-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-orange-500/40 animate-float" style={{animationDelay: '2s'}}>
                  <Server className="h-5 w-5 text-orange-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-rose-500 bg-clip-text text-transparent">
                About
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">The story behind the code</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-2 border-primary/30 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-rose-500 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Engineering Excellence</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  I'm a passionate Software Engineer at GlobalLogic, specializing in building high-performance 
                  backend systems, microservices architectures, and intelligent AI-powered applications. With a 
                  strong foundation in distributed systems and machine learning, I bridge the gap between robust 
                  engineering and innovative AI solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  From migrating enterprise e-commerce platforms to architecting RAG pipelines and conversational 
                  AI, I thrive on solving complex challenges with scalable, clean, and maintainable code.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/30 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg">B.Tech in Information Technology</h4>
                    <p className="text-muted-foreground">CVR College of Engineering</p>
                    <div className="flex items-center justify-between mt-3">
                      <Badge className="bg-primary/20 text-primary border-primary/40">CGPA: 9.42</Badge>
                      <span className="text-sm text-muted-foreground">2021 – 2025</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-primary/30 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Server className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold">Backend Architecture</h3>
                </div>
                <p className="text-muted-foreground">
                  Expert in .NET 8, microservices, event-driven systems with Kafka, and building resilient 
                  distributed architectures with proper observability and testing.
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/30 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="h-6 w-6 text-rose-500" />
                  <h3 className="text-xl font-bold">AI/ML Engineering</h3>
                </div>
                <p className="text-muted-foreground">
                  Building intelligent applications with LangChain, RAG pipelines, vector databases, 
                  and LLMs for document processing, chatbots, and semantic search.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-rose-500 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">Comprehensive tech stack & expertise</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <Card 
                key={category} 
                className="border-primary/30 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-primary/10 group"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-rose-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Code2 className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-rose-500 bg-clip-text text-transparent">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-primary/10 text-foreground border-primary/30 hover:bg-gradient-to-r hover:from-primary/20 hover:to-rose-500/20 hover:border-primary/60 transition-all cursor-default hover:scale-105 hover:shadow-md"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-rose-500 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">Professional experience</p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="border-primary/30 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-rose-500 flex items-center justify-center">
                          <Briefcase className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold">{exp.title}</h3>
                      </div>
                      <p className="text-xl text-primary font-semibold ml-13">{exp.company}</p>
                    </div>
                    <div className="flex flex-col lg:items-end gap-2">
                      <Badge className="bg-primary/20 text-primary border-primary/40 w-fit">
                        <Calendar className="h-3 w-3 mr-1" />
                        {exp.period}
                      </Badge>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                        <Badge variant="outline" className="border-primary/30">{exp.type}</Badge>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-rose-500 bg-clip-text text-transparent">
                Creations
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">Featured projects & innovations</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group border-primary/30 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <project.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="secondary" 
                          className="bg-primary/10 text-foreground border-primary/30 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-rose-500 bg-clip-text text-transparent">
                Milestones
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">Achievements & certifications</p>
          </div>
          
          <Card className="border-primary/30 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-rose-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <achievement.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                      {achievement.text}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-rose-500 bg-clip-text text-transparent">
                Let's Build Together
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-primary/30 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:scale-[1.05] group">
              <CardContent className="p-6 text-center">
                <a href="tel:8374317373" className="block">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-rose-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">8374317373</p>
                </a>
              </CardContent>
            </Card>
            
            <Card className="border-primary/30 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:scale-[1.05] group">
              <CardContent className="p-6 text-center">
                <a href="mailto:gopishettysneha2212@gmail.com" className="block">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-rose-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors text-sm break-all">gopishettysneha2212@gmail.com</p>
                </a>
              </CardContent>
            </Card>
            
            <Card className="border-primary/30 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:scale-[1.05] group">
              <CardContent className="p-6 text-center">
                <a href="https://www.linkedin.com/in/sneha-gopishetty/" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-rose-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <LinkedInIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">LinkedIn</h3>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors flex items-center justify-center gap-1">
                    Connect <ExternalLink className="h-3 w-3" />
                  </p>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-primary/20 z-10 backdrop-blur-sm bg-background/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 G Sneha. Crafted with passion.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/snehagopishetty"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card/50 border border-primary/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sneha-gopishetty/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card/50 border border-primary/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:gopishettysneha2212@gmail.com"
              className="w-10 h-10 rounded-full bg-card/50 border border-primary/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
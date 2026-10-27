"use client";

import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
} from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/icons";

const skills = {
  "Programming Languages": ["C#", "Java", "Python", "JavaScript", "SQL", "C++", "C"],
  "Backend & Architecture": [".NET", "REST APIs", "API Integration", "Microservices", "Kafka"],
  "Databases & Search": ["PostgreSQL", "Oracle", "MongoDB", "Redis", "NoSQL", "FAISS", "Vector DBs"],
  "AI / ML": ["LangChain", "HuggingFace", "RAG", "NLP", "Prompt Engineering"],
  "Web Development": ["MERN Stack", "Flask", "Streamlit"],
  "DevOps & Tools": ["CI/CD", "Git", "Azure", "Docker", "Unit Testing"],
};

const experiences = [
  {
    title: "Associate Software Engineer",
    company: "GlobalLogic",
    period: "Oct 2025 – Present",
    location: "Hyderabad, India",
    highlights: [
      "Migrated 15–20 commerce features from OMNI to VTEX, adapting business logic and redesigning API integration flows",
      "Developed .NET 8 REST APIs and microservices for Dollar General e-commerce platform",
      "Implemented Kafka consumers for DoorDash fulfillment events with MongoDB and VTEX integration",
      "Configured HTTP resilience with Polly including retry and circuit-breaker policies",
      "Applied Clean Architecture with dependency injection; integrated with MongoDB, PostgreSQL, Oracle, and Redis",
    ],
  },
  {
    title: "Trainee Software Engineer",
    company: "GlobalLogic",
    period: "Apr 2025 – Oct 2025",
    location: "Bangalore, India",
    highlights: [
      "Built AI-powered applications with Python, LangChain, HuggingFace, FAISS, and Streamlit",
      "Designed RAG pipelines using vector embeddings and semantic search",
      "Developed chatbot workflows using prompt engineering and response refinement",
    ],
  },
];

const projects = [
  {
    title: "Legacy Whisperer",
    subtitle: "Legacy Code Intelligence",
    description:
      "Designed a concept to map code behavior, dependencies, and change impact, helping engineers understand unfamiliar codebases and accelerate modernization discovery.",
    tags: ["Code Analysis", "Documentation", "Developer Tools"],
    icon: Code2,
  },
  {
    title: "Multimodal Document Intelligence",
    subtitle: "Python, LangChain, HuggingFace, FAISS",
    description:
      "Built an LLM-based workflow for summarization, named entity recognition, keyword extraction, multilingual processing, semantic retrieval, and structured PDF exports.",
    tags: ["LLM", "NLP", "RAG", "Streamlit"],
    icon: Brain,
  },
  {
    title: "AI-Powered Mental Health Chatbot",
    subtitle: "Python, Flask, NLP",
    description:
      "Developed a supportive conversational chatbot with refined prompts to improve response relevance and conversational quality.",
    tags: ["Chatbot", "Flask", "Mental Health"],
    icon: Sparkles,
  },
  {
    title: "Vehicle Breakdown Assistance",
    subtitle: "MERN Stack, Geolocation APIs",
    description:
      "Built a platform connecting users to nearby repair providers through geolocation matching within a 15 km radius.",
    tags: ["MERN", "Geolocation", "Full Stack"],
    icon: Server,
  },
];

const achievements = [
  "Finalist – Smart India Hackathon 2023 (Ministry of Education, Govt. of India)",
  "Finalist – Ideathon 2024 – Narayanamma Institute of Technology and Sciences",
  "VTEX 101, VTEX APIs & Integrations, VTEX IO, and VTEX DevOps Certifications",
  "Microsoft Certified: Azure Fundamentals",
  "Salesforce Developer Virtual Certification",
  "A1 Certification in German – Goethe Zentrum Hyderabad",
  "'A' Certificate in NCC",
];

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
              G Sneha
            </span>
            <div className="flex items-center gap-1 sm:gap-2">
              <Button variant="ghost" size="sm" asChild className="hidden sm:flex">
                <a href="#about">About</a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="hidden sm:flex">
                <a href="#experience">Experience</a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="hidden sm:flex">
                <a href="#projects">Projects</a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="hidden sm:flex">
                <a href="#contact">Contact</a>
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden ring-4 ring-violet-500/20 shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="G Sneha"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-violet-500 to-pink-500 rounded-full blur-2xl opacity-60" />
            </div>
            <div className="text-center lg:text-left flex-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                  G Sneha
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-6">
                Software Engineer | Backend • Microservices • AI/ML
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Engineering Scalable Solutions Through Code, Architecture, and AI.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Button asChild>
                  <a href="#contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Get in Touch
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://github.com/snehagopishetty"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://www.linkedin.com/in/sneha-gopishetty/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-violet-500" />
                  Backend Development
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Experienced in building robust backend systems with .NET, REST APIs, and microservices architecture. 
                Skilled in designing scalable e-commerce platforms, implementing event-driven systems with Kafka, 
                and integrating multiple databases including PostgreSQL, MongoDB, Oracle, and Redis.
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-pink-500" />
                  AI/ML Engineering
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Passionate about building AI-powered applications using LangChain, HuggingFace, and RAG pipelines. 
                Experienced in NLP, prompt engineering, vector databases, and creating intelligent chatbots 
                and document processing systems.
              </CardContent>
            </Card>
          </div>
          <Card className="mt-8 border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-violet-500" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-semibold text-lg">B.Tech in Information Technology</h3>
                  <p className="text-muted-foreground">CVR College of Engineering</p>
                </div>
                <div className="mt-2 sm:mt-0 sm:text-right">
                  <Badge variant="secondary" className="text-sm">CGPA: 9.42</Badge>
                  <p className="text-sm text-muted-foreground mt-1">2021 – 2025</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Technical Skills
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary">
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
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-violet-500" />
                        {exp.title}
                      </CardTitle>
                      <p className="text-lg text-muted-foreground mt-1">{exp.company}</p>
                    </div>
                    <div className="sm:text-right">
                      <Badge variant="outline">{exp.period}</Badge>
                      <p className="text-sm text-muted-foreground mt-1">{exp.location}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-violet-500 mt-1.5">•</span>
                        {highlight}
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
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <project.icon className="h-5 w-5 text-violet-500" />
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Achievements & Certifications
          </h2>
          <Card className="border-none shadow-lg">
            <CardContent className="pt-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-violet-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Card className="border-none shadow-lg w-full sm:w-auto">
              <CardContent className="pt-6">
                <a
                  href="tel:8374317373"
                  className="flex items-center gap-3 hover:text-violet-500 transition-colors"
                >
                  <Phone className="h-5 w-5 text-violet-500" />
                  <span>8374317373</span>
                </a>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg w-full sm:w-auto">
              <CardContent className="pt-6">
                <a
                  href="mailto:gopishettysneha2212@gmail.com"
                  className="flex items-center gap-3 hover:text-violet-500 transition-colors"
                >
                  <Mail className="h-5 w-5 text-violet-500" />
                  <span>gopishettysneha2212@gmail.com</span>
                </a>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg w-full sm:w-auto">
              <CardContent className="pt-6">
                <a
                  href="https://www.linkedin.com/in/sneha-gopishetty/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-violet-500 transition-colors"
                >
                  <LinkedInIcon className="h-5 w-5 text-violet-500" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} G Sneha. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/snehagopishetty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-violet-500 transition-colors"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sneha-gopishetty/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-violet-500 transition-colors"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:gopishettysneha2212@gmail.com"
              className="text-muted-foreground hover:text-violet-500 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

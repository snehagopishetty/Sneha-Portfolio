import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "G Sneha | Software Engineer",
  description:
    "Software Engineer specializing in Backend Development, Microservices, and AI/ML. Engineering scalable solutions through code, architecture, and AI.",
  keywords: [
    "Software Engineer",
    "Backend Developer",
    "AI/ML",
    "Microservices",
    ".NET",
    "Python",
    "LangChain",
  ],
  authors: [{ name: "G Sneha" }],
  openGraph: {
    title: "G Sneha | Software Engineer",
    description:
      "Engineering Scalable Solutions Through Code, Architecture, and AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

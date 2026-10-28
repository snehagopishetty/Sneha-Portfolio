import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
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
        className={`${inter.variable} ${jetbrainsMono.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Safeer Ahmad Rana - Software Engineer & Developer",
  description: "Professional portfolio of Safeer Ahmad Rana - Software Engineer specializing in web development, game development, and UI/UX design. Delivering exceptional digital solutions.",
  keywords: "Software Engineer, Web Developer, Game Developer, UI/UX Designer, React, Next.js, TypeScript",
  authors: [{ name: "Safeer Ahmad Rana" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black transition-colors duration-300`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

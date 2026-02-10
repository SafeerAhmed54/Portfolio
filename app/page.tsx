"use client";
import React from "react";
import Header from "@/components/header";
import Home from "@/components/home";
//import Services from "@/components/services";
import About from "@/components/about";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Skills from "@/components/skills-new";
import Project from "@/components/project";
import Contact from "@/components/contact";
import AnimatedBackground from "@/components/background";
import MouseLights from "@/components/mouse-lights";
import InteractiveCursor from "@/components/interactive-cursor";

export default function HomePage() {
  return (
    <div className="bg-black relative min-h-screen">
      {/* Interactive Custom Cursor */}
      <InteractiveCursor />

      {/* Mouse-Following Ambient Lights */}
      <MouseLights />

      {/* Sophisticated Animated Background */}
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Home />
        {/* <Services /> */}
        <About />
        <Education />
        <Experience />
        <Skills />
        <Project />
        <Contact />
        <Contact />
      </div>
    </div>
  );
}

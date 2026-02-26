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
import { usePerformanceConfig } from "@/hooks/usePerformanceConfig";

export default function HomePage() {
  const config = usePerformanceConfig();

  return (
    <div className="bg-black relative min-h-screen">
      {/* Interactive Custom Cursor - Only on non-touch devices */}
      {!config.shouldDisableMouseEffects && <InteractiveCursor />}

      {/* Mouse-Following Ambient Lights - Only on non-touch devices */}
      {!config.shouldDisableMouseEffects && <MouseLights />}

      {/* Sophisticated Animated Background - Always render (handles optimization internally) */}
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
      </div>
    </div>
  );
}

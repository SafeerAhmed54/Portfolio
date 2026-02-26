"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePerformanceConfig } from "@/hooks/usePerformanceConfig";

const MouseLights = () => {
  const config = usePerformanceConfig();
  const [isClient, setIsClient] = useState(false);

  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animations for the lights
  const springConfig = { damping: 25, stiffness: 150 };
  const x1 = useSpring(mouseX, springConfig);
  const y1 = useSpring(mouseY, springConfig);
  
  // Secondary lights with different spring configs for layered effect
  const x2 = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const y2 = useSpring(mouseY, { damping: 30, stiffness: 100 });
  
  const x3 = useSpring(mouseX, { damping: 35, stiffness: 80 });
  const y3 = useSpring(mouseY, { damping: 35, stiffness: 80 });

  // Reduce glow particles from 4 to 2 on low-end devices
  const glowParticleCount = config.shouldReduceAnimations ? 2 : 4;

  // Pre-create all particle springs to avoid hooks order issues
  const particleSpringConfigs = [
    { damping: 20, stiffness: 50 },
    { damping: 25, stiffness: 60 },
    { damping: 30, stiffness: 70 },
    { damping: 35, stiffness: 80 },
    { damping: 40, stiffness: 90 },
    { damping: 45, stiffness: 100 },
    { damping: 50, stiffness: 110 },
    { damping: 55, stiffness: 120 }
  ];

  const glowParticleSpringsX = [
    useSpring(mouseX, particleSpringConfigs[0]),
    useSpring(mouseX, particleSpringConfigs[1]),
    useSpring(mouseX, particleSpringConfigs[2]),
    useSpring(mouseX, particleSpringConfigs[3])
  ];
  const glowParticleSpringsY = [
    useSpring(mouseY, particleSpringConfigs[0]),
    useSpring(mouseY, particleSpringConfigs[1]),
    useSpring(mouseY, particleSpringConfigs[2]),
    useSpring(mouseY, particleSpringConfigs[3])
  ];

  useEffect(() => {
    setIsClient(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;

      mouseX.set(newX);
      mouseY.set(newY);
    };

    if (typeof window !== "undefined") {
      // Set initial position to center of screen
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      mouseX.set(centerX);
      mouseY.set(centerY);
      
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [mouseX, mouseY]);

  // Early return for touch devices or when mouse effects should be disabled
  if (config.shouldDisableMouseEffects || config.isTouchDevice) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" style={{ opacity: isClient ? 1 : 0 }}>
      
      {/* Primary Mouse Light - Largest and brightest */}
      <motion.div
        className="absolute w-96 h-96 rounded-full pointer-events-none"
        style={{
          x: x1,
          y: y1,
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(6, 182, 212, 0.08) 30%, rgba(6, 182, 212, 0.02) 60%, transparent 100%)",
          transform: "translate(-50%, -50%)",
        }}
      />
      
      {/* Secondary Mouse Light - Medium size with delay */}
      <motion.div
        className="absolute w-64 h-64 rounded-full pointer-events-none"
        style={{
          x: x2,
          y: y2,
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.12) 0%, rgba(34, 211, 238, 0.06) 40%, rgba(34, 211, 238, 0.01) 70%, transparent 100%)",
          transform: "translate(-50%, -50%)",
        }}
      />
      
      {/* Tertiary Mouse Light - Smallest with most delay */}
      <motion.div
        className="absolute w-48 h-48 rounded-full pointer-events-none"
        style={{
          x: x3,
          y: y3,
          background: "radial-gradient(circle, rgba(103, 232, 249, 0.1) 0%, rgba(103, 232, 249, 0.04) 50%, transparent 100%)",
          transform: "translate(-50%, -50%)",
        }}
      />
      
      {/* Cursor Trail Effect */}
      <motion.div
        className="absolute w-32 h-32 rounded-full pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, rgba(6, 182, 212, 0.1) 20%, transparent 50%)",
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Ambient Glow Particles that follow mouse */}
      {isClient && glowParticleSpringsX.slice(0, glowParticleCount).map((springX, i) => (
        <motion.div
          key={`glow-particle-${i}`}
          className="absolute w-2 h-2 bg-cyan-400/30 rounded-full pointer-events-none"
          style={{
            x: springX,
            y: glowParticleSpringsY[i],
            transform: `translate(-50%, -50%) translate(${Math.cos(i * 45 * Math.PI / 180) * 60}px, ${Math.sin(i * 45 * Math.PI / 180) * 60}px)`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}
      
      {/* Interactive Ripple Effect - Disabled on low-end devices */}
      {!config.shouldReduceAnimations && (
        <>
          <motion.div
            className="absolute w-80 h-80 border border-cyan-400/10 rounded-full pointer-events-none"
            style={{
              x: x1,
              y: y1,
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute w-60 h-60 border border-cyan-400/15 rounded-full pointer-events-none"
            style={{
              x: x2,
              y: y2,
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </>
      )}
      
      {/* Spotlight Effect */}
      <motion.div
        className="absolute w-[600px] h-[600px] pointer-events-none"
        style={{
          x: x1,
          y: y1,
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.03) 0%, rgba(6, 182, 212, 0.01) 40%, transparent 70%)",
          transform: "translate(-50%, -50%)",

        }}
      />
      
      {/* Subtle Grid Highlight - Disabled on low-end devices */}
      {!config.shouldReduceAnimations && (
        <motion.div
          className="absolute w-40 h-40 pointer-events-none opacity-20"
          style={{
            x: mouseX,
            y: mouseY,
            transform: "translate(-50%, -50%)",
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            mask: "radial-gradient(circle, white 30%, transparent 70%)",
          }}
        />
      )}
    </div>
  );
};

export default MouseLights;
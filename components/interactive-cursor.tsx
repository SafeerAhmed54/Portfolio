"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const InteractiveCursor = () => {
  const [isClient, setIsClient] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVariant, setCursorVariant] = useState("default");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Different spring configs for different elements
  const cursorX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const cursorY = useSpring(mouseY, { damping: 30, stiffness: 200 });
  
  const lightX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const lightY = useSpring(mouseY, { damping: 25, stiffness: 150 });

  // Pre-create all particle springs to avoid hooks order issues
  const particleSpringConfigs = [
    { damping: 15, stiffness: 100 },
    { damping: 18, stiffness: 120 },
    { damping: 21, stiffness: 140 },
    { damping: 24, stiffness: 160 },
    { damping: 27, stiffness: 180 },
    { damping: 30, stiffness: 200 }
  ];

  const particleSpringsX = particleSpringConfigs.map(config => 
    useSpring(mouseX, config)
  );
  const particleSpringsY = particleSpringConfigs.map(config => 
    useSpring(mouseY, config)
  );

  useEffect(() => {
    setIsClient(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;
      setMousePosition({ x: newX, y: newY });
      mouseX.set(newX);
      mouseY.set(newY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target;
      
      // Check if target is a valid Element and has the closest method
      if (!target || !(target instanceof Element)) return;
      
      // Check for interactive elements
      const isButton = target.tagName === 'BUTTON' || target.tagName === 'A' || 
                      target.closest('button') || target.closest('a');
      const isText = target.closest('[data-cursor="text"]') || 
                    ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(target.tagName);
      
      if (isButton) {
        setCursorVariant("button");
        setIsHovering(true);
      } else if (isText) {
        setCursorVariant("text");
        setIsHovering(true);
      } else {
        setCursorVariant("default");
        setIsHovering(false);
      }
    };

    if (typeof window !== "undefined") {
      // Set initial position to center of screen
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setMousePosition({ x: centerX, y: centerY });
      mouseX.set(centerX);
      mouseY.set(centerY);
      
      // Add custom cursor class to body
      document.body.classList.add('custom-cursor-active');
      
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseover", handleMouseOver);
      
      return () => {
        document.body.classList.remove('custom-cursor-active');
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseover", handleMouseOver);
      };
    }
  }, [mouseX, mouseY]);

  const variants = {
    default: {
      scale: 1,
      opacity: 0.6,
    },
    button: {
      scale: 1.5,
      opacity: 0.8,
    },
    text: {
      scale: 2,
      opacity: 0.4,
    }
  };

  return (
    <div style={{ opacity: isClient ? 1 : 0 }}>
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-6 h-6 bg-cyan-400/50 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          transform: "translate(-50%, -50%)",
        }}
        variants={variants}
        animate={cursorVariant}
        transition={{ duration: 0.2 }}
      />
      
      {/* Cursor Trail */}
      <motion.div
        className="fixed w-12 h-12 border-2 border-cyan-400/30 rounded-full pointer-events-none z-40"
        style={{
          x: lightX,
          y: lightY,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 0.4,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Ambient Light Effect */}
      <motion.div
        className="fixed w-80 h-80 pointer-events-none z-0"
        style={{
          x: lightX,
          y: lightY,
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, rgba(6, 182, 212, 0.05) 30%, rgba(6, 182, 212, 0.01) 60%, transparent 100%)",
          transform: "translate(-50%, -50%)",

        }}
        animate={{
          scale: isHovering ? 1.3 : 1,
          opacity: isHovering ? 0.8 : 0.5,
        }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Interactive Particles */}
      {isClient && particleSpringsX.map((springX, i) => (
        <motion.div
          key={`particle-${i}`}
          className="fixed w-1 h-1 bg-cyan-400/40 rounded-full pointer-events-none z-30"
          style={{
            x: springX,
            y: particleSpringsY[i],
            transform: `translate(-50%, -50%) translate(${Math.cos(i * 60 * Math.PI / 180) * 30}px, ${Math.sin(i * 60 * Math.PI / 180) * 30}px)`,
          }}
          animate={{
            opacity: isHovering ? [0.2, 0.8, 0.2] : [0.1, 0.4, 0.1],
            scale: isHovering ? [0.5, 1.2, 0.5] : [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1,
          }}
        />
      ))}
      
      {/* Ripple Effect on Hover */}
      {isHovering && (
        <motion.div
          className="fixed border border-cyan-400/20 rounded-full pointer-events-none z-20"
          style={{
            x: cursorX,
            y: cursorY,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ width: 20, height: 20, opacity: 0.8 }}
          animate={{ 
            width: 100, 
            height: 100, 
            opacity: 0,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}
    </div>
  );
};

export default InteractiveCursor;
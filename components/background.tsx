"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const [isClient, setIsClient] = useState(false);
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      left: number;
      delay: number;
      duration: number;
      text: string;
    }>
  >([]);
  const [floatingElements, setFloatingElements] = useState<
    Array<{ id: number; x: number; y: number; size: number; delay: number }>
  >([]);

  useEffect(() => {
    setIsClient(true);

    // Generate matrix particles
    const newParticles = [...Array(80)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 8 + Math.random() * 12,
      text: Math.random() > 0.7 ? "{ }" : Math.random() > 0.5 ? "01" : "10",
    }));

    // Generate floating geometric elements
    const newFloatingElements = [...Array(20)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 20 + Math.random() * 40,
      delay: Math.random() * 10,
    }));

    setParticles(newParticles);
    setFloatingElements(newFloatingElements);
  }, []);

  return (
    <div
      className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-black"
      style={{ opacity: isClient ? 1 : 0 }}
    >
      {/* Test Visibility Element */}
      <div className="absolute top-4 left-4 w-4 h-4 bg-cyan-400 rounded-full animate-pulse" />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.8) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Matrix-style falling code */}
      <div className="absolute inset-0 opacity-60">
        {particles.map((particle) => (
          <motion.div
            key={`matrix-${particle.id}`}
            className="absolute text-cyan-400 font-mono text-sm font-bold"
            style={{
              left: `${particle.left}%`,
              top: `-10%`,
            }}
            animate={{
              y: ["0vh", "110vh"],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
              delay: particle.delay,
            }}
          >
            {particle.text}
          </motion.div>
        ))}
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 opacity-70">
        {floatingElements.map((element) => (
          <motion.div
            key={`float-${element.id}`}
            className="absolute border-2 border-cyan-400/80 rounded-full"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: element.delay,
            }}
          />
        ))}
      </div>

      {/* Large Geometric Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-cyan-400/60 rotate-45"
        animate={{
          rotate: [45, 405],
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/3 w-48 h-48 border-2 border-cyan-400/70"
        animate={{
          rotate: [0, -360],
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Tech-inspired Hexagon */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-32 h-32 border-2 border-cyan-400/80"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Pulsing Circles with Enhanced Visibility */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 border-2 border-cyan-400/50 rounded-full"
        style={{ transform: "translate(-50%, -50%)" }}
        animate={{
          scale: [1, 2.5, 1],
          opacity: [0.6, 0.2, 0.6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 border-2 border-cyan-400/70 rounded-full"
        style={{ transform: "translate(-50%, -50%)" }}
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.7, 0.3, 0.7],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Orbiting Elements */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-4 h-4 bg-cyan-400/80 rounded-full"
        style={{ transform: "translate(-50%, -50%)" }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.div
          className="absolute w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
          style={{ left: "100px", top: "50%", transform: "translateY(-50%)" }}
        />
      </motion.div>

      {/* Enhanced Scanning Lines */}
      <motion.div
        className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent shadow-lg shadow-cyan-400/50"
        animate={{
          top: ["0%", "100%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
        animate={{
          top: ["100%", "0%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          delay: 4,
        }}
      />

      {/* Vertical Scanning Lines */}
      <motion.div
        className="absolute top-0 h-full w-1 bg-gradient-to-b from-transparent via-cyan-400/70 to-transparent"
        animate={{
          left: ["0%", "100%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
      />

      {/* Data Stream Effect */}
      <motion.div
        className="absolute top-10 left-10 w-3 h-24 bg-gradient-to-b from-cyan-400/90 to-transparent shadow-lg shadow-cyan-400/30"
        animate={{
          opacity: [0, 1, 0],
          scaleY: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 3,
        }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-3 h-20 bg-gradient-to-t from-cyan-400/80 to-transparent shadow-lg shadow-cyan-400/30"
        animate={{
          opacity: [0, 1, 0],
          scaleY: [0, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 4,
          delay: 1,
        }}
      />

      {/* Enhanced Corner Decorations */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <motion.div
          className="w-full h-full border-l-3 border-t-3 border-cyan-400/80"
          animate={{
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-3 left-3 w-6 h-6 border-2 border-cyan-400 shadow-lg shadow-cyan-400/30"
          animate={{
            rotate: [0, 90, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="absolute top-0 right-0 w-32 h-32">
        <motion.div
          className="w-full h-full border-r-3 border-t-3 border-cyan-400/80"
          animate={{
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="absolute bottom-0 left-0 w-24 h-24">
        <motion.div
          className="w-full h-full border-l-2 border-b-2 border-cyan-400/30"
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="absolute bottom-0 right-0 w-24 h-24">
        <motion.div
          className="w-full h-full border-r-2 border-b-2 border-cyan-400/30"
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      {/* Particle Burst Effect */}
      <motion.div
        className="absolute top-1/4 right-1/2 w-2 h-2 bg-cyan-400/60 rounded-full"
        animate={{
          scale: [0, 4, 0],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut",
          repeatDelay: 5,
        }}
      />

      {/* Digital Rain Enhancement */}
      <div className="absolute inset-0 opacity-100">
        <motion.div
          className="w-full h-full bg-gradient-to-b from-cyan-400/20 via-transparent to-cyan-400/20"
          animate={{
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Subtle Vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20" />
    </div>
  );
};

export default AnimatedBackground;

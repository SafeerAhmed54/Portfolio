"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const [isClient, setIsClient] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number; duration: number; text: string }>>([]);

  useEffect(() => {
    setIsClient(true);
    
    // Generate particles on client side to avoid hydration mismatch
    const newParticles = [...Array(50)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 10 + Math.random() * 20,
      text: Math.random() > 0.5 ? "01" : "10"
    }));
    
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" style={{ opacity: isClient ? 1 : 0 }}>
      
      {/* Matrix-style falling code */}
      <div className="absolute inset-0 opacity-[0.02]">
        {particles.map((particle) => (
          <motion.div
            key={`matrix-${particle.id}`}
            className="absolute text-cyan-400 font-mono text-xs"
            style={{
              left: `${particle.left}%`,
              top: `-10%`,
            }}
            animate={{
              y: ["0vh", "110vh"],
              opacity: [0, 0.5, 0],
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
      
      {/* Geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-400/5 rotate-45"
        animate={{
          rotate: [45, 405],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-48 h-48 border border-cyan-400/3"
        animate={{
          rotate: [0, -360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Pulsing circles */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 border border-cyan-400/5 rounded-full"
        style={{ transform: "translate(-50%, -50%)" }}
        animate={{
          scale: [1, 2, 1],
          opacity: [0.1, 0, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 border border-cyan-400/8 rounded-full"
        style={{ transform: "translate(-50%, -50%)" }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Scanning lines */}
      <motion.div
        className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
        animate={{
          top: ["0%", "100%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
        animate={{
          top: ["100%", "0%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
          delay: 3
        }}
      />
      
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-20 h-20">
        <motion.div
          className="w-full h-full border-l-2 border-t-2 border-cyan-400/10"
          animate={{
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="absolute top-0 right-0 w-20 h-20">
        <motion.div
          className="w-full h-full border-r-2 border-t-2 border-cyan-400/10"
          animate={{
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      <div className="absolute bottom-0 left-0 w-20 h-20">
        <motion.div
          className="w-full h-full border-l-2 border-b-2 border-cyan-400/10"
          animate={{
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <div className="absolute bottom-0 right-0 w-20 h-20">
        <motion.div
          className="w-full h-full border-r-2 border-b-2 border-cyan-400/10"
          animate={{
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-overlay opacity-30" />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30" />
    </div>
  );
};

export default AnimatedBackground;
"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ScrollAnimationsProps {
  children: React.ReactNode;
}

const ScrollAnimations: React.FC<ScrollAnimationsProps> = ({ children }) => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { damping: 50, stiffness: 400 });

  // Track scroll direction
  useEffect(() => {
    const updateScrollDirection = (latest: number) => {
      if (latest > lastScrollY) {
        setScrollDirection("down");
      } else if (latest < lastScrollY) {
        setScrollDirection("up");
      }
      setLastScrollY(latest);
    };

    const unsubscribe = scrollY.on("change", updateScrollDirection);
    return () => unsubscribe();
  }, [scrollY, lastScrollY]);

  return (
    <div className="relative">
      {children}
      
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 origin-left z-50"
        style={{
          scaleX: useTransform(smoothScrollY, [0, 4000], [0, 1])
        }}
      />
      
      {/* Scroll Direction Indicator */}
      <motion.div
        className="fixed bottom-8 right-8 z-50 bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-full p-3"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ 
            rotate: scrollDirection === "down" ? 0 : 180,
            color: scrollDirection === "down" ? "#06b6d4" : "#f59e0b"
          }}
          transition={{ duration: 0.3 }}
          className="text-xl"
        >
          ↓
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ScrollAnimations;
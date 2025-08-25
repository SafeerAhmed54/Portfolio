"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 100,
  className = ""
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, // Allow re-triggering
    margin: "-100px 0px -100px 0px" // Trigger when 100px into viewport
  });
  const controls = useAnimation();

  const getInitialPosition = () => {
    switch (direction) {
      case "up": return { y: distance, opacity: 0 };
      case "down": return { y: -distance, opacity: 0 };
      case "left": return { x: distance, opacity: 0 };
      case "right": return { x: -distance, opacity: 0 };
      default: return { y: distance, opacity: 0 };
    }
  };

  const getAnimatePosition = () => {
    return { x: 0, y: 0, opacity: 1 };
  };

  useEffect(() => {
    if (isInView) {
      controls.start(getAnimatePosition());
    } else {
      controls.start(getInitialPosition());
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={controls}
      transition={{
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
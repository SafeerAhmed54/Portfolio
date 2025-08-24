"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SectionNavigatorProps {
  sections: React.ReactNode[];
  sectionNames: string[];
}

const SectionNavigator: React.FC<SectionNavigatorProps> = ({ sections, sectionNames }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef<number>(0);
  const lastScrollTime = useRef<number>(0);

  // Handle wheel scroll
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement;
      const sectionContainer = target.closest('.section-content');
      
      if (sectionContainer) {
        const { scrollTop, scrollHeight, clientHeight } = sectionContainer;
        const delta = e.deltaY;
        
        // Check if we're at the top or bottom of the section content
        const atTop = scrollTop <= 0;
        const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
        
        // Only navigate to next/prev section if we're at the edge and trying to scroll further
        if ((delta > 0 && atBottom && currentSection < sections.length - 1) ||
            (delta < 0 && atTop && currentSection > 0)) {
          
          const now = Date.now();
          if (now - lastScrollTime.current < 800 || isScrolling) return;
          
          e.preventDefault();
          
          if (delta > 0) {
            setCurrentSection(prev => prev + 1);
          } else {
            setCurrentSection(prev => prev - 1);
          }
          
          lastScrollTime.current = now;
          setIsScrolling(true);
          setTimeout(() => setIsScrolling(false), 800);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      return () => container.removeEventListener("wheel", handleWheel);
    }
  }, [currentSection, sections.length, isScrolling]);

  // Handle touch events for mobile
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling) return;
      
      const target = e.target as HTMLElement;
      const sectionContainer = target.closest('.section-content');
      
      if (sectionContainer) {
        const { scrollTop, scrollHeight, clientHeight } = sectionContainer;
        const touchEndY = e.changedTouches[0].clientY;
        const deltaY = touchStartY.current - touchEndY;
        
        const atTop = scrollTop <= 0;
        const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
        
        if (Math.abs(deltaY) > 100) { // Increased minimum swipe distance
          if (deltaY > 0 && atBottom && currentSection < sections.length - 1) {
            // Swipe up - go to next section
            setCurrentSection(prev => prev + 1);
            setIsScrolling(true);
            setTimeout(() => setIsScrolling(false), 800);
          } else if (deltaY < 0 && atTop && currentSection > 0) {
            // Swipe down - go to previous section
            setCurrentSection(prev => prev - 1);
            setIsScrolling(true);
            setTimeout(() => setIsScrolling(false), 800);
          }
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("touchstart", handleTouchStart, { passive: true });
      container.addEventListener("touchend", handleTouchEnd, { passive: true });
      return () => {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [currentSection, sections.length, isScrolling]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;
      
      if (e.key === "ArrowDown" && currentSection < sections.length - 1) {
        setCurrentSection(prev => prev + 1);
        setIsScrolling(true);
        setTimeout(() => setIsScrolling(false), 800);
      } else if (e.key === "ArrowUp" && currentSection > 0) {
        setCurrentSection(prev => prev - 1);
        setIsScrolling(true);
        setTimeout(() => setIsScrolling(false), 800);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSection, sections.length, isScrolling]);

  // Handle header navigation
  useEffect(() => {
    const handleNavigateToSection = (e: CustomEvent) => {
      if (!isScrolling) {
        setCurrentSection(e.detail);
        setIsScrolling(true);
        setTimeout(() => setIsScrolling(false), 800);
      }
    };

    window.addEventListener("navigateToSection", handleNavigateToSection as EventListener);
    return () => window.removeEventListener("navigateToSection", handleNavigateToSection as EventListener);
  }, [isScrolling]);

  const sectionVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-black"
      style={{ touchAction: 'none' }}
    >
      {/* Section Content */}
      <AnimatePresence mode="wait" custom={currentSection}>
        <motion.div
          key={currentSection}
          custom={currentSection}
          variants={sectionVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden section-content"
          style={{ 
            scrollbarWidth: 'thin',
            scrollbarColor: '#06b6d4 #1f2937'
          }}
        >
          <div className="min-h-full">
            {sections[currentSection]}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Section Indicator */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-3">
        {sections.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              if (!isScrolling) {
                setCurrentSection(index);
                setIsScrolling(true);
                setTimeout(() => setIsScrolling(false), 800);
              }
            }}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              index === currentSection
                ? "bg-cyan-400 border-cyan-400 scale-125"
                : "bg-transparent border-gray-400 hover:border-cyan-400"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Section Name Indicator */}
      <motion.div 
        className="fixed bottom-8 left-8 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="text-cyan-400 font-mono text-sm mb-2">
          {String(currentSection + 1).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}
        </div>
        <div className="text-white text-xl font-bold">
          {sectionNames[currentSection]}
        </div>
      </motion.div>

      {/* Navigation Instructions */}
      <motion.div 
        className="fixed bottom-8 right-8 z-50 text-gray-400 text-sm font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="text-center">
          <div>↑↓ Scroll or Arrow Keys</div>
          <div className="text-xs mt-1">Navigate Sections</div>
        </div>
      </motion.div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default SectionNavigator;
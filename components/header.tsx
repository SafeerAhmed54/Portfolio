"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

// Navigation items configuration
const navigationItems = [
  { href: '#home-id', label: 'Home' },
  { href: '#about-id', label: 'About' },
  { href: '#experience-id', label: 'Experience' },
  { href: '#skills-id', label: 'Skills' },
  { href: '#project-id', label: 'Projects' },
  { href: '#contact-id', label: 'Contact' }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu toggle functionality
  const toggleMobileMenu = () => {
    if (isAnimating) return; // Prevent rapid toggles during animation
    
    setIsAnimating(true);
    setIsMobileMenuOpen(prev => {
      const newState = !prev;
      // Prevent body scroll when menu is open
      if (newState) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
      return newState;
    });
    
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 300); // Match animation duration
  };

  // Close mobile menu when clicking outside or on navigation links
  const closeMobileMenu = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setIsMobileMenuOpen(false);
    
    // Restore body scroll
    document.body.style.overflow = 'unset';
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  // Cleanup effect to restore scroll on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Handle navigation link clicks
  const handleNavClick = () => {
    closeMobileMenu();
    // Allow default anchor behavior to handle navigation
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-cyan-400 flex items-center justify-center font-bold text-black text-xl">
              S
            </div>
            <span className="ml-3 text-gray-900 dark:text-white font-bold text-lg hidden sm:block transition-colors duration-300">
              Safeer Ahmad Rana
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            {/* <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button> */}

            <a
              href="/Safeer_Ahmad_Rana_Resume.pdf"
              download
              className="hidden sm:inline-flex items-center px-6 py-2 bg-transparent border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 font-medium"
            >
              Resume
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-900 dark:text-white transition-colors duration-300 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={isMobileMenuOpen}
              disabled={isAnimating}
            >
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={isMobileMenuOpen ? "open" : "closed"}
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  variants={{
                    closed: { d: "M4 6h16" },
                    open: { d: "M6 18L18 6" }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  variants={{
                    closed: { opacity: 1, d: "M4 12h16" },
                    open: { opacity: 0, d: "M12 12h0" }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  variants={{
                    closed: { d: "M4 18h16" },
                    open: { d: "M6 6l12 12" }
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay - Rendered via Portal */}
      {mounted && createPortal(
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Background Overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] md:hidden"
                onClick={closeMobileMenu}
                aria-hidden="true"
              />
              
              {/* Mobile Navigation Menu - Full Width */}
              <motion.div 
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ 
                  type: "tween",
                  duration: 0.3,
                  ease: "easeInOut"
                }}
                className="fixed inset-0 bg-white dark:bg-gray-900 z-[9999] md:hidden flex flex-col"
              >
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="flex items-center"
                  >
                    <div className="w-8 h-8 bg-cyan-400 flex items-center justify-center font-bold text-black text-lg rounded">
                      S
                    </div>
                    <span className="ml-3 text-gray-900 dark:text-white font-bold text-lg">
                      Safeer Ahmad Rana
                    </span>
                  </motion.div>
                  
                  {/* Close Button */}
                  <motion.button
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    onClick={closeMobileMenu}
                    className="p-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                    aria-label="Close mobile menu"
                    disabled={isAnimating}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 flex flex-col justify-center px-8 py-8 space-y-4">
                  {navigationItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={handleNavClick}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.2 + (index * 0.1),
                        duration: 0.3,
                        ease: "easeOut"
                      }}
                      className="flex items-center px-6 py-5 text-gray-700 dark:text-gray-300 hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 font-medium text-2xl"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>

                {/* Resume Button */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="p-8 border-t border-gray-200 dark:border-gray-700 flex-shrink-0"
                >
                  <a
                    href="/Safeer_Ahmad_Rana_Resume.pdf"
                    download
                    onClick={closeMobileMenu}
                    className="flex items-center justify-center w-full px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 font-semibold rounded-xl text-lg"
                  >
                    Download Resume
                  </a>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </header>
  );
};

export default Header;

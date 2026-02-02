"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
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
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Refs for keyboard accessibility
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const firstFocusableElementRef = useRef<HTMLButtonElement>(null);
  const lastFocusableElementRef = useRef<HTMLAnchorElement>(null);
  
  // Screen reader announcements
  const [screenReaderAnnouncement, setScreenReaderAnnouncement] = useState('');

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

  // Enhanced scroll behavior management
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Store current scroll position
      const currentScrollY = window.scrollY;
      setScrollPosition(currentScrollY);
      
      // Prevent body scroll and maintain scroll position
      document.body.style.position = 'fixed';
      document.body.style.top = `-${currentScrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore body scroll and scroll position
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      
      // Restore scroll position
      window.scrollTo(0, scrollPosition);
    }
  }, [isMobileMenuOpen, scrollPosition]);

  // Mobile menu toggle functionality
  const toggleMobileMenu = () => {
    if (isAnimating) return; // Prevent rapid toggles during animation
    
    setIsAnimating(true);
    const newMenuState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newMenuState);
    
    // Screen reader announcement for menu state change
    setScreenReaderAnnouncement(
      newMenuState ? 'Mobile navigation menu opened' : 'Mobile navigation menu closed'
    );
    
    // Reset animation state after animation completes (increased to match new animation duration)
    setTimeout(() => {
      setIsAnimating(false);
    }, 400); // Match enhanced animation duration
  };

  // Close mobile menu when clicking outside or on navigation links
  const closeMobileMenu = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setIsMobileMenuOpen(false);
    
    // Screen reader announcement for menu closing
    setScreenReaderAnnouncement('Mobile navigation menu closed');
    
    // Restore focus to the mobile menu button
    setTimeout(() => {
      if (mobileMenuButtonRef.current) {
        mobileMenuButtonRef.current.focus();
      }
    }, 50); // Small delay to ensure menu is closing
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 400); // Match enhanced animation duration
  }, [isAnimating]);

  // Enhanced cleanup effect to restore scroll on unmount or page navigation
  useEffect(() => {
    return () => {
      // Restore body styles on cleanup
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, []);

  // Keyboard accessibility: Handle escape key and focus management
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isMobileMenuOpen) return;

      switch (event.key) {
        case 'Escape':
          event.preventDefault();
          closeMobileMenu();
          break;
        case 'Tab':
          handleTabNavigation(event);
          break;
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Set initial focus to the first focusable element when menu opens
      setTimeout(() => {
        if (firstFocusableElementRef.current) {
          firstFocusableElementRef.current.focus();
        }
      }, 100); // Small delay to ensure animation has started
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen, closeMobileMenu]);

  // Focus trapping function
  const handleTabNavigation = (event: KeyboardEvent) => {
    if (!mobileMenuRef.current) return;

    const focusableElements = mobileMenuRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const focusableArray = Array.from(focusableElements) as HTMLElement[];
    
    if (focusableArray.length === 0) return;

    const firstElement = focusableArray[0];
    const lastElement = focusableArray[focusableArray.length - 1];

    if (event.shiftKey) {
      // Shift + Tab (backward)
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      // Tab (forward)
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  };

  // Handle navigation link clicks
  const handleNavClick = () => {
    closeMobileMenu();
    // Allow default anchor behavior to handle navigation
  };

  return (
    <>
      {/* Screen reader announcements - Live region for menu state changes */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        role="status"
        aria-label="Navigation menu status"
      >
        {screenReaderAnnouncement}
      </div>
      
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
            : "bg-transparent"
        }`}
        role="banner"
      >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center" role="img" aria-label="Safeer Ahmad Rana Logo">
            <div className="w-10 h-10 bg-cyan-400 flex items-center justify-center font-bold text-black text-xl">
              S
            </div>
            <span className="ml-3 text-gray-900 dark:text-white font-bold text-lg hidden sm:block transition-colors duration-300">
              Safeer Ahmad Rana
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navigationItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group text-gray-600 dark:text-gray-300 hover:text-cyan-400 active:text-cyan-500 transition-all duration-200 font-medium relative touch-manipulation flex items-center justify-center"
                style={{ 
                  WebkitTapHighlightColor: 'rgba(6, 182, 212, 0.1)',
                  touchAction: 'manipulation',
                  minHeight: '48px',
                  minWidth: '48px',
                  padding: '12px 16px'
                }}
              >
                <span className="group-hover:drop-shadow-sm transition-all duration-200">
                  {item.label}
                </span>
                
                {/* Subtle underline effect */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 opacity-0 group-hover:opacity-100"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button - Commented out for now
            <button
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
            </button>
            */}

            <motion.a
              href="/Safeer_Ahmad_Rana_Resume.pdf"
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group hidden sm:inline-flex items-center px-6 py-3 bg-transparent border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black active:bg-cyan-500 active:border-cyan-500 active:text-black transition-all duration-300 font-medium relative overflow-hidden touch-manipulation"
              style={{ 
                WebkitTapHighlightColor: 'rgba(6, 182, 212, 0.1)',
                touchAction: 'manipulation',
                minHeight: '48px'
              }}
              aria-label="Download resume PDF file"
            >
              {/* Enhanced hover background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              
              {/* Subtle glow effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)'
                }}
                transition={{ duration: 0.2 }}
              />
              
              <span className="relative z-10 group-hover:drop-shadow-sm transition-all duration-200">
                Resume
              </span>
            </motion.a>

            {/* Mobile Menu Button - Enhanced touch target sizing */}
            <button 
              ref={mobileMenuButtonRef}
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-900 dark:text-white transition-all duration-300 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-700 rounded-lg relative overflow-hidden touch-manipulation group"
              style={{ 
                WebkitTapHighlightColor: 'rgba(6, 182, 212, 0.1)',
                touchAction: 'manipulation',
                minHeight: '48px',
                minWidth: '48px'
              }}
              aria-label={isMobileMenuOpen ? "Close mobile navigation menu" : "Open mobile navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              aria-haspopup="true"
              disabled={isAnimating}
            >
              {/* Enhanced hover background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-cyan-400/5 rounded-lg opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.2 }}
              />
              
              {/* Active state background */}
              <motion.div
                className="absolute inset-0 bg-cyan-400/15 rounded-lg opacity-0"
                whileTap={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
              />
              
              <motion.svg
                className="w-6 h-6 relative z-10 group-hover:text-cyan-400 transition-colors duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={isMobileMenuOpen ? "open" : "closed"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
        <AnimatePresence mode="wait">
          {isMobileMenuOpen && (
            <>
              {/* Background Overlay with enhanced animation */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 0.3,
                  ease: "easeInOut"
                }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] md:hidden"
                onClick={closeMobileMenu}
                aria-hidden="true"
                role="presentation"
              />
              
              {/* Mobile Navigation Menu - Enhanced slide-in animation */}
              <motion.div 
                ref={mobileMenuRef}
                initial={{ 
                  x: "100%",
                  opacity: 0
                }}
                animate={{ 
                  x: 0,
                  opacity: 1
                }}
                exit={{ 
                  x: "100%",
                  opacity: 0
                }}
                transition={{ 
                  type: "spring",
                  damping: 25,
                  stiffness: 200,
                  duration: 0.4,
                  opacity: { duration: 0.3 }
                }}
                className="fixed inset-0 bg-white dark:bg-gray-900 z-[9999] md:hidden flex flex-col overflow-hidden shadow-2xl"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation menu"
                aria-labelledby="mobile-menu-title"
                aria-describedby="mobile-menu-description"
                id="mobile-navigation-menu"
              >
                {/* Hidden title and description for screen readers */}
                <h2 id="mobile-menu-title" className="sr-only">
                  Mobile Navigation Menu
                </h2>
                <p id="mobile-menu-description" className="sr-only">
                  Navigate to different sections of the portfolio website. Use tab to move between menu items and escape to close the menu.
                </p>
                {/* Mobile Menu Header with enhanced animations */}
                <motion.header 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ 
                    delay: 0.1, 
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                  className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 flex-shrink-0"
                  role="banner"
                >
                  <motion.div 
                    initial={{ opacity: 0, x: -30, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ 
                      delay: 0.15, 
                      duration: 0.4,
                      ease: "easeOut"
                    }}
                    className="flex items-center"
                    role="img"
                    aria-label="Safeer Ahmad Rana Logo"
                  >
                    <motion.div 
                      initial={{ rotate: -180, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ 
                        delay: 0.2,
                        duration: 0.5,
                        ease: "backOut"
                      }}
                      className="w-8 h-8 bg-cyan-400 flex items-center justify-center font-bold text-black text-lg rounded"
                    >
                      S
                    </motion.div>
                    <motion.span 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.25,
                        duration: 0.3
                      }}
                      className="ml-3 text-gray-900 dark:text-white font-bold text-lg"
                    >
                      Safeer Ahmad Rana
                    </motion.span>
                  </motion.div>
                  
                  {/* Close Button with enhanced animation and proper touch targets */}
                  <motion.button
                    ref={firstFocusableElementRef}
                    initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
                    transition={{ 
                      delay: 0.15, 
                      duration: 0.4,
                      ease: "backOut"
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 90,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={closeMobileMenu}
                    className="group p-3 text-gray-500 dark:text-gray-400 hover:text-cyan-400 active:text-cyan-500 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800/80 active:bg-gray-200 dark:active:bg-gray-700/80 rounded-lg transition-all duration-200 relative overflow-hidden touch-manipulation"
                    style={{ 
                      WebkitTapHighlightColor: 'rgba(6, 182, 212, 0.1)',
                      touchAction: 'manipulation',
                      minHeight: '48px',
                      minWidth: '48px'
                    }}
                    aria-label="Close mobile navigation menu"
                    disabled={isAnimating}
                  >
                    {/* Enhanced hover background effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-cyan-400/5 rounded-lg opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.2 }}
                    />
                    
                    {/* Active state background */}
                    <motion.div
                      className="absolute inset-0 bg-cyan-400/15 rounded-lg opacity-0"
                      whileTap={{ opacity: 1 }}
                      transition={{ duration: 0.1 }}
                    />
                    
                    <svg
                      className="w-6 h-6 relative z-10 group-hover:drop-shadow-sm transition-all duration-200"
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
                </motion.header>

                {/* Scrollable Content Container */}
                <div className="flex-1 flex flex-col min-h-0 overflow-y-auto overscroll-contain">
                  {/* Navigation Links with enhanced staggered animations */}
                  <motion.nav 
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          delayChildren: 0.2,
                          staggerChildren: 0.08
                        }
                      }
                    }}
                    className="flex-1 flex flex-col justify-center px-8 py-8 space-y-4"
                  >
                    {navigationItems.map((item) => (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={handleNavClick}
                        variants={{
                          hidden: { 
                            opacity: 0, 
                            x: 60,
                            y: 20,
                            scale: 0.8
                          },
                          visible: { 
                            opacity: 1, 
                            x: 0,
                            y: 0,
                            scale: 1,
                            transition: {
                              type: "spring",
                              damping: 20,
                              stiffness: 300,
                              duration: 0.4
                            }
                          }
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          x: 10,
                          transition: { 
                            type: "spring",
                            damping: 15,
                            stiffness: 400
                          }
                        }}
                        whileTap={{ 
                          scale: 0.98,
                          transition: { duration: 0.1 }
                        }}
                        className="group flex items-center px-6 py-6 text-gray-700 dark:text-gray-300 hover:text-cyan-400 active:text-cyan-500 hover:bg-gray-50 dark:hover:bg-gray-800/80 active:bg-gray-100 dark:active:bg-gray-700/80 rounded-xl transition-all duration-200 font-medium text-2xl relative overflow-hidden touch-manipulation"
                        style={{ 
                          WebkitTapHighlightColor: 'rgba(6, 182, 212, 0.1)',
                          touchAction: 'manipulation',
                          minHeight: '56px',
                          minWidth: '56px'
                        }}
                      >
                        {/* Enhanced hover effect background with gradient */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-cyan-400/15 via-cyan-400/10 to-cyan-400/5 rounded-xl opacity-0 group-hover:opacity-100"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                        
                        {/* Active state background */}
                        <motion.div
                          className="absolute inset-0 bg-cyan-400/20 rounded-xl opacity-0"
                          whileTap={{ opacity: 1 }}
                          transition={{ duration: 0.1 }}
                        />
                        
                        {/* Subtle glow effect on hover */}
                        <motion.div
                          className="absolute inset-0 rounded-xl shadow-lg opacity-0 group-hover:opacity-100"
                          style={{
                            boxShadow: '0 0 20px rgba(6, 182, 212, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                          }}
                          transition={{ duration: 0.2 }}
                        />
                        
                        {/* Text with enhanced styling */}
                        <span className="relative z-10 group-hover:drop-shadow-sm transition-all duration-200">
                          {item.label}
                        </span>
                        
                        {/* Subtle accent indicator */}
                        <motion.div
                          className="absolute left-2 top-1/2 w-1 h-0 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                          initial={{ height: 0 }}
                          whileHover={{ height: '60%' }}
                          style={{ transform: 'translateY(-50%)' }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        />
                      </motion.a>
                    ))}
                  </motion.nav>

                  {/* Resume Button with enhanced animation */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 30, scale: 0.9 }}
                    transition={{ 
                      delay: 0.6, 
                      duration: 0.4,
                      ease: "backOut"
                    }}
                    className="p-8 border-t border-gray-200 dark:border-gray-700 flex-shrink-0"
                  >
                    <motion.a
                      ref={lastFocusableElementRef}
                      href="/Safeer_Ahmad_Rana_Resume.pdf"
                      download
                      onClick={closeMobileMenu}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 10px 25px rgba(6, 182, 212, 0.3)",
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ 
                        scale: 0.98,
                        transition: { duration: 0.1 }
                      }}
                      className="group flex items-center justify-center w-full px-8 py-5 bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black active:bg-cyan-500 active:border-cyan-500 active:text-black transition-all duration-300 font-semibold rounded-xl text-lg relative overflow-hidden touch-manipulation"
                      style={{ 
                        WebkitTapHighlightColor: 'rgba(6, 182, 212, 0.1)',
                        touchAction: 'manipulation',
                        minHeight: '56px'
                      }}
                    >
                      {/* Enhanced button background animation */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-cyan-400 to-cyan-500"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                      
                      {/* Active state overlay */}
                      <motion.div
                        className="absolute inset-0 bg-cyan-500/20"
                        initial={{ opacity: 0 }}
                        whileTap={{ opacity: 1 }}
                        transition={{ duration: 0.1 }}
                      />
                      
                      {/* Subtle glow effect */}
                      <motion.div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                        style={{
                          boxShadow: '0 0 30px rgba(6, 182, 212, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                        }}
                        transition={{ duration: 0.2 }}
                      />
                      
                      <span className="relative z-10 group-hover:drop-shadow-sm transition-all duration-200">
                        Download Resume
                      </span>
                    </motion.a>
                  </motion.div>
                </div>
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

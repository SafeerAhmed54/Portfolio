"use client";
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-cyan-400 flex items-center justify-center font-bold text-black text-xl">
              S
            </div>
            <span className="ml-3 text-white font-bold text-lg hidden sm:block">
              Safeer Ahmad Rana
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#home-id" 
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Home
            </a>
            <a 
              href="#services-id" 
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Services
            </a>
            <a 
              href="#about-id" 
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              About
            </a>
            <a 
              href="#project-id" 
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Projects
            </a>
            <a 
              href="#contact-id" 
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <a 
              href="/Safeer_Ahmad_Rana_Resume.pdf" 
              download 
              className="hidden sm:inline-flex items-center px-6 py-2 bg-transparent border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 font-medium"
            >
              Resume
            </a>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
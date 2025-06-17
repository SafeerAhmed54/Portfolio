import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div id="home-id" className="w-full">
      <header className="w-full flex flex-wrap md:flex-nowrap justify-between items-center px-4 py-3 md:py-4 font-sans font-bold text-white bg-opacity-12 rounded-2xl">
        {/* Logo */}
        <div className="flex items-center">
          <img
            className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 transition-transform duration-300 transform hover:scale-110"
            src="/logo.png"
            alt="logo"
          />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-auto mt-4 md:mt-0`}>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
            <a
              className="transition-transform duration-300 transform hover:scale-110 hover:text-cyan-500 text-center md:text-left"
              href="#home-id"
            >
              Home
            </a>
            <a
              className="transition-transform duration-300 transform hover:scale-110 hover:text-cyan-500 text-center md:text-left"
              href="#education-id"
            >
              Education
            </a>
            <a
              className="transition-transform duration-300 transform hover:scale-110 hover:text-cyan-500 text-center md:text-left"
              href="#project-id"
            >
              Project
            </a>
            <a
              className="transition-transform duration-300 transform hover:scale-110 hover:text-cyan-500 text-center md:text-left"
              href="#contact-id"
            >
              Contact
            </a>
          </div>
        </nav>

        {/* Download Resume Button */}
        <button className="hidden md:block border-2 border-white rounded-lg px-4 py-2 hover:text-black hover:bg-cyan-500 text-white font-bold transition-all duration-300 transform hover:scale-110">
          Download Resume
        </button>
        <button className="md:hidden w-full mt-4 border-2 border-white rounded-lg px-4 py-2 hover:text-black hover:bg-cyan-500 text-white font-bold transition-all duration-300 transform hover:scale-110">
          Download Resume
        </button>
      </header>
    </div>
  );
};

export default Header;
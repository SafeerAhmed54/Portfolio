import React from 'react';

const header = () => {
  return (
    <div id="home-id" className="w-full bg-black border-b border-cyan-500">
      <header className="flex flex-row items-center w-full px-2 sm:px-6 py-2">
        {/* Logo and Nav Group */}
        <div className="flex flex-row items-center flex-shrink-0">
          <img
            className="transition-transform duration-300 transform hover:scale-110 p-2"
            src="/logo.png"
            alt="logo"
            width={80}
            height={80}
            
          />
          <nav className="flex flex-row items-center space-x-3 sm:space-x-6 md:space-x-10 text-base sm:text-lg font-bold ml-6 overflow-x-auto">
            <a className="hover:text-cyan-400 transition-colors whitespace-nowrap" href="#home-id">Home</a>
            <a className="hover:text-cyan-400 transition-colors whitespace-nowrap" href="#education-id">Education</a>
            <a className="hover:text-cyan-400 transition-colors whitespace-nowrap" href="#project-id">Project</a>
            <a className="hover:text-cyan-400 transition-colors whitespace-nowrap" href="#contact-id">Contact</a>
          </nav>
        </div>
        {/* Download Resume Button */}
        <div className="flex-shrink-0 ml-auto">
          <a href="/Safeer_Ahmad_Rana_Resume.pdf" download className="border-2 border-white rounded-lg px-3 py-2 text-white font-bold hover:bg-cyan-500 hover:text-black transition-colors text-sm sm:text-base whitespace-nowrap">
            Download Resume
          </a>
        </div>
      </header>
    </div>
  );
};

export default header;
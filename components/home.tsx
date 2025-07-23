"use client";
import React from "react";

const home = () => {
  return (
    <section id="home-id" className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden pt-24 pb-10">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-6xl px-4">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center text-left md:pr-10">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-4">
            Safeer Ahmad Rana
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl text-cyan-300 font-medium mb-6">
            I’m a Software Engineer. I welcome you to my personal portfolio.
          </p>
          <a href="/Safeer_Ahmad_Rana_Resume.pdf" download className="inline-block border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-bold hover:bg-cyan-400 hover:text-black transition-colors text-lg mt-2">Download Resume</a>
        </div>
        {/* Right: Image with Overlay */}
        <div className="flex-1 flex items-center justify-center w-full md:w-auto mt-10 md:mt-0 relative">
          <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl aspect-square">
            <img src="/Safeer.png" alt="Profile" className="w-full h-full object-cover object-center rounded-2xl shadow-2xl" />
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-700/60 via-black/60 to-cyan-900/60 rounded-2xl mix-blend-multiply" />
          </div>
        </div>
      </div>
      {/* Mouse Scroll Indicator */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-8 z-20 flex flex-col items-center">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce mt-2" />
        </div>
        <span className="text-cyan-400 text-xs mt-2">Scroll</span>
      </div>
    </section>
  );
};

export default home;

"use client";
import React from "react";

const home = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-transparent">
      {/* Responsive Hero Section */}
      <div className="flex flex-col md:flex-row min-h-screen w-full mb-8 relative justify-center items-center">
        <div className="w-full md:w-1/2 flex justify-center items-center flex-col px-4 sm:px-8 md:p-20 space-y-3 sm:space-y-5 pt-10 md:pt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-sans">Hi, I&apos;m</h1>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-sans bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
            Safeer Ahmad Rana
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white font-sans">
            I&apos;m a Software Engineer. I welcome you to my personal portfolio
          </p>
          <a
            href="/Safeer_Ahmad_Rana_Resume.pdf"
            download
            className="mt-4 inline-block bg-cyan-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 text-sm sm:text-base md:text-lg"
          >
            Download Resume
          </a>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center mt-8 md:mt-0">
          <img
            src="/Safeer.png"
            alt="Profile Picture"
            width={400}
            height={400}
            className="object-contain max-w-[80vw] max-h-[50vh] md:max-w-full md:max-h-full"
          />
        </div>
      </div>
      <div className="border-1 border-cyan-500"></div>
      {/* Keyframes for gradient animation */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default home;

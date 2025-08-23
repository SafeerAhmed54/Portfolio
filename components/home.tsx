"use client";
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home-id" className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-cyan-400/20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-24 h-24 border border-cyan-400/10"
          animate={{
            rotate: [360, 0],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Hero Content: Clean, modern layout */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
        
        {/* Left: Large Typography */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col items-start justify-center text-left lg:pr-16"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-8">
            <motion.h1 
              className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-none mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Safeer
              <br />
              <motion.span 
                className="text-cyan-400 inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Ahmad Rana
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl text-gray-400 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Software Engineer crafting exceptional digital experiences through innovative web and game development solutions.
            </motion.p>
          </div>
          
          {/* CTA Button */}
          <motion.a
            href="/Safeer_Ahmad_Rana_Resume.pdf"
            download
            className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold rounded-none hover:bg-cyan-400 hover:text-black transition-all duration-300 group relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Download Resume</span>
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <motion.div
              className="absolute inset-0 bg-cyan-400"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
        
        {/* Right: Professional Portrait */}
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            {/* Animated geometric accents */}
            <motion.div 
              className="absolute -top-4 -right-4 w-24 h-24 border-2 border-cyan-400 opacity-30"
              animate={{
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-cyan-400/20"
              animate={{
                rotate: [360, 270, 180, 90, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div 
              className="relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/Safeer.png"
                alt="Safeer Ahmad Rana - Software Engineer"
                width={500}
                height={600}
                className="object-cover w-full h-auto max-w-md lg:max-w-lg grayscale hover:grayscale-0 transition-all duration-500"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 border-2 border-cyan-400/0 hover:border-cyan-400/30 transition-colors duration-500"
                whileHover={{ 
                  boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)" 
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Animated Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div 
          className="flex flex-col items-center text-gray-400"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm mb-2 rotate-90 origin-center">SCROLL</span>
          <motion.div 
            className="w-px h-12 bg-gray-400"
            animate={{ scaleY: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;

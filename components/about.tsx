"use client";
import React from 'react';
import { motion } from "framer-motion";

const About = () => {

  // Animation variants for scroll-based animations
  const scrollVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  const services = [
    { name: "Game Development", number: "01" },
    { name: "Web Development", number: "02" },
    { name: "Mobile Game Development", number: "03" },
    { name: "UI/UX", number: "05" }.
    { name: "UI/UX", number: "05" }

  ];

  return (
    <section id="about-id" className="w-full bg-black py-20 px-6 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/3 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [-20, 20, -20],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-blue-400/2 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1],
            y: [-30, 30, -30],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating tech symbols */}
        <motion.div
          className="absolute top-20 right-20 text-cyan-400/8 text-6xl font-mono"
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {"</>"}
        </motion.div>
        <motion.div
          className="absolute bottom-24 left-24 text-cyan-400/8 text-5xl"
          animate={{
            y: [20, -20, 20],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ⚡
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="mb-16"
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div 
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-cyan-400 font-mono text-sm tracking-wider">ABOUT</span>
            <motion.div 
              className="h-px bg-cyan-400 flex-1"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            />
          </motion.div>
          <motion.h2 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Available services that
            <br />
            <motion.span 
              className="text-cyan-400 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              I can work on
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Description */}
          <motion.div 
            className="space-y-6"
            variants={{
              hidden: { opacity: 0, x: -50, scale: 0.95 },
              visible: { opacity: 1, x: 0, scale: 1 }
            }}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.p 
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              I am a passionate Software Engineer with expertise in web development and, 
              game development. I specialize in creating innovative 
              digital solutions that combine technical excellence with exceptional user experience.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              My journey in technology has equipped me with a diverse skill set and a deep 
              understanding of modern development practices. I believe in crafting solutions 
              that not only meet technical requirements but also deliver meaningful user experiences.
            </motion.p>
            
            {/* CTA Button */}
            <motion.div 
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href="mailto:safeerahmadrana@gmail.com"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Hire Me Now</span>
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
          </motion.div>

          {/* Right: Services List */}
          <motion.div 
            className="space-y-8"
            variants={{
              hidden: { opacity: 0, x: 50, scale: 0.95 },
              visible: { opacity: 1, x: 0, scale: 1 }
            }}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center justify-between py-4 border-b border-gray-800 group hover:border-cyan-400/30 transition-colors duration-300"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <motion.span 
                    className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    {service.name}
                  </motion.span>
                  <motion.span 
                    className="text-cyan-400 font-mono"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {service.number}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
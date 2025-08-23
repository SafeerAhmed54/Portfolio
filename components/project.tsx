"use client";
import React from 'react';
import { motion } from "framer-motion";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      year: "2024",
      description: "Modern e-commerce solution with advanced features and seamless user experience",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Mobile Game",
      category: "Game Development", 
      year: "2024",
      description: "Engaging mobile game with immersive gameplay and stunning visuals",
      image: "/api/placeholder/600/400",
      technologies: ["Unity", "C#", "Firebase"]
    },
    {
      id: 3,
      title: "Dashboard UI",
      category: "UI/UX Design",
      year: "2023",
      description: "Clean and intuitive dashboard interface with modern design principles",
      image: "/api/placeholder/600/400",
      technologies: ["Figma", "React", "Tailwind"]
    }
  ];

  return (
    <section id="project-id" className="w-full bg-black py-20 px-6 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 right-1/5 w-80 h-80 bg-cyan-400/2 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/6 w-64 h-64 bg-blue-400/3 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.2, 0.4, 0.2],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating project symbols */}
        <motion.div
          className="absolute top-16 left-16 text-cyan-400/8 text-5xl"
          animate={{
            y: [-25, 25, -25],
            rotate: [0, 20, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🚀
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-20 text-cyan-400/8 text-4xl"
          animate={{
            y: [25, -25, 25],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          💡
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-cyan-400 font-mono text-sm tracking-wider">PORTFOLIO</span>
            <motion.div 
              className="h-px bg-cyan-400 flex-1"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            />
          </motion.div>
          <motion.h2 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="text-cyan-400 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Selected
            </motion.span>{" "}
            works
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            2022-2025
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Project Image */}
              <motion.div 
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="relative group overflow-hidden bg-gray-900 aspect-[4/3] border border-gray-800"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center relative z-10">
                    <motion.span 
                      className="text-gray-400 text-lg"
                      whileHover={{ scale: 1.1, color: "#06b6d4" }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.title}
                    </motion.span>
                  </div>
                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/30 transition-colors duration-300"
                    whileHover={{ 
                      boxShadow: "0 0 30px rgba(6, 182, 212, 0.2)" 
                    }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </motion.div>
              </motion.div>

              {/* Project Info */}
              <motion.div 
                className="w-full lg:w-1/2 space-y-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                viewport={{ once: true }}
              >
                <div>
                  <motion.div 
                    className="flex items-center gap-4 mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-cyan-400 font-mono text-sm">{project.category}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400 text-sm">{project.year}</span>
                  </motion.div>
                  <motion.h3 
                    className="text-3xl lg:text-4xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-400 text-lg leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>
                </div>

                {/* Technologies */}
                <motion.div 
                  className="flex flex-wrap gap-3"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex}
                      className="px-4 py-2 bg-gray-900 border border-gray-700 text-gray-300 text-sm font-mono hover:border-cyan-400/50 transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.9 + index * 0.2 + techIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 182, 212, 0.1)" }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Project Links */}
                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.button 
                    className="px-6 py-3 bg-transparent border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">View Project</span>
                    <motion.div
                      className="absolute inset-0 bg-cyan-400"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                  <motion.button 
                    className="px-6 py-3 bg-transparent border border-gray-600 text-gray-300 hover:border-white hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.05, borderColor: "#06b6d4", color: "#06b6d4" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Source Code
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
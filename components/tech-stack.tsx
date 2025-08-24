"use client";
import React from "react";
import { motion } from "framer-motion";

const TechStack = () => {
  const techCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      technologies: [
        { name: "React", icon: "⚛️", level: 95, color: "from-blue-400 to-blue-600" },
        { name: "Next.js", icon: "▲", level: 90, color: "from-gray-400 to-gray-600" },
        { name: "TypeScript", icon: "📘", level: 88, color: "from-blue-500 to-blue-700" },
        { name: "JavaScript", icon: "🟨", level: 92, color: "from-yellow-400 to-yellow-600" },
        { name: "Tailwind CSS", icon: "🎨", level: 85, color: "from-cyan-400 to-cyan-600" },
        { name: "HTML5", icon: "🌐", level: 95, color: "from-orange-400 to-orange-600" },
        { name: "CSS3", icon: "🎭", level: 90, color: "from-blue-400 to-blue-600" },
        { name: "Framer Motion", icon: "🎬", level: 80, color: "from-purple-400 to-purple-600" }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      technologies: [
        { name: "Node.js", icon: "🟢", level: 85, color: "from-green-400 to-green-600" },
        { name: "Python", icon: "🐍", level: 88, color: "from-blue-400 to-yellow-500" },
        { name: "Express.js", icon: "🚀", level: 80, color: "from-gray-400 to-gray-600" },
        { name: "MongoDB", icon: "🍃", level: 75, color: "from-green-500 to-green-700" },
        { name: "PostgreSQL", icon: "🐘", level: 70, color: "from-blue-500 to-blue-700" },
        { name: "REST APIs", icon: "🔗", level: 85, color: "from-indigo-400 to-indigo-600" },
        { name: "GraphQL", icon: "📊", level: 65, color: "from-pink-400 to-pink-600" }
      ]
    },
    {
      title: "Game Development",
      icon: "🎮",
      technologies: [
        { name: "Unity", icon: "🎯", level: 90, color: "from-gray-600 to-gray-800" },
        { name: "C#", icon: "💜", level: 88, color: "from-purple-500 to-purple-700" },
        { name: "Unreal Engine", icon: "🔥", level: 70, color: "from-blue-500 to-purple-600" },
        { name: "Blender", icon: "🎨", level: 65, color: "from-orange-400 to-orange-600" },
        { name: "Game Design", icon: "🎲", level: 85, color: "from-red-400 to-red-600" },
        { name: "Mobile Gaming", icon: "📱", level: 80, color: "from-green-400 to-blue-500" }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: "🛠️",
      technologies: [
        { name: "Git", icon: "📝", level: 90, color: "from-orange-400 to-red-500" },
        { name: "Docker", icon: "🐳", level: 75, color: "from-blue-400 to-blue-600" },
        { name: "VS Code", icon: "💻", level: 95, color: "from-blue-500 to-blue-700" },
        { name: "Figma", icon: "🎨", level: 80, color: "from-purple-400 to-pink-500" },
        { name: "Photoshop", icon: "🖼️", level: 75, color: "from-blue-600 to-purple-600" },
        { name: "Linux", icon: "🐧", level: 70, color: "from-yellow-400 to-orange-500" }
      ]
    }
  ];

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

  return (
    <section id="tech-stack-id" className="w-full bg-white dark:bg-black py-20 px-6 relative overflow-hidden transition-colors duration-300">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-400/5 dark:bg-cyan-400/3 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [-20, 20, -20],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-blue-400/5 dark:bg-blue-400/2 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
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
          className="absolute top-20 left-20 text-cyan-400/10 dark:text-cyan-400/8 text-6xl"
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
          💻
        </motion.div>
        <motion.div
          className="absolute bottom-24 right-24 text-cyan-400/10 dark:text-cyan-400/8 text-5xl"
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
          🚀
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
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-cyan-400 font-mono text-sm tracking-wider">TECH STACK</span>
            <motion.div 
              className="h-px bg-cyan-400 flex-1"
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1 }
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>
          <motion.h2 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Technologies &
            <br />
            <motion.span 
              className="text-cyan-400 inline-block"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Tools
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 transition-colors duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            My technical expertise and proficiency levels
          </motion.p>
        </motion.div>

        {/* Tech Categories Grid */}
        <div className="space-y-16">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="space-y-8"
              variants={scrollVariants}
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* Category Header */}
              <motion.div 
                className="flex items-center gap-4 mb-8"
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.span 
                  className="text-4xl"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {category.icon}
                </motion.span>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                  {category.title}
                </h3>
              </motion.div>

              {/* Technologies Grid */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    className="group p-6 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-900/80 relative overflow-hidden"
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.95 },
                      visible: { opacity: 1, y: 0, scale: 1 }
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(6, 182, 212, 0.1)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Hover background effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="relative z-10">
                      {/* Tech Icon and Name */}
                      <div className="flex items-center gap-3 mb-4">
                        <motion.span 
                          className="text-2xl"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech.icon}
                        </motion.span>
                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                          {tech.name}
                        </h4>
                      </div>

                      {/* Proficiency Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
                          <span className="text-sm font-semibold text-cyan-400">{tech.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.level}%` }}
                            transition={{ duration: 1, delay: 0.2 + techIndex * 0.1 }}
                            viewport={{ once: false }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300"
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {[
            { number: "25+", label: "Technologies" },
            { number: "5+", label: "Years Experience" },
            { number: "50+", label: "Projects Built" },
            { number: "100%", label: "Passion" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0 }
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="text-4xl lg:text-5xl font-bold text-cyan-400 mb-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-400 uppercase tracking-wider text-sm transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
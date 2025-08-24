"use client";
import React from 'react';
import { motion } from "framer-motion";

const Skills = () => {
  const webDevelopmentSkills = [
    { name: "React", icon: "⚛️", color: "border-cyan-400 bg-cyan-50 dark:bg-cyan-900/20" },
    { name: "React", icon: "⚛️", color: "border-blue-400 bg-blue-50 dark:bg-blue-900/20" },
    { name: "TypeScript", icon: "TS", color: "border-blue-500 bg-blue-50 dark:bg-blue-900/20" },
    { name: "JavaScript", icon: "JS", color: "border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20" },
    { name: "Express", icon: "ex", color: "border-gray-400 bg-gray-50 dark:bg-gray-900/20" },
    { name: "Firebase", icon: "🔥", color: "border-orange-400 bg-orange-50 dark:bg-orange-900/20" },
    { name: "MongoDB", icon: "🍃", color: "border-green-400 bg-green-50 dark:bg-green-900/20" },
    { name: "Tailwind", icon: "🌊", color: "border-cyan-400 bg-cyan-50 dark:bg-cyan-900/20" },
    { name: "Python", icon: "🐍", color: "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20" },
    { name: "HTML5", icon: "📄", color: "border-orange-500 bg-orange-50 dark:bg-orange-900/20" },
    { name: "CSS3", icon: "🎨", color: "border-blue-500 bg-blue-50 dark:bg-blue-900/20" }
  ];

  const otherSkills = [
    { name: "Lua", icon: "🌙", color: "border-blue-600 bg-blue-50 dark:bg-blue-900/20" },
    { name: "Ubuntu", icon: "🐧", color: "border-orange-500 bg-orange-50 dark:bg-orange-900/20" },
    { name: "Linux", icon: "🐧", color: "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20" },
    { name: "Windows", icon: "🪟", color: "border-blue-500 bg-blue-50 dark:bg-blue-900/20" },
    { name: "MySQL", icon: "🗄️", color: "border-gray-500 bg-gray-50 dark:bg-gray-900/20" },
    { name: "MQTT", icon: "📡", color: "border-purple-500 bg-purple-50 dark:bg-purple-900/20" }
  ];

  const devOpsSkills = [
    { name: "Google Cloud", icon: "☁️", color: "border-red-400 bg-red-50 dark:bg-red-900/20" },
    { name: "AWS", icon: "aws", color: "border-orange-400 bg-orange-50 dark:bg-orange-900/20" },
    { name: "Azure", icon: "🔷", color: "border-blue-500 bg-blue-50 dark:bg-blue-900/20" },
    { name: "Vercel", icon: "▲", color: "border-gray-800 bg-gray-50 dark:bg-gray-900/20" },
    { name: "Docker", icon: "🐳", color: "border-blue-400 bg-blue-50 dark:bg-blue-900/20" },
    { name: "VS Code", icon: "💻", color: "border-blue-600 bg-blue-50 dark:bg-blue-900/20" }
  ];

  const SkillCard = ({ skill, index, delay }: { skill: any, index: number, delay: number }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay + index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`${skill.color} border-2 rounded-2xl p-4 flex flex-col items-center justify-center aspect-square hover:shadow-lg transition-all duration-300`}
    >
      <div className="text-3xl mb-2 font-bold">
        {skill.icon}
      </div>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
        {skill.name}
      </span>
    </motion.div>
  );

  return (
    <section id="skills-id" className="w-full bg-white dark:bg-black py-20 px-6 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div 
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="h-px bg-cyan-400 flex-1 max-w-20"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <span className="text-cyan-400 font-mono text-sm tracking-wider">SKILLS</span>
            <motion.div 
              className="h-px bg-cyan-400 flex-1 max-w-20"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>
          <motion.h2 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Technology &
            <br />
            <motion.span 
              className="text-cyan-400 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Tools
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Web Development */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-cyan-400 mb-6 text-center"
              whileHover={{ scale: 1.02 }}
            >
              &lt;WebDevelopment/&gt;
            </motion.h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {webDevelopmentSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} delay={0.4} />
              ))}
            </div>
          </motion.div>

          {/* Other Skills */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-cyan-400 mb-6 text-center"
              whileHover={{ scale: 1.02 }}
            >
              &lt;Other Skills/&gt;
            </motion.h3>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {otherSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} delay={0.6} />
              ))}
            </div>
            
            <motion.h3 
              className="text-2xl font-bold text-cyan-400 mb-6 text-center"
              whileHover={{ scale: 1.02 }}
            >
              &lt;DevOps/&gt;
            </motion.h3>
            <div className="grid grid-cols-3 gap-4">
              {devOpsSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} delay={0.8} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      subtitle: "Tools & Languages",
      icon: "🌐",
      skills: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Firebase",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "AWS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
        },
        {
          name: "Vercel",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original-wordmark.svg",
        },
      ],
    },
    {
      title: "Game Development",
      subtitle: "Tools & Languages",
      icon: "🎮",
      skills: [
        {
          name: "Unity",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original-wordmark.svg",
        },
        {
          name: "C#",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "Android",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
        },
        {
          name: "iOS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "Firebase",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
      ],
    },
  ];

  return (
    <section
      id="skills-id"
      className="w-full bg-black py-20 px-6 relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/3 w-96 h-96 bg-cyan-400/2 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-blue-400/3 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating tech symbols */}
        <motion.div
          className="absolute top-20 right-20 text-cyan-400/10 text-6xl"
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          💻
        </motion.div>
        <motion.div
          className="absolute bottom-24 left-20 text-cyan-400/10 text-5xl"
          animate={{
            y: [20, -20, 20],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ⚡
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
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
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div
              className="h-px bg-cyan-400 w-20"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
            />
            <span className="text-cyan-400 font-mono text-sm tracking-wider">
              SKILLS
            </span>
            <motion.div
              className="h-px bg-cyan-400 w-20"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
            />
          </motion.div>

          <motion.h2
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Technical
            <br />
            <motion.span
              className="text-cyan-400 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              Arsenal
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            A comprehensive toolkit for building exceptional digital experiences
          </motion.p>
        </motion.div>

        {/* Skills Categories - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="group relative"
              initial={{ opacity: 0, x: categoryIndex === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + categoryIndex * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* Category Header */}
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + categoryIndex * 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.div
                  className="text-4xl mb-3"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {category.title}
                </h3>
                <p className="text-cyan-400 font-mono text-sm">
                  {category.subtitle}
                </p>
              </motion.div>

              {/* Skills Grid for this category */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + categoryIndex * 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="group/skill relative bg-gray-900/40 border border-gray-800 hover:border-cyan-400/50 p-4 flex flex-col items-center gap-3 transition-all duration-300 hover:bg-gray-900/60 overflow-hidden"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.7 + categoryIndex * 0.2 + skillIndex * 0.05,
                      ease: "easeOut",
                    }}
                    viewport={{ once: false, amount: 0.3 }}
                    whileHover={{
                      scale: 1.05,
                      y: -3,
                      boxShadow: "0 8px 20px rgba(6, 182, 212, 0.15)",
                    }}
                  >
                    {/* Hover background effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Skill Icon */}
                    <motion.div
                      className="w-12 h-12 flex items-center justify-center relative z-10 bg-white/5 rounded-lg group-hover/skill:bg-white/10 transition-all duration-300"
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={32}
                        height={32}
                        className={`object-contain transition-all duration-300 ${
                          skill.name === 'Next.js' || skill.name === 'Vercel' || skill.name === 'Unity' || skill.name === 'iOS' || skill.name === 'Android'
                            ? 'brightness-0 invert opacity-70 group-hover/skill:opacity-100 group-hover/skill:brightness-100 group-hover/skill:invert-0 group-hover/skill:hue-rotate-180'
                            : 'opacity-80 group-hover/skill:opacity-100 group-hover/skill:brightness-110 group-hover/skill:saturate-150'
                        }`}
                      />
                    </motion.div>

                    {/* Skill Name */}
                    <motion.div
                      className="text-center relative z-10"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <h4 className="text-white font-medium text-sm group-hover/skill:text-cyan-400 transition-colors duration-300">
                        {skill.name}
                      </h4>
                    </motion.div>

                    {/* Animated border effect */}
                    <motion.div
                      className="absolute inset-0 border-2 border-cyan-400/0 group-hover/skill:border-cyan-400/30 transition-all duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {[
            { number: "20+", label: "Technologies" },
            { number: "2", label: "Main Categories" },
            { number: "2+", label: "Years Experience" },
            { number: "∞", label: "Learning" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-4xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 uppercase tracking-wider text-sm group-hover:text-gray-300 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

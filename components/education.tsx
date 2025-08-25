"use client";
import React from "react";
import { motion } from "framer-motion";

const Education = () => {
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

  const educationData = [
    {
      degree: "Bachelor of Science",
      field: "Computer Science",
      institution: "COMSATS University Islamabad, Islamabad",
      period: "Feb 2019 - March 2023",
      icon: "/Bachelors.png",
      type: "Bachelor&apos;s Degree",
    },
    {
      degree: "Higher Secondary School",
      field: "Science",
      institution: "Sir Syed Science College for Boys, Rawalpindi",
      period: "Sep 2016 - Aug 2018",
      icon: "/Higher.png",
      type: "Higher Secondary",
    },
    {
      degree: "Secondary School",
      field: "Science",
      institution: "Fazia Inter College, Nur Khan, Rawalpindi",
      period: "April 2014 - July 2016",
      icon: "/Secondary.png",
      type: "Secondary School",
    },
  ];

  return (
    <section
      id="education-id"
      className="w-full bg-black py-20 px-6 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-400/2 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-blue-400/3 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating academic symbols */}
        <motion.div
          className="absolute top-16 right-16 text-cyan-400/10 text-5xl"
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🎓
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-16 text-cyan-400/10 text-4xl"
          animate={{
            y: [15, -15, 15],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          📚
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
            <span className="text-cyan-400 font-mono text-sm tracking-wider">
              EDUCATION
            </span>
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
            Academic
            <br />
            <motion.span
              className="text-cyan-400 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Journey
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Building knowledge, shaping the future
          </motion.p>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={{
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
              }}
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* Animated Timeline Line */}
              {index !== educationData.length - 1 && (
                <motion.div
                  className="absolute left-6 top-16 w-px h-24 bg-gray-700"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  viewport={{ once: true }}
                />
              )}

              {/* Education Card */}
              <motion.div
                className="flex flex-col lg:flex-row items-start gap-8 p-8 bg-gray-900/30 border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 group-hover:bg-gray-900/50 relative overflow-hidden"
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 15px 30px rgba(6, 182, 212, 0.1)",
                }}
              >
                {/* Hover background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Animated Timeline Dot */}
                <motion.div
                  className="flex-shrink-0 w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center font-bold text-black text-lg relative z-10"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {index + 1}
                </motion.div>

                {/* Content */}
                <motion.div
                  className="flex-1 space-y-4 relative z-10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <motion.span
                      className="text-cyan-400 font-mono text-sm"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      {edu.type}
                    </motion.span>
                    <motion.h3
                      className="text-2xl lg:text-3xl font-bold text-white mt-1 group-hover:text-cyan-400 transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      {edu.degree}
                    </motion.h3>
                    {edu.field !== "General Education" && (
                      <motion.p
                        className="text-xl text-gray-300"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        {edu.field}
                      </motion.p>
                    )}
                  </div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-lg text-gray-400">
                      {edu.institution}
                    </p>
                    <p className="text-cyan-400 font-mono">{edu.period}</p>
                  </motion.div>
                </motion.div>

                {/* Institution Icon */}
                <motion.div
                  className="flex-shrink-0 relative z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-20 h-20 lg:w-24 lg:h-24 bg-gray-800 border border-gray-700 flex items-center justify-center group-hover:border-cyan-400/50 transition-colors"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                  >
                    <img
                      src={edu.icon}
                      alt={`${edu.institution} logo`}
                      className="w-12 h-12 lg:w-16 lg:h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 pt-16 border-t border-gray-800"
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {[
            { number: "16", label: "Years of Study" },
            { number: "3.5", label: "GPA" },
            { number: "2023", label: "Graduated" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-4xl font-bold text-cyan-400 mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

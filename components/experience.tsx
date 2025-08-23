"use client";
import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experienceData = [
    {
      title: "Unity Developer",
      company: "Envision Software SMC",
      location: "Rawalpindi, Pakistan",
      period: "July 2025 - Present",
      type: "Full-time",
      responsibilities: [
        "Contributed to developing and scaling 3+ international mobile game titles, enhancing user engagement and immersive player experiences",
        "Leveraged Unity and C# to optimize gameplay performance, achieving up to 30% improvement in responsiveness on mobile devices",
        "Managed 200+ project commits using GitHub & Unity Version Control, ensuring streamlined workflows and efficient collaboration in a product-based environment",
      ],
      technologies: ["Unity", "C#", "GitHub", "Version Control"],
      current: true,
    },
    {
      title: "Unity Developer",
      company: "Skyhisoft",
      location: "Rawalpindi, Pakistan",
      period: "Feb 2023 - Present",
      type: "Full-time",
      responsibilities: [
        "Contributed in developing 3+ international games, enhancing user engagement and immersive experiences",
        "Utilizing Unity and C#, leading to a 30% improvement in gameplay responsiveness",
        "Managed 200+ project commits using GitHub & Unity's Version Control for streamlined project workflows",
      ],
      technologies: ["Unity", "C#", "GitHub", "Plastic Version Control"],
      current: true,
    },
    {
      title: "Game Developer",
      company: "Freelancer",
      location: "Fiverr Platform",
      period: "May 2020 - Present",
      type: "Freelance",
      responsibilities: [
        "Developed and delivered custom game projects for international clients",
        "Worked on GTAV & FiveM Servers supporting 100+ concurrent players",
        "Implemented complex game mechanics and intuitive UI/UX elements",
      ],
      technologies: ["Lua", "C#", "FiveM", "GTAV Modding"],
      current: true,
    },
  ];

  return (
    <section
      id="experience-id"
      className="w-full bg-black py-20 px-6 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-400/3 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/5 w-48 h-48 bg-blue-400/2 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating code symbols */}
        <motion.div
          className="absolute top-20 left-20 text-cyan-400/10 text-6xl font-mono"
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {"{}"}
        </motion.div>
        <motion.div
          className="absolute bottom-32 right-32 text-cyan-400/10 text-4xl font-mono"
          animate={{
            y: [10, -10, 10],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {"</>"}
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
            <span className="text-cyan-400 font-mono text-sm tracking-wider">
              EXPERIENCE
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
            Professional
            <br />
            <motion.span
              className="text-cyan-400 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Experience
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Companies I have worked with
          </motion.p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Animated Timeline Line */}
              {index !== experienceData.length - 1 && (
                <motion.div
                  className="absolute left-6 top-20 w-px h-32 bg-gray-700"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                  viewport={{ once: true }}
                />
              )}

              {/* Experience Card */}
              <motion.div
                className="flex flex-col lg:flex-row gap-8 p-8 bg-gray-900/30 border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 group-hover:bg-gray-900/50 relative overflow-hidden"
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 20px 40px rgba(6, 182, 212, 0.1)",
                }}
              >
                {/* Hover background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Animated Timeline Dot */}
                <motion.div
                  className="flex-shrink-0 w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center font-bold text-black text-lg relative z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  {exp.current && (
                    <motion.div
                      className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  {index + 1}
                </motion.div>

                {/* Content */}
                <div className="flex-1 space-y-6 relative z-10">
                  {/* Header */}
                  <motion.div
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-xl text-cyan-400 font-semibold">
                        {exp.company} • {exp.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <motion.span
                        className="inline-flex items-center px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-sm font-mono"
                        whileHover={{ scale: 1.05 }}
                      >
                        {exp.type}
                      </motion.span>
                      <p className="text-gray-400 font-mono mt-1">
                        {exp.period}
                      </p>
                    </div>
                  </motion.div>

                  {/* Responsibilities */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <motion.li
                          key={respIndex}
                          className="flex items-start gap-3 text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.6 + index * 0.2 + respIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.7 + index * 0.2 + respIndex * 0.1,
                            }}
                            viewport={{ once: true }}
                          />
                          <span>{resp}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Technologies */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 text-sm font-mono hover:border-cyan-400/50 transition-colors"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.8 + index * 0.2 + techIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(6, 182, 212, 0.1)",
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { number: "5+", label: "Years Experience" },
            { number: "50+", label: "Projects Delivered" },
            { number: "25+", label: "Happy Clients" },
            { number: "2", label: "Active Roles" },
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

export default Experience;

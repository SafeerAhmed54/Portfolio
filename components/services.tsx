"use client";
import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Modern, responsive websites and web applications"
    },
    {
      icon: "🎮",
      title: "Game Development", 
      description: "Interactive games and immersive experiences"
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "User-centered design and intuitive interfaces"
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description: "Cross-platform mobile applications"
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      description: "Fast, efficient, and scalable solutions"
    },
    {
      icon: "🔧",
      title: "Technical Consulting",
      description: "Strategic guidance and technical expertise"
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services-id" className="w-full bg-black py-20 px-6 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-0 w-72 h-72 bg-cyan-400/3 rounded-full blur-3xl"
          animate={{
            x: [-100, 100, -100],
            y: [-50, 50, -50],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-400/2 rounded-full blur-3xl"
          animate={{
            x: [100, -100, 100],
            y: [50, -50, 50],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
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
          <motion.h2 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I can deliver results that
            <br />
            <motion.span 
              className="text-cyan-400 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              exceed your expectations.
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Specialized in creating digital solutions that combine technical excellence 
            with exceptional user experience.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.3 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="group p-8 bg-gray-900/50 border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:bg-gray-900/80 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(6, 182, 212, 0.1)"
              }}
            >
              {/* Hover background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="text-4xl mb-4 relative z-10"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors relative z-10">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed relative z-10">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-800"
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {[
            { number: "50+", label: "Projects" },
            { number: "25+", label: "Clients" },
            { number: "3+", label: "Years" },
            { number: "100%", label: "Satisfaction" }
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
                className="text-4xl lg:text-5xl font-bold text-cyan-400 mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 uppercase tracking-wider text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
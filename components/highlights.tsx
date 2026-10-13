"use client";
import React from "react";
import { motion } from "framer-motion";

const featureItems = [
  {
    icon: "⚡",
    title: "Performance-first builds",
    description:
      "Lightweight, fast-loading experiences built for real users, not just demos.",
  },
  {
    icon: "🎯",
    title: "User-centered design",
    description:
      "Interfaces shaped around clarity, conversion, and a smooth product journey.",
  },
  {
    icon: "🧩",
    title: "Full-stack thinking",
    description:
      "From frontend polish to game logic and system architecture, solutions are cohesive.",
  },
  {
    icon: "🚀",
    title: "Launch-ready execution",
    description:
      "Clean implementation, scalable structure, and thoughtful polish from concept to ship.",
  },
];

const metrics = [
  { value: "3+", label: "Years of hands-on build experience" },
  { value: "50+", label: "Projects executed across web and gameplay" },
  { value: "100%", label: "Focus on quality, usability, and speed" },
];

export default function Highlights() {
  return (
    <section
      id="highlights-id"
      className="relative w-full overflow-hidden bg-black py-20 px-6 sm:px-8 lg:px-12"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-12 bottom-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          className="mb-14 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Why it works
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Built for impact, clarity, and momentum.
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {featureItems.map((item) => (
            <motion.article
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/8"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-2xl shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                {item.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-300">{item.description}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 grid gap-6 border-t border-white/10 pt-10 md:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-gray-800 bg-gray-950/60 p-6">
              <div className="mb-2 text-3xl font-bold text-cyan-400 sm:text-4xl">{metric.value}</div>
              <p className="text-sm text-gray-300">{metric.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

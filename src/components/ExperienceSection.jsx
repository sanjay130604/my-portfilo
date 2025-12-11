import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    company: "One To Infinity",
    role: "Full Stack Developer Intern",
    timeframe: "Feb 2025 – Present",
    bullets: [
      "Built and optimized Express.js REST APIs",
      "Developed reusable React components",
      "Worked with MongoDB schemas & queries",
      "Implemented secure authentication with JWT",
    ],
  },
  {
    id: 2,
    company: "Nitroware",
    role: "Frontend Web Intern",
    timeframe: "Jul 2024 – Aug 2024",
    bullets: [
      "Designed responsive UI using React + Tailwind",
      "Optimized bundle size & improved performance",
      "Collaborated with QA for testing & bug fixes",
      "Enhanced user experience with reusable UI blocks",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto px-6">

        {/* LEFT TEXT — Animated */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            I’m a Professional Full-Stack Developer (MERN)
          </h2>

          <p className="text-gray-600 leading-relaxed">
            I build scalable, user-friendly applications using modern technologies 
            like React, Node.js, Express, and MongoDB. My work focuses on clean 
            UI, secure backend systems, API architecture, and high-performance 
            web solutions tailored to client needs.
          </p>
        </motion.div>

        {/* EXPERIENCE CARDS — Animated */}
        <div className="space-y-8 relative">

          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-[14px] top-0 h-full w-[3px] bg-purple-200/60 rounded-full"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, translateY: -4 }}
              className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition cursor-default"
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute left-[-2px] top-6 w-4 h-4 bg-purple-500 rounded-full shadow-md border-2 border-white"
              />

              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-lg">{exp.company}</div>
                  <div className="text-sm text-gray-500">{exp.role}</div>
                </div>
                <div className="text-sm text-gray-400 whitespace-nowrap">{exp.timeframe}</div>
              </div>

              {/* Bullet Points */}
              <ul className="mt-4 text-gray-600 list-disc list-inside space-y-1">
                {exp.bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    {b}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

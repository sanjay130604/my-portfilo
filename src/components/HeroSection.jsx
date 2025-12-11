import { motion } from "framer-motion";
import { useState } from "react";

export default function HeroSection() {
  const [hover, setHover] = useState(false);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center relative px-6 overflow-hidden">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] opacity-90"></div>

      {/* Glow effect */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[150px]"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl"
      >
        {/* Name */}
        <motion.h1
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={`text-5xl md:text-7xl font-extrabold mb-6 transition-all ${
            hover
              ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-white"
              : "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
          }`}
        >
          Sanjay S
        </motion.h1>

        {/* Title */}
        <p className="text-2xl text-gray-200 mb-4">Full Stack Developer</p>

        {/* Summary */}
        <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed mb-6">
          I build seamless, scalable, and stunning web applications using the MERN stack.
          Turning creative ideas into smooth user experiences is my passion.
        </p>

        {/* Skills badges */}
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {[
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
            "Bootstrap",
            "Framer Motion",
          ].map((tech, i) => (
            <motion.span
              key={tech}
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm backdrop-blur-md shadow"
              whileHover={{ scale: 1.2 }}
              animate={{ y: [0, -8, 0], transition: { repeat: Infinity, duration: 2, delay: i * 0.2 } }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

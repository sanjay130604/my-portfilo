import React from "react";
import { motion } from "framer-motion";
import photo from "../assets/photo.jpg";

export default function HeroSection() {
  return (
    <section className="min-h-[82vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="h-giant text-black/95 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Hello, I’m <br /> Sanjay S
          </motion.h1>

          <motion.p
            className="mt-6 text-gray-600 max-w-2xl text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            I’m a <span className="font-semibold text-purple-600">Full-Stack Developer</span> 
            specializing in the <span className="font-semibold text-purple-600">MERN Stack</span>.
            I build clean, scalable, high-performance applications across  
            <span className="underline decoration-purple-300"> Frontend</span> and  
            <span className="underline decoration-purple-300"> Backend</span>.
          </motion.p>

          {/* BUTTON + STATS */}
          <motion.div
            className="mt-8 flex gap-4 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="px-6 py-3 bg-gradient-to-tr from-purple-600 to-purple-400 text-white rounded-xl shadow-md"
            >
              Say Hello
            </motion.button>

            {/* STATS */}
            <div className="flex items-center gap-4">

              {/* EXPERIENCE */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-purple-50 rounded-xl px-5 py-4 text-center shadow"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold">02 Y.</div>
                <div className="text-sm text-gray-500">Technical Experience</div>
              </motion.div>

              {/* PROJECTS */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="bg-purple-50 rounded-xl px-5 py-4 text-center shadow"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold">10 +</div>
                <div className="text-sm text-gray-500">Projects</div>
              </motion.div>

            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE CARD WITH ANIMATION */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <motion.div
            className="w-[520px] bg-white rounded-2xl shadow-card p-8 border border-gray-50"
            whileHover={{ scale: 1.03 }}
            animate={{
              y: [0, -12, 0], // floating animation
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={photo}
                alt="Sanjay"
                className="w-full h-[520px] object-cover rounded-2xl"
              />
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

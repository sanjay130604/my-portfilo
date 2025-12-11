import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // UPDATED: Matching actual section IDs
  const navLinks = [
    "Home",
    "Portfolio",
    "Experience",
    "Skills",        // FIXED ✔ (was "Technical Skills")
    "Education",
    "Soft Skills",
    "Contact",
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

        {/* LOGO ANIMATION */}
        <motion.div
          className="flex items-center gap-4 cursor-pointer"
          whileHover={{ scale: 1.06, rotate: 1.5 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold shadow">
            S
          </div>
          <div className="text-2xl font-semibold">SANJAY S</div>
        </motion.div>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link, idx) => {
            const id = link.toLowerCase().replace(/\s+/g, "-"); // "Soft Skills" → "soft-skills"

            return (
              <motion.a
                key={idx}
                href={`#${id}`}
                className="px-4 py-2 relative font-medium text-gray-700"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 240 }}
              >
                <span className="hover:text-purple-600 transition">{link}</span>

                {/* Underline Hover Animation */}
                <motion.div
                  className="absolute left-0 bottom-0 h-[3px] bg-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            );
          })}
        </nav>

        {/* MOBILE MENU TOGGLE */}
        <button onClick={() => setOpen((s) => !s)} className="lg:hidden p-2">
          <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
            <path
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU ANIMATION */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden bg-white border-t border-gray-200 shadow-md"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-6 py-4 flex flex-col gap-3">

              {navLinks.map((link, idx) => {
                const id = link.toLowerCase().replace(/\s+/g, "-");

                return (
                  <motion.a
                    key={idx}
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                    className="px-3 py-2 rounded-lg text-gray-700 font-medium hover:bg-purple-100"
                  >
                    {link}
                  </motion.a>
                );
              })}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

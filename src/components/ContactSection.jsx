import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <footer
      id="contact"
      className="py-20 mt-10 bg-gradient-to-b from-black via-[#0b1220] to-black"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-center mb-16 text-white tracking-wide"
        >
          Let’s Connect
        </motion.h2>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-semibold text-xl mb-4 text-white">Contact Info</h3>

            <div className="space-y-4 text-gray-300">

              {/* Email */}
              <motion.p className="flex items-center gap-2" whileHover={{ scale: 1.02 }}>
                <span className="text-purple-400 text-lg">📧</span>
                <a
                  href="mailto:sanjaysaravanan130604@gmail.com"
                  className="text-purple-400 hover:text-purple-300 transition"
                >
                  sanjaysaravanan130604@gmail.com
                </a>
              </motion.p>

              {/* Phone */}
              <motion.p className="flex items-center gap-2" whileHover={{ scale: 1.02 }}>
                <span className="text-purple-400 text-lg">📞</span>
                <a
                  href="tel:+919003476565"
                  className="text-purple-400 hover:text-purple-300 transition"
                >
                  +91 8220355394
                </a>
              </motion.p>

              {/* Location */}
              <motion.p className="flex items-center gap-2" whileHover={{ scale: 1.02 }}>
                <span className="text-purple-400 text-lg">📍</span>
                <span>Kumbakonam, Tamil Nadu, India</span>
              </motion.p>

              {/* Resume */}
              <motion.p className="flex items-center gap-2" whileHover={{ scale: 1.02 }}>
                <span className="text-purple-400 text-lg">📄</span>
                <a
                  href="/src/assets/sanjay_cv.pdf"
                  download
                  className="text-purple-400 hover:text-purple-300 transition"
                >
                  Download CV
                </a>
              </motion.p>

            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="font-semibold text-xl mb-4 text-white">Quick Links</h3>
            <nav className="flex flex-col gap-3 text-gray-300">
              {["Projects", "Experience", "Skills", "Education", "Contact Form"].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-purple-400 transition"
                  whileHover={{ x: 5 }}
                >
                  {link}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* SOCIAL LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <h3 className="font-semibold text-xl mb-4 text-white">Follow Me</h3>

            <div className="flex flex-col gap-3 text-gray-300">

              {/* GitHub */}
              <motion.a
                href="https://github.com/sanjay130604"
                target="_blank"
                className="flex items-center gap-2 hover:text-purple-400 transition"
                whileHover={{ scale: 1.05 }}
              >
                🐙 GitHub
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/sanjay-s---"
                target="_blank"
                className="flex items-center gap-2 hover:text-purple-400 transition"
                whileHover={{ scale: 1.05 }}
              >
                🔗 LinkedIn
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/atman_sanjai/"
                target="_blank"
                className="flex items-center gap-2 hover:text-purple-400 transition"
                whileHover={{ scale: 1.05 }}
              >
                📸 Instagram
              </motion.a>

            </div>
          </motion.div>

          {/* POLICIES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <h3 className="font-semibold text-xl mb-4 text-white">Terms & Policies</h3>

            <div className="flex flex-col gap-3 text-gray-300">
              {["Terms & Conditions", "Privacy Policy", "Usage Guidelines", "Content Rules", "Developer Disclaimer"].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="hover:text-purple-400 transition"
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Divider */}
        <div className="my-12 border-t border-white/10"></div>

        {/* FOOTER BOTTOM */}
        <motion.div
          className="text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          © {new Date().getFullYear()} <span className="text-purple-400 font-semibold">Sanjay S</span>. All Rights Reserved.
        </motion.div>
      </div>
    </footer>
  );
}

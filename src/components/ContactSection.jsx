import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>

      <p className="text-gray-300 mb-4">
        Have a project in mind? Let's create something amazing together.
      </p>

      <p className="text-gray-400 mb-8">📍 Coimbatore, Tamil Nadu</p>

      <div className="flex justify-center gap-4 mb-10">
        <a href="mailto:sanjaysaravanan130604@gmail.com" className="px-6 py-3 bg-white/10 rounded-full">
          Get in Touch
        </a>

        <a href="/src/assets/cv.pdf" download className="px-6 py-3 bg-white/10 rounded-full">
          View Resume
        </a>
      </div>

      <div className="flex justify-center gap-8 text-2xl">
        <a href="https://github.com/sanjay130604">🐙</a>
        <a href="https://www.linkedin.com/in/sanjay-s---">🔗</a>
        <a href="https://www.instagram.com/atman_sanjai/">📷</a>
      </div>
    </section>
  );
}

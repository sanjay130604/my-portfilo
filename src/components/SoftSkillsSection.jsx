import { motion } from "framer-motion";

const softSkills = [
  "Communication",
  "Teamwork",
  "Problem Solving",
  "Time Management",
  "Adaptability",
  "Critical Thinking",
  "Leadership",
  "Attention to Detail"
];

export default function SoftSkillsSection() {
  return (
    <section id="soft-skills" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Soft Skills
        </motion.h2>

        <p className="text-gray-600 mb-10">
          Essential qualities that help me collaborate, lead, and deliver strong work.
        </p>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-4">
          {softSkills.map((skill, idx) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.08 }}
              transition={{ delay: idx * 0.05 }}
              className="px-5 py-3 rounded-full text-sm font-medium bg-gray-100 border border-gray-300 shadow-sm hover:shadow-md transition"
            >
              {skill}
            </motion.span>
          ))}
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Strengthened through internships, real-world projects, and teamwork.
        </p>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

const skills = ["React", "JavaScript", "Java", "PhotoShop", "Figma", "Python", "HTML", "CSS"];

export default function SkillsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-purple-900/20 to-black">
      <h2 className="text-center text-4xl font-bold mb-12">Skills & Technologies</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill) => (
          <motion.div
            key={skill}
            whileHover={{ scale: 1.08 }}
            className="bg-white/10 border border-white/20 p-6 rounded-xl text-center shadow-lg"
          >
            <h3 className="text-lg font-semibold">{skill}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

const techSkills = [
  { name: "React", level: 90 },
  { name: "Node.js", level: 82 },
  { name: "Express", level: 80 },
  { name: "MongoDB", level: 78 },
  { name: "Java", level: 70 },
  { name: "JavaScript", level: 82 },
  { name: "SQL", level: 60 },
  { name: "HTML & CSS", level: 90 },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Technical Skills</h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-8">Core technologies and tools I use to build production-ready web apps.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techSkills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="bg-white/4 rounded-xl p-5 border border-white/8"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="font-semibold">{s.name}</div>
                <div className="text-sm text-gray-300">{s.level}%</div>
              </div>

              <div className="w-full bg-white/6 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  transition={{ duration: 1 }}
                  className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-400"
                />
              </div>

              <div className="mt-3 text-xs text-gray-400">Experience: {Math.round(s.level / 75)}+ yrs (est.)</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

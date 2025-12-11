import { motion } from "framer-motion";
import codeImg from "../assets/code.jpg";
import aiImg from "../assets/ai.jpeg";
import bookImg from "../assets/bookstore.jpeg";
import laptopImg from "../assets/laptop.jpg";

const projects = [
  {
    id: 1,
    title: "Budget-App",
    description: "A personal finance tracker with monthly & yearly visualizations.",
    image: codeImg,
    liveUrl: "https://founder-therapy-whqi.vercel.app",
    githubUrl: "https://github.com/sanjay130604/Budget-App",
  },
  {
    id: 2,
    title: "FounderTherapy",
    description: "AI-powered journaling & emotional analysis.",
    image: aiImg,
    liveUrl: "https://founder-therapy-whqi.vercel.app",
    githubUrl: "https://github.com/sanjay130604/backend_founderTherary",
  },
  {
    id: 3,
    title: "Book-store",
    description: "Browse, search & buy books with smooth checkout.",
    image: bookImg,
    liveUrl: "https://sanjay130604.github.io/book-store/",
    githubUrl: "https://github.com/sanjay130604/book-store",
  },
  {
    id: 4,
    title: "Explore the World",
    description: "A travel discovery website for global destinations.",
    image: laptopImg,
    liveUrl: "https://sanjay130604.github.io/explorethwworld/",
    githubUrl: "https://github.com/sanjay130604/explorethwworld",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.03 }}
            className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl"
          >
            <img src={project.image} className="h-64 w-full object-cover opacity-90" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            <div className="absolute bottom-5 left-5 right-5">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>

              <div className="flex gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  className="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition"
                >
                  View Project
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

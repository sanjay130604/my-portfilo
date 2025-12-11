import React from "react";
import codeImg from "../assets/code.jpg";            // CopyMate
import aiImg from "../assets/ai.jpeg";               // FounderTherapy
import bookImg from "../assets/bookstore.jpeg";      // Book Store
import laptopImg from "../assets/laptop.jpg";        // Your Trip & Weather

const projects = [
  { 
    id: 1, 
    title: "CopyMate — AI Content Generator", 
    tag: "Full Stack / AI / MERN", 
    img: codeImg,
    live: "https://copymate-frontend.onrender.com",
    github: "https://github.com/One-to-Infinity-Team/CopyMate-Frontend"
  },
  { 
    id: 2, 
    title: "FounderTherapy — AI Mood Tracker", 
    tag: "Full Stack / MERN / AI", 
    img: aiImg,
    live: "https://founder-therapy-whqi.vercel.app/",
    github: "https://github.com/sanjay130604/FounderTherapy__"
  },
  { 
    id: 3, 
    title: "Book Store — MERN E-Commerce", 
    tag: "Full Stack / MERN", 
    img: bookImg,
    live: "https://sanjay130604.github.io/book-store/",
    github: "https://github.com/sanjay130604/book-store"
  },
  { 
    id: 4, 
    title: "Your Trip — Travel Planner", 
    tag: "Frontend + API Integration", 
    img: laptopImg,
    live: "https://sanjay130604.github.io/explorethwworld/",
    github: "https://sanjay130604.github.io/explorethwworld/"
  },
  { 
    id: 5, 
    title: "Weather App — OpenWeather API", 
    tag: "React.js / API", 
    img: laptopImg,
    live: "https://your-weather-app-live-url.com",
    github: "https://github.com/sanjay130604/Budget-App"
  },
];

export default function ProjectsSection() {
  return (
    <section id="portfolio" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-8">Portfolio</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {projects.map((p) => (
          <article 
            key={p.id} 
            className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition"
          >
            <img src={p.img} alt={p.title} className="w-full h-56 object-cover" />

            <div className="p-6">
              <div className="text-sm text-purple-600 mb-2">{p.tag}</div>

              <h3 className="text-xl font-semibold mb-3">{p.title}</h3>

              <p className="text-gray-600 mb-6">
                A modern full-stack application built with clean architecture,  
                scalable backend, and elegant UI components.
              </p>

              {/* BUTTONS */}
              <div className="flex items-center gap-3">
                <a 
                  href={p.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition text-sm"
                >
                  Website →
                </a>

                <a 
                  href={p.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50 transition text-sm"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

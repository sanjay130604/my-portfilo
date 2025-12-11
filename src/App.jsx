import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import SoftSkillsSection from "./components/SoftSkillsSection";
import EducationSection from "./components/EducationSection";
import ContactForm from "./components/ContactForm";
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="pt-28"> {/* offset for fixed navbar */} 
        
        {/* HERO */}
        <HeroSection />

        {/* MAIN CONTENT CONTAINER */}
        <section className="max-w-7xl mx-auto px-6">

          {/* PORTFOLIO */}
          <ProjectsSection />

          {/* EXPERIENCE */}
          <ExperienceSection />

          {/* TECHNICAL SKILLS */}
          <SkillsSection />

          {/* SOFT SKILLS */}
          <SoftSkillsSection />

          {/* EDUCATION */}
          <EducationSection />

          {/* CONTACT FORM */}
          <ContactForm />
        </section>

        {/* FOOTER */}
        <ContactSection />
      </main>
    </div>
  );
}

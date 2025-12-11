import React from "react";

const education = [
  { id:1, level:"B Tech Information Technology", institution:"SNS College of Engineering, Coimbatore", percentage:"78.1%", years:"2022-2026", details:"Computer Science" },
    { id:2, level:"Higher Secondary (12th)", institution:"CHRIST THE KINGS MATRIC HR SEC School", percentage:"73.5%", years:"2019", details:"Maths, Physics, CS" },
  { id:2, level:"SSLC (10th)", institution:"ST ANNE'S MATRIC MATRIC HR SEC School", percentage:"69%", years:"2019", details:"Maths, Physics, CS" }
];

export default function EducationSection(){
  return (
    <section id="education" className="py-16">
      <h3 className="text-3xl font-bold mb-6 text-center">Education</h3>
      <div className="max-w-4xl mx-auto space-y-4">
        {education.map(edu=>(
          <div key={edu.id} className="bg-white border border-gray-100 rounded-2xl p-6 flex justify-between items-center">
            <div>
              <div className="font-semibold">{edu.level}</div>
              <div className="text-sm text-gray-500">{edu.institution}</div>
              <div className="text-sm text-gray-400 hidden md:block mt-2">{edu.details}</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-400">{edu.years}</div>
              <div className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-400">{edu.percentage}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

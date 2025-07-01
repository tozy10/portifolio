// src/components/Skills.jsx
import React from 'react';

const skills = ['JavaScript', 'React', 'Python', 'Machine Learning', 'Git', 'SQL','Django','Tailwind Css','Java',];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map(skill => (
            <div key={skill} className="border p-4 rounded-md shadow-lg  transition-transform duration-300 transform hover:scale-110 bg-blue-700 text-white">
              <h3 className="text-lg font-semibold">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

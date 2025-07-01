// src/components/Projects.jsx
import React from 'react';

const projects = [
  { name: 'Personal Website', description: 'A portfolio website built with React and Tailwind CSS', link: 'https://example.com' },
  { name: 'Machine Learning App', description: 'A Python app that predicts housing prices using machine learning', link: 'https://example.com' },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-200 text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="space-y-8 ">
          {projects.map(project => (
            <div key={project.name} className="p-6 bg-blue-600 shadow-lg rounded-lg   transition-transform duration-300 transform hover:scale-110">
              <h3 className="text-xl text-black font-semibold">{project.name}</h3>
              <p className="text-white mb-4">{project.description}</p>
              <a href={project.link} target="_blank" className="text-white hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

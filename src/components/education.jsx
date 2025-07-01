// src/components/Education.jsx
import React from 'react';

// Example data for education
const educationData = [
  {
    degree: "Ordinary Level",
    institution: "St Faith's High School",
    duration: "2016 - 2019",
    description: "Studied 12 subjects and attained 5A's, 5B's and 2C's.",
    icon: "🎓", // You can replace this with an actual icon or image
  },
  {
    degree: "Advanced Level",
    institution: "St Augustine's High School",
    duration: "2020 - 2022",
    description: "Completed my high school education with a focus on math, computer science, and Accounting and Attained 14points.",
    icon: "🏫",
  },
  {
    degree: "Bachelor of Technology Degree in Computer Science",
    institution: "Harare Institute of Technology",
    duration: "2022 - Present",
    description: "Currently Persuing my Degree in Computer Science",
    icon: "📚",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 bg-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">My Education</h2>
        
        <div className="relative">
          {/* Vertical Line (Timeline) */}
          <div className="absolute inset-0 left-1/2 border-l-2 border-gray-400"></div>
          
          <ul className="space-y-16">
            {educationData.map((education, index) => (
              <li key={index} className="relative flex justify-start items-center">
                {/* Circle Icon */}
                <div className="absolute left-[-24px] top-0 w-8 h-8 bg-yellow-500 text-white rounded-full flex justify-center items-center shadow-lg">
                  <span className="text-lg">{education.icon}</span>
                </div>

        <div className="bg-white p-6 w-full md:w-9/12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mx-auto">
  <h3 className="text-xl font-semibold text-blue-600">{education.degree}</h3>
  <p className="text-lg font-semibold">{education.institution}</p>
  <p className="text-sm text-gray-500">{education.duration}</p>
  <p className="text-gray-700 mt-3">{education.description}</p>
        </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;

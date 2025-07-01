// src/components/Home.jsx
import React from 'react';
import profileImage from '../assets/profile.png'
const Home = () => {
  return (
    <section className="h-[800px] bg-gray-800 text-white flex justify-center items-center text-center">
      <div>
        <div className="flex justify-center mb-6">
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-full w-64 h-64 border-4 border-yellow-400 shadow-xl"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Ernest Tsvangirai</h1>
        <p className="text-lg mb-6">A passionate Computer Science Student At Harare Institute of Technology</p>
        <a href="#contact" className="px-8 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Home;

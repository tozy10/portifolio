// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
        <p className="mb-8">Feel free to reach out to me for collaborations or inquiries!</p>
        <a href="mailto:ernesttsvangirai@gmail.com" className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500">
          Send an Email
        </a>
      </div>
    </section>
  );
}

export default Contact;

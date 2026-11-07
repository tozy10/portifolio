// src/components/Footer.jsx
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../data/profile';

const Footer = () => {
  return (
    <footer className="px-6 pt-10 pb-20">
      <div className="field-in max-w-6xl mx-auto flex flex-col items-center justify-between gap-3 px-4 py-2.5 text-sm text-slate-700 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="bevel-out flex h-7 w-7 items-center justify-center bg-face font-display text-xs font-bold text-slate-900">
            ET
          </span>
          <p>© {new Date().getFullYear()} {profile.name}. Ready.</p>
        </div>
        <p className="font-mono text-xs text-slate-600">Built with React + Tailwind CSS</p>
        <div className="flex gap-3">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent transition-colors">
            <FaGithub size={18} />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent transition-colors">
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

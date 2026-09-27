// src/components/Footer.jsx
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../data/profile';

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.06] px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-accent/30 to-glow/30 border border-white/10 font-display text-sm font-bold text-slate-50">
            ET
          </span>
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} {profile.name}</p>
        </div>
        <p className="font-mono text-xs text-slate-600">Designed &amp; built with React + Tailwind CSS</p>
        <div className="flex gap-4 text-slate-500">
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

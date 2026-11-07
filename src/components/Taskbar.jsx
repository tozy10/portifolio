// src/components/Taskbar.jsx
import { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiDownload, FiGrid } from 'react-icons/fi';
import { profile } from '../data/profile';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const Taskbar = () => {
  const [startOpen, setStartOpen] = useState(false);
  const [now, setNow] = useState(() => new Date());
  const menuRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000 * 30);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!startOpen) return undefined;
    const onClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setStartOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setStartOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [startOpen]);

  const hours = now.getHours() % 12 || 12;
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const ampm = now.getHours() >= 12 ? 'PM' : 'AM';

  return (
    <div ref={menuRef} role="toolbar" aria-label="Taskbar" className="fixed bottom-0 inset-x-0 z-50">
      {startOpen && (
        <div className="glass absolute bottom-full left-1 mb-1 w-60 p-1">
          <ul className="space-y-0.5">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setStartOpen(false)}
                  className="block px-3 py-1.5 text-sm font-medium text-slate-900 hover:bg-accent hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-1 border-t-2 border-t-face-dark pt-1">
            <a
              href={profile.resume}
              download
              onClick={() => setStartOpen(false)}
              className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-900 hover:bg-accent hover:text-white"
            >
              <FiDownload size={14} /> Download Resume
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-900 hover:bg-accent hover:text-white"
            >
              <FaGithub size={14} /> GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-900 hover:bg-accent hover:text-white"
            >
              <FaLinkedin size={14} /> LinkedIn
            </a>
          </div>
        </div>
      )}

      <div className="glass flex items-center gap-2 px-1.5 py-1">
        <button
          type="button"
          onClick={() => setStartOpen((v) => !v)}
          aria-expanded={startOpen}
          aria-label="Open Start menu"
          className={`inline-flex items-center gap-1.5 bg-face px-3 py-1.5 text-sm font-bold text-slate-900 bevel-out active:translate-y-px ${
            startOpen ? 'bevel-in' : ''
          }`}
        >
          <FiGrid className="text-accent" size={16} /> Start
        </button>

        <span className="field-in hidden flex-1 items-center px-3 py-1.5 text-sm font-medium text-slate-800 sm:inline-flex">
          {profile.name} — Portfolio
        </span>

        <span className="field-in ml-auto inline-flex items-center px-3 py-1.5 font-mono text-sm text-slate-900">
          {hours}<span className="clock-colon">:</span>{minutes} {ampm}
        </span>
      </div>
    </div>
  );
};

export default Taskbar;

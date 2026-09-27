// src/components/Navbar.jsx
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';
import { profile } from '../data/profile';

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('');
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });
  const progressRef = useRef(null);
  const linkRefs = useRef({});

  // Scroll progress bar, updated directly to avoid re-rendering on every scroll event.
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy: mark the section crossing the middle of the viewport as active.
  useEffect(() => {
    const sections = ['home', ...links.map((l) => l.id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Slide the highlight pill behind the active link.
  useLayoutEffect(() => {
    const el = linkRefs.current[active];
    setIndicator(el ? { left: el.offsetLeft, width: el.offsetWidth, opacity: 1 } : (prev) => ({ ...prev, opacity: 0 }));
  }, [active]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <div
        ref={progressRef}
        className="fixed top-0 left-0 h-0.5 w-full origin-left bg-gradient-to-r from-accent to-glow"
        style={{ transform: 'scaleX(0)' }}
        aria-hidden="true"
      />

      <nav className="glass mx-auto flex max-w-4xl items-center justify-between rounded-full py-2 pl-2 pr-2 md:pr-2 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)]">
        <a
          href="#home"
          aria-label={profile.name}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent/30 to-glow/30 border border-white/10 font-display font-bold text-slate-50 hover:from-accent/40 transition"
        >
          ET
        </a>

        <ul className="relative hidden md:flex items-center text-sm">
          <span
            className="absolute inset-y-0 rounded-full bg-white/[0.07] transition-all duration-300 ease-out"
            style={indicator}
            aria-hidden="true"
          />
          {links.map((link) => (
            <li key={link.id} className="relative">
              <a
                ref={(el) => { linkRefs.current[link.id] = el; }}
                href={`#${link.id}`}
                className={`block px-4 py-2 rounded-full transition-colors ${
                  active === link.id ? 'text-slate-50' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            download
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-ink hover:bg-accent-soft transition"
          >
            <FiDownload size={14} /> Resume
          </a>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full text-slate-300 hover:bg-white/5"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden glass mx-auto mt-2 max-w-4xl rounded-2xl bg-ink/90 p-3">
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-xl px-4 py-3 transition-colors ${
                    active === link.id ? 'bg-white/[0.07] text-slate-50' : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.resume}
            download
            onClick={() => setIsOpen(false)}
            className="btn-primary mt-3 w-full justify-center"
          >
            <FiDownload size={16} /> Download Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;

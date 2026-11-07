// src/components/Navbar.jsx
import { useEffect, useRef, useState } from 'react';
import { FiChevronDown, FiDownload, FiFolder } from 'react-icons/fi';
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');
  const progressRef = useRef(null);

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

  // Scroll-spy: mark the section crossing the middle of the viewport as active,
  // also driving the read-only "address bar" breadcrumb below the menu.
  useEffect(() => {
    const sections = links.map((l) => l.id).map((id) => document.getElementById(id)).filter(Boolean);

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

  const activeLabel = links.find((l) => l.id === active)?.label ?? 'Home';

  const goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const toggleFullscreen = () => {
    try {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen?.();
      } else {
        document.exitFullscreen?.();
      }
    } catch {
      // Fullscreen not permitted in this context — fail silently.
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div
        ref={progressRef}
        className="h-[3px] w-full origin-left bg-accent-soft"
        style={{ transform: 'scaleX(0)' }}
        aria-hidden="true"
      />

      <div className="glass">
        {/* Titlebar */}
        <div className="win-titlebar">
          <a href="#home" className="flex min-w-0 items-center gap-2 text-white">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-face text-[11px] font-bold text-slate-900 bevel-out">
              ET
            </span>
            <span className="truncate font-display text-[13px] font-bold sm:text-sm">
              {profile.name} — Portfolio Explorer
            </span>
          </a>
          <div className="flex shrink-0 items-center gap-[3px]">
            <button type="button" onClick={goTop} aria-label="Minimize: scroll to top" className="win-ctrl">_</button>
            <button type="button" onClick={toggleFullscreen} aria-label="Maximize: toggle fullscreen" className="win-ctrl">□</button>
            <button
              type="button"
              aria-label="This window can't be closed from here"
              title="This window can't be closed from here"
              className="win-ctrl cursor-not-allowed opacity-60"
            >
              ×
            </button>
          </div>
        </div>

        {/* Menu bar */}
        <div className="flex items-center justify-between gap-2 border-t-2 border-t-face-dark px-2 py-1.5">
          <ul className="hidden flex-wrap items-center gap-0.5 text-sm sm:flex">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`inline-block px-3 py-1.5 font-medium text-slate-900 transition-colors hover:bg-accent hover:text-white ${
                    active === link.id ? 'bevel-in bg-white' : ''
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="btn-ghost px-3 py-1.5 text-sm sm:hidden"
          >
            Menu <FiChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          <a
            href={profile.resume}
            download
            className="hidden items-center gap-2 btn-ghost px-3 py-1.5 text-sm sm:inline-flex"
          >
            <FiDownload size={14} /> Resume.pdf
          </a>
        </div>

        {/* Address bar */}
        <div className="flex items-center gap-2 border-t-2 border-t-face-dark px-2 py-1.5">
          <span className="shrink-0 text-xs font-medium text-slate-700">Address</span>
          <span className="field-in flex min-w-0 flex-1 items-center gap-1.5 px-2 py-1 font-mono text-xs text-slate-800 sm:text-sm">
            <FiFolder className="shrink-0 text-accent" size={14} />
            <span className="truncate">Portfolio ▸ {activeLabel}</span>
          </span>
        </div>

        {isOpen && (
          <div className="glass border-t-2 border-t-face-dark p-2 sm:hidden">
            <ul className="space-y-1">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-sm font-medium text-slate-900 ${
                      active === link.id ? 'bevel-in bg-white' : 'hover:bg-accent hover:text-white'
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
              className="btn-primary mt-2 w-full justify-center text-sm"
            >
              <FiDownload size={14} /> Download Resume
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

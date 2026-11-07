// src/components/Contact.jsx
import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiCheck, FiCopy, FiMail } from 'react-icons/fi';
import useReveal from '../hooks/useReveal';
import { profile } from '../data/profile';
import Win95Window from './ui/Win95Window';

const Contact = () => {
  const ref = useReveal();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable; the address is still visible to copy by hand.
    }
  };

  return (
    <section id="contact" className="px-6 py-20 md:py-28">
      <div ref={ref} className="reveal max-w-4xl mx-auto">
        <Win95Window title="contact.exe" bodyClassName="bg-face px-6 py-14 md:px-16 md:py-20 text-center">
          <p className="font-mono text-xs uppercase tracking-wider text-accent md:text-sm">{'// contact'}</p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            Let&apos;s build something together.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base md:text-lg leading-relaxed text-slate-700">
            Hiring for a developer role, or need a website built or rescued? I&apos;d love to hear about it.
          </p>

          <div className="field-in mx-auto mt-10 inline-flex max-w-full items-center gap-2 py-2 pl-5 pr-2">
            <span className="truncate font-mono text-sm text-slate-800">{profile.email}</span>
            <button
              type="button"
              onClick={copyEmail}
              aria-label="Copy email address"
              className="icon-btn h-9 w-9 shrink-0"
            >
              {copied ? <FiCheck size={16} className="text-emerald-700" /> : <FiCopy size={16} />}
            </button>
          </div>
          <p className="mt-2 h-5 text-xs text-accent" aria-live="polite">{copied ? 'Copied to clipboard' : ''}</p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <FiMail /> Say hello
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <FaLinkedin /> LinkedIn
            </a>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <FaGithub /> GitHub
            </a>
          </div>
        </Win95Window>
      </div>
    </section>
  );
};

export default Contact;

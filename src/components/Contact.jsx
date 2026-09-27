// src/components/Contact.jsx
import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiCheck, FiCopy, FiMail } from 'react-icons/fi';
import useReveal from '../hooks/useReveal';
import { profile } from '../data/profile';

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
        <div className="gradient-border shadow-[0_0_80px_-30px_rgba(95,208,179,0.5)]">
          <div className="relative rounded-[1.7rem] bg-ink/95 px-6 py-14 md:px-16 md:py-20 text-center">
            <p className="font-mono text-sm text-accent">{'// contact'}</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold tracking-tight">
              <span className="text-gradient">Let&apos;s build something together.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base md:text-lg leading-relaxed text-slate-400">
              Hiring for a developer role, or need a website built or rescued? I&apos;d love to hear about it.
            </p>

            <div className="glass mx-auto mt-10 inline-flex max-w-full items-center gap-2 rounded-full py-2 pl-5 pr-2">
              <span className="truncate font-mono text-sm text-slate-200">{profile.email}</span>
              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email address"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-400 hover:bg-white/10 hover:text-accent transition-colors"
              >
                {copied ? <FiCheck size={16} className="text-accent" /> : <FiCopy size={16} />}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// src/components/Home.jsx
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import profileImage from '../assets/profile.webp';
import useReveal from '../hooks/useReveal';
import useTypewriter from '../hooks/useTypewriter';
import { profile } from '../data/profile';
import Win95Window from './ui/Win95Window';

const Home = () => {
  const ref = useReveal();
  const role = useTypewriter(profile.roles);

  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col justify-center px-6 pt-40 pb-16">
      <div ref={ref} className="reveal max-w-6xl mx-auto w-full">
        <div className="grid items-center gap-16 md:grid-cols-[1.25fr_1fr]">
          <div>
            <span className="chip text-slate-800">
              <span className="pulse-dot h-2 w-2 bg-emerald-600" />
              Open to opportunities &amp; freelance work
            </span>

            <h1 className="text-shadow-win mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white">
              {profile.name}
            </h1>

            <p className="text-shadow-win mt-5 h-8 font-mono text-lg sm:text-xl text-white" aria-label={profile.role}>
              <span className="text-white/70">C:\&gt; </span>
              {role}
              <span className="caret" aria-hidden="true" />
            </p>

            <p className="text-shadow-win mt-6 max-w-xl text-base md:text-lg leading-relaxed text-white/90">
              {profile.summary}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary">
                View Projects <FiArrowRight />
              </a>
              <a href={profile.resume} download className="btn-ghost">
                <FiDownload /> Resume
              </a>
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-btn">
                <FaGithub size={18} />
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-btn">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          <div className="mx-auto w-64 sm:w-72 md:w-80">
            <Win95Window title="profile.bmp - Paint" bodyClassName="bg-white p-2">
              <img
                src={profileImage}
                alt={profile.name}
                width={600}
                height={800}
                className="w-full aspect-[3/4] object-cover saturate-[0.9]"
              />
            </Win95Window>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

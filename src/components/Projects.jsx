// src/components/Projects.jsx
import PropTypes from 'prop-types';
import { FaTrophy } from 'react-icons/fa';
import { FiArrowUpRight, FiBell, FiCamera, FiCpu, FiFile } from 'react-icons/fi';
import Section from './Section';
import Win95Window from './ui/Win95Window';
import { projects } from '../data/profile';

const dots = {
  backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)',
  backgroundSize: '18px 18px',
};

// Capture → analyse → alert pipeline for the armyworm system.
const ArmywormVisual = () => {
  const steps = [
    { icon: FiCamera, label: 'Capture' },
    { icon: FiCpu, label: 'Detect (AI)' },
    { icon: FiBell, label: 'Alert' },
  ];

  return (
    <div className="relative h-52 overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-950">
      <div className="absolute inset-0" style={dots} />
      <div className="relative flex h-full items-center justify-center gap-3 px-6">
        {steps.map(({ icon: Icon, label }, i) => (
          <div key={label} className="flex items-center gap-3">
            <div className="flex flex-col items-center gap-2">
              <span className="glass flex h-14 w-14 items-center justify-center text-accent">
                <Icon size={22} />
              </span>
              <span className="font-mono text-[11px] text-white/80">{label}</span>
            </div>
            {i < steps.length - 1 && <span className="mb-6 h-px w-8 sm:w-12 border-t border-dashed border-white/40" />}
          </div>
        ))}
      </div>
    </div>
  );
};

// A miniature storefront for ArtForZim.
const ArtForZimVisual = () => {
  const tiles = [
    'from-amber-700 to-rose-800',
    'from-indigo-700 to-sky-800',
    'from-emerald-700 to-teal-800',
  ];

  return (
    <div className="relative h-52 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-amber-950">
      <div className="absolute inset-0" style={dots} />
      <div className="glass absolute left-1/2 top-8 w-[78%] -translate-x-1/2 bg-face/95 p-3 transition-transform duration-300 group-hover:-translate-y-1">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 bg-slate-500" />
          <span className="h-2 w-2 bg-slate-500" />
          <span className="h-2 w-2 bg-slate-500" />
          <span className="field-in ml-2 flex-1 px-2 py-0.5 font-mono text-[10px] text-slate-700">artforzim.com</span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {tiles.map((tile) => (
            <div key={tile} className="space-y-1.5">
              <div className={`h-16 bg-gradient-to-br ${tile}`} />
              <div className="h-1.5 w-3/4 bg-slate-400" />
              <div className="h-1.5 w-1/2 bg-slate-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const visuals = { armyworm: ArmywormVisual, artforzim: ArtForZimVisual };

const ProjectCard = ({ project }) => {
  const Visual = visuals[project.visual];

  return (
    <Win95Window title={project.name} icon={<FiFile size={13} />} className="group">
      <div className="relative">
        {Visual && <Visual />}
        {project.award && (
          <span className="glass absolute left-4 top-4 inline-flex items-center gap-1.5 bg-ink/70 px-3 py-1 text-xs text-white">
            <FaTrophy className="text-amber-300" size={11} /> Award-winning
          </span>
        )}
        {project.link && (
          <span className="glass absolute right-4 top-4 inline-flex items-center gap-1.5 bg-ink/70 px-3 py-1 text-xs text-white">
            <span className="pulse-dot h-1.5 w-1.5 bg-emerald-400" /> Live
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-xl md:text-2xl font-semibold text-slate-900">{project.name}</h3>
        <p className="mt-3 flex-1 leading-relaxed text-slate-700">{project.description}</p>
        <p className="mt-4 text-sm text-slate-600">{project.note}</p>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag} className="chip font-mono text-xs text-accent">{tag}</li>
            ))}
          </ul>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:text-accent transition-colors"
            >
              Visit site <FiArrowUpRight />
            </a>
          )}
        </div>
      </div>
    </Win95Window>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    note: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string,
    visual: PropTypes.string,
    award: PropTypes.bool,
  }).isRequired,
};

const Projects = () => {
  return (
    <Section
      id="projects"
      eyebrow="projects"
      title="Featured work"
      subtitle="From award-winning AI research to live e-commerce, built to solve real problems."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;

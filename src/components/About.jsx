// src/components/About.jsx
import PropTypes from 'prop-types';
import { FiBriefcase, FiCheckCircle } from 'react-icons/fi';
import Section from './Section';
import SpotlightCard from './ui/SpotlightCard';
import { about, aboutCode, experience } from '../data/profile';

const currentJob = experience[0];

const JsonValue = ({ value }) => {
  if (Array.isArray(value)) {
    return (
      <>
        [
        {value.map((item, i) => (
          <span key={item}>
            <span className="text-amber-200/80">&quot;{item}&quot;</span>
            {i < value.length - 1 && ', '}
          </span>
        ))}
        ]
      </>
    );
  }
  return <span className="text-amber-200/80">&quot;{value}&quot;</span>;
};

JsonValue.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
};

const CodeCard = () => {
  const entries = Object.entries(aboutCode);
  const lines = [
    <span key="open">{'{'}</span>,
    ...entries.map(([key, value], i) => (
      <span key={key}>
        {'  '}
        <span className="text-glow">&quot;{key}&quot;</span>: <JsonValue value={value} />
        {i < entries.length - 1 && ','}
      </span>
    )),
    <span key="close">{'}'}</span>,
  ];

  return (
    <SpotlightCard className="md:col-span-2 md:row-span-2 overflow-hidden">
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]/70" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]/70" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]/70" />
        <span className="ml-3 rounded-md bg-white/[0.05] px-3 py-1 font-mono text-xs text-slate-400">about.json</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-slate-300">
        {lines.map((line, i) => (
          <div key={i} className="flex">
            <span className="w-8 shrink-0 select-none text-right pr-4 text-slate-600">{i + 1}</span>
            <code className="whitespace-pre-wrap pl-[4ch] -indent-[4ch]">{line}</code>
          </div>
        ))}
      </pre>
    </SpotlightCard>
  );
};

const About = () => {
  return (
    <Section
      id="about"
      eyebrow="about"
      title="A developer who ships for real clients"
      subtitle="Computer Science graduate turning ideas into dependable web platforms and data-driven tools."
    >
      <div className="grid gap-5 md:grid-cols-5">
        <SpotlightCard className="md:col-span-3 p-7 md:p-8">
          <div className="space-y-4 text-base md:text-lg leading-relaxed text-slate-300">
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </SpotlightCard>

        <CodeCard />

        <SpotlightCard className="md:col-span-3 grid gap-6 p-7 sm:grid-cols-2">
          <div>
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-500">
              <FiBriefcase /> Currently
            </p>
            <p className="mt-3 font-display text-lg font-semibold text-slate-100">{currentJob.role}</p>
            <p className="text-accent">@ {currentJob.company}</p>
          </div>
          <div>
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-500">
              <FiCheckCircle /> Open to
            </p>
            <ul className="mt-3 space-y-1.5 text-slate-300">
              <li>Full-time developer roles</li>
              <li>Freelance web projects</li>
              <li>Data &amp; analytics work</li>
            </ul>
          </div>
        </SpotlightCard>
      </div>
    </Section>
  );
};

export default About;

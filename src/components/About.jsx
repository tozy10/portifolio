// src/components/About.jsx
import { FiBriefcase, FiCheckCircle } from 'react-icons/fi';
import Section from './Section';
import SpotlightCard from './ui/SpotlightCard';
import Win95Window from './ui/Win95Window';
import { about, aboutCode, experience } from '../data/profile';

const currentJob = experience[0];

// A classic Windows "Properties" dialog: a tab strip over a flat info page.
const PropertiesCard = () => {
  const facts = [
    ['Degree', aboutCode.degree],
    ['Classification', aboutCode.classification],
    ['Award', aboutCode.award],
  ];

  return (
    <Win95Window
      title={`${aboutCode.name} - Properties`}
      className="md:col-span-2 md:row-span-2"
      bodyClassName="bg-face p-3"
    >
      <div className="flex gap-1 px-1">
        <span className="bevel-out relative z-10 -mb-0.5 bg-face px-4 py-1.5 text-sm font-semibold text-slate-900">
          General
        </span>
      </div>

      <div className="bevel-out flex-1 bg-face p-5">
        <div className="flex flex-col items-center gap-3 border-b border-dashed border-face-dark/50 pb-5 text-center sm:flex-row sm:text-left">
          <span className="bevel-out flex h-16 w-16 shrink-0 items-center justify-center bg-face text-xl font-bold text-accent">
            ET
          </span>
          <div>
            <p className="font-display text-lg font-semibold text-slate-900">{aboutCode.name}</p>
            <p className="text-sm text-slate-700">{currentJob.role} · {currentJob.company}</p>
          </div>
        </div>

        <dl className="mt-5 space-y-2.5 text-sm">
          {facts.map(([label, value]) => (
            <div key={label} className="flex items-baseline justify-between gap-4 border-b border-dashed border-face-dark/40 pb-2">
              <dt className="text-slate-700">{label}</dt>
              <dd className="text-right font-medium text-slate-900">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-5">
          <p className="text-xs uppercase tracking-wider text-slate-700">Focus</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {aboutCode.focus.map((item) => (
              <li key={item} className="chip text-xs">{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <p className="text-xs uppercase tracking-wider text-slate-700">Stack</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {aboutCode.stack.map((item) => (
              <li key={item} className="chip text-xs">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Win95Window>
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
          <div className="space-y-4 text-base md:text-lg leading-relaxed text-slate-800">
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </SpotlightCard>

        <PropertiesCard />

        <SpotlightCard className="md:col-span-3 grid gap-6 p-7 sm:grid-cols-2">
          <div>
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-700">
              <FiBriefcase /> Currently
            </p>
            <p className="mt-3 font-display text-lg font-semibold text-slate-900">{currentJob.role}</p>
            <p className="text-accent">@ {currentJob.company}</p>
          </div>
          <div>
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-700">
              <FiCheckCircle /> Open to
            </p>
            <ul className="mt-3 space-y-1.5 text-slate-800">
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

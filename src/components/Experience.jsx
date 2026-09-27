// src/components/Experience.jsx
import { FiDatabase, FiGlobe, FiLayout, FiShield } from 'react-icons/fi';
import Section from './Section';
import SpotlightCard from './ui/SpotlightCard';
import { experience } from '../data/profile';

const areas = [
  { icon: FiLayout, label: 'UI redesigns' },
  { icon: FiGlobe, label: 'Domains' },
  { icon: FiDatabase, label: 'Databases' },
  { icon: FiShield, label: 'Security' },
];

const Experience = () => {
  return (
    <Section
      id="experience"
      eyebrow="experience"
      title="Where I've worked"
      subtitle="Hands-on, end-to-end ownership of production websites for well-known brands."
    >
      <div className="space-y-5">
        {experience.map((job) => (
          <SpotlightCard key={job.company} as="article" className="p-7 md:p-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/25 to-glow/25 border border-white/10 font-display text-lg font-bold text-slate-50">
                    WE
                  </span>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-slate-50">{job.role}</h3>
                    <p className="mt-1 text-accent">{job.company}</p>
                    <p className="mt-1 font-mono text-sm text-slate-500">{job.period}</p>
                  </div>
                </div>

                <ul className="mt-7 space-y-3 text-slate-300">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-8 font-mono text-xs uppercase tracking-wider text-slate-500">Clients include</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {job.clients.map((client) => (
                    <li key={client} className="chip">{client}</li>
                  ))}
                </ul>
              </div>

              <ul className="grid grid-cols-2 gap-3 self-start lg:w-72">
                {areas.map(({ icon: Icon, label }) => (
                  <li key={label} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <Icon className="text-accent" size={20} />
                    <p className="mt-3 text-sm text-slate-300">{label}</p>
                  </li>
                ))}
              </ul>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </Section>
  );
};

export default Experience;

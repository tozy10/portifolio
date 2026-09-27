// src/components/Education.jsx
import Section from './Section';
import SpotlightCard from './ui/SpotlightCard';
import { education } from '../data/profile';

const Education = () => {
  return (
    <Section
      id="education"
      eyebrow="education"
      title="Academic background"
      subtitle="Graduated top of the scale, with recognition for design and innovation."
    >
      <ol className="relative space-y-6 pl-8 md:pl-10">
        <span className="absolute left-[11px] md:left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent" aria-hidden="true" />
        {education.map((item) => (
          <li key={item.school} className="relative">
            <span
              className={`absolute -left-8 md:-left-10 top-8 flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full border ${
                item.highlight ? 'border-accent/60 bg-accent/15' : 'border-white/10 bg-ink'
              }`}
              aria-hidden="true"
            >
              <span className={`h-2 w-2 rounded-full ${item.highlight ? 'bg-accent' : 'bg-slate-500'}`} />
            </span>

            <SpotlightCard className={`p-6 md:p-7 ${item.highlight ? 'border-accent/25' : ''}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg md:text-xl font-semibold text-slate-50">{item.school}</h3>
                <span className="font-mono text-sm text-slate-500">{item.period}</span>
              </div>
              <p className="mt-1 text-slate-300">{item.degree}</p>

              {item.badges && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.badges.map((badge) => (
                    <li key={badge} className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">{badge}</li>
                  ))}
                </ul>
              )}

              <ul className="mt-3 space-y-1 text-slate-400">
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </SpotlightCard>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Education;

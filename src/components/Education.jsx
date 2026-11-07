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
        <span className="absolute left-[11px] md:left-[15px] top-2 bottom-2 w-0.5 bg-white/50" aria-hidden="true" />
        {education.map((item) => (
          <li key={item.school} className="relative">
            <span
              className="bevel-out absolute -left-8 md:-left-10 top-8 flex h-6 w-6 md:h-8 md:w-8 items-center justify-center bg-face"
              aria-hidden="true"
            >
              <span className={`h-2 w-2 ${item.highlight ? 'bg-accent' : 'bg-slate-600'}`} />
            </span>

            <SpotlightCard className={`p-6 md:p-7 ${item.highlight ? 'border-t-4 border-t-accent' : ''}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg md:text-xl font-semibold text-slate-900">{item.school}</h3>
                <span className="font-mono text-sm text-slate-700">{item.period}</span>
              </div>
              <p className="mt-1 text-slate-800">{item.degree}</p>

              {item.badges && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.badges.map((badge) => (
                    <li key={badge} className="bg-accent/10 px-3 py-1 text-sm font-medium text-accent">{badge}</li>
                  ))}
                </ul>
              )}

              <ul className="mt-3 space-y-1 text-slate-700">
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

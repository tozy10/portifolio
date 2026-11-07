// src/components/Certificates.jsx
import { FaGraduationCap } from 'react-icons/fa';
import { SiCisco } from 'react-icons/si';
import Section from './Section';
import SpotlightCard from './ui/SpotlightCard';
import { certificates } from '../data/profile';

const Certificates = () => {
  return (
    <Section id="certificates" eyebrow="certificates" title="Certifications">
      <ul className="grid gap-5 md:grid-cols-3">
        {certificates.map((cert) => {
          const Icon = cert.issuer === 'Cisco' ? SiCisco : FaGraduationCap;
          return (
            <SpotlightCard key={cert.name} as="li" className="flex items-start gap-4 p-6">
              <span className="bevel-out flex h-12 w-12 shrink-0 items-center justify-center bg-face text-accent">
                <Icon size={cert.issuer === 'Cisco' ? 26 : 20} />
              </span>
              <div>
                <p className="font-medium leading-snug text-slate-900">{cert.name}</p>
                <p className="mt-1 font-mono text-xs text-slate-700">{cert.issuer ?? 'Professional certificate'}</p>
              </div>
            </SpotlightCard>
          );
        })}
      </ul>
    </Section>
  );
};

export default Certificates;

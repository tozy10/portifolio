// src/components/Skills.jsx
import { FaFileExcel, FaJava } from 'react-icons/fa';
import { FiBarChart2, FiCode, FiDatabase, FiLayout, FiPieChart, FiTrendingUp } from 'react-icons/fi';
import {
  SiC, SiCss3, SiDjango, SiHtml5, SiJavascript, SiMongodb, SiNextdotjs, SiPandas,
  SiPostgresql, SiPython, SiR, SiReact, SiSqlite, SiTableau, SiWordpress,
} from 'react-icons/si';
import Section from './Section';
import SpotlightCard from './ui/SpotlightCard';
import { skills } from '../data/profile';

// Icon and brand colour (shown on hover) for each skill.
const skillIcons = {
  C: [SiC, '#a8b9cc'],
  Python: [SiPython, '#ffd43b'],
  JavaScript: [SiJavascript, '#f7df1e'],
  Java: [FaJava, '#f89820'],
  R: [SiR, '#5f9fd9'],
  SQLite: [SiSqlite, '#5ba3d6'],
  PostgreSQL: [SiPostgresql, '#6d9fd6'],
  MongoDB: [SiMongodb, '#47a248'],
  Django: [SiDjango, '#44b78b'],
  HTML: [SiHtml5, '#e34f26'],
  CSS: [SiCss3, '#3c9ce0'],
  React: [SiReact, '#61dafb'],
  'Next.js': [SiNextdotjs, '#ffffff'],
  WordPress: [SiWordpress, '#5b9bd5'],
  SQL: [FiDatabase, '#5fd0b3'],
  Excel: [FaFileExcel, '#21a366'],
  Pandas: [SiPandas, '#e0b0ff'],
  Matplotlib: [FiBarChart2, '#6aa6d6'],
  Tableau: [SiTableau, '#e97627'],
  'Data Visualization': [FiPieChart, '#5fd0b3'],
};

const groupIcons = {
  Programming: FiCode,
  Databases: FiDatabase,
  'Web Development': FiLayout,
  'Data Analytics': FiTrendingUp,
};

const Skills = () => {
  return (
    <Section
      id="skills"
      eyebrow="skills"
      title="Tools I work with"
      subtitle="A full-stack web toolkit with a strong foundation in data and analytics."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((category) => {
          const GroupIcon = groupIcons[category.group] ?? FiCode;
          return (
            <SpotlightCard key={category.group} className="p-7">
              <div className="flex items-center justify-between">
                <h3 className="flex items-center gap-3 font-display text-lg font-semibold text-slate-50">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <GroupIcon size={18} />
                  </span>
                  {category.group}
                </h3>
                <span className="font-mono text-xs text-slate-500">{category.items.length} skills</span>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2">
                {category.items.map((item) => {
                  const [Icon, brand] = skillIcons[item] ?? [FiCode, '#5fd0b3'];
                  return (
                    <li key={item} className="skill-chip chip py-1.5 hover:border-white/20 transition-colors" style={{ '--brand': brand }}>
                      <Icon size={15} />
                      {item}
                    </li>
                  );
                })}
              </ul>
            </SpotlightCard>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;

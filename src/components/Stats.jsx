// src/components/Stats.jsx
import PropTypes from 'prop-types';
import useCountUp from '../hooks/useCountUp';
import SpotlightCard from './ui/SpotlightCard';
import { stats } from '../data/profile';

const Stat = ({ value, suffix = '', text, label }) => {
  const [ref, count] = useCountUp(value ?? 0);

  return (
    <SpotlightCard className="px-6 py-7 text-center">
      <p ref={ref} className="font-display text-4xl md:text-5xl font-bold text-gradient">
        {text ?? `${count}${suffix}`}
      </p>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </SpotlightCard>
  );
};

Stat.propTypes = {
  value: PropTypes.number,
  suffix: PropTypes.string,
  text: PropTypes.string,
  label: PropTypes.string.isRequired,
};

const Stats = () => {
  return (
    <section aria-label="Highlights" className="px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {stats.map((stat) => (
          <Stat key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default Stats;

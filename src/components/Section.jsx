// src/components/Section.jsx
import PropTypes from 'prop-types';
import useReveal from '../hooks/useReveal';

const Section = ({ id, eyebrow, title, subtitle, children }) => {
  const ref = useReveal();

  return (
    <section id={id} className="px-6 py-20 md:py-28">
      <div ref={ref} className="reveal max-w-6xl mx-auto">
        <header className="mb-12 md:mb-14">
          <p className="font-mono text-sm text-accent">{`// ${eyebrow}`}</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight text-slate-50">{title}</h2>
          {subtitle && <p className="mt-4 max-w-2xl text-base md:text-lg text-slate-400">{subtitle}</p>}
        </header>
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string.isRequired,
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node,
};

export default Section;

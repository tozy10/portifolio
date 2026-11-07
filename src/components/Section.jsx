// src/components/Section.jsx
import PropTypes from 'prop-types';
import useReveal from '../hooks/useReveal';

const Section = ({ id, eyebrow, title, subtitle, children }) => {
  const ref = useReveal();

  return (
    <section id={id} className="px-6 py-20 md:py-28">
      <div ref={ref} className="reveal max-w-6xl mx-auto">
        <header className="glass mb-10 px-5 py-4 md:mb-14 md:px-7 md:py-5">
          <p className="font-mono text-xs uppercase tracking-wider text-accent md:text-sm">{`// ${eyebrow}`}</p>
          <h2 className="mt-2 font-display text-2xl md:text-4xl font-bold tracking-tight text-slate-900">{title}</h2>
          {subtitle && <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">{subtitle}</p>}
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

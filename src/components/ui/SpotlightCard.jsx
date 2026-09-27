// src/components/ui/SpotlightCard.jsx
import PropTypes from 'prop-types';

// Glass card whose glow and border follow the cursor (see .spotlight-card in App.css).
const SpotlightCard = ({ as: Tag = 'div', className = '', children, ...rest }) => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  return (
    <Tag onMouseMove={handleMouseMove} className={`spotlight-card ${className}`} {...rest}>
      {children}
    </Tag>
  );
};

SpotlightCard.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default SpotlightCard;

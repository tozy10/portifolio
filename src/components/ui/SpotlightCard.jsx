import PropTypes from 'prop-types';

// Beveled Windows-95-style panel (see .spotlight-card in App.css).
const SpotlightCard = ({ as: Tag = 'div', className = '', children, ...rest }) => {
  return (
    <Tag className={`spotlight-card ${className}`} {...rest}>
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

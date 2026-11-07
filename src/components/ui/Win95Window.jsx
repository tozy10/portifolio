import PropTypes from 'prop-types';

// A self-contained "application window": titlebar with decorative controls,
// plus a content area. Used for showcase pieces (the about.json card, project
// previews, the contact card) where a literal window frame reads well.
const Win95Window = ({ title, icon, className = '', bodyClassName = '', children }) => {
  return (
    <div className={`spotlight-card flex flex-col overflow-hidden ${className}`}>
      <div className="win-titlebar">
        <div className="flex min-w-0 items-center gap-1.5 font-display text-[13px] font-bold">
          {icon}
          <span className="truncate">{title}</span>
        </div>
        <div className="flex shrink-0 items-center gap-[3px]" aria-hidden="true">
          <span className="win-ctrl">_</span>
          <span className="win-ctrl">□</span>
          <span className="win-ctrl">×</span>
        </div>
      </div>
      <div className={`flex flex-1 flex-col ${bodyClassName}`}>{children}</div>
    </div>
  );
};

Win95Window.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
  className: PropTypes.string,
  bodyClassName: PropTypes.string,
  children: PropTypes.node,
};

export default Win95Window;

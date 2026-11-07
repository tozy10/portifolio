// Flat teal "desktop" backdrop with a faint pixel-grid texture, standing in
// for the classic Windows desktop instead of a modern blurred-blob glow.
const Background = () => {
  return (
    <div className="bg-scene" aria-hidden="true">
      <div className="bg-grid" />
    </div>
  );
};

export default Background;

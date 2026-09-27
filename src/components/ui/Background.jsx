// src/components/ui/Background.jsx
const Background = () => {
  return (
    <div className="bg-scene" aria-hidden="true">
      <div className="bg-grid" />
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <div className="bg-blob bg-blob-3" />
    </div>
  );
};

export default Background;

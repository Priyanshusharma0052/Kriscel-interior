function FloatingShapes() {

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      <div className="glow top-[10%] left-[10%] animate-pulse"></div>

      <div className="glow bottom-[10%] right-[10%] animate-pulse"></div>

    </div>
  );
}

export default FloatingShapes;
import { useEffect, useState } from "react";

function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[60] hidden md:block"
      style={{ transform: `translate(${pos.x - 10}px, ${pos.y - 10}px)` }}
    >
      <div className="h-5 w-5 rounded-full bg-primary/30 border border-primary"></div>
    </div>
  );
}

export default CustomCursor;
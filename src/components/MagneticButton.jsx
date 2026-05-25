import { useRef } from "react";

function MagneticButton({ className = "", children, ...props }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 16;
    const y = ((e.clientY - rect.top - rect.height / 2) / rect.height) * 16;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`relative overflow-hidden transition-transform duration-300 before:pointer-events-none before:absolute before:inset-0 before:-translate-x-[120%] before:bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.34)_50%,transparent_78%)] before:transition-transform before:duration-700 hover:before:translate-x-[120%] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default MagneticButton;

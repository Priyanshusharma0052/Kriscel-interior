import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/siteData";

function HorizontalShowcase() {
  const wrapRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".hs-panel");
      if (!panels.length) return;

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: wrapRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + (wrapRef.current?.offsetWidth || 0),
        },
      });
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrapRef} className="section overflow-hidden bg-white">
      <h2 className="title mb-10">Scrolling Project Story</h2>

      <div className="flex w-full">
        {projects.map((p) => (
          <div key={p.slug} className="hs-panel min-w-full lg:min-w-[70vw] pr-6">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <img src={p.image} alt={p.title} className="rounded-[36px] h-[520px] w-full object-cover" />
              <div>
                <p className="uppercase tracking-[4px] text-gray-500 text-sm">{p.room}</p>
                <h3 className="mt-3 text-4xl font-bold">{p.title}</h3>
                <p className="mt-6 text-gray-600 leading-8">{p.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HorizontalShowcase;
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router-dom";
import MagneticButton from "./MagneticButton";

function Hero() {
  const navigate = useNavigate();
  const [tiltEnabled, setTiltEnabled] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const updateTilt = () => setTiltEnabled(query.matches);

    updateTilt();
    query.addEventListener("change", updateTilt);
    return () => query.removeEventListener("change", updateTilt);
  }, []);

  const exploreDesigns = () => {
    document.getElementById("design-styles")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden bg-[#F8F5F2] pt-16 sm:pt-24">
      <div className="relative z-10 grid w-full items-center gap-8 px-4 py-10 sm:px-6 sm:py-12 md:px-16 md:py-20 lg:grid-cols-2 lg:gap-12">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="title text-black"
          >
            Luxury Interior
            <br />
            Experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg md:mt-8 md:text-2xl md:leading-9"
          >
            Premium modular interiors crafted for elegant modern living, with 3D design, expert execution, and a story-driven home journey.
          </motion.p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:mt-10">
            <MagneticButton
              type="button"
              onClick={exploreDesigns}
              className="w-full rounded-full bg-primary px-6 py-4 font-semibold text-black sm:w-auto sm:px-8"
            >
              Explore Designs
            </MagneticButton>
            <MagneticButton
              type="button"
              onClick={() => navigate("/contact#consultation")}
              className="w-full rounded-full border border-black/30 px-6 py-4 text-black sm:w-auto sm:px-8"
            >
              Book Consultation
            </MagneticButton>
          </div>
        </div>

        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1500} transitionSpeed={2000} tiltEnable={tiltEnabled}>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="card-3d"
          >
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600"
              className="aspect-[4/3] w-full rounded-[22px] object-cover shadow-2xl sm:aspect-[16/11] sm:rounded-[28px] md:rounded-[40px]"
              alt="Luxury interior"
            />
          </motion.div>
        </Tilt>
      </div>
    </section>
  );
}

export default Hero;

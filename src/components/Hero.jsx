import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import MagneticButton from "./MagneticButton";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black hero-gradient flex items-center pt-24">
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-55">
          <source src="https://cdn.coverr.co/videos/coverr-modern-living-room-1561308612492?download=1080p" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-black/55"></div>

      <div className="relative z-10 w-full px-6 md:px-16 grid lg:grid-cols-2 gap-12 items-center py-20">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="title text-white"
          >
            Luxury Interior
            <br />
            Experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-xl md:text-2xl text-gray-200 max-w-2xl leading-9"
          >
            Premium modular interiors crafted for elegant modern living, with 3D design, expert execution, and a story-driven home journey.
          </motion.p>

          <div className="mt-10 flex flex-wrap gap-4">
            <MagneticButton className="bg-primary text-black px-8 py-4 rounded-full font-semibold">
              Explore Designs
            </MagneticButton>
            <MagneticButton className="border border-white text-white px-8 py-4 rounded-full">
              Book Consultation
            </MagneticButton>
          </div>
        </div>

        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1500} transitionSpeed={2000}>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="card-3d"
          >
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600"
              className="rounded-[40px] shadow-2xl w-full"
              alt="Luxury interior"
            />
          </motion.div>
        </Tilt>
      </div>
    </section>
  );
}

export default Hero;
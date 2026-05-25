import { useNavigate } from "react-router-dom";
import MagneticButton from "./MagneticButton";
import { motion } from "framer-motion";

function CTA() {
  const navigate = useNavigate();

  return (
    <section className="section relative overflow-hidden bg-black text-center text-white">
      <div className="pointer-events-none absolute -left-24 top-6 h-52 w-52 rounded-full bg-primary/20 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-14 right-0 h-56 w-56 rounded-full bg-white/10 blur-3xl"></div>
      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-[clamp(2rem,11vw,4.5rem)] font-bold leading-tight"
      >
        Ready To Transform
        <br />
        Your Dream Home?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.85, delay: 0.08, ease: "easeOut" }}
        className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg md:mt-8 md:text-xl"
      >
        Book a free consultation with our expert designers.
      </motion.p>
      <MagneticButton
        type="button"
        onClick={() => navigate("/contact#consultation")}
        className="mt-8 w-full rounded-full bg-primary px-8 py-4 font-semibold text-black sm:w-auto md:mt-10 md:px-10 md:py-5 md:text-xl"
      >
        Book Consultation
      </MagneticButton>
    </section>
  );
}

export default CTA;

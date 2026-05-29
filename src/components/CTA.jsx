import { useNavigate } from "react-router-dom";
import MagneticButton from "./MagneticButton";
import { motion } from "framer-motion";

function CTA() {
  const navigate = useNavigate();

  return (
    <section className="section section-dark cta-section relative overflow-hidden bg-[#15110d] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
      <div className="pointer-events-none absolute -left-10 top-8 h-28 w-28 rounded-full bg-primary/12 blur-2xl"></div>
      <div className="pointer-events-none absolute -bottom-8 right-6 h-32 w-32 rounded-full bg-[#8ca08a]/10 blur-2xl"></div>

      <div className="relative mx-auto grid max-w-4xl items-center gap-4 lg:grid-cols-[minmax(0,1fr)_auto]">
        <div className="relative z-10 max-w-xl rounded-[22px] bg-black/18 p-4 backdrop-blur-[2px] sm:p-[18px] md:p-5">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-2 text-[11px] font-semibold uppercase tracking-[5px] text-primary/85 sm:text-xs"
          >
            Book Consultation
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-lg text-[clamp(1.5rem,3.8vw,2.7rem)] font-black leading-[0.98] tracking-[-0.03em]"
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
            className="mt-3 max-w-md text-sm leading-6 text-white/72 sm:text-[15px]"
          >
            Book a free consultation with our expert designers and get a clear plan for layout, materials, storage, and finish direction.
          </motion.p>
        </div>

        <div className="relative z-10 flex justify-start lg:justify-end lg:pt-1">
          <MagneticButton
            type="button"
            onClick={() => navigate("/contact#consultation")}
            className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-black shadow-soft sm:w-auto md:px-7 md:py-3 md:text-base"
          >
            Book Consultation
          </MagneticButton>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-6 hidden h-12 w-20 sofa-shape border border-white/16 bg-white/3 lg:block"></div>
      <div className="pointer-events-none absolute right-[18%] top-12 hidden h-14 w-8 lamp-shape border border-white/16 bg-white/3 lg:block"></div>
      <div className="pointer-events-none absolute right-8 bottom-8 hidden h-12 w-10 cabinet-shape border border-white/16 bg-white/3 lg:block"></div>
    </section>
  );
}

export default CTA;

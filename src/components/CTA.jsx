import { useNavigate } from "react-router-dom";
import MagneticButton from "./MagneticButton";
import { motion } from "framer-motion";

function CTA() {
  const navigate = useNavigate();

  return (
    <section className="section section-dark relative overflow-hidden bg-[#15110d] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
      <div className="pointer-events-none absolute -left-16 top-10 h-60 w-60 rounded-full bg-primary/15 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-20 right-6 h-64 w-64 rounded-full bg-[#8ca08a]/12 blur-3xl"></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative z-10 max-w-4xl rounded-[36px] bg-black/28 p-7 backdrop-blur-[2px] sm:p-9 lg:p-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-4 text-xs font-semibold uppercase tracking-[5px] text-primary/85 sm:text-sm"
          >
            Book Consultation
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl text-[clamp(2.3rem,8vw,5.2rem)] font-black leading-[0.96] tracking-[-0.03em]"
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
            className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg md:mt-8 md:text-xl"
          >
            Book a free consultation with our expert designers and get a clear plan for layout, materials, storage, and finish direction.
          </motion.p>
        </div>

        <div className="relative z-10 flex justify-start lg:justify-end lg:pt-8">
          <MagneticButton
            type="button"
            onClick={() => navigate("/contact#consultation")}
            className="w-full rounded-full bg-primary px-8 py-4 text-lg font-semibold text-black shadow-soft sm:w-auto md:px-12 md:py-5 md:text-xl"
          >
            Book Consultation
          </MagneticButton>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-6 hidden h-28 w-44 sofa-shape border border-white/18 bg-white/4 lg:block"></div>
      <div className="pointer-events-none absolute bottom-10 left-[19rem] hidden h-20 w-20 table-shape border border-primary/22 bg-white/4 lg:block"></div>
      <div className="pointer-events-none absolute right-[18%] top-12 hidden h-32 w-16 lamp-shape border border-white/18 bg-white/4 lg:block"></div>
      <div className="pointer-events-none absolute right-8 bottom-8 hidden h-28 w-20 cabinet-shape border border-white/18 bg-white/4 lg:block"></div>
    </section>
  );
}

export default CTA;

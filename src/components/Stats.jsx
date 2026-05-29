import { stats } from "../data/siteData";
import { motion } from "framer-motion";

function Stats() {
  return (
    <section className="section bg-[#f9f3e8] text-dark" data-aos="fade-up">
      <div className="grid md:grid-cols-4 gap-8 text-center">
        {stats.map((s, index) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
            className="premium-card rounded-3xl bg-white/85 p-8 shadow-soft ring-1 ring-primary/10 backdrop-blur"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-primary">{s.value}</h2>
            <p className="mt-4 text-lg font-semibold text-black">{s.label}</p>
            <p className="mt-3 text-sm leading-6 text-black/60">{s.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;

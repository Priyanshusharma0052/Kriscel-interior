import { designStyles } from "../data/siteData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function DesignStyles() {
  return (
    <section id="design-styles" className="section scroll-mt-28">
      <h2 className="title mb-12">Explore Design Styles</h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
        {designStyles.map((s, index) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: index * 0.07, ease: "easeOut" }}
          >
            <Link to={`/styles/${s.slug}`} className="group premium-card relative block h-[300px] overflow-hidden rounded-[30px] card-3d sm:h-[360px] md:h-[420px]">
              <img src={s.image} alt={s.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/35"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-3xl font-bold">{s.title}</h3>
                <p className="mt-3 max-w-xs text-gray-200">{s.text}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default DesignStyles;

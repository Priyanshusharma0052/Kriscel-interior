import { blogs } from "../data/siteData";
import { motion } from "framer-motion";

function BlogSection() {
  return (
    <section className="section bg-[#faf4ea]">
      <h2 className="title mb-12">Interior Design Magazine</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((b, index) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: index * 0.08, ease: "easeOut" }}
            className="premium-card bg-white rounded-[30px] overflow-hidden shadow-soft card-3d"
          >
            <img
              src={b.image}
              alt={b.title}
              className="h-[220px] md:h-[260px] w-full object-cover transition duration-700 hover:scale-105"
            />
            <div className="p-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-primary">{b.meta}</p>
              <h3 className="text-3xl font-bold">{b.title}</h3>
              <p className="mt-5 text-gray-600 leading-8">{b.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;

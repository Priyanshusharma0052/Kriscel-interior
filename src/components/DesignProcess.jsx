import { processSteps } from "../data/siteData";
import { motion } from "framer-motion";

function DesignProcess() {
  return (
    <section className="section">
      <h2 className="title mb-16 text-center">Our Design Process</h2>

      <div className="grid md:grid-cols-5 gap-6">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
            className="premium-card card-3d bg-white rounded-3xl shadow-soft text-center overflow-hidden"
          >
            <img
              src={step.image}
              alt={step.title}
              className="h-36 w-full object-cover"
            />
            <div className="p-6">
            <div className="text-5xl font-bold text-primary">0{index + 1}</div>
            <h3 className="mt-5 text-2xl font-bold">{step.title}</h3>
            <p className="mt-4 text-gray-600 leading-7">{step.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default DesignProcess;

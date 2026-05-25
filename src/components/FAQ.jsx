import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "../data/siteData";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="title mb-12"
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="grid gap-5">
        {faqs.map((f, index) => {
          const open = openIndex === index;
          return (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.05, ease: "easeOut" }}
              className="premium-card rounded-[24px] bg-light p-6 shadow-soft"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(open ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span className="text-2xl font-semibold">{f.q}</span>
                <span className={`text-3xl leading-none text-primary transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-gray-600 leading-8">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;

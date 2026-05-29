import { trustedBrands } from "../data/siteData";
import { motion } from "framer-motion";

function TrustedBrands() {
  const marqueeBrands = [...trustedBrands, ...trustedBrands];

  return (
    <section className="section bg-[#edf2eb] backdrop-blur">
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center text-gray-500 uppercase tracking-[5px] text-sm"
      >
        Trusted By Premium Brands
      </motion.p>

      <div className="brand-marquee mt-14 opacity-90 float-slower">
        <div className="brand-marquee-track">
          {marqueeBrands.map((brand, index) => (
            <div key={`${brand.name}-${index}`} className="brand-marquee-item">
              <img
                src={brand.logo}
                alt={brand.name}
                className="mx-auto h-10 w-auto max-w-[180px] object-contain transition duration-300 sm:h-12"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedBrands;

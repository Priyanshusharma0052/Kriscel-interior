import { Link } from "react-router-dom";
import { navLinks } from "../data/siteData";
import { motion } from "framer-motion";

function Footer() {
  const goHomeTop = () => {
    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <footer className="relative overflow-hidden bg-black px-6 py-16 text-white md:px-16">
      <div className="pointer-events-none absolute -top-20 left-12 h-60 w-60 rounded-full bg-primary/12 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-28 right-6 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
      <div className="relative grid gap-10 md:grid-cols-4">
        <div>
          <Link to="/" onClick={goHomeTop} className="inline-block text-3xl font-bold transition hover:text-primary">
            Kriscel Interiors
          </Link>
          <p className="mt-5 text-gray-400 leading-8">
            Premium modular interiors and furniture for modern homes.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-5">Quick Links</h4>
          <div className="grid gap-3 text-gray-400">
            {navLinks.slice(0, 5).map((l) => (
              <a key={l.label} href={l.href} className="hover:text-primary">{l.label}</a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-5">Services</h4>
          <div className="grid gap-3 text-gray-400">
            <a href="/kitchen" className="hover:text-primary">Modular Kitchen</a>
            <a href="/wardrobes" className="hover:text-primary">Wardrobes</a>
            <a href="/living-room" className="hover:text-primary">Living Room</a>
            <a href="/bedroom" className="hover:text-primary">Bedroom</a>
            <a href="/office" className="hover:text-primary">Office Interior</a>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-5">Contact</h4>
          <p className="text-gray-400 leading-8">
            Delhi, Mumbai, Bangalore
            <br />
            info@kriscelinteriors.com
            <br />
            +91 99999 99999
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mt-12 border-t border-white/10 pt-6 text-gray-500"
      >
        © 2026 Kriscel Interiors. All rights reserved.
      </motion.div>
    </footer>
  );
}

export default Footer;

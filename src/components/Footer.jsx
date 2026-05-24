import { navLinks } from "../data/siteData";

function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-3xl font-bold">Kriscel Interiors</h3>
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

      <div className="mt-12 border-t border-white/10 pt-6 text-gray-500">
        © 2026 Kriscel Interiors. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
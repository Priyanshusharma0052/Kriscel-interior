import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks, megaMenus } from "../data/siteData";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `transition ${isActive ? "text-primary" : "text-black/80 hover:text-primary"}`;

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-xl shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="px-6 md:px-16 flex items-center justify-between">
        <Link to="/" className="text-2xl md:text-3xl font-bold tracking-tight">
          Kriscel <span className="text-primary">Interiors</span>
        </Link>

        <div className="hidden xl:flex items-center gap-8 font-medium relative">
          {navLinks.map((item) =>
            item.label === "Kitchen" ? (
              <div
                key={item.label}
                onMouseEnter={() => setMenu("kitchens")}
                onMouseLeave={() => setMenu(null)}
                className="relative"
              >
                <button className="hover:text-primary transition">Kitchen</button>
                {menu === "kitchens" && (
                  <div className="absolute left-0 top-10 w-[620px] rounded-3xl bg-white shadow-2xl p-6 grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm uppercase tracking-[4px] text-gray-500 mb-4">Kitchen</p>
                      <div className="grid gap-3">
                        {megaMenus.kitchens.map((x) => (
                          <a key={x.label} href={x.href} className="hover:text-primary">{x.label}</a>
                        ))}
                      </div>
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200"
                      alt="kitchen"
                      className="h-48 w-full object-cover rounded-2xl"
                    />
                  </div>
                )}
              </div>
            ) : item.label === "Wardrobes" ? (
              <div
                key={item.label}
                onMouseEnter={() => setMenu("wardrobes")}
                onMouseLeave={() => setMenu(null)}
                className="relative"
              >
                <button className="hover:text-primary transition">Wardrobes</button>
                {menu === "wardrobes" && (
                  <div className="absolute left-0 top-10 w-[620px] rounded-3xl bg-white shadow-2xl p-6 grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm uppercase tracking-[4px] text-gray-500 mb-4">Wardrobes</p>
                      <div className="grid gap-3">
                        {megaMenus.wardrobes.map((x) => (
                          <a key={x.label} href={x.href} className="hover:text-primary">{x.label}</a>
                        ))}
                      </div>
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200"
                      alt="wardrobe"
                      className="h-48 w-full object-cover rounded-2xl"
                    />
                  </div>
                )}
              </div>
            ) : item.label === "Home" ? (
              <NavLink key={item.label} to={item.href} className={linkClass}>
                Home
              </NavLink>
            ) : item.label === "Services" ? (
              <div
                key={item.label}
                onMouseEnter={() => setMenu("styles")}
                onMouseLeave={() => setMenu(null)}
                className="relative"
              >
                <button className="hover:text-primary transition">Styles</button>
                {menu === "styles" && (
                  <div className="absolute left-0 top-10 w-[620px] rounded-3xl bg-white shadow-2xl p-6 grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm uppercase tracking-[4px] text-gray-500 mb-4">Design Styles</p>
                      <div className="grid gap-3">
                        {megaMenus.styles.map((x) => (
                          <a key={x.label} href={x.href} className="hover:text-primary">{x.label}</a>
                        ))}
                      </div>
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200"
                      alt="style"
                      className="h-48 w-full object-cover rounded-2xl"
                    />
                  </div>
                )}
              </div>
            ) : item.label === "Contact" ? (
              <div
                key={item.label}
                onMouseEnter={() => setMenu("cities")}
                onMouseLeave={() => setMenu(null)}
                className="relative"
              >
                <button className="hover:text-primary transition">Cities</button>
                {menu === "cities" && (
                  <div className="absolute right-0 top-10 w-[520px] rounded-3xl bg-white shadow-2xl p-6 grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm uppercase tracking-[4px] text-gray-500 mb-4">Cities</p>
                      <div className="grid gap-3">
                        {megaMenus.cities.map((x) => (
                          <a key={x.label} href={x.href} className="hover:text-primary">{x.label}</a>
                        ))}
                      </div>
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200"
                      alt="city"
                      className="h-48 w-full object-cover rounded-2xl"
                    />
                  </div>
                )}
              </div>
            ) : (
              <NavLink key={item.label} to={item.href} className={linkClass}>
                {item.label}
              </NavLink>
            )
          )}

          <Link
            to="/contact"
            className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition"
          >
            Free Consultation
          </Link>
        </div>

        <button className="xl:hidden" onClick={() => setMobileOpen(true)}>
          <Menu />
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-black/60 xl:hidden">
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white p-6">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">Menu</span>
              <button onClick={() => setMobileOpen(false)}><X /></button>
            </div>

            <div className="mt-8 grid gap-5 text-lg">
              {navLinks.map((item) => (
                <NavLink key={item.label} to={item.href} onClick={() => setMobileOpen(false)} className="py-2 border-b">
                  {item.label}
                </NavLink>
              ))}
            </div>

            <a href="/contact" className="mt-8 inline-block bg-primary px-6 py-3 rounded-full font-semibold">
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
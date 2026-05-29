import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks, megaMenus } from "../data/siteData";
import { AnimatePresence, motion } from "framer-motion";

const dropdowns = {
  Services: {
    key: "styles",
    label: "Styles",
    heading: "Design Styles",
    width: "w-[560px]",
  },
  Kitchen: {
    key: "kitchens",
    label: "Kitchen",
    heading: "Kitchen",
    width: "w-[560px]",
  },
  Wardrobes: {
    key: "wardrobes",
    label: "Wardrobes",
    heading: "Wardrobes",
    width: "w-[560px]",
  },
  Contact: {
    key: "cities",
    label: "Cities",
    heading: "Cities",
    width: "w-[600px]",
  },
};

function Navbar() {
  const navigate = useNavigate();
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

  const closeMenu = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setMenu(null);
    }
  };

  const goHomeTop = (event) => {
    event.preventDefault();
    setMenu(null);
    setMobileOpen(false);
    navigate("/");
    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const renderDropdown = (item) => {
    const dropdown = dropdowns[item.label];
    const isOpen = menu === dropdown.key;

    return (
      <div
        key={item.label}
        onMouseEnter={() => setMenu(dropdown.key)}
        onMouseLeave={() => setMenu(null)}
        onBlur={closeMenu}
        className="relative flex items-center"
      >
        <button
          type="button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={() => setMenu(isOpen ? null : dropdown.key)}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setMenu(null);
              event.currentTarget.blur();
            } else if (event.key === "ArrowDown") {
              setMenu(dropdown.key);
            }
          }}
          className={`flex items-center gap-1 transition ${
            isOpen ? "text-primary" : "text-black/80 hover:text-primary"
          }`}
        >
          {dropdown.label}
          <ChevronDown
            size={16}
            strokeWidth={2}
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>

        {isOpen && (
          <div className={`absolute left-1/2 top-full z-50 mt-4 ${dropdown.width} max-w-[calc(100vw-3rem)] -translate-x-1/2 rounded-2xl bg-white p-5 text-black shadow-2xl ring-1 ring-black/5`}>
            <span className="absolute -top-4 left-0 h-4 w-full" aria-hidden="true" />
            <p className="mb-4 text-xs font-semibold uppercase tracking-[4px] text-black/45">{dropdown.heading}</p>
            <div className="grid gap-3 md:grid-cols-2">
              {megaMenus[dropdown.key].map((x) => (
                <Link
                  key={x.label}
                  to={x.href}
                  onClick={() => setMenu(null)}
                  className="group grid grid-cols-[76px_1fr] gap-4 rounded-xl p-3 text-black/75 transition hover:bg-primary/10 hover:text-primary"
                >
                  <img
                    src={x.image}
                    alt={x.label}
                    className="h-20 w-full rounded-lg object-cover"
                  />
                  <span className="min-w-0">
                    <span className="block text-sm font-bold text-black transition group-hover:text-primary">{x.label}</span>
                    <span className="mt-1 block text-xs leading-5 text-gray-500">{x.text}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/90 py-2 shadow-lg backdrop-blur-xl sm:py-3" : "bg-white/70 py-3 backdrop-blur sm:py-5"
      }`}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-16">
        <Link
          to="/"
          aria-label="Go to top of home page"
          onClick={goHomeTop}
          className="min-w-0 text-lg font-bold tracking-tight sm:text-2xl md:text-3xl"
        >
          Kriscel <span className="text-primary">Interiors</span>
        </Link>

        <div className="hidden xl:flex items-center gap-8 font-medium relative">
          {navLinks.map((item) =>
            dropdowns[item.label] ? (
              renderDropdown(item)
            ) : item.label === "Home" ? (
              <NavLink key={item.label} to={item.href} className={linkClass}>
                Home
              </NavLink>
            ) : (
              <NavLink key={item.label} to={item.href} className={linkClass}>
                {item.label}
              </NavLink>
            )
          )}

          <Link
            to="/contact#consultation"
            className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition"
          >
            Free Consultation
          </Link>
        </div>

        <button className="grid h-11 w-11 shrink-0 place-items-center rounded-full xl:hidden" onClick={() => setMobileOpen(true)} aria-label="Open menu">
          <Menu size={24} />
        </button>
      </div>

        <AnimatePresence>
          {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] bg-black/60 xl:hidden"
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-0 flex h-dvh w-[92%] max-w-sm flex-col overflow-y-auto bg-white p-5 sm:p-6"
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">Menu</span>
              <button className="grid h-11 w-11 place-items-center rounded-full" onClick={() => setMobileOpen(false)} aria-label="Close menu"><X size={24} /></button>
            </div>

            <div className="mt-6 grid gap-3 text-base sm:mt-8 sm:text-lg">
              {navLinks.map((item) => (
                <NavLink key={item.label} to={item.href} onClick={() => setMobileOpen(false)} className="border-b py-3">
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="mt-7 grid gap-5 sm:mt-8 sm:gap-6">
              {Object.values(dropdowns).map((dropdown) => (
                <div key={dropdown.key}>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-black/45 sm:tracking-[3px]">{dropdown.heading}</p>
                  <div className="grid gap-2">
                    {megaMenus[dropdown.key].map((x) => (
                      <Link
                        key={x.label}
                        to={x.href}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-xl bg-light px-4 py-3 text-sm font-semibold"
                      >
                        {x.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Link to="/contact#consultation" onClick={() => setMobileOpen(false)} className="mt-8 inline-block rounded-full bg-primary px-6 py-3 text-center font-semibold">
              Book Consultation
            </Link>
          </motion.div>
        </motion.div>
      )}
        </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;

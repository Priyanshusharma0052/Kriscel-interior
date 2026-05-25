import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";

import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import FloatingCTA from "./components/FloatingCTA";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Projects from "./Pages/Projects";
import ProjectDetail from "./Pages/ProjectDetail";
import Kitchen from "./Pages/Kitchen";
import Wardrobes from "./Pages/Wardrobes";
import LivingRoom from "./Pages/LivingRoom";
import Bedroom from "./Pages/Bedroom";
import Office from "./Pages/Office";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import StylePage from "./Pages/StylePage";
import KitchenOptionPage from "./Pages/KitchenOptionPage";
import WardrobeOptionPage from "./Pages/WardrobeOptionPage";
import CityPage from "./Pages/CityPage";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/kitchens/:slug" element={<KitchenOptionPage />} />
        <Route path="/wardrobes" element={<Wardrobes />} />
        <Route path="/wardrobes/:slug" element={<WardrobeOptionPage />} />
        <Route path="/living-room" element={<LivingRoom />} />
        <Route path="/bedroom" element={<Bedroom />} />
        <Route path="/office" element={<Office />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/styles/:slug" element={<StylePage />} />
        <Route path="/cities/:slug" element={<CityPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        {loading ? (
          <Loader />
        ) : (
          <>
            <CustomCursor />
            <FloatingCTA />
            <AnimatedRoutes />
          </>
        )}
      </BrowserRouter>
    </HelmetProvider>
  );
}

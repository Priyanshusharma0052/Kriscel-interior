import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";

import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import FloatingCTA from "./components/FloatingCTA";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Kitchen from "./pages/Kitchen";
import Wardrobes from "./pages/Wardrobes";
import LivingRoom from "./pages/LivingRoom";
import Bedroom from "./pages/Bedroom";
import Office from "./pages/Office";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import StylePage from "./pages/StylePage";

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
        <Route path="/wardrobes" element={<Wardrobes />} />
        <Route path="/living-room" element={<LivingRoom />} />
        <Route path="/bedroom" element={<Bedroom />} />
        <Route path="/office" element={<Office />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/styles/:slug" element={<StylePage />} />
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
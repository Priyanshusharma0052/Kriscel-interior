import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import VideoShowcase from "../components/VideoShowcase";
import TrustedBrands from "../components/TrustedBrands";
import Stats from "../components/Stats";
import DesignProcess from "../components/DesignProcess";
import InteriorPackages from "../components/InteriorPackages";
import HorizontalShowcase from "../components/HorizontalShowcase";
import WhyChoose from "../components/WhyChoose";
import BeforeAfter from "../components/BeforeAfter";
import Gallery from "../components/Gallery";
import DesignStyles from "../components/DesignStyles";
import Testimonials from "../components/Testimonials";
import InstagramSection from "../components/InstagramSection";
import ExperienceCenters from "../components/ExperienceCenters";
import TeamSection from "../components/TeamSection";
import BlogSection from "../components/BlogSection";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 56, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
  },
};

function AnimatedSection({ children }) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

function Home() {
  return (
    <PageTransition>
      <Seo
        title="Home"
        description="Premium interior and modular furniture website with luxury UI, 3D feel, projects, and consultation flow."
      />

      <Navbar />
      <Hero />
      <AnimatedSection><VideoShowcase /></AnimatedSection>
      <AnimatedSection><TrustedBrands /></AnimatedSection>
      <AnimatedSection><Stats /></AnimatedSection>
      <AnimatedSection><DesignProcess /></AnimatedSection>
      <AnimatedSection><InteriorPackages /></AnimatedSection>
      <AnimatedSection><HorizontalShowcase /></AnimatedSection>
      <AnimatedSection><WhyChoose /></AnimatedSection>
      <AnimatedSection><BeforeAfter /></AnimatedSection>
      <AnimatedSection><Gallery /></AnimatedSection>
      <AnimatedSection><DesignStyles /></AnimatedSection>
      <AnimatedSection><Testimonials /></AnimatedSection>
      <AnimatedSection><InstagramSection /></AnimatedSection>
      <AnimatedSection><ExperienceCenters /></AnimatedSection>
      <AnimatedSection><TeamSection /></AnimatedSection>
      <AnimatedSection><BlogSection /></AnimatedSection>
      <AnimatedSection><FAQ /></AnimatedSection>
      <AnimatedSection><CTA /></AnimatedSection>
      <AnimatedSection><ContactForm /></AnimatedSection>
      <Footer />
    </PageTransition>
  );
}

export default Home;

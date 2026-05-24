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
import Awards from "../components/Awards";
import InstagramSection from "../components/InstagramSection";
import TechSection from "../components/TechSection";
import ExperienceCenters from "../components/ExperienceCenters";
import TeamSection from "../components/TeamSection";
import BlogSection from "../components/BlogSection";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import PageTransition from "../components/PageTransition";

function Home() {
  return (
    <PageTransition>
      <Seo
        title="Home"
        description="Premium interior and modular furniture website with luxury UI, 3D feel, projects, and consultation flow."
      />

      <Navbar />
      <Hero />
      <VideoShowcase />
      <TrustedBrands />
      <Stats />
      <DesignProcess />
      <InteriorPackages />
      <HorizontalShowcase />
      <WhyChoose />
      <BeforeAfter />
      <Gallery />
      <DesignStyles />
      <Testimonials />
      <Awards />
      <InstagramSection />
      <TechSection />
      <ExperienceCenters />
      <TeamSection />
      <BlogSection />
      <FAQ />
      <CTA />
      <ContactForm />
      <Footer />
    </PageTransition>
  );
}

export default Home;
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import PageTransition from "../components/PageTransition";

function About() {
  return (
    <PageTransition>
      <Seo title="About" description="About Kriscel Interiors." />
      <Navbar />
      <section className="pt-32 section">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600" className="rounded-[32px] shadow-soft" alt="About" />
          <div>
            <h1 className="title">About Kriscel Interiors</h1>
            <p className="mt-8 text-lg leading-8 text-gray-600">
              We design premium modular homes that feel modern, functional, and luxurious. Our process combines consulting, 3D planning, and expert execution.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </PageTransition>
  );
}

export default About;

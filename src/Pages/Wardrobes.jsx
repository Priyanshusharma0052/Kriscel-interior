import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import PageTransition from "../components/PageTransition";
import Gallery from "../components/Gallery";

function Wardrobes() {

  return (
    <PageTransition>

      <Seo
        title="Wardrobes"
        description="Luxury wardrobe designs."
      />

      <Navbar />

      <section className="pt-32 section">

        <h1 className="title">
          Luxury Wardrobe Designs
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-3xl leading-9">

          Explore premium sliding wardrobes, walk-in closets,
          and modern storage solutions designed for elegant living.

        </p>
        <img
  src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600"
  className="mt-12 rounded-[40px] shadow-2xl w-full h-[600px] object-cover"
/>

      </section>

      <Gallery />

      <Footer />

    </PageTransition>
  );
}

export default Wardrobes;
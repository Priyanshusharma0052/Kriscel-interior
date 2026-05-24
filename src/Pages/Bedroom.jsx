import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import PageTransition from "../components/PageTransition";
import Gallery from "../components/Gallery";

function Bedroom() {

  return (
    <PageTransition>

      <Seo
        title="Bedroom"
        description="Luxury bedroom interiors."
      />

      <Navbar />

      <section className="pt-32 section">

        <h1 className="title">
          Luxury Bedroom Interiors
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-3xl leading-9">

          Discover elegant bedroom spaces designed with
          comfort, warmth, and premium aesthetics for modern lifestyles.

        </p>

      </section>

      <Gallery />

      <Footer />

    </PageTransition>
  );
}

export default Bedroom;
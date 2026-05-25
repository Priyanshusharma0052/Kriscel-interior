import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import PageTransition from "../components/PageTransition";
import Gallery from "../components/Gallery";

function Kitchen() {

  return (
    <PageTransition>

      <Seo
        title="Kitchen"
        description="Luxury modular kitchen designs."
      />

      <Navbar />

      <section className="pt-32 section">

        <h1 className="title">
          Modular Kitchen Designs
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-3xl leading-9">

          Elegant modular kitchens crafted for modern homes
          with premium finishes, smart storage, and luxurious aesthetics.

        </p>
        <img
  src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=1600"
  className="mt-12 rounded-[28px] md:rounded-[40px] shadow-2xl w-full h-[320px] sm:h-[440px] md:h-[600px] object-cover"
/>

      </section>

      <Gallery />

      <Footer />

    </PageTransition>
  );
}

export default Kitchen;

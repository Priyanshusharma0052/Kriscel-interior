import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import PageTransition from "../components/PageTransition";
import GalleryComponent from "../components/Gallery";

function Gallery() {

  return (
    <PageTransition>

      <Seo
        title="Gallery"
        description="Luxury interior project gallery."
      />

      <Navbar />

      <section className="pt-32 section text-center">

        <h1 className="title">
          Interior Gallery
        </h1>

        <p className="mt-6 text-xl text-gray-600">

          Explore our premium interior transformations and luxury spaces.

        </p>

      </section>

      <GalleryComponent />

      <Footer />

    </PageTransition>
  );
}

export default Gallery;
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import PageTransition from "../components/PageTransition";
import Gallery from "../components/Gallery";

function LivingRoom() {

  return (
    <PageTransition>

      <Seo
        title="Living Room"
        description="Modern luxury living room interiors."
      />

      <Navbar />

      <section className="pt-32 section">

        <h1 className="title">
          Living Room Interiors
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-3xl leading-9">

          Sophisticated living room interiors crafted with
          premium furniture, layered lighting, and elegant finishes.

        </p>

      </section>

      <Gallery />

      <Footer />

    </PageTransition>
  );
}

export default LivingRoom;
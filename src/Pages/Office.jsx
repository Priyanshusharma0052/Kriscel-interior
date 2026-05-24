import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import PageTransition from "../components/PageTransition";
import Gallery from "../components/Gallery";

function Office() {

  return (
    <PageTransition>

      <Seo
        title="Office"
        description="Modern office interior designs."
      />

      <Navbar />

      <section className="pt-32 section">

        <h1 className="title">
          Modern Office Interiors
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-3xl leading-9">

          Premium office interiors designed for productivity,
          comfort, collaboration, and modern workspaces.

        </p>

      </section>

      <Gallery />

      <Footer />

    </PageTransition>
  );
}

export default Office;
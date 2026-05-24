
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import PageTransition from "../components/PageTransition";
import ContactForm from "../components/ContactForm";

function Contact() {

  return (
    <PageTransition>

      <Seo
        title="Contact"
        description="Contact Kriscel Interiors."
      />

      <Navbar />

      <section className="pt-32 section text-center">

        <h1 className="title">
          Contact Us
        </h1>

        <p className="mt-6 text-xl text-gray-600">

          Let’s design your dream home together.

        </p>

      </section>

      <ContactForm />

      <Footer />

    </PageTransition>
  );
}

export default Contact;
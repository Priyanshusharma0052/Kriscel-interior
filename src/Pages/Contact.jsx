
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import PageTransition from "../components/PageTransition";
import ContactForm from "../components/ContactForm";

function Contact() {
  useEffect(() => {
    if (window.location.hash === "#consultation") {
      window.setTimeout(() => {
        document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  }, []);

  return (
    <PageTransition>

      <Seo
        title="Contact"
        description="Contact Kriscel Interiors."
      />

      <Navbar />

      <section className="pt-32 section text-center">

        <h1 className="title">
          Free Interior Consultation
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-gray-600">
          Share your home details, budget, and design goals. Our team will help you understand the right layout, material direction, timeline, and next steps before you begin.
        </p>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {[
            {
              title: "Design Direction",
              text: "Get clarity on style, room planning, storage priorities, and finish palettes.",
            },
            {
              title: "Budget Guidance",
              text: "Understand realistic package ranges, upgrade choices, and where to invest first.",
            },
            {
              title: "Execution Plan",
              text: "Discuss measurements, timelines, factory work, site installation, and handover flow.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[28px] bg-white p-7 text-left shadow-soft">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="mt-4 leading-7 text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactForm />

      <Footer />

    </PageTransition>
  );
}

export default Contact;

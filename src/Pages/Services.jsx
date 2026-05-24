import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import PageTransition from "../components/PageTransition";
import { services } from "../data/siteData";

function Services() {
  return (
    <PageTransition>
      <Seo title="Services" description="Interior and modular furniture services." />
      <Navbar />
      <section className="pt-32 section">
        <h1 className="title">Our Services</h1>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((item) => (
            <div key={item} className="bg-white p-8 rounded-[28px] shadow-soft card-3d">
              <h2 className="text-3xl font-bold">{item}</h2>
              <p className="mt-4 text-gray-600 leading-7">
                Premium design, material planning, and execution for modern homes.
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </PageTransition>
  );
}

export default Services;
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import PageTransition from "../components/PageTransition";
import ContactForm from "../components/ContactForm";
import OptionDetails from "../components/OptionDetails";
import { cityOptions } from "../data/siteData";

function CityPage() {
  const { slug } = useParams();
  const item = cityOptions.find((city) => city.slug === slug);

  if (!item) return <Link to="/" />;

  return (
    <PageTransition>
      <Seo title={`Interiors in ${item.title}`} description={item.description} />
      <Navbar />

      <section className="pt-32 section">
        <h1 className="title">{item.title} Interior Services</h1>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl leading-9">{item.description}</p>
        <img src={item.image} alt={item.title} className="mt-12 rounded-[28px] md:rounded-[40px] shadow-2xl w-full h-[320px] sm:h-[440px] md:h-[600px] object-cover" />
      </section>

      <OptionDetails item={item} category="city" />
      <ContactForm />
      <Footer />
    </PageTransition>
  );
}

export default CityPage;

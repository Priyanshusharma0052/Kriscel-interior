import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import PageTransition from "../components/PageTransition";
import { designStyles } from "../data/siteData";

function StylePage() {
  const { slug } = useParams();
  const item = designStyles.find((s) => s.slug === slug);

  if (!item) return <Link to="/" />;

  return (
    <PageTransition>
      <Seo title={item.title} description={item.text} />
      <Navbar />
      <section className="pt-32 section">
        <h1 className="title">{item.title}</h1>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl">{item.text}</p>
        <img src={item.image} alt={item.title} className="mt-10 rounded-[32px] shadow-soft w-full max-h-[620px] object-cover" />
      </section>
      <Footer />
    </PageTransition>
  );
}

export default StylePage;
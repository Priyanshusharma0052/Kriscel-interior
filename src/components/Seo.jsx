import { Helmet } from "react-helmet-async";

function Seo({ title, description }) {
  return (
    <Helmet>
      <title>{title ? `${title} | Kriscel Interiors` : "Kriscel Interiors"}</title>
      <meta name="description" content={description || "Luxury interior and modular furniture website."} />
    </Helmet>
  );
}

export default Seo;

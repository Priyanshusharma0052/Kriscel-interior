import { designStyles } from "../data/siteData";
import { Link } from "react-router-dom";

function DesignStyles() {
  return (
    <section className="section">
      <h2 className="title mb-12">Explore Design Styles</h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
        {designStyles.map((s) => (
          <Link key={s.slug} to={`/styles/${s.slug}`} className="relative overflow-hidden rounded-[30px] h-[420px] card-3d block">
            <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/35"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-3xl font-bold">{s.title}</h3>
              <p className="mt-3 max-w-xs text-gray-200">{s.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default DesignStyles;

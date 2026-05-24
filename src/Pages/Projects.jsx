import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import PageTransition from "../components/PageTransition";
import { projects } from "../data/siteData";

const filters = ["All", "Full Home", "Villa", "Kitchen + Wardrobes", "Office + Bedroom"];

function Projects() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const list = useMemo(() => {
    return projects.filter((p) => {
      const matchesQuery =
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.style.toLowerCase().includes(query.toLowerCase()) ||
        p.room.toLowerCase().includes(query.toLowerCase());

      const matchesFilter = filter === "All" ? true : p.room === filter;
      return matchesQuery && matchesFilter;
    });
  }, [query, filter]);

  return (
    <PageTransition>
      <Seo title="Projects" description="Premium interior project portfolio with filters, budgets, and case studies." />
      <Navbar />

      <section className="pt-32 section">
        <h1 className="title">Our Projects</h1>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl">
          Browse our premium interior transformations, filters by room type, and explore detailed case studies.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-4">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects..."
            className="border p-4 rounded-2xl bg-white shadow-soft"
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border p-4 rounded-2xl bg-white shadow-soft"
          >
            {filters.map((f) => <option key={f}>{f}</option>)}
          </select>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {["Kitchen", "Wardrobe", "Luxury", "Minimal", "Scandinavian", "Modern"].map((chip) => (
            <button
              key={chip}
              onClick={() => setQuery(chip)}
              className="px-4 py-2 rounded-full bg-white shadow-soft hover:bg-black hover:text-white transition"
            >
              {chip}
            </button>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {list.map((p) => (
            <Link key={p.slug} to={`/projects/${p.slug}`} className="bg-white rounded-[28px] overflow-hidden shadow-soft card-3d">
              <img src={p.image} alt={p.title} className="h-[320px] w-full object-cover" />
              <div className="p-7">
                <p className="text-sm uppercase tracking-[3px] text-gray-500">{p.style}</p>
                <h3 className="mt-3 text-3xl font-bold">{p.title}</h3>
                <p className="mt-4 text-gray-600">{p.description}</p>

                <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
                  <span>{p.budget}</span>
                  <span>{p.timeline}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
}

export default Projects;
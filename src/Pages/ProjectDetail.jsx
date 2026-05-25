import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import PageTransition from "../components/PageTransition";
import { projects } from "../data/siteData";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <PageTransition>
        <Navbar />
        <section className="section pt-32">
          <h1 className="title">Project not found</h1>
          <Link to="/projects" className="inline-block mt-8 px-6 py-3 rounded-full bg-black text-white">
            Back to projects
          </Link>
        </section>
        <Footer />
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <Seo title={project.title} description={project.description} />
      <Navbar />

      <section className="pt-32 section">
        <Link to="/projects" className="text-primary font-semibold">← Back to Projects</Link>

        <div className="grid lg:grid-cols-2 gap-12 mt-8 items-start">
          <img src={project.image} alt={project.title} className="rounded-[32px] shadow-soft w-full object-cover" />

          <div>
            <p className="uppercase tracking-[4px] text-gray-500 text-sm">{project.style}</p>
            <h1 className="title mt-4">{project.title}</h1>
            <p className="mt-8 text-lg text-gray-600 leading-8">{project.description}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {project.facts.map((f) => (
                <div key={f} className="bg-white p-4 rounded-2xl shadow-soft text-center">{f}</div>
              ))}
            </div>

            <div className="mt-8 grid gap-4">
              <div className="bg-black text-white p-5 rounded-2xl">Budget: {project.budget}</div>
              <div className="bg-white p-5 rounded-2xl shadow-soft">Timeline: {project.timeline}</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
}

export default ProjectDetail;

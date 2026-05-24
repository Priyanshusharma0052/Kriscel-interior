import { team } from "../data/siteData";

function TeamSection() {
  return (
    <section className="section">
      <h2 className="title mb-12">Meet The Team</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {team.map((m) => (
          <div key={m.name} className="bg-white rounded-[30px] p-8 shadow-soft card-3d">
            <div className="h-64 rounded-[24px] bg-gradient-to-br from-primary/30 to-black/10"></div>
            <h3 className="mt-6 text-3xl font-bold">{m.name}</h3>
            <p className="mt-2 text-gray-600">{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;

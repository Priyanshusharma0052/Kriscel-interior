import { team } from "../data/siteData";

function TeamSection() {
  return (
    <section className="section bg-[#eef1ec]">
      <h2 className="title mb-12">Meet The Team</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {team.map((m) => (
          <div key={m.name} className="bg-white rounded-[30px] p-8 shadow-soft card-3d">
            <img
              src={m.image}
              alt={m.name}
              className="h-56 md:h-64 w-full rounded-[24px] object-cover"
            />
            <h3 className="mt-6 text-3xl font-bold">{m.name}</h3>
            <p className="mt-2 text-gray-600">{m.role}</p>
            <p className="mt-4 leading-7 text-gray-600">{m.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;

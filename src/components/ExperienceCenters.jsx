import { centers } from "../data/siteData";

function ExperienceCenters() {
  return (
    <section className="section bg-[#f3eee5]">
      <h2 className="title text-center mb-14">Experience Centers</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {centers.map((c) => (
          <div key={c.city} className="bg-light rounded-[30px] overflow-hidden shadow-soft card-3d">
            <img
              src={c.image}
              className="h-[220px] md:h-[260px] w-full object-cover"
              alt={c.city}
            />
            <div className="p-8">
              <h3 className="text-3xl font-bold">{c.city}</h3>
              <p className="mt-4 text-gray-600">{c.address}</p>
              <p className="mt-3 text-sm font-medium uppercase tracking-[3px] text-primary">{c.hours}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceCenters;

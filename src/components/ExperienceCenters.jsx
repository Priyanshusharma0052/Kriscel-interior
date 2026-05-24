import { centers } from "../data/siteData";

function ExperienceCenters() {
  return (
    <section className="section bg-white">
      <h2 className="title text-center mb-14">Experience Centers</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {centers.map((c) => (
          <div key={c.city} className="bg-light rounded-[30px] overflow-hidden shadow-soft card-3d">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200"
              className="h-[260px] w-full object-cover"
              alt={c.city}
            />
            <div className="p-8">
              <h3 className="text-3xl font-bold">{c.city}</h3>
              <p className="mt-4 text-gray-600">{c.address}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceCenters;
import { stats } from "../data/siteData";

function Stats() {
  return (
    <section className="section bg-black text-white" data-aos="fade-up">
      <div className="grid md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <h2 className="text-5xl md:text-6xl font-bold text-primary">{s.value}</h2>
            <p className="mt-4 text-gray-300">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
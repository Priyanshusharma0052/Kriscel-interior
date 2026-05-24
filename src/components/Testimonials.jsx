import { testimonials } from "../data/siteData";

function Testimonials() {
  return (
    <section className="section bg-white">
      <h2 className="title mb-12">What Clients Say</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-light p-8 rounded-[30px] shadow-soft card-3d">
            <p className="text-lg leading-8">“{t.text}”</p>
            <h3 className="mt-6 font-bold text-xl">{t.name}</h3>
            <p className="text-gray-500">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
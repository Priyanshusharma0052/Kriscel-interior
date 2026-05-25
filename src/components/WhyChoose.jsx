function WhyChoose() {
  const benefits = [
    {
      title: "Premium Materials",
      text: "Curated laminates, veneers, stone, hardware, and finishes chosen for durability.",
    },
    {
      title: "Modern Luxury Design",
      text: "Balanced palettes, proportioned furniture, and lighting that feels polished.",
    },
    {
      title: "End-to-End Execution",
      text: "Drawings, factory production, site work, installation, and final handover.",
    },
    {
      title: "3D Visualization",
      text: "Room views and material direction before execution begins.",
    },
    {
      title: "Transparent Budgeting",
      text: "Clear scope, upgrade options, and room-wise cost planning.",
    },
    {
      title: "Aftercare Support",
      text: "Post-handover service coordination for hardware and finishing concerns.",
    },
  ];

  return (
    <section className="section">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1600"
          className="rounded-[36px] shadow-soft"
          alt="Interior"
        />

        <div>
          <h2 className="title">Why Choose Kriscel Interiors</h2>
          <p className="mt-8 text-lg text-gray-600 leading-8">
            We combine premium materials, luxury design language, smart planning, and expert execution for a polished home transformation.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {benefits.map((x) => (
              <div key={x.title} className="bg-white shadow-soft p-5 rounded-2xl card-3d">
                <h3 className="font-bold text-lg">{x.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{x.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;

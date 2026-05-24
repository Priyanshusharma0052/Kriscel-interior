function TechSection() {
  return (
    <section className="section bg-black text-white">
      <h2 className="title mb-12">Design Tech & 3D Visualization</h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
        {["AI Room Planner", "3D Preview", "Smart Home UI", "Live Design Dashboard"].map((x) => (
          <div key={x} className="glass p-8 rounded-[28px] card-3d">
            <h3 className="text-2xl font-bold">{x}</h3>
            <p className="mt-4 text-gray-300 leading-7">A premium technology-first presentation that makes the site feel modern and high-end.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechSection;
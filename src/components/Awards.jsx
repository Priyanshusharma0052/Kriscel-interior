function Awards() {
  return (
    <section className="section bg-white">
      <h2 className="title text-center mb-14">Awards & Recognition</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {["Best Interior Studio", "Luxury Design Award", "Customer Choice Award"].map((item) => (
          <div key={item} className="bg-light p-10 rounded-[30px] shadow-soft text-center card-3d">
            <div className="text-6xl">🏆</div>
            <h3 className="mt-6 text-3xl font-bold">{item}</h3>
            <p className="mt-4 text-gray-600">Recognition for premium design and execution quality.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Awards;
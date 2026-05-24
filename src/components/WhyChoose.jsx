function WhyChoose() {
  return (
    <section className="section">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600"
          className="rounded-[36px] shadow-soft"
          alt="Interior"
        />

        <div>
          <h2 className="title">Why Choose Kriscel Interiors</h2>
          <p className="mt-8 text-lg text-gray-600 leading-8">
            We combine premium materials, luxury design language, smart planning, and expert execution for a polished home transformation.
          </p>

          <div className="mt-10 grid gap-5">
            {["Premium Materials", "Modern Luxury Design", "End-to-End Execution", "3D Visualization"].map((x) => (
              <div key={x} className="bg-white shadow-soft p-5 rounded-2xl card-3d">
                {x}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
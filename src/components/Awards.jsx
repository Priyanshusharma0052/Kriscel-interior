function Awards() {
  const awards = [
    { title: "Best Interior Studio", text: "Recognized for luxury residential design and execution quality." },
    { title: "Luxury Design Award", text: "Awarded for layered material palettes and premium room styling." },
    { title: "Customer Choice Award", text: "Appreciated for transparent updates and smooth project delivery." },
    { title: "Modular Innovation", text: "Recognized for practical kitchens, wardrobes, and storage solutions." },
    { title: "Design Excellence", text: "Featured for modern home transformations with refined detailing." },
    { title: "Quality Execution", text: "Awarded for site supervision, finish checks, and handover discipline." },
  ];

  return (
    <section className="section bg-white">
      <h2 className="title text-center mb-14">Awards & Recognition</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {awards.map((item) => (
          <div key={item.title} className="bg-light p-10 rounded-[30px] shadow-soft text-center card-3d">
            <div className="text-6xl">🏆</div>
            <h3 className="mt-6 text-3xl font-bold">{item.title}</h3>
            <p className="mt-4 text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Awards;

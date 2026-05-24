function InstagramSection() {
  return (
    <section className="section">
      <h2 className="title mb-12 text-center">Follow Our Instagram</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {[1, 2, 3, 4].map((i) => (
          <img
            key={i}
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200"
            className="rounded-[26px] h-[280px] w-full object-cover hover:scale-105 duration-500"
            alt="Instagram post"
          />
        ))}
      </div>
    </section>
  );
}

export default InstagramSection;
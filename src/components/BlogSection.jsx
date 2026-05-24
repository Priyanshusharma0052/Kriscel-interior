import { blogs } from "../data/siteData";

function BlogSection() {
  return (
    <section className="section">
      <h2 className="title mb-12">Interior Design Magazine</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((b) => (
          <div key={b.title} className="bg-white rounded-[30px] overflow-hidden shadow-soft card-3d">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200"
              alt={b.title}
              className="h-[260px] w-full object-cover"
            />
            <div className="p-8">
              <h3 className="text-3xl font-bold">{b.title}</h3>
              <p className="mt-5 text-gray-600 leading-8">{b.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;

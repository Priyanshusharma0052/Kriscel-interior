import Tilt from "react-parallax-tilt";
const items = [
  {
    title:"Living Room",
    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200"
  },

  {
    title:"Bedroom",
    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200"
  },

  {
    title:"Kitchen",
    image:"https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200"
  },

  {
    title:"Wardrobes",
    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200"
  },
];

function Categories() {
  return (
    <section className="section">

      <h2 className="title mb-14">
        Explore Categories
      </h2>

      <div className="grid md:grid-cols-4 gap-8">

        {items.map((item,index)=>(
          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl h-[420px]"
          >

            <img
              src={item.image}
              className="w-full h-full object-cover group-hover:scale-110 duration-500"
            />

            <div className="absolute inset-0 bg-black/30"></div>

            <h3 className="absolute bottom-8 left-8 text-white text-3xl font-bold"data-aos="fade-up"
            >
              {item.title}
            </h3>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Categories;
const items = [
  {
    title:"Living Room",
    image:"https://images.unsplash.com/photo-1616593969747-4797dc75033e?q=80&w=1200"
  },

  {
    title:"Bedroom",
    image:"https://images.unsplash.com/photo-1616593969747-4797dc75033e?q=80&w=1200"
  },

  {
    title:"Kitchen",
    image:"https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200"
  },

  {
    title:"Wardrobes",
    image:"https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1200"
  },
];

function Categories() {
  return (
    <section className="section">

      <h2 className="title mb-10 md:mb-14">
        Explore Categories
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4 md:gap-8">

        {items.map((item,index)=>(
          <div
            key={index}
            className="group relative h-[260px] overflow-hidden rounded-2xl sm:h-[320px] sm:rounded-3xl md:h-[420px]"
          >

            <img
              src={item.image}
              className="w-full h-full object-cover group-hover:scale-110 duration-500"
            />

            <div className="absolute inset-0 bg-black/30"></div>

            <h3 className="absolute bottom-5 left-5 text-2xl font-bold text-white sm:bottom-8 sm:left-8 sm:text-3xl"data-aos="fade-up"
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

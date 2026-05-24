const images = [

  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",

  "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200",

  "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200",

  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200",

  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",

  "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200"

];

function Gallery() {

  return (
    <section className="section">

      <h2 className="title mb-14">
        Project Gallery
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {images.map((img,index)=>(
          <img
            key={index}
            src={img}
            className="rounded-[30px] h-[400px] w-full object-cover hover:scale-105 duration-500"
          />
        ))}

      </div>

    </section>
  );
}

export default Gallery;
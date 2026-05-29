import { useEffect, useState } from "react";

const images = [

  "https://images.unsplash.com/photo-1616593969747-4797dc75033e?q=80&w=1200",
  "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=1200",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200",
  "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1200",
  "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=1200",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200",
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1200",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200",

];

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const activeImage = activeIndex === null ? null : images[activeIndex];

  useEffect(() => {
    if (activeIndex === null) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <section className="section bg-[#f8f1e7]">

      <h2 className="title mb-14">
        Project Gallery
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {images.map((img,index)=>(
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group overflow-hidden rounded-[30px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4"
            aria-label={`Open gallery image ${index + 1}`}
          >
            <img
              src={img}
              alt={`Interior gallery ${index + 1}`}
              className="h-[260px] w-full object-cover duration-500 group-hover:scale-105 sm:h-[340px] md:h-[400px]"
            />
          </button>
        ))}

      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          onClick={() => setActiveIndex(null)}
        >
          <img
            src={activeImage}
            alt={`Expanded interior gallery ${activeIndex + 1}`}
            className="max-h-[82vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

    </section>
  );
}

export default Gallery;

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projectImages = [
  "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=1200",
  "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=1200",
  "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1200",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200",
];

function Slider() {

  return (
    <section className="section bg-white">

      <h2 className="title mb-10">
        Our Projects
      </h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
      >

        {projectImages.map((image, index) => (
          <SwiperSlide key={index}>

            <div className="rounded-3xl overflow-hidden shadow-xl">

              <img
                src={image}
                className="h-[300px] sm:h-[400px] md:h-[500px] w-full object-cover"
              />

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  );
}

export default Slider;

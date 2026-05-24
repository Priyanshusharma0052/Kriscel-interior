import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

        {[1,2,3,4].map((item) => (
          <SwiperSlide key={item}>

            <div className="rounded-3xl overflow-hidden shadow-xl">

              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200"
                className="h-[500px] w-full object-cover"
              />

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  );
}

export default Slider;
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { projects } from "../data/siteData";

import "swiper/css";

function HorizontalShowcase() {
  return (
    <section className="section overflow-hidden bg-white">
      <h2 className="title mb-10">Scrolling Project Story</h2>

      <Swiper
        modules={[Autoplay]}
        loop={projects.length > 1}
        speed={650}
        autoplay={{
          delay: 1400,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        spaceBetween={24}
        slidesPerView={1}
      >
        {projects.map((p) => (
          <SwiperSlide key={p.slug}>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <img src={p.image} alt={p.title} className="h-[300px] w-full rounded-[28px] object-cover sm:h-[360px] md:h-[520px] md:rounded-[36px]" />
              <div>
                <p className="uppercase tracking-[4px] text-gray-500 text-sm">{p.room}</p>
                <h3 className="mt-3 text-3xl font-bold md:text-4xl">{p.title}</h3>
                <p className="mt-6 text-gray-600 leading-8">{p.description}</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-light p-4">
                    <p className="text-sm uppercase tracking-[3px] text-gray-500">Budget</p>
                    <p className="mt-2 text-2xl font-bold">{p.budget}</p>
                  </div>
                  <div className="rounded-2xl bg-light p-4">
                    <p className="text-sm uppercase tracking-[3px] text-gray-500">Timeline</p>
                    <p className="mt-2 text-2xl font-bold">{p.timeline}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {p.facts.map((fact) => (
                    <span key={fact} className="rounded-full bg-primary/15 px-4 py-2 text-sm font-medium text-black/75">
                      {fact}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HorizontalShowcase;

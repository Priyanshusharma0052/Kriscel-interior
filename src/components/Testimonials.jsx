import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { testimonials } from "../data/siteData";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";

function Testimonials() {
  return (
    <section className="section bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="title mb-12"
      >
        What Clients Say
      </motion.h2>

      <Swiper
        modules={[Autoplay, EffectFade]}
        className="mx-auto max-w-3xl [&_.swiper-wrapper]:items-stretch [&_.swiper-slide]:h-auto"
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={testimonials.length > 1}
        allowTouchMove
        grabCursor
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={1}
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.name} className="h-auto">
            <div className="premium-card bg-light p-6 md:p-8 rounded-[30px] shadow-soft card-3d flex min-h-[220px] h-full flex-col justify-between">
              <p className="text-xl leading-9 md:text-3xl md:leading-[3rem]">“{t.text}”</p>
              <div className="mt-6">
                <h3 className="font-bold text-xl md:text-3xl">{t.name}</h3>
                <p className="text-base md:text-xl text-gray-500">{t.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;

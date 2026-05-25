import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import walkthroughVideo from "../videos/12684285_1920_1080_60fps.mp4";

function VideoShowcase() {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current?.play().catch(() => {});
  };

  useEffect(() => {
    playVideo();
  }, []);

  return (
    <section className="section bg-[#F8F5F2] text-black">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="uppercase tracking-[4px] text-primary text-sm font-semibold">Walkthrough</p>
          <h2 className="title mt-4">See the space before you step in.</h2>
          <p className="mt-6 text-black/65 leading-8">
            Add cinematic walkthrough videos, 3D design previews, and transformation clips for stronger trust and higher conversions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 36 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="premium-card luxury-glow float-slow rounded-[36px] overflow-hidden shadow-soft ring-1 ring-black/5"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onCanPlay={playVideo}
            className="w-full h-[300px] sm:h-[360px] md:h-[420px] object-cover"
          >
            <source src={walkthroughVideo} type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </section>
  );
}

export default VideoShowcase;

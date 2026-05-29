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
    <section className="section bg-[#f6efe6] text-dark">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="uppercase tracking-[4px] text-primary text-sm font-semibold">Walkthrough</p>
          <h2 className="title mt-4">See the space before you step in.</h2>
          <p className="mt-6 text-dark/65 leading-8">
            Cinematic walkthroughs, 3D design previews, and transformation clips help clients feel the room, materials, and lighting before execution begins.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 36 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="premium-card luxury-glow float-slow overflow-hidden rounded-[28px] shadow-soft ring-1 ring-primary/20 md:rounded-[36px]"
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

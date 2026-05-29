function BeforeAfter() {
  const beforeRoomImage = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1800";
  const afterRoomImage = "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=1800";

  return (
    <section className="section bg-[#eaf0f2]">
      <h2 className="title mb-10">Before & After</h2>

      <div className="mx-auto max-w-6xl overflow-hidden rounded-[36px] shadow-soft">
        <div className="relative grid min-h-[340px] grid-cols-2 sm:min-h-[460px] md:min-h-[620px]">
          <div className="relative overflow-hidden">
            <img
              src={beforeRoomImage}
              alt="Room before construction completion"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute left-4 top-4 z-10 rounded-full bg-black/70 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-white">
              Before
            </div>
          </div>

          <div className="relative overflow-hidden">
            <img
              src={afterRoomImage}
              alt="Room after construction completion with interior"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute right-4 top-4 z-10 rounded-full bg-primary/90 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-black">
              After
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-1/2 z-20 w-[2px] -translate-x-1/2 bg-white/90"></div>
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-black/25 text-white backdrop-blur">
            <span className="text-lg leading-none">↔</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeforeAfter;

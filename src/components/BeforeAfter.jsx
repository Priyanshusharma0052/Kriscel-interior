import ReactCompareImage from "react-compare-image";

function BeforeAfter() {
  const roomImage = "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=1800";

  return (
    <section className="section bg-white">
      <h2 className="title mb-10">Before & After</h2>

      <div className="relative max-w-6xl mx-auto rounded-[36px] overflow-hidden shadow-soft">
        <div className="pointer-events-none absolute left-4 top-4 z-10 rounded-full bg-black/65 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-white">
          Before
        </div>
        <div className="pointer-events-none absolute right-4 top-4 z-10 rounded-full bg-primary/90 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-black">
          After
        </div>
        <ReactCompareImage
          leftImage={roomImage}
          rightImage={roomImage}
          leftImageCss={{
            filter: "sepia(42%) saturate(58%) contrast(88%) brightness(78%)",
          }}
          rightImageCss={{
            filter: "saturate(112%) contrast(104%) brightness(100%)",
          }}
        />
      </div>
    </section>
  );
}

export default BeforeAfter;

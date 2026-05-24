import ReactCompareImage from "react-compare-image";

function BeforeAfter() {
  return (
    <section className="section bg-white">
      <h2 className="title mb-10">Before & After</h2>

      <div className="max-w-6xl mx-auto rounded-[36px] overflow-hidden shadow-soft">
        <ReactCompareImage
           leftImage="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600"

           rightImage="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600"
        />
      </div>
    </section>
  );
}

export default BeforeAfter;
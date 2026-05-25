import { useState } from "react";

function CostCalculator() {

  const [area,setArea] = useState(1000);

  const total = area * 1800;

  return (
    <section className="section bg-black text-white">

      <h2 className="title mb-10 text-center md:mb-20">
        Interior Cost Calculator
      </h2>

      <div className="glass mx-auto max-w-4xl rounded-2xl p-5 sm:p-8 md:rounded-3xl md:p-10">

        <input
          type="range"
          min="500"
          max="5000"
          value={area}
          onChange={(e)=>setArea(e.target.value)}
          className="w-full"
        />

        <div className="mt-8 text-center md:mt-10">

          <h3 className="text-xl sm:text-3xl">
            Area: {area} sq.ft
          </h3>

          <h2 className="mt-6 text-4xl font-bold text-primary sm:text-6xl md:mt-8">
            ₹ {total}
          </h2>

        </div>

      </div>

    </section>
  );
}

export default CostCalculator;

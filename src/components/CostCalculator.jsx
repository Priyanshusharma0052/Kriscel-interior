import { useState } from "react";

function CostCalculator() {

  const [area,setArea] = useState(1000);

  const total = area * 1800;

  return (
    <section className="section bg-black text-white">

      <h2 className="title text-center mb-20">
        Interior Cost Calculator
      </h2>

      <div className="max-w-4xl mx-auto glass p-10 rounded-3xl">

        <input
          type="range"
          min="500"
          max="5000"
          value={area}
          onChange={(e)=>setArea(e.target.value)}
          className="w-full"
        />

        <div className="mt-10 text-center">

          <h3 className="text-3xl">
            Area: {area} sq.ft
          </h3>

          <h2 className="text-6xl font-bold mt-8 text-primary">
            ₹ {total}
          </h2>

        </div>

      </div>

    </section>
  );
}

export default CostCalculator;
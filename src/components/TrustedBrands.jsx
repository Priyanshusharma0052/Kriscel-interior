import { trustedBrands } from "../data/siteData";

function TrustedBrands() {
  return (
    <section className="section bg-white">
      <p className="text-center text-gray-500 uppercase tracking-[5px] text-sm">
        Trusted By Premium Brands
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-14 items-center opacity-70">
        {trustedBrands.map((brand) => (
          <div key={brand} className="text-center text-2xl font-bold">
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustedBrands;
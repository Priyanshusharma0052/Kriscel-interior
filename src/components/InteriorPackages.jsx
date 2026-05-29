import { packages } from "../data/siteData";

function InteriorPackages() {
  return (
    <section className="section bg-[#f7f0e8] text-black">
      <h2 className="title mb-10 text-center md:mb-16">Interior Packages</h2>

      <div className="grid gap-5 md:grid-cols-3 md:gap-8">
        {packages.map((pkg, idx) => (
          <div
            key={pkg.name}
            className={`rounded-2xl bg-white p-5 shadow-soft ring-1 sm:p-8 md:rounded-3xl ${
              idx === 1 ? "ring-primary border border-primary" : "ring-black/5"
            }`}
          >
            <h3 className="text-2xl font-bold text-black sm:text-3xl">{pkg.name}</h3>
            <p className="mt-4 text-black/60 leading-7">{pkg.text}</p>
            <h2 className="mt-6 text-4xl font-bold text-primary sm:mt-8 sm:text-6xl">{pkg.price}</h2>
            <ul className="mt-6 grid gap-3 text-black/65 sm:mt-8 sm:gap-4">
              {pkg.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InteriorPackages;

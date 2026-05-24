import { packages } from "../data/siteData";

function InteriorPackages() {
  return (
    <section className="section bg-black text-white">
      <h2 className="title text-center mb-16">Interior Packages</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((pkg, idx) => (
          <div
            key={pkg.name}
            className={`glass p-8 rounded-3xl ${idx === 1 ? "border border-primary" : ""}`}
          >
            <h3 className="text-3xl font-bold">{pkg.name}</h3>
            <h2 className="text-6xl font-bold mt-8 text-primary">{pkg.price}</h2>
            <ul className="mt-8 grid gap-4 text-gray-300">
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
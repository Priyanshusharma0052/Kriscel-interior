import { processSteps } from "../data/siteData";

function DesignProcess() {
  return (
    <section className="section">
      <h2 className="title mb-16 text-center">Our Design Process</h2>

      <div className="grid md:grid-cols-5 gap-6">
        {processSteps.map((step, index) => (
          <div key={step.title} className="card-3d bg-white p-8 rounded-3xl shadow-soft text-center">
            <div className="text-5xl font-bold text-primary">0{index + 1}</div>
            <h3 className="mt-5 text-2xl font-bold">{step.title}</h3>
            <p className="mt-4 text-gray-600 leading-7">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DesignProcess;

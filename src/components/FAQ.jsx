import { faqs } from "../data/siteData";

function FAQ() {
  return (
    <section className="section bg-white">
      <h2 className="title mb-12">Frequently Asked Questions</h2>

      <div className="grid gap-5">
        {faqs.map((f) => (
          <details key={f.q} className="bg-light rounded-[24px] p-6 shadow-soft">
            <summary className="cursor-pointer text-2xl font-semibold">{f.q}</summary>
            <p className="mt-4 text-gray-600 leading-8">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
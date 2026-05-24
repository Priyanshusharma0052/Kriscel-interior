import { useState } from "react";

function ContactForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    homeType: "",
    budget: "",
    requirement: "",
  });

  const next = () => setStep((s) => Math.min(3, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  return (
    <section className="section bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="title mb-10">Book Free Consultation</h2>

        <div className="mb-8 flex gap-3">
          {[1,2,3].map((n) => (
            <div key={n} className={`h-2 flex-1 rounded-full ${step >= n ? "bg-primary" : "bg-gray-200"}`}></div>
          ))}
        </div>

        <form
          className="grid gap-5"
          onSubmit={(e) => e.preventDefault()}
        >
          {step === 1 && (
            <>
              <input className="border p-4 rounded-2xl" placeholder="Your Name" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} />
              <input className="border p-4 rounded-2xl" placeholder="Email Address" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} />
              <input className="border p-4 rounded-2xl" placeholder="Phone Number" value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} />
            </>
          )}

          {step === 2 && (
            <>
              <input className="border p-4 rounded-2xl" placeholder="City" value={form.city} onChange={(e)=>setForm({...form,city:e.target.value})} />
              <select className="border p-4 rounded-2xl" value={form.homeType} onChange={(e)=>setForm({...form,homeType:e.target.value})}>
                <option value="">Select Home Type</option>
                <option>1BHK</option>
                <option>2BHK</option>
                <option>3BHK</option>
                <option>Villa</option>
              </select>
              <select className="border p-4 rounded-2xl" value={form.budget} onChange={(e)=>setForm({...form,budget:e.target.value})}>
                <option value="">Select Budget</option>
                <option>₹3L - ₹5L</option>
                <option>₹5L - ₹10L</option>
                <option>₹10L - ₹20L</option>
                <option>₹20L+</option>
              </select>
            </>
          )}

          {step === 3 && (
            <textarea
              placeholder="Tell us about your project"
              className="border p-4 rounded-2xl h-40"
              value={form.requirement}
              onChange={(e)=>setForm({...form,requirement:e.target.value})}
            />
          )}

          <div className="flex gap-4">
            {step > 1 && <button type="button" onClick={prev} className="px-6 py-3 rounded-full border">Back</button>}
            {step < 3 ? (
              <button type="button" onClick={next} className="px-6 py-3 rounded-full bg-black text-white">Next</button>
            ) : (
              <button type="submit" className="px-6 py-3 rounded-full bg-primary font-semibold">Submit Inquiry</button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
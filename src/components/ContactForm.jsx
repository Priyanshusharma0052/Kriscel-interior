import { useState } from "react";
import { motion } from "framer-motion";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    homeType: "",
    requirement: "",
  });

  const fieldClass = "min-h-[58px] rounded-2xl border border-black/10 bg-white p-5 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

  const submitInquiry = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="consultation" className="section scroll-mt-28 bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.25fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold uppercase tracking-[4px] text-primary">Book Consultation</p>
          <h2 className="title mt-4 mb-8">Tell Us About Your Home</h2>
          <p className="text-lg leading-8 text-gray-600">
            The consultation helps us understand your space, lifestyle, and budget before we suggest a design path. You can use it for a full home, single room, kitchen, wardrobe, or renovation plan.
          </p>
          <div className="mt-8 grid gap-4">
            {[
              "Free first discussion with a design specialist",
              "Room-wise requirement and storage review",
              "Material, finish, and budget recommendations",
              "Clear next step for site measurement or design proposal",
            ].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.58, ease: "easeOut" }}
                className="premium-card rounded-2xl bg-light p-5 font-semibold shadow-soft"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.92, ease: [0.16, 1, 0.3, 1] }}
          className="premium-card rounded-[28px] bg-light p-5 shadow-soft sm:p-7 md:rounded-[34px] md:p-10 lg:p-12"
        >
          {submitted ? (
            <div className="flex min-h-[300px] flex-col justify-center md:min-h-[420px]">
              <p className="text-sm font-semibold uppercase tracking-[4px] text-primary">Request Received</p>
              <h3 className="mt-4 text-4xl font-bold">Thank you, {form.name || "there"}.</h3>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                Your consultation inquiry has been captured. Our design team will review your requirements and contact you shortly with the next steps.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setForm({
                    name: "",
                    email: "",
                    phone: "",
                    city: "",
                    address: "",
                    requirement: "",
                  });
                }}
                className="mt-8 w-fit rounded-full bg-black px-6 py-3 text-white"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <>
              <h3 className="mb-6 text-3xl font-bold md:text-4xl">Book Free Consultation</h3>

              <form
                className="grid gap-5"
                onSubmit={submitInquiry}
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <input className={fieldClass} placeholder="Your Name" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} />
                  <input className={fieldClass} placeholder="Phone Number" value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} />
                  <input className={fieldClass} placeholder="Email Address" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} />
                  <input className={fieldClass} placeholder="City" value={form.city} onChange={(e)=>setForm({...form,city:e.target.value})} />
                  <input className={`${fieldClass} md:col-span-2`} placeholder="Full Address" value={form.address} onChange={(e)=>setForm({...form,address:e.target.value})} />
                  <textarea
                    placeholder="Tell us about your project, rooms, preferred style, timeline, and must-have storage."
                    className={`${fieldClass} h-44 resize-none md:col-span-2`}
                    value={form.requirement}
                    onChange={(e)=>setForm({...form,requirement:e.target.value})}
                  />
                </div>

                <div>
                  <button type="submit" className="pulse-border rounded-full bg-primary px-8 py-4 font-semibold">Submit Inquiry</button>
                </div>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default ContactForm;

import MagneticButton from "./MagneticButton";

function CTA() {
  return (
    <section className="section bg-black text-white text-center">
      <h2 className="text-5xl md:text-7xl font-bold leading-tight">
        Ready To Transform
        <br />
        Your Dream Home?
      </h2>
      <p className="mt-8 text-xl text-gray-300">Book a free consultation with our expert designers.</p>
      <MagneticButton className="mt-10 bg-primary text-black px-10 py-5 rounded-full text-xl font-semibold">
        Book Consultation
      </MagneticButton>
    </section>
  );
}

export default CTA;
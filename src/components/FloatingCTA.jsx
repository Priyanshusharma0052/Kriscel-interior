function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        className="bg-green-500 text-white px-5 py-3 rounded-full shadow-soft"
      >
        WhatsApp
      </a>
      <a
        href="/contact"
        className="bg-black text-white px-5 py-3 rounded-full shadow-soft text-center"
      >
        Get Quote
      </a>
    </div>
  );
}

export default FloatingCTA;
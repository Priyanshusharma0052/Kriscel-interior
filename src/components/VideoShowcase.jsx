function VideoShowcase() {
  return (
    <section className="section bg-black text-white">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase tracking-[4px] text-primary text-sm">Walkthrough</p>
          <h2 className="title mt-4">See the space before you step in.</h2>
          <p className="mt-6 text-gray-300 leading-8">
            Add cinematic walkthrough videos, 3D design previews, and transformation clips for stronger trust and higher conversions.
          </p>
        </div>

        <div className="rounded-[36px] overflow-hidden shadow-soft">
          <video autoPlay muted loop playsInline className="w-full h-[420px] object-cover">
            <source src="https://cdn.coverr.co/videos/coverr-wooden-home-interior-1561501033390?download=1080p" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

export default VideoShowcase;
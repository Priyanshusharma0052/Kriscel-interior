function InstagramSection() {
  const instagramImages = [
    "https://images.unsplash.com/photo-1616593969747-4797dc75033e?q=80&w=1200",
    "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=1200",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200",
    "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1200",
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1200",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200",
  ];

  const captions = [
    "Living Room",
    "Kitchen",
    "Workspace",
    "Classic Bedroom",
    "Compact Luxe",
    "Wardrobe Detail",
    "Soft Minimal",
    "Villa Lounge",
  ];

  return (
    <section className="section">
      <h2 className="title mb-12 text-center">Follow Our Instagram</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {instagramImages.map((img, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-[26px]"
          >
            <img
              src={img}
              className="h-[180px] sm:h-[240px] md:h-[280px] w-full object-cover duration-500 group-hover:scale-105"
              alt={captions[i]}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
              <p className="text-sm font-semibold uppercase tracking-[3px] text-white">{captions[i]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InstagramSection;

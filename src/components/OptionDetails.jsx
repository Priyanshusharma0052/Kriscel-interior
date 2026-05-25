const detailContent = {
  kitchen: {
    intro: "Every kitchen is planned around cooking flow, storage habits, appliance placement, and a finish palette that stays elegant with daily use.",
    points: [
      "Work-triangle and appliance zoning",
      "Tall units, drawers, pantry, and corner storage",
      "Countertop, backsplash, shutter, and hardware selection",
      "Lighting, ventilation, and easy-clean material planning",
    ],
    photos: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=900",
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=900",
    ],
  },
  wardrobe: {
    intro: "Wardrobes are designed around clothing volume, daily routines, room circulation, and finishes that sit naturally with the bedroom.",
    points: [
      "Hanging, drawer, shelf, and accessory zones",
      "Sliding, hinged, mirror, glass, and matte shutter options",
      "Loft storage, dresser integration, and lighting details",
      "Hardware planning for smooth long-term use",
    ],
    photos: [
      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=80&w=900",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=900",
    ],
  },
  style: {
    intro: "Each style direction is translated into a complete room language: colors, materials, furniture scale, lighting, and styling details.",
    points: [
      "Moodboard, palette, and finish direction",
      "Furniture proportions and layout planning",
      "Lighting layers for ambience and utility",
      "Decor, textile, and wall-treatment recommendations",
    ],
    photos: [
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=900",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=900",
    ],
  },
  city: {
    intro: "Our city teams coordinate design, measurement, production, installation, and handover with local site requirements in mind.",
    points: [
      "Apartment, villa, and renovation planning",
      "Local site coordination and measurement visits",
      "Room-wise budgeting and material selection",
      "Factory-made modules with supervised installation",
    ],
    photos: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=900",
      "https://images.unsplash.com/photo-1600607688066-890987f18a86?q=80&w=900",
    ],
  },
};

function OptionDetails({ item, category }) {
  const content = detailContent[category];
  const photos = [item.image, ...content.photos];

  return (
    <section className="section bg-white">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[4px] text-primary">Details</p>
          <h2 className="mt-4 font-serif text-4xl font-bold md:text-5xl">
            Designed for {item.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">{content.intro}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {content.points.map((point) => (
              <div key={point} className="rounded-2xl bg-light p-5 shadow-soft">
                <p className="font-semibold leading-7">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {photos.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              alt={`${item.title} detail ${index + 1}`}
              className={`h-56 md:h-64 w-full rounded-[28px] object-cover shadow-soft ${
                index === 0 ? "sm:col-span-2 sm:h-80" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OptionDetails;

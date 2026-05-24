const filters = [
  "All",
  "Kitchen",
  "Bedroom",
  "Living Room",
  "Office",
  "Luxury"
];

function PortfolioFilter() {

  return (
    <section className="section">

      <div className="flex flex-wrap gap-5 justify-center">

        {filters.map((item)=>(
          <button
            key={item}
            className="px-8 py-4 rounded-full bg-white shadow-lg hover:bg-black hover:text-white duration-300"
          >

            {item}

          </button>
        ))}

      </div>

    </section>
  );
}

export default PortfolioFilter;
import ServiceCard from "./ServiceCard";

const ServicesPreview = () => {
  return (
    <section className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              What We Do
            </p>

            <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-black md:text-5xl">
              Strategic support for ambitious businesses.
            </h2>
          </div>

          <a
            href="/services"
            className="text-sm font-medium text-black transition-opacity hover:opacity-60">
            View all services →
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <ServiceCard
            number="01"
            title="Growth Capital"
            description="Flexible capital designed to help promising companies expand, enter new markets, and pursue meaningful opportunities."
          />

          <ServiceCard
            number="02"
            title="Strategic Advisory"
            description="Practical guidance and industry insight to help founders make informed decisions and build stronger businesses."
          />

          <ServiceCard
            number="03"
            title="Partnerships"
            description="Long-term partnerships connecting companies with resources, networks, and opportunities for sustainable growth."
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;

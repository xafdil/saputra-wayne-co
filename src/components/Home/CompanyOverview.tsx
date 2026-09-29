const CompanyOverview = () => {
  return (
    <section className="border-t border-gray-200 bg-white px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Who We Are
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-black md:text-5xl">
            Capital with a long-term perspective.
          </h2>
        </div>

        <div className="space-y-6 text-gray-600">
          <p className="text-lg leading-8">
            Saputra-Wayne Co. is a capital venture company focused on supporting
            ambitious businesses and visionary founders.
          </p>

          <p className="leading-7">
            We combine strategic capital, industry expertise, and long-term
            partnerships to help companies build sustainable growth.
          </p>

          <a
            href="/about"
            className="inline-block border-b border-black pb-1 text-sm font-medium text-black transition-opacity hover:opacity-60">
            Learn more about us →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;

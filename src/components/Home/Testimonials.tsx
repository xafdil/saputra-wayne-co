import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Client Perspective
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-black md:text-5xl">
            Built on trust and long-term partnerships.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <TestimonialCard
            quote="Saputra-Wayne Co. gave us more than capital. Their strategic perspective helped us approach our next stage of growth with confidence."
            name="Daniel Carter"
            role="Founder & CEO"
            company="Northstar Labs"
          />

          <TestimonialCard
            quote="Their team understands that sustainable growth takes time. The partnership has been thoughtful, practical, and genuinely valuable."
            name="Michael Anderson"
            role="Managing Director"
            company="Atlas Group"
          />

          <TestimonialCard
            quote="From our first conversation, they focused on understanding our business before discussing investment. That approach made a real difference."
            name="Sarah Mitchell"
            role="Co-Founder"
            company="Vertex Collective"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

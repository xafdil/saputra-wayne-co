import banner from "../../assets/images/hero-banner3.jpg";

const ServicesHero = () => {
  const services = [
    {
      id: "01",
      title: "Growth Capital",
      description:
        "Strategic capital for companies entering their next stage of growth. We invest with a long-term perspective and partner closely with founders beyond funding.",
    },
    {
      id: "02",
      title: "Strategic Advisory",
      description:
        "Business strategy, fundraising preparation, operational scaling, and market positioning designed to help founders make better long-term decisions.",
    },
    {
      id: "03",
      title: "Partnership Network",
      description:
        "Access to experienced operators, investors, advisors, and strategic partners who can unlock meaningful opportunities across industries.",
    },
  ];

  const focusAreas = [
    {
      title: "Seed & Early Growth",
      description:
        "Supporting ambitious founders from the earliest stages through sustainable expansion.",
    },
    {
      title: "Technology & Digital Infrastructure",
      description:
        "Software, AI, enterprise tools, fintech, and digital platforms with scalable potential.",
    },
    {
      title: "Healthcare Innovation",
      description:
        "Businesses improving access, efficiency, and technology across healthcare ecosystems.",
    },
    {
      title: "Sustainability & Emerging Industries",
      description:
        "Companies creating long-term impact through sustainable technologies and future-focused industries.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description:
        "Understanding the founders, business model, vision, and long-term ambitions.",
    },
    {
      step: "02",
      title: "Evaluation",
      description:
        "Reviewing market opportunity, business fundamentals, and strategic alignment.",
    },
    {
      step: "03",
      title: "Partnership",
      description:
        "Structuring a partnership that combines investment, guidance, and long-term support.",
    },
    {
      step: "04",
      title: "Growth",
      description:
        "Working alongside founders through execution, scaling, and expansion.",
    },
  ];

  const testimonials = [
    {
      company: "Northstar Labs",
      quote:
        "Saputra-Wayne Co. brought strategic clarity during one of the most important stages of our company's growth.",
      person: "Daniel Carter · Founder & CEO",
    },
    {
      company: "Atlas Group",
      quote:
        "Their approach goes beyond capital. The partnership has been thoughtful, collaborative, and focused on sustainable outcomes.",
      person: "Michael Anderson · Managing Director",
    },
  ];

  return (
    <>
      <main className="bg-white text-black">
        {/* HERO */}
        <section className="relative min-h-[calc(100vh-80px)] overflow-hidden border-b border-gray-200">
          <img
            src={banner}
            alt="Saputra-Wayne Co. services"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />

          <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 sm:py-24 lg:px-8 lg:py-24">
            <div className="max-w-3xl text-white">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-300 sm:text-sm">
                Services
              </p>

              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                More than capital. A long-term strategic partnership.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-200 sm:mt-8 sm:text-lg sm:leading-8">
                Saputra-Wayne Co. works alongside founders through investment,
                strategic guidance, and partnerships designed to build enduring
                businesses.
              </p>
            </div>
          </div>
        </section>

        {/* CORE SERVICES */}
        <section className="border-b border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 md:py-24">
            <div className="mb-10 max-w-2xl sm:mb-16">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-500 sm:text-sm sm:tracking-[0.25em]">
                Core Services
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                How we support founders and growing companies.
              </h2>
            </div>

            <div className="space-y-5 sm:space-y-8">
              {services.map((service) => (
                <article
                  key={service.id}
                  className="rounded-2xl border border-gray-200 bg-white p-6 sm:rounded-3xl sm:p-8 md:p-10">
                  <div className="grid gap-5 md:grid-cols-12 md:gap-8">
                    <div className="md:col-span-2">
                      <p className="text-sm font-medium text-gray-400">
                        {service.id}
                      </p>
                    </div>

                    <div className="md:col-span-10">
                      <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                        {service.title}
                      </h3>

                      <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base sm:leading-8">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* INVESTMENT FOCUS */}
        <section className="border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 md:py-24">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-500 sm:text-sm sm:tracking-[0.25em]">
                Investment Focus
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                We invest where long-term value can be created.
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-600 sm:mt-6 sm:text-base sm:leading-8">
                We partner with founders building resilient companies across
                sectors where innovation, disciplined execution, and sustainable
                growth intersect.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:mt-12 md:mt-16 md:grid-cols-2">
              {focusAreas.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-200 p-6 sm:p-8">
                  <h3 className="text-xl font-semibold sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600 sm:mt-4 sm:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className="border-b border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 md:py-24">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-500 sm:text-sm sm:tracking-[0.25em]">
                How We Work
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                A collaborative investment process.
              </h2>
            </div>

            <div className="mt-10 grid gap-10 sm:mt-12 md:mt-16 md:grid-cols-4 md:gap-8">
              {process.map((item) => (
                <div key={item.step}>
                  <p className="text-sm font-medium text-gray-400">
                    {item.step}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold sm:mt-4">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-600 sm:mt-3 sm:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section>
          <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 md:py-24">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-500 sm:text-sm sm:tracking-[0.25em]">
                Client Testimonials
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Trusted by founders building enduring companies.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2">
              {testimonials.map((item) => (
                <article
                  key={item.company}
                  className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
                  <p className="text-base leading-7 text-gray-700 sm:text-lg sm:leading-8">
                    “{item.quote}”
                  </p>

                  <div className="mt-8 border-t border-gray-100 pt-5">
                    <p className="font-medium text-black">{item.company}</p>

                    <p className="mt-1 text-sm text-gray-500">{item.person}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServicesHero;

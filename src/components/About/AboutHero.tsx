import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/images/hero-banner2.jpg";
import { getTeamMembers } from "../../api/team";
import type { TeamMember } from "../../types/team";

const AboutHero = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    const loadTeam = async () => {
      try {
        const data = await getTeamMembers();
        setTeam(data);
      } catch (error) {
        console.error("Failed to load team:", error);
      }
    };

    loadTeam();
  }, []);

  const milestones = [
    {
      year: "2020",
      title: "Founded in Pekanbaru",
      description:
        "Saputra-Wayne Co. was established with a vision to become a long-term strategic investment partner for ambitious businesses.",
    },
    {
      year: "2022",
      title: "First Investment Portfolio",
      description:
        "Expanded into growth capital and advisory services, supporting companies across emerging industries.",
    },
    {
      year: "2024",
      title: "Strategic Partnership Expansion",
      description:
        "Built a wider network of founders, operators, and advisors to create long-term value beyond capital.",
    },
    {
      year: "2026",
      title: "Regional Venture Presence",
      description:
        "Supporting founders and businesses throughout Southeast Asia with a disciplined investment approach.",
    },
  ];

  const values = [
    {
      title: "Integrity",
      description:
        "We believe trust is built through transparency, accountability, and disciplined decision-making.",
    },
    {
      title: "Partnership",
      description:
        "We work alongside founders as long-term partners, not simply as investors.",
    },
    {
      title: "Long-Term Thinking",
      description:
        "Every investment is made with sustainable growth and enduring value in mind.",
    },
    {
      title: "Curiosity",
      description:
        "We continuously learn, adapt, and seek thoughtful opportunities in evolving markets.",
    },
  ];

  return (
    <main className="bg-white text-black">
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
        <img
          src={banner}
          alt="Saputra-Wayne Co. headquarters"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />

        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 sm:py-24 lg:px-8 lg:py-24">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-300 sm:text-sm">
              About Us
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Investing for long-term impact.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-200 sm:mt-8 sm:text-lg sm:leading-8">
              Saputra-Wayne Co. is a capital venture company committed to
              partnering with founders and businesses that create enduring value
              through innovation, discipline, and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* COMPANY HISTORY */}
      <section className="border-b border-gray-200">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:py-20 md:grid-cols-2 md:gap-12 md:py-24">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-500 sm:text-sm">
              Company History
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              A venture company built around long-term partnerships.
            </h2>
          </div>

          <div className="space-y-5 text-sm text-gray-600 sm:space-y-6 sm:text-base">
            <p className="leading-7 sm:leading-8">
              Founded in Pekanbaru, Saputra-Wayne Co. was created with a simple
              belief: meaningful businesses deserve patient capital and trusted
              partners.
            </p>

            <p className="leading-7 sm:leading-8">
              Rather than focusing solely on financial investment, we combine
              strategic guidance, operational insight, and long-term
              collaboration to help founders navigate growth with confidence.
            </p>

            <p className="leading-7 sm:leading-8">
              Today, Saputra-Wayne Co. partners with companies across emerging
              industries, supporting founders who are building resilient,
              future-focused organizations.
            </p>
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-500 sm:text-sm">
              Milestones
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Our journey through the years.
            </h2>
          </div>

          <div className="mt-12 space-y-10 border-l border-gray-300 pl-6 sm:mt-16 sm:space-y-12 sm:pl-8">
            {milestones.map((item) => (
              <div key={item.year} className="relative">
                <div className="absolute -left-7.5 top-1 h-3.5 w-3.5 rounded-full border-4 border-gray-50 bg-black sm:-left-10.25 sm:h-4 sm:w-4" />

                <p className="text-sm font-medium text-gray-500">{item.year}</p>

                <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 md:py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-500 sm:text-sm">
                Leadership
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Meet the people shaping Saputra-Wayne Co.
              </h2>
            </div>
            <Link
              to="/team"
              className="w-fit text-sm font-medium text-black transition-opacity hover:opacity-60">
              Meet our full team →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3">
            {team.slice(0, 3).map((member) => (
              <article
                key={member.id}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="h-16 w-16 rounded-full object-cover grayscale sm:h-20 sm:w-20"
                />

                <h3 className="mt-5 text-xl font-semibold sm:mt-6">
                  {member.name}
                </h3>

                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-gray-500 sm:text-sm">
                  {member.role}
                </p>

                <p className="mt-4 text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base">
                  {member.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY CULTURE */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-500 sm:text-sm">
              Company Culture
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Principles that guide every partnership.
            </h2>

            <p className="mt-6 text-sm leading-7 text-gray-600 sm:mt-8 sm:text-base sm:leading-8">
              We believe great companies are built by great people working with
              clarity, discipline, and mutual trust. Our culture encourages
              thoughtful decisions, continuous learning, and long-term
              relationships over short-term outcomes.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-16 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-gray-200 p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 sm:text-sm">
                  Value
                </p>

                <h3 className="mt-3 text-xl font-semibold sm:text-2xl">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutHero;

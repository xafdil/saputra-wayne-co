import type { TeamMember } from "../../types/team";
import banner from "../../assets/images/hero-banner4.jpg";

interface TeamHeroProps {
  team: TeamMember[];
  loading: boolean;
  error: string;
}

const TeamHero = ({ team, loading, error }: TeamHeroProps) => {
  return (
    <main className="bg-white text-black">
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden border-b border-gray-200">
        <img
          src={banner}
          alt="Saputra-Wayne Co. team"
          className="absolute inset-0 h-full w-full scale-x-[-1] object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />

        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 sm:py-24 lg:px-8 lg:py-24">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-300 sm:text-sm">
              Our Team
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              The people behind Saputra-Wayne Co.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-200 sm:mt-8 sm:text-lg sm:leading-8">
              We are investors, operators, strategists, and advisors working
              together to support founders through every stage of growth.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
                Leadership & Team
              </p>

              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                A diverse team with one shared vision.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-gray-500">
              Our team combines investment experience, operational expertise,
              and strategic insight to support long-term growth.
            </p>
          </div>

          {/* Loading */}
          {loading && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse rounded-3xl border border-gray-200 bg-white p-6">
                  <div className="h-20 w-20 rounded-full bg-gray-200" />

                  <div className="mt-6 h-5 rounded bg-gray-200" />

                  <div className="mt-3 h-4 w-2/3 rounded bg-gray-100" />

                  <div className="mt-6 space-y-2">
                    <div className="h-3 rounded bg-gray-100" />
                    <div className="h-3 rounded bg-gray-100" />
                    <div className="h-3 w-3/4 rounded bg-gray-100" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-600">
              {error}
            </div>
          )}

          {/* Team Cards */}
          {!loading && !error && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <article
                  key={member.id}
                  className="group rounded-3xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-24 w-24 rounded-full object-cover grayscale transition duration-300 group-hover:grayscale-0"
                  />

                  <h3 className="mt-6 text-xl font-semibold">{member.name}</h3>

                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gray-500">
                    {member.role}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-gray-600">
                    {member.bio}
                  </p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CULTURE PREVIEW */}
      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
                Our Culture
              </p>

              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Built on collaboration, integrity, and long-term thinking.
              </h2>
            </div>

            <div className="space-y-6 text-gray-600">
              <p className="leading-8">
                At Saputra-Wayne Co., we believe exceptional partnerships begin
                with exceptional people. We encourage curiosity, disciplined
                thinking, and open collaboration across every investment.
              </p>

              <p className="leading-8">
                Our team combines investment experience with operational
                expertise, allowing us to support founders beyond capital alone.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TeamHero;

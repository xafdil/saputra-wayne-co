import { Link } from "react-router-dom";
import banner from "../../assets/images/hero-banner1.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
      {/* Background Image */}
      <img
        src={banner}
        alt="Saputra-Wayne Co. headquarters"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Optional subtle gradient for readability */}
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-24 lg:px-8">
        <div className="max-w-3xl text-white">
          <p
            className="mb-6 text-lg font-medium uppercase tracking-[0.3em] text-gray-300"
            style={{ fontFamily: "The Seasons" }}>
            Saputra-Wayne Co.
          </p>

          <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            More than capital.
            <br />A true partner.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-200">
            Great companies are built, not funded. We invest early, stay close,
            and back founders through the decisions that actually matter.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/services"
              className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-gray-200">
              Explore Services
            </Link>

            <Link
              to="/about"
              className="rounded-lg border border-white/70 px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

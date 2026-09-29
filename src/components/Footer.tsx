import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-10">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <p
              className="text-2xl tracking-tight text-black"
              style={{ fontFamily: "The Seasons" }}>
              SAPUTRA-WAYNE Co.
            </p>

            <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-gray-500 sm:text-xs sm:tracking-[0.25em]">
              Capital Ventures
            </p>

            <p className="mt-6 max-w-md text-sm leading-7 text-gray-600">
              We invest in ambitious founders and enduring businesses through
              strategic capital, long-term partnerships, and disciplined growth.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
              Navigation
            </p>

            <div className="space-y-3 text-sm">
              <Link
                to="/about"
                className="block text-gray-700 transition hover:text-black">
                About Us
              </Link>

              <Link
                to="/services"
                className="block text-gray-700 transition hover:text-black">
                Services
              </Link>

              <Link
                to="/team"
                className="block text-gray-700 transition hover:text-black">
                Team
              </Link>

              <Link
                to="/blog"
                className="block text-gray-700 transition hover:text-black">
                Blog
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
              Contact
            </p>

            <div className="space-y-3 text-sm leading-6 text-gray-600">
              <p>Pekanbaru, Riau, Indonesia</p>

              <p className="break-all">contact@saputrawayne.co</p>

              <p>+62 812 3456 7890</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-5 border-t border-gray-200 pt-6 text-sm text-gray-500 md:mt-16 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Saputra-Wayne Co. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-black">
              LinkedIn
            </a>

            <a href="#" className="transition hover:text-black">
              X
            </a>

            <a href="#" className="transition hover:text-black">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

const Navbar = () => {
  const { isLoggedIn, setLogout } = useAuthStore();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    setLogout();
    setIsMenuOpen(false);
    navigate("/");
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex flex-col" onClick={closeMenu}>
          <span
            className="text-xl tracking-tight text-black sm:text-2xl"
            style={{ fontFamily: "The Seasons" }}>
            SAPUTRA-WAYNE Co.
          </span>

          <span className="mt-1 text-[9px] uppercase tracking-[0.3em] text-gray-500 sm:text-[10px] sm:tracking-[0.35em]">
            Capital Ventures
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm text-gray-600 transition hover:text-black">
            Home
          </Link>

          <Link
            to="/about"
            className="text-sm text-gray-600 transition hover:text-black">
            About Us
          </Link>

          <Link
            to="/services"
            className="text-sm text-gray-600 transition hover:text-black">
            Services
          </Link>

          <Link
            to="/team"
            className="text-sm text-gray-600 transition hover:text-black">
            Team
          </Link>

          <Link
            to="/blog"
            className="text-sm text-gray-600 transition hover:text-black">
            Blog
          </Link>
        </div>

        {/* Desktop Login / Logout */}
        <div className="hidden md:block">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="cursor-pointer rounded-lg border border-black bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-black hover:text-white">
              Log Out
            </button>
          ) : (
            <Link
              to="/login"
              className="cursor-pointer rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-gray-200 text-black md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}>
          {isMenuOpen ? (
            <span className="text-xl leading-none">×</span>
          ) : (
            <span className="text-xl leading-none">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="mx-auto max-w-7xl px-6 py-5">
            <div className="flex flex-col">
              <Link
                to="/"
                onClick={closeMenu}
                className="border-b border-gray-100 py-4 text-sm text-gray-700 transition hover:text-black">
                Home
              </Link>

              <Link
                to="/about"
                onClick={closeMenu}
                className="border-b border-gray-100 py-4 text-sm text-gray-700 transition hover:text-black">
                About Us
              </Link>

              <Link
                to="/services"
                onClick={closeMenu}
                className="border-b border-gray-100 py-4 text-sm text-gray-700 transition hover:text-black">
                Services
              </Link>

              <Link
                to="/team"
                onClick={closeMenu}
                className="border-b border-gray-100 py-4 text-sm text-gray-700 transition hover:text-black">
                Team
              </Link>

              <Link
                to="/blog"
                onClick={closeMenu}
                className="border-b border-gray-100 py-4 text-sm text-gray-700 transition hover:text-black">
                Blog
              </Link>

              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="mt-5 w-full cursor-pointer rounded-lg border border-black bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-black hover:text-white">
                  Log Out
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="mt-5 w-full rounded-lg bg-black px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-gray-800">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

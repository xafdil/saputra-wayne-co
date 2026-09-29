import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogHero from "../components/Blog/BlogHero";
import { useAuthStore } from "../stores/authStore";

const BlogList = () => {
  const { isLoggedIn } = useAuthStore();

  return (
    <>
      <Navbar />

      <main className="bg-white text-black">
        <BlogHero />

        {isLoggedIn && (
          <section className="px-6 pb-10">
            <div className="mx-auto flex max-w-7xl justify-end">
              <Link
                to="/create-blog"
                className="cursor-pointer rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800">
                Create Blog
              </Link>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
};

export default BlogList;

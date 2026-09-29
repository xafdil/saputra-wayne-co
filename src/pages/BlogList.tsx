import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogHero from "../components/Blog/BlogHero";
import BlogCard from "../components/Blog/BlogCard";
import { backendlessAPI } from "../api/backendless";
import { useAuthStore } from "../stores/authStore";

interface Blog {
  objectId: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
}

const BlogList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { isLoggedIn } = useAuthStore();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await backendlessAPI.get("/data/blogs");

        setBlogs(response.data);
      } catch (err) {
        setError("Unable to load blog articles.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <Navbar />

      <main className="bg-white text-black">
        <BlogHero />

        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">

            {isLoggedIn && (
              <div className="mb-10 flex justify-end">
                <Link
                  to="/create-blog"
                  className="cursor-pointer rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
                >
                  Create Blog
                </Link>
              </div>
            )}

            {loading && (
              <p className="text-center text-gray-500">
                Loading articles...
              </p>
            )}

            {error && (
              <p className="text-center text-red-500">
                {error}
              </p>
            )}

            {!loading && !error && blogs.length === 0 && (
              <p className="text-center text-gray-500">
                No articles available yet.
              </p>
            )}

            {!loading && !error && blogs.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog) => (
                  <BlogCard
                    key={blog.objectId}
                    id={blog.objectId}
                    title={blog.title}
                    excerpt={blog.excerpt}
                    author={blog.author}
                    publishDate={blog.publishDate}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BlogList;
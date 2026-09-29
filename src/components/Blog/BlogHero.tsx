import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { backendlessAPI } from "../../api/backendless";
import banner from "../../assets/images/hero-banner5.jpg";
import BlogCard from "./BlogCard";

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
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await backendlessAPI.get("/data/blogs");

        // Sort newest first
        const sortedBlogs = response.data.sort(
          (a: Blog, b: Blog) =>
            new Date(b.publishDate).getTime() -
            new Date(a.publishDate).getTime(),
        );

        setBlogs(sortedBlogs);
      } catch (err) {
        setError("Unable to load blog articles.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      return (
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [blogs, search]);

  const featuredBlog = filteredBlogs[0];

  return (
    <>
      <main className="bg-white text-black">
        {/* HERO */}
        <section className="relative min-h-[calc(100vh-80px)] overflow-hidden border-b border-gray-200">
          <img
            src={banner}
            alt="Saputra-Wayne Co. insights"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />

          <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 sm:py-24 lg:px-8 lg:py-24">
            <div className="max-w-3xl text-white">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-300 sm:text-sm">
                Insights
              </p>

              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Ideas shaping the future of business.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-200 sm:mt-8 sm:text-lg sm:leading-8">
                Articles, market insights, and strategic thinking from the team
                at Saputra-Wayne Co.
              </p>
            </div>
          </div>
        </section>

        {/* SEARCH */}
        <section className="border-b border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-5 py-3 outline-none transition focus:border-black"
            />
          </div>
        </section>

        {/* LOADING */}
        {loading && (
          <section className="mx-auto max-w-7xl px-6 py-24">
            <p className="text-gray-500">Loading articles...</p>
          </section>
        )}

        {/* ERROR */}
        {error && (
          <section className="mx-auto max-w-7xl px-6 py-24">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-600">
              {error}
            </div>
          </section>
        )}

        {/* CONTENT */}
        {!loading && !error && (
          <>
            {/* FEATURED ARTICLE */}
            {featuredBlog && (
              <section className="border-b border-gray-200">
                <div className="mx-auto max-w-7xl px-6 py-20">
                  <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
                    Featured Article
                  </p>

                  <article className="rounded-3xl bg-gray-50 p-10">
                    <h2 className="max-w-3xl text-4xl font-semibold tracking-tight">
                      {featuredBlog.title}
                    </h2>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                      {featuredBlog.excerpt}
                    </p>

                    <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-500">
                      <span>{featuredBlog.author}</span>
                      <span>
                        {new Date(featuredBlog.publishDate).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          },
                        )}
                      </span>
                    </div>

                    <Link
                      to={`/blog/${featuredBlog.objectId}`}
                      className="mt-10 inline-block text-sm font-medium text-black transition hover:opacity-60">
                      Read Article →
                    </Link>
                  </article>
                </div>
              </section>
            )}

            {/* BLOG GRID */}
            <section>
              <div className="mx-auto max-w-7xl px-6 py-20">
                {filteredBlogs.length === 0 ? (
                  <div className="rounded-2xl border border-gray-200 p-12 text-center">
                    <p className="text-gray-500">
                      No articles found for your search.
                    </p>
                  </div>
                ) : (
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredBlogs.map((blog) => (
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
          </>
        )}
      </main>
    </>
  );
};

export default BlogList;

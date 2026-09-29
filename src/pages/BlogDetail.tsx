import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { backendlessAPI } from "../api/backendless";

interface Blog {
  objectId: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
}

const BlogDetail = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await backendlessAPI.get(`/data/blogs/${id}`);

        setBlog(response.data);
      } catch (err) {
        setError("Unable to load this article.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  return (
    <>
      <Navbar />

      <main className="bg-white text-black">
        {loading && (
          <section className="mx-auto max-w-4xl px-6 py-32">
            <p className="text-sm text-gray-500">Loading article...</p>
          </section>
        )}

        {error && (
          <section className="mx-auto max-w-4xl px-6 py-32">
            <div className="border-l-2 border-red-500 pl-5">
              <p className="text-sm text-red-500">{error}</p>
            </div>
          </section>
        )}

        {!loading && !error && blog && (
          <article>
            {/* ARTICLE HEADER */}
            <header className="border-b border-gray-200">
              <div className="mx-auto max-w-5xl px-6 pb-12 pt-10 md:pb-16 md:pt-14">
                <Link
                  to="/blog"
                  className="inline-flex items-center text-sm font-medium text-gray-500 transition hover:text-black">
                  ← Back to Blogs
                </Link>

                <div className="mt-8 max-w-4xl">
                  <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                    {blog.title}
                  </h1>

                  <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
                    {blog.excerpt}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-gray-200 pt-5 text-sm text-gray-500">
                    <span className="font-medium text-black">
                      {blog.author}
                    </span>

                    <span>
                      {new Date(blog.publishDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </header>

            {/* ARTICLE CONTENT */}
            <section className="overflow-x-hidden px-6 py-12 md:py-16">
              <div className="mx-auto max-w-4xl">
                <div
                  className="
          wrap-break-word text-lg leading-7 text-gray-700
          md:text-xl md:leading-8
          [&_h1]:mb-4
          [&_h1]:mt-9
          [&_h1]:text-3xl
          [&_h1]:font-semibold
          [&_h1]:tracking-tight
          [&_h2]:mb-3
          [&_h2]:mt-9
          [&_h2]:text-2xl
          [&_h2]:font-semibold
          [&_h2]:tracking-tight
          [&_h3]:mb-3
          [&_h3]:mt-7
          [&_h3]:text-xl
          [&_h3]:font-semibold
          [&_p]:mb-5
          [&_ul]:mb-5
          [&_ul]:list-disc
          [&_ul]:pl-6
          [&_ol]:mb-5
          [&_ol]:list-decimal
          [&_ol]:pl-6
          [&_li]:mb-1.5
          [&_strong]:font-semibold
          [&_a]:font-medium
          [&_a]:text-black
          [&_a]:underline
          [&_a]:underline-offset-4
          [&_img]:my-6
          [&_img]:h-auto
          [&_img]:max-w-full
          [&_img]:rounded-xl
          [&_pre]:my-5
          [&_pre]:overflow-x-auto
          [&_pre]:rounded-xl
          [&_pre]:bg-gray-100
          [&_pre]:p-4
          [&_code]:wrap-break-word
          [&_table]:block
          [&_table]:overflow-x-auto
          [&_table]:whitespace-nowrap
          [&_iframe]:max-w-full
        "
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* FOOTER */}
                <div className="mt-10 border-t border-gray-200 pt-6">
                  <Link
                    to="/blog"
                    className="text-sm font-medium text-black transition hover:opacity-60">
                    ← Back to all Blogs
                  </Link>
                </div>
              </div>
            </section>
          </article>
        )}
      </main>

      <Footer />
    </>
  );
};

export default BlogDetail;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { backendlessAPI } from "../../api/backendless";
import { getUserByEmail } from "../../api/auth";
import { useAuthStore } from "../../stores/authStore";

const CreateBlogForm = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const email = useAuthStore((state) => state.email);
  const [author, setAuthor] = useState("");
  const [authorLoading, setAuthorLoading] = useState(true);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const publishDate = new Date().toISOString();

      await backendlessAPI.post("/data/blogs", {
        title,
        excerpt,
        content,
        author,
        publishDate,
      });

      navigate("/blog");
    } catch (err: any) {
      console.error("Backendless error:", err);
      console.error("Backendless response:", err.response?.data);

      setError(
        err.response?.data?.message ||
          "Unable to publish the article. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      if (!email) {
        setAuthorLoading(false);
        return;
      }

      try {
        const user = await getUserByEmail(email);

        setAuthor(user.name);
      } catch (err) {
        console.error("Unable to load user:", err);
      } finally {
        setAuthorLoading(false);
      }
    };

    fetchUser();
  }, [email]);

  return (
    <section className="bg-white text-black">
      {/* HERO */}
      <div className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
            Editorial
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Share an idea worth discussing.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
            Create an article and share insights on business, strategy, markets,
            and the future of business.
          </p>
        </div>
      </div>

      {/* FORM */}
      <div className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* TITLE */}
            <div>
              <label htmlFor="title" className="mb-3 block text-sm font-medium">
                Article Title
              </label>

              <input
                id="title"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Enter your article title"
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-black"
              />
            </div>

            {/* EXCERPT */}
            <div>
              <label
                htmlFor="excerpt"
                className="mb-3 block text-sm font-medium">
                Excerpt
              </label>

              <textarea
                id="excerpt"
                value={excerpt}
                onChange={(event) => setExcerpt(event.target.value)}
                placeholder="Write a short summary of your article"
                rows={4}
                required
                className="w-full resize-none rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-black"
              />
            </div>

            {/* CONTENT */}
            <div>
              <label className="mb-3 block text-sm font-medium">
                Article Content
              </label>

              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                placeholder="Write your article here..."
                className="rounded-xl"
              />
            </div>

            <p className="text-sm text-gray-500">
              Publishing as{" "}
              <span className="font-medium text-black">
                {author || "Loading..."}
              </span>
            </p>

            {/* ERROR */}
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* BUTTONS */}
            <div className="flex items-center justify-between border-t border-gray-200 pt-8">
              <button
                type="button"
                onClick={() => navigate("/blog")}
                className="text-sm font-medium text-gray-500 transition hover:text-black">
                Cancel
              </button>

              <button
                type="submit"
                disabled={loading || authorLoading || !author}
                className="cursor-pointer rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50">
                {loading
                  ? "Publishing..."
                  : authorLoading
                    ? "Loading author..."
                    : "Publish Article"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateBlogForm;

import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
}

const BlogCard = ({
  id,
  title,
  excerpt,
  author,
  publishDate,
}: BlogCardProps) => {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-gray-400">
      <h2 className="text-2xl font-semibold tracking-tight text-black">
        {title}
      </h2>

      <p className="mt-4 leading-7 text-gray-600">{excerpt}</p>

      <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4 text-sm text-gray-500">
        <span>{author}</span>

        <span>
          {new Date(publishDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>

      <Link
        to={`/blog/${id}`}
        className="mt-6 inline-block text-sm font-medium text-black transition hover:opacity-60">
        Read More →
      </Link>
    </article>
  );
};

export default BlogCard;
import { Bookmark, BookmarkCheck, ExternalLink, Clock } from "lucide-react";
import formatTimeAgo from "../utils/formatTimeAgo";
import { useNavigate } from "react-router-dom";

const FeaturedArticle = ({ article, bookmarks, toggleBookmark }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/article/${encodeURIComponent(article.url)}`, {
      state: { article },
    });
  };

  const isBookmarked = bookmarks.some((a) => a.url === article.url);

  return (
    <article className="md:col-span-7 border border-yellow-300 rounded-2xl overflow-hidden">
      {/* IMAGE */}
      <img
        onClick={handleClick}
        src={
          article.urlToImage ||
          "https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg"
        }
        alt={article.title}
        className="w-full h-62.5 sm:h-87.5 md:h-125 object-cover cursor-pointer"
      />

      {/* CONTENT */}
      <div className="p-5 sm:p-6 md:p-10">
        {/* META */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4">
          <span className="bg-yellow-300 text-slate-900 px-3 md:px-4 py-1 rounded font-bold text-sm md:text-base">
            Featured
          </span>

          <div className="flex items-center gap-2 text-sm md:text-base">
            <Clock size={16} />
            <span>{formatTimeAgo(article.publishedAt)}</span>
          </div>
        </div>

        {/* TITLE */}
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4 md:mb-6 leading-tight">
          {article.title}
        </h3>

        {/* DESC */}
        <p className="mb-6 md:mb-8 text-base sm:text-lg md:text-2xl">
          {article.description}
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4">
          {/* BOOKMARK */}
          <button
            onClick={() => toggleBookmark(article)}
            className="p-2 md:p-3 border border-white rounded hover:bg-slate-950 transition"
          >
            {isBookmarked ? (
              <BookmarkCheck size={20} className="text-yellow-300" />
            ) : (
              <Bookmark size={20} />
            )}
          </button>

          {/* READ */}
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-yellow-300 text-slate-900 px-4 md:px-6 py-2 md:py-3 rounded font-bold text-sm md:text-base hover:bg-yellow-400 transition"
          >
            Read Story
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </article>
  );
};

export default FeaturedArticle;

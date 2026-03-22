import { Bookmark, BookmarkCheck, ExternalLink, Clock } from "lucide-react";
import formatTimeAgo from "../utils/formatTimeAgo";
import { useNavigate } from "react-router-dom";

const ArticleCard = ({ article, bookmarks, toggleBookmark }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/article/${encodeURIComponent(article.url)}`, {
      state: { article },
    });
  };

  const isBookmarked = bookmarks.some((a) => a.url === article.url);

  return (
    <article className="flex flex-col sm:flex-row gap-4 md:gap-5 border border-white rounded-xl p-4 md:p-5">
      {/* IMAGE */}
      <img
        onClick={handleClick}
        src={
          article.urlToImage ||
          "https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg"
        }
        alt={article.title}
        className="w-full sm:w-32 h-40 sm:h-32 object-cover rounded cursor-pointer"
      />

      {/* CONTENT */}
      <div className="flex-1">
        {/* TIME */}
        <div className="flex items-center gap-2 mb-2 text-sm">
          <Clock size={14} className="text-yellow-300" />
          <span>{formatTimeAgo(article.publishedAt)}</span>
        </div>

        {/* TITLE */}
        <h4 className="font-bold text-base sm:text-lg md:text-xl mb-3 leading-tight">
          {article.title}
        </h4>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">
          {/* BOOKMARK */}
          <button
            onClick={() => toggleBookmark(article)}
            className="p-2 border border-white rounded hover:bg-slate-950 transition"
          >
            {isBookmarked ? (
              <BookmarkCheck size={18} className="text-yellow-300" />
            ) : (
              <Bookmark size={18} />
            )}
          </button>

          {/* READ */}
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-yellow-300 text-slate-900 px-3 py-1 rounded font-semibold text-sm hover:bg-yellow-400 transition"
          >
            Read
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;

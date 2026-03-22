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
  return (
    <article className="flex flex-col sm:flex-row gap-4 md:gap-5 border border-white rounded-xl p-4 md:p-5">
      <img
        onClick={handleClick}
        src={article.urlToImage || FALLBACK}
        className="w-full sm:w-32 h-40 sm:h-32 object-cover rounded cursor-pointer"
      />

      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2 text-sm">
          <Clock size={14} className="text-yellow-300" />
          <span>{formatTimeAgo(article.publishedAt)}</span>
        </div>

        <h4 className="font-bold text-base sm:text-lg md:text-xl mb-3 leading-tight">
          {article.title}
        </h4>

        <div className="flex items-center gap-3">
          <button className="p-2 border border-white rounded">
            {/* icon */}
          </button>

          <a className="flex items-center gap-1 bg-yellow-300 text-slate-900 px-3 py-1 rounded font-semibold text-sm">
            Read
          </a>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;

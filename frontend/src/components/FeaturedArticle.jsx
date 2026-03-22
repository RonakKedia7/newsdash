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
  return (
    <article className="md:col-span-7 border border-yellow-300 rounded-2xl overflow-hidden">
      <img
        onClick={handleClick}
        src={article.urlToImage || FALLBACK}
        className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover cursor-pointer"
      />

      <div className="p-5 sm:p-6 md:p-10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-yellow-300 text-slate-900 px-3 py-1 rounded font-bold text-sm md:text-base">
            Featured
          </span>

          <div className="flex items-center gap-2 text-sm md:text-base">
            <Clock size={16} />
            <span>{formatTimeAgo(article.publishedAt)}</span>
          </div>
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4 md:mb-6 leading-tight">
          {article.title}
        </h3>

        <p className="mb-6 md:mb-8 text-base sm:text-lg md:text-2xl">
          {article.description}
        </p>

        <div className="flex flex-wrap items-center gap-3 md:gap-4">
          <button className="p-2 md:p-3 border border-white rounded">
            {/* icon */}
          </button>

          <a className="flex items-center gap-2 bg-yellow-300 text-slate-900 px-4 md:px-6 py-2 md:py-3 rounded font-bold text-sm md:text-base">
            Read Story
          </a>
        </div>
      </div>
    </article>
  );
};

export default FeaturedArticle;

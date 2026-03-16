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
    <article className="flex gap-5 border border-white rounded-xl p-5">
      <img
        onClick={handleClick}
        src={
          article.urlToImage ||
          "https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg"
        }
        alt={article.title}
        className="w-32 h-32 object-cover rounded cursor-pointer"
      />

      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <Clock size={16} className="text-yellow-300" />
          <span>{formatTimeAgo(article.publishedAt)}</span>
        </div>

        <h4 className="font-bold text-xl mb-3 leading-tight">
          {article.title}
        </h4>

        <div className="flex items-center gap-3">
          <button
            onClick={() => toggleBookmark(article)}
            className="p-2 cursor-pointer border border-white rounded"
          >
            {bookmarks.find((a) => a.url === article.url) ? (
              <BookmarkCheck size={18} className="text-yellow-300" />
            ) : (
              <Bookmark size={18} />
            )}
          </button>

          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-yellow-300 text-slate-900 px-3 py-1 rounded font-semibold"
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

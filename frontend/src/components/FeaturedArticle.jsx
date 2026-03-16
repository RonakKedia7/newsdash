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
    <article className="col-span-7 border border-yellow-300 rounded-2xl overflow-hidden">
      <img
        onClick={handleClick}
        src={
          article.urlToImage ||
          "https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg"
        }
        alt={article.title}
        className="w-full h-125 object-cover cursor-pointer"
      />

      <div className="p-10">
        <div className="flex items-center gap-4 mb-4">
          <span className="bg-yellow-300 text-slate-900 px-4 py-1 rounded font-bold">
            Featured
          </span>

          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>{formatTimeAgo(article.publishedAt)}</span>
          </div>
        </div>

        <h3 className="text-5xl font-black mb-6 leading-tight">
          {article.title}
        </h3>

        <p className="mb-8 text-2xl">{article.description}</p>

        <div className="flex items-center gap-4">
          <button
            onClick={() => toggleBookmark(article)}
            className="p-3 cursor-pointer border border-white rounded"
          >
            {bookmarks.find((a) => a.url === article.url) ? (
              <BookmarkCheck size={22} className="text-yellow-300" />
            ) : (
              <Bookmark size={22} />
            )}
          </button>

          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-yellow-300 text-slate-900 px-6 py-3 rounded font-bold"
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

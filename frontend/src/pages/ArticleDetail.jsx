import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import useBookmarks from "../hooks/useBookmarks";
import { Bookmark, BookmarkCheck, ExternalLink, Clock } from "lucide-react";
import formatTimeAgo from "../utils/formatTimeAgo";
import gsap from "gsap";

const ArticleDetail = () => {
  const { state } = useLocation();
  const { bookmarks, toggleBookmark } = useBookmarks();
  const article = state?.article;

  const containerRef = useRef();
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (!article) return;

    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        opacity: 0,
        x: -80,
        scale: 0.9,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(textRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(buttonsRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        ease: "back.out(1.7)",
        delay: 0.4,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white p-6">
        <p className="text-xl md:text-3xl font-semibold">Article not found.</p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="min-h-screen pt-2 md:pb-7 bg-slate-900 px-4 md:px-10 text-white flex justify-center"
    >
      <div className="flex flex-col md:flex-row w-full max-w-350 gap-8 md:gap-12">
        {/* IMAGE */}
        {article.urlToImage && (
          <div className="md:w-1/2">
            <img
              ref={imageRef}
              src={article.urlToImage}
              alt={article.title}
              className="w-full h-62.5 sm:h-87.5 md:h-full object-cover shadow-2xl"
            />
          </div>
        )}

        {/* TEXT */}
        <div ref={textRef} className="md:w-1/2 flex flex-col">
          <div className="flex items-center gap-2 mb-4 text-gray-300 text-sm md:text-lg">
            <Clock size={18} className="text-yellow-300" />
            <span>{formatTimeAgo(article.publishedAt)}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight">
            {article.title}
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-4 md:mb-6 leading-relaxed">
            {article.description}
          </p>

          <p className="text-gray-200 text-sm sm:text-base md:text-lg whitespace-pre-line mb-6 md:mb-8 leading-relaxed">
            {article.content}
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-wrap gap-3 md:gap-6 mt-auto"
          >
            <button
              onClick={() => toggleBookmark(article)}
              className="p-2 md:p-3 border border-white rounded hover:bg-slate-950 transition-transform hover:scale-105"
            >
              {bookmarks.some((a) => a.url === article.url) ? (
                <BookmarkCheck size={20} className="text-yellow-300" />
              ) : (
                <Bookmark size={20} />
              )}
            </button>

            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-yellow-300 text-slate-900 px-4 md:px-6 py-2 md:py-3 rounded font-semibold text-sm md:text-lg hover:bg-yellow-400 transition-transform hover:scale-105"
            >
              Read on Source
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;

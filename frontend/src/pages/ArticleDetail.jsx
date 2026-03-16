import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import useBookmarks from "../hooks/useBookmarks";
import { Bookmark, BookmarkCheck, ExternalLink, Clock } from "lucide-react";
import formatTimeAgo from "../utils/formatTimeAgo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ArticleDetail = () => {
  const { state } = useLocation();
  const { bookmarks, toggleBookmark } = useBookmarks();
  const article = state?.article;

  const imageRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    if (!article) return;

    gsap.from(imageRef.current, {
      opacity: 0,
      x: -100,
      scale: 0.8,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(textRef.current, {
      opacity: 0,
      x: 10,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(buttonsRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      ease: "back.inOut",
    });
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white p-8">
        <p className="text-2xl md:text-3xl font-semibold">Article not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 p-4 md:p-10 text-white flex justify-center items-start">
      <div className="flex flex-col md:flex-row w-full max-w-400 gap-12">
        {/* Left: Image */}
        {article.urlToImage && (
          <div className="md:w-1/2 shrink-0">
            <img
              ref={imageRef}
              src={article.urlToImage}
              alt={article.title}
              className="w-full h-full object-cover rounded-lg shadow-2xl"
              style={{ pointerEvents: "auto" }} // ensure image doesn't block buttons
            />
          </div>
        )}

        {/* Right: Text */}
        <div
          ref={textRef}
          className="md:w-1/2 flex flex-col justify-start z-10"
        >
          <div className="flex items-center gap-3 mb-6 text-gray-300 text-lg md:text-xl">
            <Clock size={20} className="text-yellow-300" />
            <span>{formatTimeAgo(article.publishedAt)}</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            {article.title}
          </h1>

          <p className="text-gray-300 text-xl md:text-2xl mb-6 leading-relaxed">
            {article.description}
          </p>

          <p className="text-gray-200 text-lg md:text-xl whitespace-pre-line mb-8 leading-relaxed">
            {article.content}
          </p>

          <div ref={buttonsRef} className="flex gap-6 flex-wrap mt-auto">
            <button
              onClick={() => toggleBookmark(article)}
              className="p-3 border border-white rounded hover:bg-slate-950 cursor-pointer transition-transform transform hover:scale-110"
            >
              {bookmarks.some((a) => a.url === article.url) ? (
                <BookmarkCheck size={22} className="text-yellow-300" />
              ) : (
                <Bookmark size={22} />
              )}
            </button>

            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-yellow-300 text-slate-900 px-6 py-3 rounded font-semibold text-lg md:text-xl hover:bg-yellow-400 transition-transform transform hover:scale-105"
            >
              Read on Source
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;

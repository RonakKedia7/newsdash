import { useRef, useEffect } from "react";
import gsap from "gsap";

const TextAnimation = () => {
  const textRef = useRef();

  useEffect(() => {
    const el = textRef.current;
    const letters = el.textContent.split("");
    const half = Math.floor(letters.length / 2);

    el.innerHTML = letters
      .map((letter, i) => {
        const side = i < half ? "left" : "right";
        return `<span class="${side} inline-block">${letter}</span>`;
      })
      .join("");

    const ctx = gsap.context(() => {
      gsap.from(".left", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.08,
        ease: "power4.out",
      });

      gsap.from(".right", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: -0.08,
        ease: "power4.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-yellow-300 py-4 flex justify-center overflow-hidden">
      <h1
        ref={textRef}
        className="text-red-600 font-semibold text-3xl sm:text-5xl md:text-7xl xl:text-9xl tracking-wider text-center"
      >
        bookmarks
      </h1>
    </div>
  );
};

export default TextAnimation;

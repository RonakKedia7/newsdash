import { useRef, useEffect } from "react";
import gsap from "gsap";

const TextAnimation = () => {
  const text = useRef();

  useEffect(() => {
    const letters = text.current.textContent.split("");
    const half = Math.floor(letters.length / 2);

    let clutter = "";

    letters.forEach((letter, i) => {
      const side = i < half ? "left" : "right";
      clutter += `<span class="inline-block ${side}">${letter}</span>`;
    });

    text.current.innerHTML = clutter;

    const tl = gsap.timeline();

    tl.from(".left", {
      y: 120,
      opacity: 0,
      scale: 0.8,
      filter: "blur(10px)",
      duration: 1.2,
      stagger: 0.1,
      ease: "power4.out",
    }).from(
      ".right",
      {
        y: 120,
        opacity: 0,
        scale: 1.2,
        filter: "blur(10px)",
        duration: 0.8,
        stagger: -0.1,
        ease: "power4.out",
      },
      "<", // start at same time
    );
  }, []);

  return (
    <div className="bg-yellow-300 p-3 flex items-center justify-center overflow-hidden">
      <h1
        ref={text}
        className="text-red-600 font-semibold text-9xl tracking-wider"
      >
        bookmarks
      </h1>
    </div>
  );
};

export default TextAnimation;

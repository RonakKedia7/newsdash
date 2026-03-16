import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const HeroSection = () => {
  const container = useRef();
  const headline = useRef();
  const subtitle = useRef();
  const image = useRef();
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(headline.current, {
      x: -300,
      opacity: 0,
      duration: 0.6,
      ease: "back",
    })
      .from(
        subtitle.current,
        {
          x: -200,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "anim",
      )
      .from(
        image.current,
        {
          x: 300,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "anim",
      );
  });
  return (
    <div
      ref={container}
      className="relative h-[90vh] w-full flex overflow-hidden"
    >
      {/* Left Section */}
      <div className="w-1/2 h-full p-12 flex flex-col justify-center gap-8 z-10 bg-slate-900">
        <h1
          ref={headline}
          className="text-[6vw] leading-[1.05] font-bold text-red-600 bg-yellow-300 p-6 rounded-3xl"
        >
          Stay Ahead <br /> of the Headlines
        </h1>

        <h4 ref={subtitle} className="text-5xl text-white max-w-xl">
          Discover the latest stories from around the world.
        </h4>
      </div>

      {/* Right Section */}
      <div ref={image} className="w-1/2 bg-yellow-300 h-full"></div>

      {/* Floating Image */}
      <img
        src="/newspaper.png"
        alt="newspaper"
        className="absolute right-[12%] top-1/2 -translate-y-1/2 w-[50%] drop-shadow-2xl z-20"
      />
    </div>
  );
};

export default HeroSection;

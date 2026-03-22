import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const HeroSection = () => {
  const container = useRef();
  const headline = useRef();
  const subtitle = useRef();
  const image = useRef();
  const mobileImage = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Desktop animation
      tl.from(headline.current, {
        x: -300,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
      })
        .from(
          subtitle.current,
          {
            x: -200,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3",
        )
        .from(
          image.current,
          {
            x: 300,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.5",
        );

      // Mobile animation
      gsap.from(mobileImage.current, {
        scale: 0.85,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3,
      });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="relative w-full overflow-hidden bg-slate-900"
    >
      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex h-[90vh] w-full">
        {/* LEFT */}
        <div className="w-1/2 h-full p-12 flex flex-col justify-center gap-8 z-10">
          <h1
            ref={headline}
            className="text-[6vw] leading-[1.05] font-bold text-red-600 bg-yellow-300 p-6 rounded-3xl w-fit"
          >
            Stay Ahead <br /> of the Headlines
          </h1>

          <h4 ref={subtitle} className="text-5xl text-white max-w-xl">
            Discover the latest stories from around the world.
          </h4>
        </div>

        {/* RIGHT */}
        <div ref={image} className="w-1/2 bg-yellow-300 h-full"></div>

        {/* FLOATING IMAGE */}
        <img
          src="/newspaper.png"
          alt="newspaper"
          className="absolute right-[12%] top-1/2 -translate-y-1/2 w-[50%] drop-shadow-2xl z-20"
        />
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden flex flex-col min-h-screen">
        {/* IMAGE SECTION */}
        <div className="h-[38vh] bg-yellow-300 flex items-center justify-center relative">
          <img
            ref={mobileImage}
            src="/newspaper.png"
            alt="newspaper"
            className="w-[78%] max-w-105 drop-shadow-2xl"
          />
        </div>

        {/* TEXT SECTION */}
        <div className="flex-1 px-6 py-8 flex flex-col gap-6">
          <h1
            ref={headline}
            className="text-3xl sm:text-4xl font-bold text-red-600 bg-yellow-300 p-4 rounded-xl w-fit leading-tight"
          >
            Stay Ahead <br /> of the Headlines
          </h1>

          <h4
            ref={subtitle}
            className="text-lg sm:text-xl text-white leading-relaxed"
          >
            Discover the latest stories from around the world.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Loader = ({ fullScreen = true }) => {
  const loaderRef = useRef();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.to(loaderRef.current, {
        rotate: 360,
        duration: 0.8,
        repeat: -1,
        ease: "linear",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className={`
        w-full 
        ${fullScreen ? "h-screen" : "py-10"} 
        flex items-center justify-center 
        bg-slate-900
      `}
    >
      <div
        ref={loaderRef}
        className="
          w-10 h-10 sm:w-12 sm:h-12
          border-4 border-yellow-300 
          border-t-transparent 
          rounded-full
        "
      />
    </div>
  );
};

export default Loader;

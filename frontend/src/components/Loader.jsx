import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Loader = () => {
  const loaderRef = useRef();

  useGSAP(() => {
    gsap.to(loaderRef.current, {
      rotate: 360,
      duration: 1,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-slate-900">
      <div
        ref={loaderRef}
        className="w-12 h-12 border-4 border-yellow-300 border-t-transparent rounded-full"
      />
    </div>
  );
};

export default Loader;

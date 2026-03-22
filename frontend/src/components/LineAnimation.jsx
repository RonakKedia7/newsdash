import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const LineAnimation = () => {
  const pathRef = useRef();
  const containerRef = useRef();
  const [size, setSize] = useState({ width: 300, height: 200 });

  useEffect(() => {
    const updateSize = () => {
      const width = containerRef.current.offsetWidth;
      const height = width * 0.2;
      setSize({ width, height });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const initialPath = `M 10 ${size.height / 2} Q ${size.width / 2} ${size.height / 2 - 50} ${size.width - 10} ${size.height / 2}`;

  const move = (x, y) => {
    const path = `M 10 ${size.height / 2} Q ${x} ${y} ${size.width - 10} ${size.height / 2}`;

    gsap.to(pathRef.current, {
      duration: 0.2,
      attr: { d: path },
      ease: "power3.out",
      overwrite: true,
    });
  };

  const handleMouseMove = (e) => {
    move(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const handleTouchMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;
    move(x, y);
  };

  const leave = () => {
    gsap.to(pathRef.current, {
      duration: 1,
      attr: { d: initialPath },
      ease: "elastic.out(1,0.2)",
    });
  };

  return (
    <div
      ref={containerRef}
      className="bg-slate-900 flex items-center justify-center px-4"
    >
      <svg
        onMouseMove={handleMouseMove}
        onMouseLeave={leave}
        onTouchMove={handleTouchMove}
        onTouchEnd={leave}
        width={size.width}
        height={size.height}
      >
        <path
          ref={pathRef}
          d={initialPath}
          stroke="white"
          strokeWidth="3"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default LineAnimation;

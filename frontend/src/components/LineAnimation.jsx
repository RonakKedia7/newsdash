import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const LineAnimation = () => {
  const pathRef = useRef(null);
  const containerRef = useRef(null);

  const [size, setSize] = useState({ width: 300, height: 120 });
  const [isMobile, setIsMobile] = useState(false);

  // 🔹 Responsive size + screen check
  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current) return;

      const width = containerRef.current.offsetWidth;
      const height = Math.max(120, width * 0.2);

      setSize({ width, height });
      setIsMobile(window.innerWidth < 640); // Tailwind "sm" breakpoint
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // 🔹 Curve config
  const centerY = size.height / 2;
  const curveOffset = Math.max(40, size.height * 0.5);

  const initialPath = `M 10 ${centerY} Q ${size.width / 2} ${
    centerY - curveOffset
  } ${size.width - 10} ${centerY}`;

  // 🔹 Animate curve
  const move = (x, y) => {
    const maxOffset = size.height * 0.7;

    const yClamped = Math.max(
      centerY - maxOffset,
      Math.min(centerY + maxOffset, y),
    );

    const path = `M 10 ${centerY} Q ${x} ${yClamped} ${
      size.width - 10
    } ${centerY}`;

    gsap.to(pathRef.current, {
      duration: 0.25,
      attr: { d: path },
      ease: "power3.out",
      overwrite: true,
    });
  };

  // 🔹 Return animation
  const leave = () => {
    gsap.to(pathRef.current, {
      duration: 1.2,
      attr: { d: initialPath },
      ease: "elastic.out(1, 0.25)",
    });
  };

  // 🔹 Mouse
  const handleMouseMove = (e) => {
    move(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  // 🔹 Touch
  const handleTouchMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();

    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;

    move(x, y);
  };

  return (
    <div
      ref={containerRef}
      className="bg-slate-900 flex items-center justify-center w-full"
    >
      <svg
        width={size.width}
        height={size.height}
        onMouseMove={handleMouseMove}
        onMouseLeave={leave}
        onTouchMove={handleTouchMove}
        onTouchEnd={leave}
        style={{ touchAction: "none" }}
      >
        <path
          ref={pathRef}
          d={initialPath}
          stroke="white"
          strokeWidth={isMobile ? 1 : 3} // ✅ responsive stroke
          fill="transparent"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default LineAnimation;

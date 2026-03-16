import { useRef } from "react";
import gsap from "gsap";

const LineAnimation = () => {
  const pathRef = useRef();

  const width = 1800;
  const height = 350;

  const initialPath = `M 10 ${height / 2} Q ${width / 2} ${height / 2 - 80} ${width - 10} ${height / 2}`;

  const move = (e) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    const path = `M 10 ${height / 2} Q ${x} ${y} ${width - 10} ${height / 2}`;

    gsap.to(pathRef.current, {
      duration: 0.2,
      attr: { d: path },
      ease: "power3.out",
      overwrite: true,
    });
  };

  const leave = () => {
    gsap.to(pathRef.current, {
      duration: 1,
      attr: { d: initialPath },
      ease: "elastic.out(1,0.2)",
    });
  };

  return (
    <div className="bg-slate-900 flex items-center justify-center">
      <svg
        onMouseMove={move}
        onMouseLeave={leave}
        width={width}
        height={height}
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

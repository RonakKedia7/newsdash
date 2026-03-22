import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  RiArrowLeftDoubleLine,
  RiArrowRightDoubleLine,
} from "@remixicon/react";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  useGSAP(() => {
    gsap.from(".logo, .bookmark", {
      opacity: 0,
      y: -20,
      duration: 0.4,
    });
  });
  return (
    <nav className="flex h-[10%] items-center justify-between px-4 md:px-10 py-3 md:py-4 bg-slate-900 text-white">
      <Link to={"/"}>
        <h1 className="logo text-xl md:text-3xl font-bold tracking-wider">
          newsdash
        </h1>
      </Link>

      <div className="flex text-sm md:text-xl gap-2 md:gap-4 font-semibold bookmark">
        <Link to={"/bookmarks"} className="flex items-center justify-center">
          <RiArrowLeftDoubleLine size={20} className="md:hidden" />
          <RiArrowLeftDoubleLine size={30} className="hidden md:block" />

          <span className="mx-1 md:mx-0">bookmarks</span>

          <RiArrowRightDoubleLine size={20} className="md:hidden" />
          <RiArrowRightDoubleLine size={30} className="hidden md:block" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

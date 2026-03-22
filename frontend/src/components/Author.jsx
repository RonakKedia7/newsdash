import { RiGithubFill, RiLinkedinFill } from "@remixicon/react";

const Author = () => {
  return (
    <div className="w-full px-4 py-4 bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
      <p className="text-base md:text-xl font-semibold flex items-center gap-2 text-center md:text-left">
        Built with ☕ by
        <span className="font-bold">Ronak Kedia</span>
      </p>

      <div className="flex gap-5">
        <a
          href="https://www.linkedin.com/in/ronak-kedia-813598382"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300 transition-colors"
        >
          <RiLinkedinFill size={22} className="md:w-6 md:h-6" />
        </a>

        <a
          href="https://github.com/RonakKedia7"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300 transition-colors"
        >
          <RiGithubFill size={22} className="md:w-6 md:h-6" />
        </a>
      </div>
    </div>
  );
};

export default Author;

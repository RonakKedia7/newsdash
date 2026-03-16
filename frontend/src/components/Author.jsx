import { RiGithubFill, RiLinkedinFill } from "@remixicon/react";

const Author = () => {
  return (
    <div className="w-full p-4 bg-slate-900 text-white flex flex-row items-center justify-between mx-auto">
      <p className="text-lg md:text-xl font-semibold flex items-center gap-2 mb-2 md:mb-0">
        Built with ☕ by
        <span className="font-bold">Ronak Kedia</span>
      </p>

      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/ronak-kedia-813598382"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <RiLinkedinFill size={24} />
        </a>
        <a
          href="https://github.com/RonakKedia7"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <RiGithubFill size={24} />
        </a>
      </div>
    </div>
  );
};

export default Author;

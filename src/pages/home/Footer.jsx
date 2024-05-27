import React from "react";

const Footer = () => {
  return (
    <footer className="mx-auto flex max-w-[1300px] flex-col items-center justify-between gap-3 px-2 py-8 sm:flex-row sm:gap-0">
      <p className="text-sm text-[#333] text-shadow">
        Created by{" "}
        <a
          href="https://github.com/riazul01"
          target="_blank"
          rel="noreferrer"
          className="text-[#adff2f4d] underline"
        >
          riazul01
        </a>{" "}
        | &copy; 2024 all rights reserved
      </p>
      <div class="flex items-center justify-center gap-2 sm:gap-2.5">
        <a
          href="https://github.com/riazul01"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-[#333] text-shadow"
        >
          GitHub
        </a>
        <span className="h-[0.2rem] w-[0.2rem] rounded-full bg-[#222]"></span>
        <a
          href="https://www.linkedin.com/in/md-riazul-islam-86653321b/"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-[#333] text-shadow"
        >
          LinkedIn
        </a>
        <span className="h-[0.2rem] w-[0.2rem] rounded-full bg-[#222]"></span>
        <a
          href="https://riazul.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-[#333] text-shadow"
        >
          Portfolio
        </a>
      </div>
    </footer>
  );
};

export default Footer;

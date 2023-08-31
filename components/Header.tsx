import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center justify-between">
        <Link href="/">
        <svg
          aria-hidden="true"
          viewBox="0 0 60 40"
          className="mb-2 h-10 w-auto"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 20c0 11.046 8.954 20 20 20s20-8.954 20-20S31.046 0 20 0 0 8.954 0 20Zm20 16c-7.264 0-13.321-5.163-14.704-12.02C4.97 22.358 6.343 21 8 21h24c1.657 0 3.031 1.357 2.704 2.98C33.32 30.838 27.264 36 20 36Z"
            fill="#2563EB"
          ></path>
        </svg>
        </Link>
        <h1 className="font-bold text-xl">OUTBREAK</h1>
      </div>

      <div>
        <Link
          href="https://github.com/OutBreak778"
          target="_blank"
          passHref
          className="px-5 py-3 text-sm md:text-base bg-gray-800 text-[rgb(255,215,0)] flex items-center rounded-xl text-center"
        >
          {" "}
          Visit my Github Profile
        </Link>
      </div>
    </header>
  );
};

export default Header;

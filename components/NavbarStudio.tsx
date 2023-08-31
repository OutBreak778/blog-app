"use client";
import React from "react";
import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/20/solid";

function NavbarStudio(props: any) {
  return (
    <div>
      <div className=" bg-[#111] font-bold flex items-center justify-between p-4">
        <Link
          href="/"
          className=" text-[#fff] px-3 py-3 rounded-lg flex items-center border-2 border-[rgb(255,215,0)]"
        >
          <ArrowUturnLeftIcon className="h-5 w-5 text-[#fff] mr-3" />
          Go Back to Website
        </Link>
        <div className="hidden md:flex p-4 rounded-lg justify-center border-2 border-[rgb(255,215,0)]">
          <Link
            href="https://trello-app-outbreak778.vercel.app/"
            target="_blank"
            passHref
            className=" text-[rgb(255,215,0)] ml-2 hover:underline hover:underline-offset-2 font-bold"
          >
            Visit my Latest Project
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default NavbarStudio;

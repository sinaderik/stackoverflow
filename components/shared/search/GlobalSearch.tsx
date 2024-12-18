"use client"
import { Input } from "@/components/ui/input";
import React from "react";

const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
        <img
          src="/assets/icons/search.svg"
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />

        <Input
          type="text"
          placeholder="Search for anything..."
          // value=""
          className="paragraph-regular no-focus placeholder text-dark100_light900 background-light800_darkgradient border-none shadow-none outline-none"
          onChange={()=>{}}
        />
      </div>
    </div>
  );
};

export default GlobalSearch;

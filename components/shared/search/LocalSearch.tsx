"use client"
import React from 'react';
import {Input} from "@/components/ui/input";

const LocalSearch = () => {
    return (
        <div className="w-full background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
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
                className="paragraph-regular no-focus placeholder text-dark100_light900 background-light800_darkgradient border-none shadow-none outline-none w-full"
                onChange={() => {
                }}
            />
        </div>

    );
};

export default LocalSearch;
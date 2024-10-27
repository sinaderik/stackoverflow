"use client";
import { HomePageFilters } from "@/constants/filter";
import React from "react";
import { Button } from "../ui/button";

const HomeFilters = () => {
  const active = "newest";
  return (
    <div className="hidden md:flex mt-10 flex-wrap gap-3">
      {HomePageFilters.map((item) => {
        return (
          <Button
            key={item.value}
            onChange={() => {}}
            className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none
                    ${
                      active === item.value
                        ? "bg-primary-100 text-primary-500"
                        : "bg-light-800 text-light-500 hover:bg-light-700 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-400"
                    }
                    `}
          >
            {item.name}
          </Button>
        );
      })}
    </div>
  );
};

export default HomeFilters;

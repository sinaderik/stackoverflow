import { questions, tags } from "@/constants";
import Image from "next/image";
import React from "react";

const RightSideBar = () => {
  return (
    <div className="background-light900_dark200 light-border sticky right-0 top-0 hidden xl:flex h-screen w-fit flex-col justify-between custom-scrollbar overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none lg:w-[330px] gap-5">
      <div>
        <h2 className="mb-5 h3-bold text-dark200_light900">Top Questions</h2>
        {questions.map((item) => {
          return (
            <div key={item.id} className="flex items-center justify-between mb-3 gap-7 cursor-pointer">
              <p className="body-medium text-dark500_light700">{item.value}</p>
                <Image
                  className="invert-colors"
                  src="/assets/icons/chevron-right.svg"
                  width={20}
                  height={20}
                  alt="question"
                />
            </div>
          );
        })}
      </div>
      <div>
        <h2 className="mb-7 mt-5 h3-bold text-dark200_light900">Popular tags</h2>
          {tags.map(item=>{
            return(
              <div key={item.id} className="flex justify-between items-center mb-4">
                <span className="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 border-transparent bg-slate-900 shadow hover:bg-slate-900/80 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80 subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase cursor-pointer">{item.value}</span>
                <span className="small-medium text-dark500_light700">{item.count}</span>
              </div>
            )
          })}
      </div>
    </div>
  );
};

export default RightSideBar;

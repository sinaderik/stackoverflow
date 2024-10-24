import Image from "next/image";
import React from "react";

const RightSideBar = () => {
  return (
    <div className="background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-fit flex-col justify-between overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="">
        <h3>Hot network</h3>
        <div className="flex gap-1 items-center">
          <span>
            <Image className="invert-colors" src="/assets/icons/question.svg" width={20} height={20} alt="question"/>
          </span>
          question 1
        </div>
      </div>
      <div className="">
        <h3>Popular tags</h3>
      </div>
    </div>
  );
};

export default RightSideBar;

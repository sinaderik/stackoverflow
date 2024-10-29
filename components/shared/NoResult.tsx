import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

type NoResultProps={
    title:string,
    description:string,
    link:string,
    linkTitle:string,
}
const NoResult = ({title,description,link,linkTitle}:NoResultProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-10">
      <Image
        src="/assets/images/light-illustration.png"
        alt="no result"
        height={200}
        width={270}
        className="block object-contain dark:hidden"
      />
      <Image
        src="/assets/images/dark-illustration.png"
        alt="no result"
        height={200}
        width={270}
        className="hidden object-contain dark:flex"
      />
      <h2 className="h2-bold text-dark200_light900 mt-8">{title}</h2>
      <p className="body-regular text-dark500_light700 my-3.5 max-w-md text-center">{description}</p>

      <Link href={link}>
        <Button className="paragraph-medium mt-5 min-h-[46px] rounded-lg bg-primary-500 px-4 py-3 text-light-900 hover:bg-primary-500 dark:bg-primary-500 dark:text-light-900">{linkTitle}</Button>
      </Link>
    </div>
  );
};

export default NoResult;

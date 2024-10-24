"use client";

import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

const LeftSideBar = () => {
  const pathname = usePathname();

  return (
    <div className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 flex h-screen w-fit flex-col justify-between  overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <Link
            className={`${
              isActive
                ? "primary-gradient rounded-lg text-light-900"
                : "text-dark300_light900"
            } 
                flex items-center justify-start bg-transparent gap-4 p-4
            `}
            href={item.route}
            key={item.route}
          >
            <Image
              src={item.imgURL}
              alt={item.label}
              width={20}
              height={20}
              className={`${isActive ? "" : "invert-colors"}`}
            />
            <p
              className={`${
                isActive ? "base-bold" : "base-medium"
              } lg:block hidden`}
            >
              {item.label}
            </p>
          </Link>
        );
      })}
      <div className="flex flex-col gap-4 mt-4">
        <SignedOut>
          <Link href="/sign-in">
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
              className="invert-colors lg:hidden"
                src="/assets/icons/account.svg"
                alt="login"
                height={20}
                width={20}
              />
              <span className="primary-text-gradient lg:block hidden">Log in</span>
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="small-medium btn-tertiary text-dark400_light900 light-border-2 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
              className="invert-colors lg:hidden"
                src="/assets/icons/sign-up.svg"
                alt="login"
                height={20}
                width={20}
              />
              <span className="lg:block hidden">Sign up</span>
            </Button>
          </Link>
        </SignedOut>
      </div>
    </div>
  );
};

export default LeftSideBar;

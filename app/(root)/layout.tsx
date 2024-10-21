import Navbar from "@/componants/shared/navbar/Navbar";
import React from "react";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <p className="dark:text-light-900">sina</p>
      <Navbar />
      <div className="flex">
        <p className="h2-bold">leftsidebar</p>
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        rightsidebar
      </div>
      toast
    </main>
  );
};

export default Layout;

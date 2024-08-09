"use client";

import React from "react";
import Image from "next/image";
import type { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "Page Not Found...",
};

// Images
import icon404 from "@/public/icons/404.png";

const NotFound = () => {
  // Effects
  React.useEffect(() => {
    location.hash = "#404-section";
  }, []);

  return (
    <div
      id="404-section"
      className="py-5 min-h-[100dvh] flex items-center justify-center"
    >
      <div className="w-full flex flex-col items-center">
        <Image
          src={icon404}
          alt="icon 404"
          width={500}
          height={300}
          className="w-[350px] md:w-[500px]"
        />
        <h1 className="font-poppins font-bold text-xl md:text-3xl text-center">
          Oops, looks like the page is lost.
        </h1>
        <p className="font-poppins font-normal mt-2 text-center">
          This is not a fault, just an accident that was not intentional.
        </p>
      </div>
    </div>
  );
};

export default NotFound;

"use client";

import React from "react";

// Contexts
import HamburgerMenuProvider from "@/context/hamburgerMenuContext";

// Components
import HeaderIcons from "./HeaderIcons";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

// Icons
import { IoIosMenu } from "react-icons/io";

const MobileNav = () => {
  return (
    <HamburgerMenuProvider>
      <div className="py-4 mb-2.5 flex items-center justify-between border-b border-solid border-black/5">
        <div className="flex items-center justify-between">
          <button className="text-[#444444] flex items-center justify-between  ">
            <IoIosMenu size={"1.4em"} />
          </button>
          <HamburgerMenu />
        </div>
        <div>
          <HeaderIcons smallIcons={true} />
        </div>
      </div>
    </HamburgerMenuProvider>
  );
};

export default MobileNav;

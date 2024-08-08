"use client";

import React from "react";
import Link from "next/link";

// Contexts
import { hamburgerMenuContext } from "@/context/hamburgerMenuContext";

// Components
import Overlay from "../Overlay/Overlay";

// Icons
import { IoClose } from "react-icons/io5";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaTwitter } from "react-icons/fa6";

const HamburgerMenu = () => {
  // Context
  const { isHamburgerMenuOpen, setIsHamburgerMenuOpen } =
    React.useContext(hamburgerMenuContext);

  // Callbacks
  const closeMenuHandler = React.useCallback(() => {
    setIsHamburgerMenuOpen(false);
  }, []);

  return (
    <>
      <div
        className={`w-[300px] h-[100dvh] flex flex-col justify-between p-4 bg-white fixed top-0 bottom-0 ${
          isHamburgerMenuOpen ? "left-0" : "-left-[300px]"
        } z-50 transition-all`}
      >
        <div>
          <div className="flex items-center justify-between  pb-2.5 border-b-2 border-solid border-[#eeeeee]">
            <h2 className="text-[#3474d4] text-lg font-poppins font-bold">
              My Menu
            </h2>
            <button className="text-[#555555]" onClick={closeMenuHandler}>
              <IoClose size={"1.4em"} />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2.5 py-4 border-t border-solid border-[#eeeeee]">
          <div>
            <Link
              className="flex items-center justify-center text-[#000000] size-10 rounded-full bg-[#f7f7f7] p-1 box-content transition-all hover:text-white hover:bg-[#000000]"
              href={"https://github.com/AliDeWeb"}
              prefetch={false}
            >
              <TbBrandGithubFilled size={"1.6em"} />
            </Link>
          </div>
          <div>
            <Link
              className="flex items-center justify-center text-[#1DA1F2] size-10 rounded-full bg-[#f7f7f7] p-1 box-content transition-all hover:text-white hover:bg-[#1DA1F2]"
              href={"https://x.com/AliDeWeb?t=_C1tGVNTg8S2mbmhhpHtXA&s=09"}
              prefetch={false}
            >
              <FaTwitter size={"1.6em"} />
            </Link>
          </div>
        </div>
      </div>
      <Overlay isActive={isHamburgerMenuOpen} onClick={closeMenuHandler} />
    </>
  );
};

export default HamburgerMenu;

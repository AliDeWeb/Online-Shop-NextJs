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
import { FaTwitter, FaGreaterThan } from "react-icons/fa6";

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
        } z-50 transition-all duration-300`}
      >
        <div>
          <div className="flex items-center justify-between  pb-2.5 border-b-2 border-solid border-[#eeeeee] mb-2.5">
            <h2 className="text-[#3474d4] text-lg font-poppins font-bold">
              My Menu
            </h2>
            <button className="text-[#555555]" onClick={closeMenuHandler}>
              <IoClose size={"1.4em"} />
            </button>
          </div>
          <div>
            <ul className="child:py-2.5 child:px-1 divide-y divide-solid divide-[#eeeeee]">
              <li>
                <Link
                  href="/"
                  className="text-[#444444] font-poppins font-bold text-sm"
                >
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-[#444444] font-poppins font-bold text-sm flex items-center justify-between"
                >
                  <span>Categories</span>
                  <FaGreaterThan size={"0.8em"} />
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-[#444444] font-poppins font-bold text-sm flex items-center justify-between"
                >
                  <span>Products</span>
                  <FaGreaterThan size={"0.8em"} />
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-[#444444] font-poppins font-bold text-sm flex items-center justify-between"
                >
                  <span>Others</span>
                  <FaGreaterThan size={"0.8em"} />
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-[#444444] font-poppins font-bold text-sm flex items-center justify-between"
                >
                  <span>Blog</span>
                  <FaGreaterThan size={"0.8em"} />
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-[#444444] font-poppins font-bold text-sm flex items-center justify-between"
                >
                  <span>Hot Offers</span>
                  <FaGreaterThan size={"0.8em"} />
                </Link>
              </li>
            </ul>
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

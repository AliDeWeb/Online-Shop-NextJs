"use client";

import React, { useCallback } from "react";

// Contexts
import { hamburgerMenuContext } from "@/context/hamburgerMenuContext";

// Components
import Overlay from "../Overlay/Overlay";

// Icons
import { IoClose } from "react-icons/io5";

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
        className={`w-[300px] h-[100dvh] p-4 bg-white fixed top-0 bottom-0 ${
          isHamburgerMenuOpen ? "left-0" : "-left-[300px]"
        } z-50 transition-all`}
      >
        <div className="flex items-center justify-between  pb-2.5 border-b-2 border-solid border-[#eeeeee]">
          <h2 className="text-[#3474d4] text-lg font-poppins font-bold">
            My Menu
          </h2>
          <button className="text-[#555555]" onClick={closeMenuHandler}>
            <IoClose size={"1.4em"} />
          </button>
        </div>
      </div>
      <Overlay isActive={isHamburgerMenuOpen} onClick={closeMenuHandler} />
    </>
  );
};

export default HamburgerMenu;

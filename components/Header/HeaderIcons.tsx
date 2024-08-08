"use client";

import React from "react";
import Link from "next/link";

// Icons
import { CiUser, CiHeart } from "react-icons/ci";
import { PiShoppingCartSimple } from "react-icons/pi";

// Components
import MegaMenu from "../MegaMenu/MegaMenu";

// Data
const megaMenuItems: { title: string; link: string }[] = [
  { title: "register", link: "/" },
  { title: "checkout", link: "/" },
  { title: "login", link: "/" },
];

// Types
interface HeaderIconsProps {
  smallIcons?: boolean;
}

const HeaderIcons = ({ smallIcons }: HeaderIconsProps) => {
  // States
  const [isMegaMenuActive, setIsMegaMenuActive] =
    React.useState<boolean>(false);

  // Callbacks
  const megaMenuStatusHandler = React.useCallback(() => {
    setIsMegaMenuActive((prev: boolean) => !prev);
  }, []);

  return (
    <div
      className={`relative flex items-center ${
        !!smallIcons ? "gap-3" : "gap-6"
      } text-[#444444] hover:child:text-[#3474d4] child:transition-all`}
    >
      <button onClick={megaMenuStatusHandler}>
        <CiUser size={`${!!smallIcons ? "1.4em" : "1.8em"}`} />
      </button>
      <MegaMenu
        items={megaMenuItems}
        isActive={isMegaMenuActive}
        className="absolute -bottom-[116px] -left-[100px]"
      />

      <Link href={"/"} className="relative">
        <span
          className={`absolute -bottom-[6px] -right-[8px] ${
            !!smallIcons ? "size-4 text-xs" : "size-5 text-sm"
          } rounded-full bg-[#777777] font-poppins flex items-center justify-center text-white`}
        >
          6
        </span>
        <CiHeart size={`${!!smallIcons ? "1.4em" : "1.8em"}`} />
      </Link>
      <Link href={"/"} className="relative">
        <span
          className={`absolute -bottom-[6px] -right-[8px] ${
            !!smallIcons ? "size-4 text-xs" : "size-5 text-sm"
          } rounded-full bg-[#777777] font-poppins flex items-center justify-center text-white`}
        >
          6
        </span>
        <PiShoppingCartSimple size={`${!!smallIcons ? "1.4em" : "1.6em"}`} />
      </Link>
    </div>
  );
};

export default HeaderIcons;

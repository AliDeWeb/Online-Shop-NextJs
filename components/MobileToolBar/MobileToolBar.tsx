import React from "react";
import Link from "next/link";

// Icons
import { CiUser, CiHeart } from "react-icons/ci";
import { PiShoppingCartSimple } from "react-icons/pi";
import { HiOutlineHome } from "react-icons/hi2";
import { BsShop } from "react-icons/bs";

const MobileToolBar = () => {
  return (
    <div className="sm:hidden flex items-center justify-evenly h-[60px] w-full px-5 py-2.5 bg-white z-50 fixed bottom-0 right-0 left-0 border-t border-solid border-[#eeeeee]">
      <Link href="/register" className="text-[#555555]">
        <CiUser size={"1.7em"} />
      </Link>

      <Link href="/" className="relative text-[#555555]">
        <CiHeart size={"1.7em"} />
        <span className="absolute -right-1 -top-1 flex items-center justify-center text-xs font-poppins font-light bg-[#ff6767] size-4 rounded-full text-white">
          6
        </span>
      </Link>

      <Link href="/" className="text-[#555555]">
        <HiOutlineHome size={"1.7em"} />
      </Link>

      <Link href="/" className="relative text-[#555555]">
        <PiShoppingCartSimple size={"1.7em"} />
        <span className="absolute -right-1 -top-1.5 flex items-center justify-center text-xs font-poppins font-light bg-[#ff6767] size-4 rounded-full text-white">
          8
        </span>
      </Link>

      <Link href="/" className="text-[#555555]">
        <BsShop size={"1.6em"} />
      </Link>
    </div>
  );
};

export default MobileToolBar;

import React from "react";

// Icons
import { IoClose } from "react-icons/io5";

const HamburgerMenu = () => {
  return (
    <div className="w-[300px] h-[100dvh] p-4 bg-white fixed top-0 bottom-0 left-0">
      <div className="flex items-center justify-between  pb-2.5 border-b-2 border-solid border-[#eeeeee]">
        <h2 className="text-[#3474d4] text-lg font-poppins font-bold">
          My Menu
        </h2>
        <button className="text-[#555555]">
          <IoClose size={"1.4em"} />
        </button>
      </div>
    </div>
  );
};

export default HamburgerMenu;

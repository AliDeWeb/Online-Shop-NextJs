import React from "react";

// Components
import HeaderIcons from "./HeaderIcons";

// Icons
import { IoIosMenu } from "react-icons/io";

const MobileNav = () => {
  return (
    <div className="py-4 mb-2.5 flex items-center justify-between border-b border-solid border-black/5">
      <div className="flex items-center justify-between">
        <button className="text-[#444444] flex items-center justify-between  ">
          <IoIosMenu size={"1.4em"} />
        </button>
      </div>
      <div>
        <HeaderIcons smallIcons={true} />
      </div>
    </div>
  );
};

export default MobileNav;

import React from "react";
import Link from "next/link";

// Types
interface MegaMenuProps {
  className: string;
  isActive: boolean;
  items: { title: string; link: string }[];
}

const MegaMenu = ({ className, isActive, items }: MegaMenuProps) => {
  return (
    <div
      className={`${
        isActive ? "opacity-100 visible" : "opacity-0 invisible"
      } ${className} transition-all min-w-[125px] border border-solid border-[#d9d9d9] px-2.5 py-1 bg-white shadow-sm`}
    >
      <ul className="child:py-1.5 divide-y divide-solid divide-red-50 text-[#777777] hover:child:text-[#444444] child:transition-all font-poppins font-light text-sm">
        {items.map((el) => (
          <li key={`${el.title}${el.link}-${Math.random()}`}>
            <Link href={el.link}>{el.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MegaMenu;

import React from 'react';
import Link from 'next/link';

const NavbarMegaMenu = ({ right }: { right?: boolean }) => {
  return (
    <div
      className={`${right ? 'right-0' : 'left-0'} invisible absolute top-[50px] z-50 w-[215px] bg-white px-5 py-[15px] opacity-0 shadow-md transition-all`}
    >
      <ul className="flex flex-col divide-y divide-solid divide-[#eeeeee] child:py-2 child:font-poppins child:text-sm child:font-normal child:text-[#777777]">
        <li>
          <Link href="/" className="transition-all hover:text-[#3474d4]">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/" className="transition-all hover:text-[#3474d4]">
            Contact Us
          </Link>
        </li>
        <li>
          <Link href="/" className="transition-all hover:text-[#3474d4]">
            Cart
          </Link>
        </li>
        <li>
          <Link href="/" className="transition-all hover:text-[#3474d4]">
            Compare
          </Link>
        </li>
        <li>
          <Link href="/" className="transition-all hover:text-[#3474d4]">
            Track Order
          </Link>
        </li>
        <li>
          <Link href="/" className="transition-all hover:text-[#3474d4]">
            Privacy Policy
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarMegaMenu;

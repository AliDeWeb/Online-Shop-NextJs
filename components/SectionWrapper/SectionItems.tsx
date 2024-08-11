import Link from 'next/link';
import React from 'react';

const SectionItems = () => {
  return (
    <div>
      <ul className="flex items-center justify-center gap-4 text-xs sm:gap-12 sm:text-sm">
        <li className="relative flex h-[50px] items-center justify-center font-poppins font-bold capitalize text-[#3474d4] transition-all before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[3px] before:w-full before:bg-[#3474d4] before:transition-all before:content-['']">
          <Link href="/">for all</Link>
        </li>
        <li className="relative flex h-[50px] items-center justify-center font-poppins font-bold capitalize text-[#444444] transition-all before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[3px] before:w-0 before:bg-[#3474d4] before:transition-all before:content-[''] hover:text-[#3474d4] hover:before:w-full">
          <Link href="/">for men</Link>
        </li>
        <li className="relative flex h-[50px] items-center justify-center font-poppins font-bold capitalize text-[#444444] transition-all before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[3px] before:w-0 before:bg-[#3474d4] before:transition-all before:content-[''] hover:text-[#3474d4] hover:before:w-full">
          <Link href="/">for women</Link>
        </li>
        <li className="relative flex h-[50px] items-center justify-center font-poppins font-bold capitalize text-[#444444] transition-all before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[3px] before:w-0 before:bg-[#3474d4] before:transition-all before:content-[''] hover:text-[#3474d4] hover:before:w-full">
          <Link href="/">for children</Link>
        </li>
      </ul>
    </div>
  );
};

export default SectionItems;

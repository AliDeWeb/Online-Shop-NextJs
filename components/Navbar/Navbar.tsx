'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Icons
import { HiOutlineHome } from 'react-icons/hi2';
import { PiSortAscendingBold } from 'react-icons/pi';

// Components
import NavbarMegaMenu from '../MegaMenu/NavbarMegaMenu';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:block">
      <div className="container">
        <div className="flex h-[50px] items-center justify-between">
          <div>
            <Link href={'/'} className="text-[#444444]">
              <HiOutlineHome size={'1.6em'} />
            </Link>
          </div>
          <div>
            <ul className="flex items-center gap-14 font-poppins text-sm font-bold uppercase text-[#444444]">
              <li>
                <Link
                  href="/"
                  className={`${pathname === '/' ? 'text-[#3474d4] before:w-full' : 'before:w-0'} relative flex h-[50px] items-center justify-center transition-all before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[3px] before:bg-[#3474d4] before:transition-all before:content-[''] hover:text-[#3474d4] hover:before:w-full`}
                >
                  Home
                </Link>
              </li>
              <li className="relative child:hover:!visible child:hover:!opacity-100">
                <Link
                  href="/"
                  className={`relative flex h-[50px] items-center justify-center transition-all before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[3px] before:w-0 before:bg-[#3474d4] before:transition-all before:content-[''] hover:text-[#3474d4] hover:before:w-full`}
                >
                  Categories
                </Link>
                <NavbarMegaMenu />
              </li>
              <li className="relative child:hover:!visible child:hover:!opacity-100">
                <Link
                  href="/"
                  className={`relative flex h-[50px] items-center justify-center transition-all before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[3px] before:w-0 before:bg-[#3474d4] before:transition-all before:content-[''] hover:text-[#3474d4] hover:before:w-full`}
                >
                  Products
                </Link>
                <NavbarMegaMenu />
              </li>
              <li className="relative child:hover:!visible child:hover:!opacity-100">
                <Link
                  href="/"
                  className={`relative flex h-[50px] items-center justify-center transition-all before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[3px] before:w-0 before:bg-[#3474d4] before:transition-all before:content-[''] hover:text-[#3474d4] hover:before:w-full`}
                >
                  Pages
                </Link>
                <NavbarMegaMenu />
              </li>
              <li className="relative child:hover:!visible child:hover:!opacity-100">
                <Link
                  href="/"
                  className={`relative flex h-[50px] items-center justify-center transition-all before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[3px] before:w-0 before:bg-[#3474d4] before:transition-all before:content-[''] hover:text-[#3474d4] hover:before:w-full`}
                >
                  Blog
                </Link>
                <NavbarMegaMenu />
              </li>
              <li className="relative child:hover:!visible child:hover:!opacity-100">
                <Link
                  href="/"
                  className={`relative flex h-[50px] items-center justify-center transition-all before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[3px] before:w-0 before:bg-[#3474d4] before:transition-all before:content-[''] hover:text-[#3474d4] hover:before:w-full`}
                >
                  Hot Offers
                </Link>
                <NavbarMegaMenu />
              </li>
            </ul>
          </div>
          <div className="relative flex h-[50px] items-center justify-center child:hover:!visible child:hover:!opacity-100">
            <i className="cursor-pointer text-[#444444] transition-all hover:text-[#3474d4]">
              <PiSortAscendingBold size={'1.6em'} />
            </i>
            <NavbarMegaMenu right={true} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

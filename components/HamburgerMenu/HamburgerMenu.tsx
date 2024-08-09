'use client';

import React from 'react';
import Link from 'next/link';

// Contexts
import { hamburgerMenuContext } from '@/context/hamburgerMenuContext';

// Components
import Overlay from '../Overlay/Overlay';

// Icons
import { IoClose } from 'react-icons/io5';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { FaTwitter, FaGreaterThan } from 'react-icons/fa6';

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
        className={`fixed bottom-0 top-0 flex h-[100dvh] w-[300px] flex-col justify-between bg-white p-4 ${
          isHamburgerMenuOpen ? 'left-0' : '-left-[300px]'
        } z-50 transition-all duration-300`}
      >
        <div>
          <div className="mb-2.5 flex items-center justify-between border-b-2 border-solid border-[#eeeeee] pb-2.5">
            <h2 className="font-poppins text-lg font-bold text-[#3474d4]">
              My Menu
            </h2>
            <button className="text-[#555555]" onClick={closeMenuHandler}>
              <IoClose size={'1.4em'} />
            </button>
          </div>
          <div>
            <ul className="divide-y divide-solid divide-[#eeeeee] child:px-1 child:py-2.5">
              <li>
                <Link
                  href="/"
                  className="font-poppins text-sm font-bold text-[#444444]"
                >
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex items-center justify-between font-poppins text-sm font-bold text-[#444444]"
                >
                  <span>Categories</span>
                  <FaGreaterThan size={'0.8em'} />
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex items-center justify-between font-poppins text-sm font-bold text-[#444444]"
                >
                  <span>Products</span>
                  <FaGreaterThan size={'0.8em'} />
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex items-center justify-between font-poppins text-sm font-bold text-[#444444]"
                >
                  <span>Others</span>
                  <FaGreaterThan size={'0.8em'} />
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex items-center justify-between font-poppins text-sm font-bold text-[#444444]"
                >
                  <span>Blog</span>
                  <FaGreaterThan size={'0.8em'} />
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex items-center justify-between font-poppins text-sm font-bold text-[#444444]"
                >
                  <span>Hot Offers</span>
                  <FaGreaterThan size={'0.8em'} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2.5 border-t border-solid border-[#eeeeee] py-4">
          <div>
            <Link
              className="box-content flex size-10 items-center justify-center rounded-full bg-[#f7f7f7] p-1 text-[#000000] transition-all hover:bg-[#000000] hover:text-white"
              href={'https://github.com/AliDeWeb'}
              prefetch={false}
            >
              <TbBrandGithubFilled size={'1.6em'} />
            </Link>
          </div>
          <div>
            <Link
              className="box-content flex size-10 items-center justify-center rounded-full bg-[#f7f7f7] p-1 text-[#1DA1F2] transition-all hover:bg-[#1DA1F2] hover:text-white"
              href={'https://x.com/AliDeWeb?t=_C1tGVNTg8S2mbmhhpHtXA&s=09'}
              prefetch={false}
            >
              <FaTwitter size={'1.6em'} />
            </Link>
          </div>
        </div>
      </div>
      <Overlay isActive={isHamburgerMenuOpen} onClick={closeMenuHandler} />
    </>
  );
};

export default HamburgerMenu;

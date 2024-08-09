'use client';

import React from 'react';
import Link from 'next/link';

// Icons
import { CiUser, CiHeart } from 'react-icons/ci';
import { PiShoppingCartSimple } from 'react-icons/pi';
import { HiOutlineHome } from 'react-icons/hi2';
import { BsShop } from 'react-icons/bs';

// Context
import { cartMenuContext } from '@/context/cartMenuContext';

const MobileToolBar = () => {
  // Context
  const { setIsCartMenuOpen } = React.useContext(cartMenuContext);

  // Callbacks
  const cartMenuStatusHandler = React.useCallback(() => {
    setIsCartMenuOpen(true);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 flex h-[60px] w-full items-center justify-evenly border-t border-solid border-[#eeeeee] bg-white px-5 py-2.5 sm:hidden">
      <Link href="/register" className="text-[#555555]">
        <CiUser size={'1.7em'} />
      </Link>

      <Link href="/" className="relative text-[#555555]">
        <CiHeart size={'1.7em'} />
        <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-[#ff6767] font-poppins text-xs font-light text-white">
          6
        </span>
      </Link>

      <Link href="/" className="text-[#555555]">
        <HiOutlineHome size={'1.7em'} />
      </Link>

      <button
        onClick={cartMenuStatusHandler}
        className="relative text-[#555555]"
      >
        <PiShoppingCartSimple size={'1.7em'} />
        <span className="absolute -right-1 -top-1.5 flex size-4 items-center justify-center rounded-full bg-[#ff6767] font-poppins text-xs font-light text-white">
          8
        </span>
      </button>

      <Link href="/" className="text-[#555555]">
        <BsShop size={'1.6em'} />
      </Link>
    </div>
  );
};

export default MobileToolBar;

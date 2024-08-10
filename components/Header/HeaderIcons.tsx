'use client';

import React from 'react';
import Link from 'next/link';

// Icons
import { CiUser, CiHeart } from 'react-icons/ci';
import { PiShoppingCartSimple } from 'react-icons/pi';

// Components
import MegaMenu from '../MegaMenu/MegaMenu';

// Data
const megaMenuItems: { title: string; link: string }[] = [
  { title: 'register', link: '/register' },
  { title: 'checkout', link: '/' },
  { title: 'login', link: '/login' },
];

// Types
interface HeaderIconsProps {
  smallIcons?: boolean;
}

// Context
import { cartMenuContext } from '@/context/cartMenuContext';

const HeaderIcons = ({ smallIcons }: HeaderIconsProps) => {
  // States
  const [isMegaMenuActive, setIsMegaMenuActive] =
    React.useState<boolean>(false);

  // Context
  const { setIsCartMenuOpen } = React.useContext(cartMenuContext);

  // Callbacks
  const megaMenuStatusHandler = React.useCallback(() => {
    setIsMegaMenuActive((prev: boolean) => !prev);
  }, []);
  const cartMenuStatusHandler = React.useCallback(() => {
    setIsCartMenuOpen(true);
  }, []);

  return (
    <div
      className={`relative flex items-center ${
        !!smallIcons ? 'gap-3' : 'gap-6'
      } text-[#444444] child:transition-all hover:child:text-[#3474d4]`}
    >
      <button onClick={megaMenuStatusHandler}>
        <CiUser size={`${!!smallIcons ? '1.4em' : '1.8em'}`} />
      </button>
      <MegaMenu
        items={megaMenuItems}
        isActive={isMegaMenuActive}
        setIsActive={setIsMegaMenuActive}
        className="absolute -bottom-[116px] -left-[100px] z-50"
      />

      <Link href={'/'} className="relative">
        <span
          className={`absolute -bottom-[6px] -right-[8px] ${
            !!smallIcons ? 'size-4 text-xs' : 'size-5 text-sm'
          } flex items-center justify-center rounded-full bg-[#777777] font-poppins text-white`}
        >
          6
        </span>
        <CiHeart size={`${!!smallIcons ? '1.4em' : '1.8em'}`} />
      </Link>
      <button className="relative" onClick={cartMenuStatusHandler}>
        <span
          className={`absolute -bottom-[6px] -right-[8px] ${
            !!smallIcons ? 'size-4 text-xs' : 'size-5 text-sm'
          } flex items-center justify-center rounded-full bg-[#777777] font-poppins text-white`}
        >
          6
        </span>
        <PiShoppingCartSimple size={`${!!smallIcons ? '1.4em' : '1.6em'}`} />
      </button>
    </div>
  );
};

export default HeaderIcons;

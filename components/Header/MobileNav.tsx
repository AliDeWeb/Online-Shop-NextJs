'use client';

import React from 'react';

// Components
import HeaderIcons from './HeaderIcons';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

// Contexts
import { hamburgerMenuContext } from '@/context/hamburgerMenuContext';

// Icons
import { IoIosMenu } from 'react-icons/io';

const MobileNav = () => {
  // Context
  const { setIsHamburgerMenuOpen } = React.useContext(hamburgerMenuContext);

  // Callback
  const openMenuHandler = React.useCallback(() => {
    setIsHamburgerMenuOpen(true);
  }, []);

  return (
    <div className="mb-2.5 border-b border-solid border-black/5">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={openMenuHandler}
              className="flex items-center justify-between text-[#444444]"
            >
              <IoIosMenu size={'1.4em'} />
            </button>
            <HamburgerMenu />
          </div>
          <div>
            <HeaderIcons smallIcons={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;

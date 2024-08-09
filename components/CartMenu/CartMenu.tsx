'use client';

import React from 'react';

// Icons
import { IoClose } from 'react-icons/io5';

// Components
import Overlay from '../Overlay/Overlay';
import CartMenuProductBox from './CartMenuProductBox';

// Context
import CartMenuProvider, { cartMenuContext } from '@/context/cartMenuContext';

const CartMenu = () => {
  // Context
  const { isCartMenuOpen, setIsCartMenuOpen } =
    React.useContext(cartMenuContext);

  // Callback
  const closeMenuHandler = React.useCallback(() => {
    setIsCartMenuOpen(false);
  }, []);

  return (
    <CartMenuProvider>
      <>
        <div
          className={`fixed bottom-0 top-0 flex h-[100dvh] w-[300px] flex-col justify-between bg-white p-4 ${
            isCartMenuOpen ? 'right-0' : '-right-[300px]'
          } z-50 transition-all duration-300`}
        >
          <div>
            <div className="mb-2.5 flex items-center justify-between border-b-2 border-solid border-[#eeeeee] pb-2.5">
              <h2 className="font-montserrat text-lg font-bold text-[#555555]">
                My Cart
              </h2>
              <button className="text-[#555555]" onClick={closeMenuHandler}>
                <IoClose size={'1.4em'} />
              </button>
            </div>
            <div>
              <ul className="divide-y divide-solid divide-[#eeeeee] child:px-1 child:py-2.5">
                <CartMenuProductBox />
                <CartMenuProductBox />
              </ul>
            </div>
          </div>
        </div>
        <Overlay isActive={isCartMenuOpen} onClick={closeMenuHandler} />
      </>
    </CartMenuProvider>
  );
};

export default CartMenu;

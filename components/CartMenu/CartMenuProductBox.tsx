'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Images
import cartProduct from '@/public/images/test/product-cart.jpg';

// Icons
import { IoClose } from 'react-icons/io5';

const CartMenuProductBox = () => {
  // States
  const [count, setCount] = React.useState(1);

  // Callback
  const addCount = React.useCallback(() => {
    setCount((prev) => (prev += 1));
  }, [count]);
  const minusCount = React.useCallback(() => {
    if (count === 0) return;

    setCount((prev) => (prev -= 1));
  }, [count]);

  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-2">
        <div>
          <Link href="/">
            <Image
              src={cartProduct}
              alt="product image"
              width={65}
              height={65}
              className="size-[65px]"
            />
          </Link>
        </div>
      </div>
      <div className="col-span-3">
        <h3 className="line-clamp-1 font-poppins font-normal">
          T-shirt For Women
        </h3>
        <p className="my-1 font-poppins font-bold">
          $76.00
          <span className="text-sm font-normal"> x 1</span>
        </p>
        <div className="w-max border border-solid border-[#eeeeee] py-1 font-poppins font-normal text-[#777777]">
          <button onClick={minusCount} className="mx-4">
            -
          </button>
          <span className="text-[#eeeeee]">|</span>
          <span className="mx-2">{count}</span>
          <span className="text-[#eeeeee]">|</span>
          <button onClick={addCount} className="mx-4">
            +
          </button>
        </div>
      </div>
      <div className="col-span-1">
        <button className="text-[#ff0000]">
          <IoClose />
        </button>
      </div>
    </div>
  );
};

export default CartMenuProductBox;

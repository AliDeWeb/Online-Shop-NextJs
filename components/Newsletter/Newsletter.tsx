'use client';

import React from 'react';

// Components
import Overlay from '../Overlay/Overlay';

// Icons
import { IoClose } from 'react-icons/io5';

const Newsletter = () => {
  // States
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  // Callbacks
  const closeNewsletterModalHandler = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div>
      <div
        className={`${isOpen ? 'visible opacity-100' : 'invisible opacity-0'} fixed left-1/2 top-1/2 z-50 mx-5 w-[700px] -translate-x-1/2 -translate-y-1/2 bg-white bg-[url('/images/newsletter-bg.png')] bg-cover bg-center bg-no-repeat p-[30px] transition-all`}
      >
        <button
          onClick={closeNewsletterModalHandler}
          className="absolute right-4 top-4 text-[#777777]"
        >
          <IoClose size={'1.4em'} />
        </button>
        <h2 className="mb-2.5 text-center font-montserrat text-[22px] font-bold text-[#444444]">
          Subscribe Newsletter
        </h2>
        <p className="mx-auto max-w-[305px] text-center font-poppins text-sm font-normal text-[#777777]">
          Subscribe the ekka ecommerce to get in touch and get the future
          update.
        </p>
        <input
          type="text"
          className="mx-auto my-4 block h-[45px] w-[305px] rounded-[30px] border border-solid border-[#ededed] bg-white px-4 font-poppins font-normal text-[#444444] outline-none"
          placeholder="Email Address"
        />
        <button className="mx-auto block h-10 w-max rounded-[30px] bg-[#3474d4] px-4 font-poppins font-bold text-white">
          SUBSCRIBE
        </button>
      </div>
      <Overlay isActive={isOpen} onClick={closeNewsletterModalHandler} />
    </div>
  );
};

export default Newsletter;

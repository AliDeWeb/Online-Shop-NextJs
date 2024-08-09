'use client';

import React from 'react';

// Icons
import { IoSearchOutline } from 'react-icons/io5';

const Search = () => {
  // Refs
  const searchInput = React.useRef<null | HTMLInputElement>(null);

  // Callbacks
  const searchHandler = React.useCallback(() => {
    if (!searchInput || !searchInput.current?.value.trim()) return;

    //   TODO: the value of `searchValue` should be trim before any action
    console.log(searchInput.current?.value);
  }, []);

  return (
    <div className="flex w-[320px] items-center justify-between border border-solid border-[#3474d4] px-4 py-2.5 text-[#555555] lg:w-[500px]">
      <input
        ref={searchInput}
        type="text"
        placeholder="search products..."
        className={`w-[calc(100%-30px)] border-none font-poppins text-sm font-normal outline-none`}
      />
      <button
        onClick={searchHandler}
        className="cursor-pointer transition-all hover:text-[#3474d4]"
      >
        <IoSearchOutline size={'1.4em'} />
      </button>
    </div>
  );
};

export default Search;

"use client";

import React from "react";

// Icons
import { IoSearchOutline } from "react-icons/io5";

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
    <div className="flex items-center justify-between w-[320px] lg:w-[500px] px-4 py-2.5 border border-solid border-[#3474d4] text-[#555555]">
      <input
        ref={searchInput}
        type="text"
        placeholder="search products..."
        className={`font-poppins font-normal text-sm outline-none border-none w-[calc(100%-30px)]`}
      />
      <button
        onClick={searchHandler}
        className="hover:text-[#3474d4] cursor-pointer transition-all"
      >
        <IoSearchOutline size={"1.4em"} />
      </button>
    </div>
  );
};

export default Search;

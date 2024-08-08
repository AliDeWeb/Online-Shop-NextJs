"use client";

import React, { ChangeEvent } from "react";

// Icons
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  // States
  const [searchValue, setSearchValue] = React.useState<string>("");

  // Callbacks
  const searchHandler = React.useCallback(() => {
    if (!searchValue.trim().length) return;

    //   TODO: the value of `searchValue` should be trim before any action
    console.log(searchValue);
  }, [searchValue]);
  const searchValueChangeHandler = React.useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearchValue((e.target as HTMLInputElement).value || "");
    },
    []
  );

  return (
    <div className="flex items-center justify-between w-[500px] px-4 py-2.5 border border-solid border-[#3474d4] text-[#555555]">
      <input
        defaultValue={searchValue}
        value={searchValue}
        onChange={searchValueChangeHandler}
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

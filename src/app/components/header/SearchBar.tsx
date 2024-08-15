"use client";

import { NextPage } from "next";
import { LuSearch } from "react-icons/lu";

interface Props {}

const SearchBar: NextPage<Props> = ({}) => {
  return (
    <div className="relative max-w-[950px] w-full">
      <input
        type="text"
        placeholder="Search for products (e.g. fish, banana, milk)"
        className="w-full outline-0 py-3 pl-5 pr-12 rounded-md"
      />
      <LuSearch
        className="absolute right-4 top-0 bottom-0 my-auto text-[#10B981]"
        size={22}
      />
    </div>
  );
};

export default SearchBar;

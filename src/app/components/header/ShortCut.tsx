"use client";

import { NextPage } from "next";
import { LuBell, LuShoppingCart, LuUser2 } from "react-icons/lu";

interface Props {}

const ShortCut: NextPage<Props> = ({}) => {
  return (
    <div className="items-center gap-3 hidden lg:flex">
      <div className="h-11 w-11 hover:bg-[#ffffff33] grid place-content-center rounded-full cursor-pointer relative">
        <LuShoppingCart size={25} className="text-white" />
        <span className="absolute top-0 right-0 text-xs bg-rose-500 text-white py-[2px] px-[5px] rounded-full">
          12
        </span>
      </div>

      <div className="h-11 w-11 hover:bg-[#ffffff33] grid place-content-center rounded-full cursor-pointer relative">
        <LuBell size={25} className="text-white" />
        <span className="absolute top-0 right-0 text-xs bg-rose-500 text-white py-[2px] px-[5px] rounded-full">
          9
        </span>
      </div>

      <div className="h-11 w-11 hover:bg-[#ffffff33] grid place-content-center rounded-full cursor-pointer">
        <LuUser2 size={25} className="text-white" />
      </div>
    </div>
  );
};

export default ShortCut;

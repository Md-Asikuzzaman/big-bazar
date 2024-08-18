"use client";

import { NextPage } from "next";
import {
  LuBell,
  LuHome,
  LuMenu,
  LuShoppingCart,
  LuUser2,
} from "react-icons/lu";
import Container from "../Container";

interface Props {}

const StickyNavigation: NextPage<Props> = ({}) => {
  return (
    <div className="bg-[#10B981] fixed bottom-0 left-0 w-full md:hidden">
      <Container>
        <div className="flex justify-between gap-3 py-2 relative">
          <div className="h-12 w-12 hover:bg-[#ffffff33] grid place-content-center rounded-full cursor-pointer shrink-0">
            <LuMenu size={26} className="text-white" />
          </div>

          <div className="h-12 w-12 hover:bg-[#ffffff33] grid place-content-center rounded-full cursor-pointer shrink-0">
            <LuUser2 size={26} className="text-white" />
          </div>

          {/* home option */}
          <div className="h-12 w-12 bg-white grid place-content-center rounded-full cursor-pointer shrink-0">
            <LuHome size={26} className="text-[#10B981]" />
          </div>

          <div className="h-12 w-12 hover:bg-[#ffffff33] grid place-content-center rounded-full cursor-pointer relative shrink-0">
            <LuShoppingCart size={26} className="text-white" />
            <span className="absolute top-0 right-0 text-xs bg-rose-500 text-white py-[2px] px-[5px] rounded-full">
              12
            </span>
          </div>

          <div className="h-12 w-12 hover:bg-[#ffffff33] grid place-content-center rounded-full cursor-pointer relative shrink-0">
            <LuBell size={26} className="text-white" />
            <span className="absolute top-0 right-0 text-xs bg-rose-500 text-white py-[2px] px-[5px] rounded-full">
              9
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StickyNavigation;

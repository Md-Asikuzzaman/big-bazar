"use client";

import { NextPage } from "next";
import {
  LuBadgeAlert,
  LuChevronDown,
  LuFileText,
  LuGift,
  LuPhoneIncoming,
  LuShieldCheck,
  LuShieldQuestion,
  LuShoppingBag,
  LuUsers2,
} from "react-icons/lu";
import NavOption from "./NavOption";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";

interface Props {}

const NavigationMenu: NextPage<Props> = ({}) => {
  const [isPages, setIsPages] = useState(false);

  useEffect(() => {
    window.addEventListener("click", () => {
      setIsPages(false);
    });
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    setIsPages((prevState) => !prevState);
  };

  return (
    <ul className="flex gap-10 text-sm">
      <li className="relative">
        Categories
        <div className="absolute top-0 left-0 translate-y-8 bg-white shadow-lg w-12 min-h-[500px] p-4 rounded-lg hidden">
          empty
        </div>
      </li>
      <li className="hover:text-[#28A745]">
        <Link href={"about-us"}>About Us</Link>
      </li>
      <li className="hover:text-[#28A745]">
        <Link href={"contact-us"}>Contact Us</Link>
      </li>

      {/* pages options */}
      <li
        className={clsx(
          "relative hover:text-[#28A745]",
          isPages && "text-[#28A745]"
        )}
        onClick={handleClick}
      >
        <span className="flex items-center gap-2 select-none cursor-pointer">
          Pages
          <LuChevronDown
            className={clsx(
              "transition-transform",
              isPages ? "-rotate-180" : "rotate-0"
            )}
          />
        </span>
        <div
          className={clsx(
            "absolute top-0 left-0 translate-y-8 bg-white shadow-lg w-72 h-[400px] p-4 rounded-lg flex-col gap-2 overflow-y-auto cs-bar",
            isPages ? "flex" : "hidden"
          )}
        >
          <NavOption title="Offers" href="/offers" Icon={LuGift} />
          <NavOption title="Checkout" href="/checkout" Icon={LuShoppingBag} />
          <NavOption title="FAQ" href="/faq" Icon={LuShieldQuestion} />
          <NavOption title="About us" href="/about-us" Icon={LuUsers2} />
          <NavOption
            title="Contact us"
            href="/contact-us"
            Icon={LuPhoneIncoming}
          />
          <NavOption
            title="Privacy policy"
            href="/privacy-policy"
            Icon={LuShieldCheck}
          />
          <NavOption
            title="Terms & Conditions"
            href="/terms-and-conditions"
            Icon={LuFileText}
          />
          <NavOption title="404" href="/not-found" Icon={LuBadgeAlert} />
        </div>
      </li>
    </ul>
  );
};

export default NavigationMenu;

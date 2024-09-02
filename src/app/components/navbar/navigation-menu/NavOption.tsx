"use client";

import { NextPage } from "next";
import Link from "next/link";
import { IconType } from "react-icons";

interface Props {
  href: string;
  title: string;
  Icon: IconType;
}

const NavOption: NextPage<Props> = ({ title, href, Icon }) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 hover:bg-[#28a7460c] text-[#28a745] p-2 rounded-md transition-colors"
    >
      <Icon size={16} />
      {title}
    </Link>
  );
};

export default NavOption;

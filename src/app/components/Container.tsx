"use client";

import { NextPage } from "next";

interface Props {
  children: React.ReactNode;
}

const Container: NextPage<Props> = ({ children }) => {
  return <div className="max-w-[1536px] mx-auto px-5">{children}</div>;
};

export default Container;

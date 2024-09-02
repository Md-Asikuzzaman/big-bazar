"use client";

import { NextPage } from "next";
import Container from "../Container";
import NavigationOption from "./navigation-option/NavigationOption";
import NavigationMenu from "./navigation-menu/NavigationMenu";

interface Props {}

const Navigation: NextPage<Props> = ({}) => {
  return (
    <section className="hidden md:block bg-white border-b py-3">
      <Container>
        <div className="flex items-center justify-between">
          <NavigationMenu />
          <NavigationOption />
        </div>
      </Container>
    </section>
  );
};

export default Navigation;

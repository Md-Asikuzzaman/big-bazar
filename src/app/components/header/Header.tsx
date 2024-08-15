import { NextPage } from "next";

import Container from "../Container";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import ShortCut from "./ShortCut";

interface Props {}

const Header: NextPage<Props> = ({}) => {
  return (
    <header className="bg-[#10B981] py-3">
      <Container>
        <div className="flex items-center justify-between gap-3 lg:gap-12 flex-col lg:flex-row">
          <Logo />
          <SearchBar />
          <ShortCut />
        </div>
      </Container>
    </header>
  );
};

export default Header;

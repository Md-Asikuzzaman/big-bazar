import { NextPage } from "next";
import Header from "../components/header/Header";
import StickyNavigation from "../components/navbar/StickyNavigation";

interface Props {
  children: React.ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <StickyNavigation />
      {children}
    </>
  );
};

export default Layout;

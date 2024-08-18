import { NextPage } from "next";
import Header from "../components/header/Header";
import StickyNavigation from "../components/navbar/StickyNavigation";
import NavBar from "../components/navbar/Navigation";

interface Props {
  children: React.ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <NavBar />
      {children}
      <StickyNavigation />
    </>
  );
};

export default Layout;

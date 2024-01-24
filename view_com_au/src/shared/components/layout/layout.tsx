import React, { useState } from "react";
import { Header } from "../header/header";
import Footer from "../footer/footer";
import SideNavbar from "../side-navbar/sideNavbar";

interface IProps {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
}

const Layout = (props: IProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const onToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <Header onClick={onToggle} isActive={isActive} />
      {isActive && <SideNavbar />}
      {props.children}
      {<Footer />}
    </>
  );
};

export default Layout;

import React, { useState } from "react";
import SideNavbar from "../side-navbar/sideNavbar";

interface IProps {
  onToggle: () => void;
  isActive: boolean;
}
const Hamburger = (props: IProps) => {
  return (
    <div
      className={`hamburger-react ${props.isActive ? "active" : ""} xl:hidden`}
      aria-label="Sidebar Menu"
      role="button"
      tabIndex={0}
      onClick={props.onToggle}
    >
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
};

export default Hamburger;

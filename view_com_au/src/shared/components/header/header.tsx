import Image from "next/image";
import React from "react";
import Hamburger from "../hamburger/hamburger";

interface IProps {
  isActive: boolean;
  onClick: () => void;
}

export const Header = (props: IProps) => {
  //
  const renderNavLinks = () => {
    const navLinks: string[] = ["Buy", "Rent", "Sold", "Estimate", "More"];

    const renderDownArrow = () => (
      <Image src="/images/arrow.svg" width={20} height={28} alt="logo" />
    );

    return (
      <ul className="xl:flex xl:justify-center xl:items-center xl:w-full xl:gap-2 xl:text-default lg:font-medium hidden">
        {navLinks.map((link, index) =>
          link === "More" ? (
            <li
              className="flex px-3 py-2 gap-3 items-center hover:bg-at-light-200"
              key={index}
            >
              <a href="#" className="flex items-center gap-0.5">
                {link}
                <span className="flex items-center">{renderDownArrow()}</span>
              </a>
            </li>
          ) : (
            <li
              className="flex px-3 py-2 gap-3 items-center hover:bg-at-light-200"
              key={index}
            >
              <a href="#">{link}</a>
            </li>
          )
        )}
      </ul>
    );
  };

  const renderViewLogo = () => {
    return (
      <div className="w-20 h-7 lg:w-28 lg:h-10 relative">
        <Image src="/images/asset 1.svg" layout="fill" alt="company-logo" />
      </div>
    );
  };

  const renderJoinAndSignInButton = () => {
    return (
      <button className="bg-btn-color text-white text-xs font-bold py-2 w-28 xl:px-2 xl:py-3 xl:w-40 xl:font-bold rounded-lg xl:text-sm">
        Join / Sign In
      </button>
    );
  };

  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="flex w-full items-center justify-between pl-16 pr-4 xl:justify-center xl:gap-2 xl:p-0 h-12 lg:h-16">
        <Hamburger onToggle={props.onClick} isActive={props.isActive} />
        {renderViewLogo()}
        {renderNavLinks()}
        {renderJoinAndSignInButton()}
      </div>
      <div className="border-b overflow-hidden w-full" />
    </div>
  );
};

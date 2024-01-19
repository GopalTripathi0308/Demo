/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import React from "react";
import { SIDE_NAVBAR_LINKS } from "./sideNavbar.constant";

const SideNavbar = () => {
  //

  const renderSideNavbar = (start: number, end?: number) => (
    //
    <ul className="flex flex-col mb-4">
      {SIDE_NAVBAR_LINKS.slice(start, end).map((feature, index) => (
        <li key={index} className="flex items-baseline py-3">
          {SIDE_NAVBAR_LINKS.indexOf(feature) < 3 ? (
            <a href="/" className="font-medium text-black text-2xl px-5">
              {feature.title}
            </a>
          ) : (
            <div className="flex gap-4 px-2 text-black">
              <span className="w-5 h-6 relative">
                <Image src={feature.image} alt="company-logo" layout="fill" />
              </span>
              <a href="/" className="font-medium">
                {feature.title}
              </a>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="text-default w-full fixed z-40 bg-white overflow-auto h-full">
      {renderSideNavbar(0, 3)}
      {renderSideNavbar(3, 5)}
      <div className="border-b my-2" />
      {renderSideNavbar(5)}
    </div>
  );
};

export default SideNavbar;

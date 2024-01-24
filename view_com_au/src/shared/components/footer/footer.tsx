import Image from "next/image";
import {
  FOOTER_HEAD_LINKS,
  FOOTER_LINKS,
  FOOTER_LINKS_MOBILE_VIEW,
  FOOTER_SM_ICONS,
} from "./footer.constant";
import PageContainer from "../page-container/page-container";

const Footer = () => {
  const renderFooterHead = () => (
    <div className="flex justify-center lg:justify-between p-4">
      <div className="flex gap-8 lg:flex lg:gap-4 ">
        {FOOTER_SM_ICONS.map((icon) => (
          <a href="#" key={icon.alt}>
            <Image src={icon.imageSrc} width={24} height={24} alt={icon.alt} />
          </a>
        ))}
      </div>
      <div className="hidden lg:block">
        <ul className="flex gap-4">
          {FOOTER_HEAD_LINKS.map((link) => (
            <li key={link}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderFooterColumn = (start: number, end: number) => (
    <ul className="py-6 flex-col hidden lg:flex">
      {FOOTER_LINKS.slice(start, end).map((link, index) => (
        <li className="mb-2" key={index}>
          {link}
          <a
            href="#"
            target="_self"
            className="text-base text-at-dark-700 undefined text-at-dark-900  hover:underline hover:text-at-primary cursor-pointer "
            aria-label="Contact"
          ></a>
        </li>
      ))}
    </ul>
  );

  const renderFooterColumnInMobileView = (start: number, end: number) => (
    <ul className="p-6 flex flex-col lg:hidden">
      {FOOTER_LINKS_MOBILE_VIEW.slice(start, end).map((link, index) => (
        <li className="mb-2" key={index}>
          {link}
          <a
            href="#"
            target="_self"
            className="text-base text-at-dark-700 undefined text-at-dark-900  hover:underline hover:text-at-primary cursor-pointer "
            aria-label="Contact"
          ></a>
        </li>
      ))}
    </ul>
  );

  const renderFooterBottom = () => (
    <div className="my-0 mx-auto max-w-[1200px] text-default flex flex-col-reverse lg:flex-row lg:justify-between items-center p-4 ">
      <div className="flex flex-col items-center lg:items-start">
        <span>
          <Image
            src="/images/asset 1.svg"
            width={90}
            height={35}
            alt="company-logo"
          />
        </span>
        <p className="text-xs text-center">
          Copyright © 2001-2024 | resi.uatz.view.com.au Ltd
        </p>
      </div>

      <div className="flex flex-col-reverse gap-1 items-center lg:flex-row lg:justify-end">
        <p className="lg:w-[50%] text-sm text-center opacity-70">
          Part of View Media Group (VMG)
        </p>
        <span className="flex items-end">
          <Image
            src="/images/view-media.png"
            width={90}
            height={22}
            alt="company-logo"
          />
        </span>
      </div>
    </div>
  );
  return (
    <PageContainer>
      {renderFooterHead()}
      <div className="border-b" />

      <div className="flex justify-around text-center lg:justify-start lg:gap-20 lg:text-left">
        {renderFooterColumn(0, 6)}
        {renderFooterColumn(6, 11)}
        {renderFooterColumn(11, 16)}
        {renderFooterColumn(16, 19)}
        {renderFooterColumnInMobileView(0, 6)}
        {renderFooterColumnInMobileView(6, 12)}
      </div>

      <div className="border-b" />
      {renderFooterBottom()}
    </PageContainer>
  );
};

export default Footer;

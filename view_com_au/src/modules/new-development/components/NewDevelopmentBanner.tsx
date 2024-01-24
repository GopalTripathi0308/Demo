/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

import grandReveImg from "@/../public/images/grand-reve-gallery.jpg";
import enquiryImg from "@/../public/images/enquiry.svg";

import { FOOTER_SM_ICONS } from "../../../shared/components/footer/footer.constant";
import HeroBanner from "@/shared/components/hero-section/heroSection";

const NewDevelopmentBanner = (props: any) => {
  const { developmentDetail } = props.data;
  const imageLength = developmentDetail.galleries.length;

  const title = developmentDetail.title;

  const { thoroughfareNumber, thoroughfare, area, state, postalCode } =
    developmentDetail.address;

  const description = `${thoroughfareNumber} ${thoroughfare} ${area} ${state} ${postalCode}`;

  const renderSocialMediaLinks = () => (
    <div className="flex gap-4 items-center">
      {FOOTER_SM_ICONS.map((icon, index) =>
        index < 3 ? (
          <a href="#" key={icon.alt}>
            <Image
              src={icon.imageSrc}
              width={20}
              height={24}
              alt={icon.alt}
              className="text-default cursor-pointer text-xl rounded-full bg-at-light-200 w-8 h-8 justify-center items-center ml-3"
            />
          </a>
        ) : (
          ""
        )
      )}
    </div>
  );

  const renderEnquireNowBtn = () => (
    <div className="flex flex-col gap-8 lg:flex-row justify-between">
      <div className="relative">
        <button
          className="px-4 py-2 font-bold bg-btn-color text-white hover:border-at-primary-700 hover:bg-at-primary-700 active:bg-at-primary-900 disabled:opacity-50 disabled:pointer-events-none rounded-lg flex items-center justify-center"
          value="Enquire Now"
        >
          <Image src={enquiryImg} width={20} height={24} alt="enquiry-logo" />
          <span className="ml-2">Enquire Now</span>
        </button>
      </div>
    </div>
  );

  const renderImageGallery = () => (
    <div className="overflow-hidden w-full md:w-2/3 h-44 relative lg:h-auto">
      <button className="absolute right-2 top-4 z-40 text-black bg-white border-at-light-500 hover:border-indigo-950 hover:bg-slate-100 active:bg-at-light-700 disabled:opacity-50 disabled:pointer-events-none rounded-lg flex items-center justify-center text-sm font-bold py-3 px-4">
        {imageLength} Photos
      </button>
      <Image
        className="object-cover rounded-lg"
        src={grandReveImg}
        alt="rev-image"
        layout="fill"
      />
    </div>
  );

  return (
    <section className="flex flex-col gap-4 lg:flex-row mt-4 lg:mt-6 mb-8 w-full">
      <HeroBanner heading={title} description={description}>
        <div className="flex flex-col gap-4 mt-6 md:flex-row md:justify-between md:items-center md:mt-8">
          {renderEnquireNowBtn()}
          {renderSocialMediaLinks()}
        </div>
      </HeroBanner>
      {renderImageGallery()}
    </section>
  );
};

export default NewDevelopmentBanner;

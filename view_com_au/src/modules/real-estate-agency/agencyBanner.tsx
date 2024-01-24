import Image from "next/image";
import React from "react";
import bigginScottImg from "../../../public/images/bigginScott-image.jpeg";
import HeroBanner from "@/shared/components/hero-section/heroSection";

const AgencyBanner = () => {
  //
  const renderBigginScottImage = (): JSX.Element => (
    <div className="flex">
      <Image src={bigginScottImg} alt="biggin-Image" />
    </div>
  );

  return (
    <>
      <HeroBanner
        heading="BigginScott Richmond"
        description="28 Bridge Road, Richmond, VIC 3121"
        isRounded
        className="flex flex-col-reverse w-3/5 mt-8"
        extraMargin
      >
        <div
          className="flex justify-center items-center bg-black-light px-5 py-2 w-full absolute top-0 left-0
         rounded-t-md"
        >
          {renderBigginScottImage()}
        </div>
      </HeroBanner>
    </>
  );
};

export default AgencyBanner;

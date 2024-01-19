import Image from "next/image";
import React from "react";

const ConveyancingBanner = () => {
  return (
    <div className="flex flex-col-reverse px-6 py-6 gap-4 md:flex-row md:justify-between md:items-center border mx-4 mt-4 md:mt-4 lg:mt-8 relative lg:py-10 md:px-14 lg:w-full bg-banner-color rounded-xl">
      <div className="flex flex-col text-default gap-4 w-full">
        <h1 className="text-5xl banner-heading font-bold lg:text-7xl break-words">
          Buying or selling?
        </h1>
        <p className="text-sm font-normal md:text-base mt-4 ">
          Redeem your $220 conveyancing voucher and free contract review
        </p>
      </div>
      <div className="relative w-16 h-12 md:w-32 md:h-32">
        <Image src="/images/asset 15.svg" layout="fill" alt="company-logo" />
      </div>
    </div>
  );
};

export default ConveyancingBanner;

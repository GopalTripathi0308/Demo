import Image from "next/image";
import React from "react";

const DevelopmentLocation = () => {
  return (
    <div className="p-4 border-b pb-12">
      <h2 className="text-lg font-bold">Location Of Grand Reve</h2>
      <div>
        <Image src={""} alt="map-image" />
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <h6 className="text-sm font-bold undefined">Development Location</h6>
          <p className="text-xs font-normal undefined">
            6 - 18 Garthowen Crescent, Castle Hill, New South Wales 2154
          </p>
        </div>
        <div>
          <h6 className="text-sm font-bold undefined">Display Location</h6>
          <p className="text-xs font-normal undefined">
            Shop 233B, 279 Old Northern Road, Castle Hill, NSW 2154
          </p>
        </div>
        <div>
          <h6 className="text-sm font-bold undefined">Display Open Hours</h6>
          <p className="text-xs font-normal undefined">
            <p className="text-xs font-normal undefined">Not available</p>
          </p>
        </div>
        <button
          type="button"
          aria-label="button"
          className="px-4 py-2 font-bold text-white bg-btn-color border-at-primary hover:border-at-primary-700 hover:bg-at-primary-700 active:bg-at-primary-900 w-full disabled:opacity-50 disabled:pointer-events-none rounded-lg at-btn flex items-center justify-center "
        >
          Request a private appointment
        </button>
      </div>
    </div>
  );
};

export default DevelopmentLocation;

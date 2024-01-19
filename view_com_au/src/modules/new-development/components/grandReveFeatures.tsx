import React from "react";

const GrandReveFeatures = () => {
  return (
    <>
      <div className="flex w-full flex-col gap-2 p-4 overflow-hidden">
        <h2 className="text-lg font-bold mb-6 lg:mb-4">
          Features And Amenities Of Grand Reve
        </h2>
        <div className="w-full h-[164px] md:h-72 lg:h-[360px] rounded-xl overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            src="https://www.youtube.com/embed/FF08ohAgQl4"
            title="YouTube video player"
          ></iframe>
        </div>
      </div>
      <div className="border-b mt-4 pb-4" />
    </>
  );
};

export default GrandReveFeatures;

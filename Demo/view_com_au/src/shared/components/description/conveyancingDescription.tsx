import React, { useState } from "react";
import DescriptionContent from "./descriptionContent";
// import ConveyancingQandA from ".QandA";
// import ConveyancingForm from "../conveyancingForm";
import ConveyancingQandA from "./conveyancingQandA";
import ConveyancingForm from "@/modules/conveyancing/components/conveyancingForm";

const ConveyancingDescription = () => {
  return (
    <section className="flex flex-col xl:flex-row text-default mt-8">
      <div className="flex flex-col w-full gap-2 px-4">
        <div className="rounded-xl overflow-hidden h-[198px] lg:h-[446px] lg:mb-4">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            src="https://www.youtube.com/embed/SklG0T_W0ao"
            title="YouTube video player"
          ></iframe>
        </div>
        <DescriptionContent />

        <ConveyancingQandA />
      </div>
      {<ConveyancingForm />}
    </section>
  );
};

export default ConveyancingDescription;

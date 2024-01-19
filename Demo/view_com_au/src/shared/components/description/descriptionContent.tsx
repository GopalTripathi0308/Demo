import { DESCRIPTION_CONTENT } from "@/modules/conveyancing/constants/conveyancingDescription.constant";
import React from "react";
// import { DESCRIPTION_CONTENT } from "../../constants/conveyancingDescription.constant";

const DescriptionContent = () => {
  return (
    <div className="mb-8 lg:mb-16 text-default">
      {DESCRIPTION_CONTENT.map((para) => (
        <p className="text-base font-normal mb-4" key={para.id}>
          {para.content}
        </p>
      ))}
    </div>
  );
};

export default DescriptionContent;

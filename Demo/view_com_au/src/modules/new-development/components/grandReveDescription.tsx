import Image from "next/image";
import React, { useState } from "react";
import downArrow from "@/../public/images/down-arrow-blue.svg";

const GrandReveDescription = () => {
  //

  const [isActive, setIsActive] = useState<boolean>(false);
  const [contentRefs] = useState<
    Record<number, React.RefObject<HTMLParagraphElement>>
  >({});
  const onToggle = () => {
    setIsActive((prev) => !prev);

    const contentRef = contentRefs[0]; // Change this to the correct key/index
    console.log(contentRef);

    if (contentRef && contentRef.current) {
      const dynamicHeight = contentRef.current.scrollHeight;
      contentRef.current.style.maxHeight = `${
        isActive ? "200px" : dynamicHeight
      }px`;
    }
  };

  return (
    <>
      <div
        className="overflow-hidden transition-all duration-700 text-default w-full relative"
        ref={(el) => {
          if (el && !isActive) {
            el.style.maxHeight = "200px";
          }
          if (el) {
            contentRefs[0] = React.createRef<HTMLParagraphElement>(); // Change this to the correct key/index
            contentRefs[0].current = el;
          }
        }}
      >
        <div className="development-detail-container">
          <ul className="flex flex-col px-12 py-8 list-disc read-more">
            <li>5 minutes’ walk to the Metro line</li>
            <li>Short walk to Castle Towers Shopping Centre</li>
            <li>Quiet Cul-de-sac location</li>
            <li>Designed by Turner Studio</li>
            <li>High-end quality finishes</li>
            <li>‘Wolf’ kitchen appliances as standard</li>
            <li>New Apartments / Off The Plan</li>
          </ul>
        </div>

        <div className="flex flex-col p-4 gap-4">
          <p>
            Developed by award-winning Kassis Homes – with a proven ability to
            establish stunning quality properties time and time again.
          </p>
          <p>
            Designed by Turner Studio in collaboration with Arcadia landscape
            designs, Grand Reve comprises of a selection of premium apartments
            boasting a variety of studio, 1, 2 and 3 bedrooms, including a
            selection of split-level townhouse style apartment configurations
            appealing to different price points.
          </p>
          <p>
            Unsurpassed quality with Wolf’ kitchen appliances as standard for
            all apartments. The oversized 2 and 3 bedroom designs will include
            ‘Sub Zero’ fridges as standard inclusions.
          </p>
          <p className="font-bold">
            Now Selling - Book your private appointment or enquire now for more
            information.{" "}
          </p>
          <p>
            <span className="block mb-2 font-bold">
              Developer - Kassis Homes
            </span>
            Sam Kassis has been in the building industry for over 30 years.
            Starting out as a carpenter he was always buying, renovating and
            selling properties to make a living. Until he realised that his true
            passion was in building he gave up Carpentry and started Kassis
            Classic Homes.
          </p>
          <p>
            <span className="block mb-2 font-bold">
              Project Marketer - McGrath Projects
            </span>
            McGrath Projects is a highly skilled and specialised division of
            McGrath.
          </p>
        </div>
      </div>
      <button className="text-blue-500 flex gap-2 p-4" onClick={onToggle}>
        {isActive ? "Read less" : "Read more"}
        <span className={`transform ${isActive ? "rotate-180" : ""}`}>
          <Image src={downArrow} alt="down-arrow" />
        </span>
      </button>
    </>
  );
};

export default GrandReveDescription;

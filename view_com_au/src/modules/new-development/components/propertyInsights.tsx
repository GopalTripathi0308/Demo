import Image from "next/image";
import React, { useState } from "react";
import arrowImg from "@/../public/images/arrow.svg";

const PropertyInsights = (props) => {
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
        isActive ? "70px" : dynamicHeight
      }px`;
    }
  };

  return (
    <div className="flex flex-col m-4" onClick={onToggle}>
      <h2 className="font-bold text-xl">Insights on Castle hill</h2>

      <div
        className="rounded-lg border p-3 mt-6 overflow-hidden transition-all duration-700 text-default w-full relative"
        ref={(el) => {
          if (el && !isActive) {
            el.style.maxHeight = "70px";
          }
          if (el) {
            contentRefs[0] = React.createRef<HTMLParagraphElement>(); // Change this to the correct key/index
            contentRefs[0].current = el;
          }
        }}
      >
        <div className="flex sm:justify-between sm:p-2">
          <p className="font-bold">Meet the Neighbours near Castle hill</p>
          <button>
            <span>
              <Image
                src={arrowImg}
                alt="down-arrow"
                className={`${isActive && " rotate-180"}`}
              />
            </span>
          </button>
        </div>
        <p className="p-2 text-default">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis totam
          odio error porro qui modi sit, facilis quasi est cumque quaerat
          explicabo illo dicta, sint mollitia officia reprehenderit ipsum eos,
          nesciunt delectus pariatur. Accusantium quis ipsa, fugiat ex sint
          nulla blanditiis at labore mollitia ullam quam saepe deserunt eum
          magnam vero suscipit sit a asperiores. Autem, vitae fugiat. Accusamus
          asperiores sapiente, alias aliquam ab blanditiis? Perspiciatis,
          eveniet repudiandae facere inventore, molestias ipsum id ea accusamus
          quos voluptas earum aliquid soluta aperiam quia minima. Odio
          praesentium dolore possimus incidunt saepe, numquam exercitationem
          ratione accusantium ipsam. Eius dolor corporis porro molestias
          adipisci?
        </p>
      </div>
    </div>
  );
};

export default PropertyInsights;

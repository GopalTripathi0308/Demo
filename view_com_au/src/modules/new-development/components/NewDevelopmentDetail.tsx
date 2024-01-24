import Image from "next/image";
import React, { useState, useRef } from "react";
import downArrow from "@/../public/images/down-arrow-blue.svg";

const NewDevelopmentDetail = (props: any) => {
  //
  const [isActive, setIsActive] = useState<boolean | null>(false);
  const [htmlContent, setHtmlContent] = useState("");
  const contentRef = useRef<HTMLParagraphElement>(null);

  const onToggle = () => {
    setIsActive((isActive) => !isActive);
  };

  console.log(props.description.textProfile);
  console.log(htmlContent);

  const textProfileData = props.description.textProfile;

  const initialHeight = "200px";

  const maxHeight = isActive
    ? `${contentRef.current?.scrollHeight}px`
    : initialHeight;

  const renderDevelopmentSpecs = (): JSX.Element => (
    <div
      className="px-4"
      dangerouslySetInnerHTML={{
        __html: textProfileData.replace(
          "<ul>",
          '<ul class="development-detail-container list-disc list-inside" >'
        ),
      }}
      onBlur={(e) => setHtmlContent(e.currentTarget.innerHTML)}
    ></div>
  );

  return (
    <>
      <div
        className="overflow-hidden transition-all duration-700 text-default w-full relative"
        ref={contentRef}
        style={{ maxHeight }}
      >
        {renderDevelopmentSpecs()}
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

export default NewDevelopmentDetail;

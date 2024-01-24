import Image from "next/image";
import React, { useRef, useState } from "react";
import starIcon from "../../../../public/images/star-icon.svg";
import downArrow from "@/../public/images/down-arrow-blue.svg";

interface Review {
  id: number;
  authorName: string;
  totalStars: number;
  timeStamp: string;
  description: string;
}

interface ReviewCardProps {
  review: Review;
  height: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, height }) => {
  //
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef<HTMLParagraphElement>(null);

  const onToggle = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const initialHeight = height;
  console.log(initialHeight,isActive);
  

  const toggleButtonText = isActive ? "Show less" : "Show more";

  const toggleButtonIconClass = isActive ? "rotate-180" : "";

  const maxHeight = isActive
    ? `${contentRef.current?.scrollHeight}px`
    : initialHeight;

  const renderStars = () => (
    <span className="relative w-5 h-6">
      <Image src={starIcon} layout="fill" alt="star-icon" />
    </span>
  );

  return (
    <div
      className="flex flex-col xl:flex-row xl:justify-center w-full gap-4 py-2"
      key={review.id}
    >
      <div className="flex flex-col gap-2 border w-full h-fit rounded-xl py-6 px-3 bg-white">
        <div className="flex justify-between">
          <div className="flex mb-4">
            {Array(review.totalStars).fill(renderStars())}
          </div>
          <p>{review.timeStamp}</p>
        </div>
        <p
          ref={contentRef}
          style={{ maxHeight }}
          className="overflow-hidden transition-all duration-700 text-default"
        >
          {review.description}
        </p>
        <button className="text-blue-500 flex gap-2" onClick={onToggle}>
          {toggleButtonText}
          <span className={`transform ${toggleButtonIconClass}`}>
            <Image src={downArrow} alt="down-arrow" />
          </span>
        </button>

        <p className="text-xs mt-2 text-default font-bold">
          {review.authorName}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;

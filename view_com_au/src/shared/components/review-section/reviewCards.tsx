import Image from "next/image";
import React, { createRef, useState } from "react";
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
  key?: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  //
  const [activeCardId, setActiveCardId] = useState<null | number>(null);
  const contentRefs: Record<number, React.RefObject<HTMLParagraphElement>> = {};

  const onToggle = (id: number) => {
    setActiveCardId((prevId) => (prevId === id ? null : id));

    const contentRef = contentRefs[id];
    console.log(contentRef.current);

    if (contentRef.current) {
      const dynamicHeight = contentRef.current.scrollHeight;
      contentRef.current.style.maxHeight = `${
        activeCardId === id ? "76px" : dynamicHeight
      }px`;
    }
  };

  const renderStars = () => (
    <span className="relative w-5 h-6">
      <Image src={starIcon} layout="fill" alt="star-icon" />
    </span>
  );

  return (
    <div className="flex flex-col xl:flex-row xl:justify-center w-full gap-4">
      <div className="flex-col border w-full h-fit rounded-xl py-6 px-3 bg-white">
        <div className="flex justify-between">
          <div className="flex mb-4">
            {Array(review.totalStars).fill(renderStars())}
          </div>
          <p>{review.timeStamp}</p>
        </div>
        <p
          ref={(el) => {
            // Create a ref for the content paragraph
            contentRefs[review.id] = React.createRef<HTMLParagraphElement>();

            if (el && !activeCardId) {
              // Set the initial height for inactive cards
              el.style.maxHeight = "76px";
            }

            if (el) {
              // Save the contentRef to the appropriate review
              contentRefs[review.id].current = el;
            }
          }}
          className="overflow-hidden transition-all duration-700 text-default"
        >
          {review.description}
        </p>
        <button
          className="text-blue-500 flex gap-2"
          onClick={() => onToggle(review.id)}
        >
          {activeCardId === review.id ? "Show less" : "Show more"}
          <span
            className={`transform ${
              activeCardId === review.id ? "rotate-180" : ""
            }`}
          >
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

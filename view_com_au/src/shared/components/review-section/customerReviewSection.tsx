import Image from "next/image";
import React, { useState } from "react";
import starIcon from "../../../../public/images/star-icon.svg";
import ReviewCard from "./reviewCards";
import { CUSTOMER_REVIEWS } from "./customerReviewSection.constant";

const CustomerReviewSection = () => {
  return (
    <section className="w-full flex flex-col mt-8 px-6 py-8 lg:rounded-xl mb-8 lg:mb-14 bg-[#F6F6F6]">
      <h2 className="text-xl md:text-2xl font-bold text-default pb-6">
        What Settle Easy customers are saying...
      </h2>
      <div className="w-full flex flex-col gap-4 xl:flex-row">
        {CUSTOMER_REVIEWS.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
            height='76px'
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviewSection;

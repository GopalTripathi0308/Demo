import Image from "next/image";
import React, { useState } from "react";
import starIcon from "../../../../public/images/star-icon.svg";
import ReviewCard from "./reviewCards";
import { CUSTOMER_REVIEWS } from "./customerReviewSection.constant";

const CustomerReviewSection = () => {
  return (
    <section className="w-full my-0 mx-auto max-w-[1200px] flex flex-col mt-8 border py-10 px-4 lg:rounded-xl mb-8 lg:mb-14 bg-[#F6F6F6]">
      <h2 className="text-2xl font-bold text-default pb-6">
        What Settle Easy customers are saying...
      </h2>
      <div className="flex flex-col gap-4 xl:flex-row">
        {CUSTOMER_REVIEWS.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviewSection;

import React, { useState } from "react";
import { FREQUENTLY_ASKED_QUESTIONS } from "./conveyancingQnA.constant";
// import { FREQUENTLY_ASKED_QUESTIONS } from "../../constants/conveyancingQnA.constant";

const ConveyancingQandA = () => {
  const [isExpanded, setIsExpanded] = useState<number | null>(null);

  const toggleDescription = (id: number) => {
    setIsExpanded((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold undefined mb-4 lg:mb-6">
          Frequently Asked Questions
        </h2>
      </div>

      {FREQUENTLY_ASKED_QUESTIONS.map((qna) => (
        <div className="border-b p-1" key={qna.id}>
          <div
            className="flex items-center justify-between py-3.5 text-default cursor-pointer"
            onClick={() => toggleDescription(qna.id)}
          >
            <p className="text-base font-bold pr-2">{qna.question}</p>
            <span className="text-2xl font-medium pb-1">
              {isExpanded === qna.id ? "-" : "+"}
            </span>
          </div>

          <p
            style={{
              maxHeight: isExpanded === qna.id ? "150px" : "4px",
            }}
            className="overflow-hidden transition-all duration-700 text-default"
          >
            {qna.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ConveyancingQandA;

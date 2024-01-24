import React, { useRef, useState } from "react";
import { FREQUENTLY_ASKED_QUESTIONS } from "../constants/conveyancingQnA.constant";

interface IProps {
  content: {
    id: number;
    question: string;
    answer: string;
  };

  border: boolean;
  height: string;
}

const QnASection = ({ content, border, height }: IProps) => {
  //
  const [isActive, setIsActive] = useState<boolean | null>(false);
  const contentRef = useRef<HTMLParagraphElement>(null);

  const onToggle = () => {
    setIsActive((isActive) => !isActive);
  };

  const initialHeight = height;

  const maxHeight = isActive
    ? `${contentRef.current?.scrollHeight}px`
    : initialHeight;

  return (
    <div className={`${border && "border-b pb-2"}`}>
      <div
        className="flex items-center justify-between py-2 text-default cursor-pointer"
        onClick={() => onToggle()}
      >
        <p className="text-base font-bold pr-2">{content.question}</p>
        <span className="text-2xl font-medium pb-1">
          {isActive ? "-" : "+"}
        </span>
      </div>

      <p
        style={{ maxHeight }}
        className="overflow-hidden transition-all duration-700 text-default"
        ref={contentRef}
      >
        {content.answer}
      </p>
    </div>
  );
};

export default QnASection;

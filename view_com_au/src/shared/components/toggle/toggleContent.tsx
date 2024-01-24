import React, { useState, useRef } from "react";

interface ToggleContentProps {
  initialHeight: string;
  content: React.ReactNode;
  icon:any
}

const ToggleContent: React.FC<ToggleContentProps> = ({
  initialHeight,
  content,
  icon
}) => {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const onToggle = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const toggleButtonText = isActive ? "Show less" : "Show more";

  const toggleButtonIconClass = isActive ? "rotate-180" : "";

  const maxHeight = isActive
    ? `${contentRef.current?.scrollHeight}px`
    : initialHeight;

  return (
    <div>
      <div
        style={{ maxHeight }}
        ref={contentRef}
        className="overflow-hidden transition-all duration-700"
      >
        {content}
      </div>
      <button className="text-blue-500 flex gap-2" onClick={onToggle}>
        {toggleButtonText}
        <span className={`transform ${toggleButtonIconClass}`}>
          {icon}
        </span>
      </button>
    </div>
  );
};

export default ToggleContent;

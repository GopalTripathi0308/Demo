import React from "react";

const Select = (props) => {
  const { options, label, className, id, value } = props;
  return (
    <div className="flex-col">
      {label && (
        <label htmlFor={id} className={`block w-full${className}`}>
          {label}
        </label>
      )}
      <select
        id={id}
        className={`block w-full bg-white border p-3 rounded-lg text-default ${className}`}
      >
        {options?.map((option) =>
          option === "Select Your State" ? (
            <option key={option} value="none" selected disabled hidden >
              {option}
            </option>
          ) : (
            <option key={option} value={value}>
              {option}
            </option>
          )
        )}
      </select>
    </div>
  );
};

export default Select;

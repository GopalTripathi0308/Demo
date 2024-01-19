import React from "react";
import { UseFormRegister } from "react-hook-form";
import { IFormInput } from "../../../modules/conveyancing/components/conveyancingForm";

interface InputProps {
  className: string;
  type: string;
  id: string;
  label: string;
  register: UseFormRegister<IFormInput>;
  value?: string;
}

const Input: React.FC<InputProps> = ({
  className,
  type,
  id,
  label,
  register,
  value,
}) => {
  return (
    <div className="flex-col">
      <label htmlFor={id}>{label}</label>
      <input
        className={`border block w-full rounded-lg p-2 ${className}`}
        type={type}
        id={id}
        {...register(id)}
        value={value}
      />
    </div>
  );
};

export default Input;

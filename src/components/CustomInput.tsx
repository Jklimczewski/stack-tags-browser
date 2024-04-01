import { ChangeEvent } from "react";

interface SelectProps {
  value: string | number;
  type: string;
  min: number;
  max: number;
  customOnChange?: (value: string) => void;
}

function CustomInput({ value, type, min, max, customOnChange }: SelectProps) {
  return (
    <input
      type={type}
      value={value}
      min={min}
      max={max}
      className="w-20 input input-bordered text-xl"
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        customOnChange && customOnChange(e.target.value);
      }}
    />
  );
}

export { CustomInput };

import { ChangeEvent } from "react";
import { SelectOption } from "../types";

interface SelectProps {
  value: string;
  options: SelectOption[];
  customOnChange?: (value: string) => void;
}

function CustomSelect({ value, options, customOnChange }: SelectProps) {
  const selectOptions = options.map((option: SelectOption, index) => (
    <option key={index} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <select
      className="select select-bordered"
      value={value}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => {
        customOnChange && customOnChange(e.target.value);
      }}
    >
      {selectOptions}
    </select>
  );
}

export { CustomSelect };

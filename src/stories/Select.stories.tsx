import type { Meta, StoryObj } from "@storybook/react";

import { CustomSelect } from "../components/CustomSelect";
import { useState } from "react";
import { SelectOption } from "../types";

const meta: Meta<typeof CustomSelect> = {
  component: CustomSelect,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof CustomSelect>;

const SelectWithHooksComp = () => {
  const [sorting, setSorting] = useState("");

  const onSortingChange = (value: string) => {
    const words = value.split("_");

    setSorting(`${words[0]}_${words[1]}`);
  };

  const optionsToSelect: SelectOption[] = [
    { value: "popular_desc", label: "Ilość malejąco" },
    { value: "popular_asc", label: "Ilość rosnąco" },
    { value: "name_asc", label: "Nazwa A-Z" },
    { value: "name_desc", label: "Nazwa Z-A" },
  ];

  return (
    <CustomSelect
      value={sorting}
      options={optionsToSelect}
      customOnChange={onSortingChange}
    />
  );
};

export const SelectWithHook: Story = {
  render: () => <SelectWithHooksComp />,
};

export const SelectView: Story = {
  args: {
    value: "domyślnie",
    options: [{ value: "domyślnie", label: "domyślnie" }],
  },
};

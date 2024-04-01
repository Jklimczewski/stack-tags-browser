import type { Meta, StoryObj } from "@storybook/react";

import { CustomInput } from "../components/CustomInput";
import { useState } from "react";

const meta: Meta<typeof CustomInput> = {
  component: CustomInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof CustomInput>;

const InputWithHooksComp = () => {
  const [pagesize, setPageSize] = useState(30);

  const onPageSizeChange = (value: string) => {
    if (parseInt(value) > 100) {
      value = "100";
    }
    setPageSize(parseInt(value));
  };

  return (
    <CustomInput
      type="number"
      value={pagesize}
      min={0}
      max={100}
      customOnChange={onPageSizeChange}
    />
  );
};

export const InputWithHook: Story = {
  render: () => <InputWithHooksComp />,
};

export const InputView: Story = {
  args: {
    type: "number",
    value: 30,
    min: 0,
    max: 100,
  },
};

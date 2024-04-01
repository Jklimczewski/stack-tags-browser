import type { Meta, StoryObj } from "@storybook/react";

import { Error } from "../components/Error";

const meta: Meta<typeof Error> = {
  component: Error,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Error>;

export const ErrorView: Story = {
  args: {
    children: "401 - unauthorized",
  },
};

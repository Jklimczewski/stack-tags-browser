import type { Meta, StoryObj } from "@storybook/react";

import { NoContent } from "../components/NoContent";

const meta: Meta<typeof NoContent> = {
  component: NoContent,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof NoContent>;

export const NoContentView: Story = {
  args: {},
};

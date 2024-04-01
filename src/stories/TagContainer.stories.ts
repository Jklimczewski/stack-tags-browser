import type { Meta, StoryObj } from "@storybook/react";

import { TagContainer } from "../components/TagContainer";

const meta: Meta<typeof TagContainer> = {
  component: TagContainer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TagContainer>;

export const TagView: Story = {
  args: {
    tag: {
      id: 1,
      name: "javascript",
      count: 1000,
    },
  },
};

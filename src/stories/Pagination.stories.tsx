import type { Meta, StoryObj } from "@storybook/react";

import { Pagination } from "../components/Pagination";
import { useEffect, useState } from "react";

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

const PaginationWithHooksComp = () => {
  const [page, setPage] = useState(1);
  const [isFirst, setIsFirst] = useState(false);

  useEffect(() => {
    if (page == 1) {
      setIsFirst(true);
    } else {
      setIsFirst(false);
    }
  }, [page]);

  const onPageChange = (value: number) => {
    setPage((prevPage) => prevPage + value);
  };

  return (
    <Pagination
      isFirst={isFirst}
      isLast={false}
      page={page}
      onPageChange={onPageChange}
    />
  );
};

export const PaginationWithHook: Story = {
  render: () => <PaginationWithHooksComp />,
};

export const PaginationView: Story = {
  args: {
    page: 1,
    isFirst: true,
    isLast: false,
  },
};

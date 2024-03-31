export interface FilterQueryParams {
  page: number;
  pagesize: number;
  sort: string;
  order: string;
}

export interface ReadTags {
  id: number;
  name: string;
  count: number;
}

export interface PaginationProps {
  isFirst: boolean;
  isLast: boolean;
  page: number;
  onPageChange: (value: number) => void;
}

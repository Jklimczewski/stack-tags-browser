import { PaginationProps } from "../types";

function Pagination({ isFirst, isLast, page, onPageChange }: PaginationProps) {
  return (
    <div className="join mt-10 justify-center">
      <button
        className="join-item btn"
        disabled={isFirst}
        onClick={() => onPageChange(-1)}
      >
        «
      </button>

      <button className="join-item btn hidden sm:block">Strona {page}</button>
      <button className="join-item btn sm:hidden">{page}</button>

      <button
        className="join-item btn"
        disabled={isLast}
        onClick={() => onPageChange(1)}
      >
        »
      </button>
    </div>
  );
}

export { Pagination };

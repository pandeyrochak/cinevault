import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
interface PaginationProps {
  totalPages: number;
  currentPage: number;
}
const PageButton = ({ pageNumber }: { pageNumber: any }) => {
  return (
    <button className=" text-white px-4 py-2 rounded-full border border-transparent hover:border-primary-yellow">
      {pageNumber}
    </button>
  );
};

const Pagination = (props: PaginationProps) => {
  const { totalPages, currentPage } = props;
  const pagesArray = Array.from(Array(totalPages).keys(), (n) => n + 1);

  return (
    <div className="flex items-center w-full justify-center">
      <button className=" text-white px-2 py-2 rounded-full border border-transparent hover:border-primary-yellow">
        <ChevronLeftIcon className="h-5 w-5" />
      </button>
      <div className="flex items-center justify-start overflow-hidden w-64">
        {pagesArray.map((page) => (
          <PageButton key={page} pageNumber={page} />
        ))}
      </div>
      <button className=" text-white px-2 py-2 rounded-full border border-transparent hover:border-primary-yellow">
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Pagination;

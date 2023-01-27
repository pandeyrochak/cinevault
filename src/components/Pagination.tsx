import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
interface PaginationProps {
  currentPage: number;
  setcurrentPage: Function;
  pagesArray: Array<number>;
}
const PageButton = ({
  pageNumber,
  currentPage,
  onClickHandler,
}: {
  pageNumber: any;
  currentPage: number;
  onClickHandler: Function;
}) => {
  return (
    <button
      className={`rounded-full border border-transparent px-4 py-2 text-white hover:border-primary-yellow ${
        pageNumber === currentPage
          ? "bg-primary-yellow text-secondary-brown"
          : ""
      }`}
      onClick={() => onClickHandler(pageNumber)}
    >
      {pageNumber}
    </button>
  );
};

const Pagination = (props: PaginationProps) => {
  const { pagesArray, currentPage, setcurrentPage } = props;

  return (
    <div className="flex w-full items-center justify-center">
      <button className=" rounded-full border border-transparent px-2 py-2 text-white hover:border-primary-yellow">
        <ChevronLeftIcon className="h-5 w-5" />
      </button>
      <div className="flex w-fit items-center justify-start overflow-hidden">
        {pagesArray.map((page) => (
          <PageButton
            key={page}
            pageNumber={page}
            currentPage={currentPage}
            onClickHandler={setcurrentPage}
          />
        ))}
      </div>
      <button className=" rounded-full border border-transparent px-2 py-2 text-white hover:border-primary-yellow">
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Pagination;

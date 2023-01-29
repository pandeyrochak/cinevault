import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
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
      className={`aspect-square w-full rounded-full border border-transparent text-white hover:border-primary-yellow ${
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
    <div className="flex w-full items-center justify-center px-8">
      <button
        className=" m rounded-full border border-transparent px-2 py-2 text-white hover:border-primary-yellow"
        onClick={() => setcurrentPage(currentPage - 1)}
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>

      <Swiper
        direction={"horizontal"}
        slidesPerView={10}
        freeMode={true}
        scrollbar={false}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="flex w-full items-center justify-start"
      >
        {pagesArray.map((page) => (
          <SwiperSlide>
            <PageButton
              key={page}
              pageNumber={page}
              currentPage={currentPage}
              onClickHandler={setcurrentPage}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className=" rounded-full border border-transparent px-2 py-2 text-white hover:border-primary-yellow"
        onClick={() => setcurrentPage(currentPage + 1)}
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Pagination;

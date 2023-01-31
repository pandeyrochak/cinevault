import React from "react";
import { MediaCard } from "./exports";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Mousewheel } from "swiper";
import { Link } from "react-router-dom";

// import icons
import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";

interface TrendingContentProps {
  trendingList: Array<any>;
  mediaType: string;
  headingTitle: string;
}
const TrendingContent = (props: TrendingContentProps) => {
  const { trendingList, mediaType, headingTitle } = props;
  return (
    <div className="px-4 pt-10 lg:px-10">
      <h2 className="md:3xl mb-6 flex  items-baseline gap-3 text-2xl font-bold">
        {headingTitle} {mediaType === "movie" ? "movies" : "shows"}
        <Link
          to={`/discover/${mediaType}?feedType=trending`}
          className="flex items-center gap-2 text-base font-light"
        >
          Explore all
          <ChevronDoubleRightIcon className="h-5 w-5" />
        </Link>
      </h2>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        freeMode={true}
        mousewheel={{
          forceToAxis: true,
        }}
        pagination={{
          paginationDisabledClass: "swiper-pagination-disabled",
        }}
        modules={[FreeMode, Mousewheel]}
        className="trendingSlider"
      >
        {trendingList.map((item: any) => (
          <SwiperSlide key={item.id}>
            <MediaCard
              imageUrl={item.poster_path}
              movieId={item.id}
              mediaType={mediaType}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendingContent;

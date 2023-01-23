import React from "react";
import { MovieCard } from "./exports";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper";
interface TrendingContentProps {
  trendingList: Array<any>;
  mediaType: string;
}
const TrendingContent = (props: TrendingContentProps) => {
  const { trendingList, mediaType } = props;
  return (
    <div className="px-4 lg:px-10 pt-20">
      <h2 className="text-3xl font-bold mt-8 mb-6">Trending {mediaType}</h2>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          paginationDisabledClass: "swiper-pagination-disabled",
        }}
        modules={[FreeMode]}
        className="trendingSlider"
      >
        {trendingList.map((item: any) => (
          <SwiperSlide>
            <MovieCard imageUrl={item.poster_path} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendingContent;

import React from "react";
import { MediaCard } from "./exports";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Mousewheel } from "swiper";

interface TrendingContentProps {
  trendingList: Array<any>;
  mediaType: string;
}
const TrendingContent = (props: TrendingContentProps) => {
  const { trendingList, mediaType } = props;
  return (
    <div className="px-4 lg:px-10 pt-10">
      <h2 className="text-2xl md:3xl font-bold  mb-6">Trending {mediaType}</h2>
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

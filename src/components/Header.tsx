import React from "react";
import { imageBaseUrl } from "../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronDoubleDownIcon } from "@heroicons/react/20/solid";
import { Main } from "./exports";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

interface HeaderProps {
  upcomingMovies: Array<any>;
}

const Header = (props: HeaderProps) => {
  const { upcomingMovies } = props;
  return (
    <div className="h-screen w-full">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Pagination, Autoplay]}
        className="upcomingSlider w-full h-full relative"
      >
        {upcomingMovies.map(
          (movie: any) =>
            movie.backdrop_path && (
              <SwiperSlide
                key={movie.id}
                className="bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.37) 0%, rgba(1, 0, 2, 0.43) 79.17%, #010002 100%),url(${imageBaseUrl}/w1280${movie.backdrop_path})`,
                }}
              >
                <Main movieInfo={movie} />
              </SwiperSlide>
            )
        )}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 -translate-y-8 z-10 hidden md:block">
          <ChevronDoubleDownIcon className="w-10 h-10 animate-bounce" />
        </div>
      </Swiper>
    </div>
  );
};

export default Header;

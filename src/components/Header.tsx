import React from "react";
import { backdropImageUrl } from "../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Main } from "./exports";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

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
        modules={[Pagination]}
        className="upcomingSlider w-full h-full"
      >
        {upcomingMovies.map(
          (movie: any) =>
            movie.backdrop_path && (
              <SwiperSlide
                key={movie.id}
                className="bg-cover bg-center bg-no-repeat relative"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.37) 0%, rgba(1, 0, 2, 0.43) 79.17%, #010002 100%),url(${backdropImageUrl}${movie.backdrop_path})`,
                }}
              >
                <Main movieInfo={movie} />
              </SwiperSlide>
            )
        )}
      </Swiper>
    </div>
  );
};

export default Header;

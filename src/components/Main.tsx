import { LanguageIcon } from "@heroicons/react/20/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  formatDate,
  getGenreList,
  getLanguageName,
} from "../utils/utilityMethods";
import { Modal, PrimaryBtn, SecondaryBtn } from "./exports";
interface MainProps {
  movieInfo: any;
}
const Main = (props: MainProps) => {
  // destructuring props
  const { movieInfo } = props;

  // get genre names
  const genreList = getGenreList(movieInfo.genre_ids);

  // find original language name
  const originalLanguage = getLanguageName(movieInfo.original_language);

  // function to format date in dd Month format

  return (
    <div className="flex h-full translate-y-1/4 flex-col px-4 lg:px-24">
      <div className="text-sm font-light lg:text-xl">{genreList}</div>
      <h1 className="md:7xl text-4xl font-bold uppercase sm:text-5xl">
        {movieInfo.title}
      </h1>
      <div className="flex gap-2">
        <LanguageIcon className="h-6 w-6 text-primary-yellow" />
        <div className="text-sm font-light lg:text-xl">{originalLanguage}</div>
      </div>
      <div className="mt-8 text-2xl md:text-3xl">
        In cinemas on{" "}
        <span className="5xl font-semibold text-gray-100">
          {formatDate(movieInfo.release_date)}
        </span>{" "}
      </div>
      <div className="flex items-center gap-4">
        {/* {trailer && (
          <PrimaryBtn
            title="Watch Trailer"
            onClickHandler={() => {}}
            iconComponent={<PlayCircleIcon className="w-6" />}
            classList="mt-8 transition-transform transform hover:scale-110"
          />
        )} */}
        <Link to={`details/movie/${movieInfo.id}`}>
          <SecondaryBtn
            title="Learn More"
            onClickHandler={() => {}}
            iconComponent={<InformationCircleIcon className="w-6" />}
            classList="mt-8 transition-transform transform hover:scale-110"
          />
        </Link>
      </div>
      {/* <Modal setIsOpen={setTrailerModalOpen} isOpen={trailerModalOpen}>
        <iframe
          height="500"
          src={`${youtubeBaseUrl}${trailer}`}
          title={movieInfo.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </Modal> */}
    </div>
  );
};

export default Main;

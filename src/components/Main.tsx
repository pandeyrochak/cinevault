import React from "react";
import { genres, languages } from "../utils/constants";
import { LanguageIcon } from "@heroicons/react/20/solid";
import {
  PlayCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import PrimaryBtn from "./PrimaryBtn";
import { SecondaryBtn } from "./exports";
interface MainProps {
  movieInfo: any;
}
const Main = (props: MainProps) => {
  // destructuring props
  const { movieInfo } = props;

  // map genre ids to genre names
  const genreList = movieInfo.genre_ids.map((id: number) => {
    return genres.find((genre) => genre.id === id)?.name;
  });

  // find original language name
  const originalLanguage = languages.find((lang) => {
    return lang.iso_639_1 === movieInfo.original_language;
  })?.english_name;

  // function to format date in dd Month format
  const formatDate = (date: string) => {
    const dateObj = new Date(date);
    const month = dateObj.toLocaleString("default", { month: "long" });
    const day = dateObj.getDate();
    return `${day} ${month}`;
  };

  return (
    <div className="flex flex-col h-full translate-y-1/4 px-4 lg:px-24">
      <div className="text-sm lg:text-xl font-light">
        {genreList.join(", ")}
      </div>
      <h1 className="text-4xl sm:text-5xl md:7xl font-bold uppercase">
        {movieInfo.title}
      </h1>
      <div className="flex gap-2">
        <LanguageIcon className="h-6 w-6 text-primary-yellow" />
        <div className="text-sm lg:text-xl font-light">{originalLanguage}</div>
      </div>
      <div className="text-2xl md:text-3xl mt-8">
        In cinemas on{" "}
        <span className="5xl font-semibold text-gray-100">
          {formatDate(movieInfo.release_date)}
        </span>{" "}
      </div>
      <div className="flex items-center gap-4">
        <PrimaryBtn
          title="Watch Trailer"
          onClickHandler={() => {}}
          iconComponent={<PlayCircleIcon className="w-6" />}
          classList="mt-8 transition-transform transform hover:scale-110"
        />
        <SecondaryBtn
          title="Learn More"
          onClickHandler={() => {}}
          iconComponent={<InformationCircleIcon className="w-6" />}
          classList="mt-8 transition-transform transform hover:scale-110"
        />
      </div>
    </div>
  );
};

export default Main;

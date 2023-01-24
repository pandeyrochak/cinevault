import {
  ClockIcon,
  LanguageIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { imageBaseUrl } from "../utils/constants";
import { getLanguageName, getRunningTime } from "../utils/utilityMethods";
import { PrimaryBtn } from "./exports";
interface DetailsViewProps {
  mediaInfo: any;
}

const DetailsView = (props: DetailsViewProps) => {
  const { mediaInfo } = props;
  const { poster_path, title, overview, genres, original_language, runtime } =
    mediaInfo;
  const genreList = genres.map((genre: any) => genre.name).join(", ");
  const language = getLanguageName(original_language);
  const watchDuration = runtime && getRunningTime(runtime);
  return (
    <>
      <div className="flex flex-col sm:items-center sm:flex-row lg:translate-y-16 mx-auto px-8 justify-start w-screen pt-28 sm:gap-6 md:gap-10 lg:gap-14">
        <img
          src={`${imageBaseUrl}/w342${poster_path}`}
          alt=""
          className="rounded-lg w-full sm:w-60 md:w-72 lg:w-80"
          style={{ boxShadow: `0px 0px 26px 4px #060A11` }}
        />
        <div className="flex flex-col w-fit mt-5 max-w-screen-md">
          <div className="text-sm lg:text-xl font-light">{genreList}</div>
          <h2 className="my-3 text-2xl sm:text-4xl md:5xl lg:text-6xl font-bold uppercase">
            {title}
          </h2>
          <div className="flex gap-2">
            <LanguageIcon className="h-6 w-6 text-primary-yellow" />
            <div className="text-sm lg:text-xl font-light">{language}</div>
            {watchDuration && (
              <>
                <ClockIcon className="h-6 w-6 text-primary-yellow ml-3" />
                <div className="text-sm lg:text-xl font-light">
                  {watchDuration}
                </div>
              </>
            )}
          </div>
          <PrimaryBtn
            title="Watch Trailer"
            onClickHandler={() => {}}
            iconComponent={<PlayCircleIcon className="w-6" />}
            classList="my-5 transition-transform transform hover:scale-110"
          />
          <p className="hidden lg:block text-base font-light">{overview}</p>
        </div>
      </div>
      <p className="block lg:hidden text-sm md:text-base font-light px-8 pr-10">
        {overview}
      </p>
    </>
  );
};

export default DetailsView;

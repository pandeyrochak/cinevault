import {
  ClockIcon,
  LanguageIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { imageBaseUrl, youtubeBaseUrl } from "../utils/constants";
import { getTrailer } from "../utils/fetchFromAPI";
import { getLanguageName, getRunningTime } from "../utils/utilityMethods";
import { PrimaryBtn, Modal } from "./exports";
interface DetailsViewProps {
  mediaInfo: any;
  mediaType: string | undefined;
  mediaId: string | undefined;
}

const DetailsView = (props: DetailsViewProps) => {
  const [trailerModalOpen, setTrailerModalOpen] = useState(false);
  const [trailer, setTrailer] = useState("");
  const { mediaInfo, mediaType, mediaId } = props;
  const {
    poster_path,
    title,
    name,
    overview,
    genres,
    original_language,
    runtime,
    number_of_episodes,
    number_of_seasons,
  } = mediaInfo;

  const genreList = genres.map((genre: any) => genre.name).join(", ");
  const language = getLanguageName(original_language);
  const watchDuration = runtime && runtime > 0 ? getRunningTime(runtime) : null;

  useEffect(() => {
    getTrailer(mediaType!, mediaId!).then((data) => {
      // const key = data.results.find((item: any) => item.type === "Trailer").key;
      setTrailer(data);
    });
  });
  return (
    <>
      <div className="mx-auto flex w-screen flex-col justify-start px-8 pt-28 sm:flex-row sm:items-center sm:gap-6 md:gap-10 lg:translate-y-16 lg:gap-14">
        <img
          src={`${imageBaseUrl}/w342${poster_path}`}
          alt=""
          className="w-full rounded-lg sm:w-60 md:w-72 lg:w-80"
          style={{ boxShadow: `0px 0px 26px 4px #060A11` }}
        />
        <div className="mt-5 flex w-fit max-w-screen-md flex-col">
          <div className="text-sm font-light lg:text-xl">{genreList}</div>
          <h2 className="md:5xl my-3 text-2xl font-bold uppercase sm:text-4xl lg:text-6xl">
            {mediaType === "movie" && title}
            {mediaType === "tv" && name}
          </h2>
          <div className="flex gap-2">
            <LanguageIcon className="h-6 w-6 text-primary-yellow" />
            <div className="text-sm font-light lg:text-xl">{language}</div>
            {mediaType === "movie" ? (
              <>
                {watchDuration && (
                  <>
                    <ClockIcon className="ml-3 h-6 w-6 text-primary-yellow" />
                    <div className="text-sm font-light lg:text-xl">
                      {watchDuration}
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                <ClockIcon className="ml-3 h-6 w-6 text-primary-yellow" />
                <div className="text-sm font-light lg:text-xl">
                  {number_of_seasons}{" "}
                  {number_of_seasons === 1 ? "Season," : "Seasons,"}
                </div>
                <div className="text-sm font-light lg:text-xl">
                  {number_of_episodes}{" "}
                  {number_of_episodes === 1 ? "Episode" : "Episodes"}
                </div>
              </>
            )}
          </div>
          <p className="mt-5 hidden text-base font-light lg:block">
            {overview}
          </p>
          {trailer && (
            <PrimaryBtn
              title="Watch Trailer"
              onClickHandler={() => {
                setTrailerModalOpen(true);
              }}
              iconComponent={<PlayCircleIcon className="w-6" />}
              classList="mt-5 transition-transform transform hover:scale-110 hidden sm:flex"
            />
          )}
        </div>
      </div>
      <p className="mt-5 block px-8 pr-10 text-sm font-light md:text-base lg:hidden">
        {overview}
      </p>
      {trailer && (
        <PrimaryBtn
          title="Watch Trailer"
          onClickHandler={() => {
            setTrailerModalOpen(true);
          }}
          iconComponent={<PlayCircleIcon className="w-6" />}
          classList="mt-5 transition-transform transform hover:scale-110 ml-8 flex sm:hidden"
        />
      )}
      <Modal setIsOpen={setTrailerModalOpen} isOpen={trailerModalOpen}>
        <iframe
          height="500"
          src={`${youtubeBaseUrl}${trailer}`}
          title={mediaType === "movies" ? title : name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </Modal>
    </>
  );
};

export default DetailsView;

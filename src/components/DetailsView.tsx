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
            {mediaType === "movie" && title}
            {mediaType === "tv" && name}
          </h2>
          <div className="flex gap-2">
            <LanguageIcon className="h-6 w-6 text-primary-yellow" />
            <div className="text-sm lg:text-xl font-light">{language}</div>
            {mediaType === "movie" ? (
              <>
                {watchDuration && (
                  <>
                    <ClockIcon className="h-6 w-6 text-primary-yellow ml-3" />
                    <div className="text-sm lg:text-xl font-light">
                      {watchDuration}
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                <ClockIcon className="h-6 w-6 text-primary-yellow ml-3" />
                <div className="text-sm lg:text-xl font-light">
                  {number_of_seasons}{" "}
                  {number_of_seasons === 1 ? "Season," : "Seasons,"}
                </div>
                <div className="text-sm lg:text-xl font-light">
                  {number_of_episodes}{" "}
                  {number_of_episodes === 1 ? "Episode" : "Episodes"}
                </div>
              </>
            )}
          </div>
          {trailer && (
            <PrimaryBtn
              title="Watch Trailer"
              onClickHandler={() => {
                setTrailerModalOpen(true);
              }}
              iconComponent={<PlayCircleIcon className="w-6" />}
              classList="mt-5 transition-transform transform hover:scale-110"
            />
          )}
          <p className="mt-5 hidden lg:block text-base font-light">
            {overview}
          </p>
        </div>
      </div>
      <p className="block lg:hidden text-sm md:text-base font-light px-8 pr-10">
        {overview}
      </p>
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

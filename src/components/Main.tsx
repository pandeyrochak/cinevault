import { LanguageIcon } from "@heroicons/react/20/solid";
import {
  InformationCircleIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { youtubeBaseUrl } from "../utils/constants";
import { getTrailer } from "../utils/fetchFromAPI";
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
  const [trailer, setTrailer] = useState("");
  const [trailerModalOpen, setTrailerModalOpen] = useState(false);
  useEffect(() => {
    getTrailer("movie", movieInfo.id).then((data) => {
      // const key = data.results.find((item: any) => item.type === "Trailer").key;
      setTrailer(data);
    });
  }, []);
  // destructuring props
  const { movieInfo } = props;

  // get genre names
  const genreList = getGenreList(movieInfo.genre_ids);

  // find original language name
  const originalLanguage = getLanguageName(movieInfo.original_language);

  // function to format date in dd Month format

  return (
    <div className="flex flex-col h-full translate-y-1/4 px-4 lg:px-24">
      <div className="text-sm lg:text-xl font-light">{genreList}</div>
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
        <Link to={`details/movie/${movieInfo.id}`}>
          <SecondaryBtn
            title="Learn More"
            onClickHandler={() => {}}
            iconComponent={<InformationCircleIcon className="w-6" />}
            classList="mt-8 transition-transform transform hover:scale-110"
          />
        </Link>
      </div>
      <Modal setIsOpen={setTrailerModalOpen} isOpen={trailerModalOpen}>
        <iframe
          height="500"
          src={`${youtubeBaseUrl}${trailer}`}
          title={movieInfo.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </Modal>
    </div>
  );
};

export default Main;

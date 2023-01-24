import { LanguageIcon } from "@heroicons/react/20/solid";
import {
  InformationCircleIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";
import {
  formatDate,
  getGenreList,
  getLanguageName,
} from "../utils/utilityMethods";
import { PrimaryBtn, SecondaryBtn } from "./exports";
interface MainProps {
  movieInfo: any;
}
const Main = (props: MainProps) => {
  // destructuring props
  const { movieInfo } = props;

  // get genre names
  const genreList = getGenreList(movieInfo);

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

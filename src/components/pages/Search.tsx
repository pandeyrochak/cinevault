import React from "react";
import { useLottie } from "lottie-react";
import animation from "../../lottieFiles/searching.json";
import { useLocation } from "react-router-dom";
import { getSearchResults } from "../../utils/fetchFromAPI";
import { MediaGrid } from "../exports";

const Search = () => {
  const query = new URLSearchParams(useLocation().search).get("query");

  // state for loading
  const [loading, setloading] = React.useState(false);

  // state to store search results
  const [searchResults, setsearchResults] = React.useState<any[]>([]);
  // state to store search results with media type
  // const [mediaInfo, setmediaInfo] = React.useState<any[]>([]);

  // lottiefiles animation options
  const options = {
    animationData: animation,
    loop: true,
  };
  const { View } = useLottie(options);

  // fetch search results
  React.useEffect(() => {
    console.log("useeffectcalled");
    setloading(true);
    if (query) {
      getSearchResults(query, 1).then((data) => {
        const finalData = data.filter(
          (item: any) =>
            item.media_type !== "person" && item.poster_path !== null
        );
        setsearchResults(finalData);
        setTimeout(() => {
          setloading(false);
        }, 1500);
      });
    }
  }, [query]);

  return (
    <div className="mb-10 min-h-screen w-full px-4 pt-20 lg:px-10 xl:pt-36">
      {loading ? (
        <div className="mx-auto aspect-square w-44">{View}</div>
      ) : (
        <>
          <h1 className="md:3xl mb-6 text-2xl  font-bold">
            Search results for :{" "}
            <span className="ml-2 font-normal text-gray-300">{query}</span>
          </h1>
          <MediaGrid mediaInfo={searchResults} />
        </>
      )}
    </div>
  );
};

export default Search;

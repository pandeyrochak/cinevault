import React from "react";
import { DiscoverFeed } from "../exports";
import { useParams } from "react-router-dom";
import { getDiscover } from "../../utils/fetchFromAPI";
const Discover = () => {
  const { mediaType } = useParams();

  const [discoverMedia, setDiscoverMedia] = React.useState([]);
  React.useEffect(() => {
    getDiscover(mediaType!, 1).then((data) => {
      if (!data) console.log("Error fetching data");
      else setDiscoverMedia(data);
    });
  }, [mediaType]);
  return (
    <>
      <DiscoverFeed mediaInfo={discoverMedia} mediaType={mediaType!} />
    </>
  );
};

export default Discover;

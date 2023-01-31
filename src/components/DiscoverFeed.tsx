import React from "react";
import { MediaCard, MediaGrid } from "./exports";

interface DiscoverFeedProps {
  mediaInfo: any;
  mediaType: string;
}

const DiscoverFeed = (props: DiscoverFeedProps) => {
  const { mediaInfo, mediaType } = props;
  return (
    <div className="mb-10 min-h-screen w-full px-4 pt-20 lg:px-10 xl:pt-36">
      <h1 className="md:3xl mb-6 text-2xl  font-bold">
        Discover {mediaType === "movie" ? "movies" : "shows"}
      </h1>
      <MediaGrid mediaInfo={mediaInfo} />
    </div>
  );
};

export default DiscoverFeed;

import React from "react";
import { MediaCard } from "./exports";

interface DiscoverFeedProps {
  mediaInfo: any;
  mediaType: string;
}

const DiscoverFeed = (props: DiscoverFeedProps) => {
  const { mediaInfo, mediaType } = props;
  return (
    <div className="px-4 lg:px-10 pt-20 xl:pt-36 min-h-screen w-full mb-10">
      <h1 className="text-2xl md:3xl font-bold  mb-6">
        Discover {mediaType === "movie" ? "movies" : "shows"}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
        {mediaInfo.map((media: any) => (
          <MediaCard
            key={media.id}
            imageUrl={media.poster_path}
            mediaType={mediaType}
            movieId={media.id}
            classList="col-span-1 h-full hover:transform hover:scale-105 transition-transform duration-400 ease-in-out"
          />
        ))}
      </div>
    </div>
  );
};

export default DiscoverFeed;

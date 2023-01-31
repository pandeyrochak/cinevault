import React from "react";
import { MediaCard } from "./exports";

const MediaGrid = (props: { mediaInfo: any }) => {
  const { mediaInfo } = props;
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {mediaInfo.map((media: any) => (
        <MediaCard
          key={media.id}
          imageUrl={media.poster_path}
          mediaType={media.title ? "movie" : "tv"}
          movieId={media.id}
          classList="col-span-1 h-full hover:transform hover:scale-105 transition-transform duration-400 ease-in-out"
        />
      ))}
    </div>
  );
};

export default MediaGrid;

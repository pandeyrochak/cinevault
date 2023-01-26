import React from "react";
import { imageBaseUrl } from "../utils/constants";
import { Link } from "react-router-dom";

interface MediaCardProps {
  imageUrl: string;
  movieId: number;
  mediaType: string;
  classList?: string;
}
const MediaCard = (props: MediaCardProps) => {
  const { imageUrl, movieId, mediaType, classList } = props;

  return (
    <Link to={`/details/${mediaType}/${movieId}`}>
      <img
        src={`${imageBaseUrl}/w342${imageUrl}`}
        alt=""
        className={`w-full rounded-lg  cursor-pointer ${
          classList ? classList : "w-36 sm:w-40 md:w-48 lg:w-60 shadow-lg shadow-grey-800"
        }`}
      />
    </Link>
  );
};

export default MediaCard;

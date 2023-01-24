import React from "react";
import { imageBaseUrl } from "../utils/constants";
import { Link } from "react-router-dom";

interface MediaCardProps {
  imageUrl: string;
  movieId: number;
  mediaType: string;
}
const MediaCard = (props: MediaCardProps) => {
  const { imageUrl, movieId, mediaType } = props;

  return (
    <Link to={`/details/${mediaType}/${movieId}`}>
      <img
        src={`${imageBaseUrl}/w342${imageUrl}`}
        alt=""
        className="w-36 sm:w-40 md:w-48 lg:60 rounded-lg shadow-lg shadow-gray-800 cursor-pointer"
      />
    </Link>
  );
};

export default MediaCard;

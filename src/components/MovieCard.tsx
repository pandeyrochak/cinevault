import React from "react";
import { imageBaseUrl } from "../utils/constants";

interface MovieCardProps {
  imageUrl: string;
}
const MovieCard = (props: MovieCardProps) => {
  const { imageUrl } = props;

  return (
    <img
      src={`${imageBaseUrl}/w342${imageUrl}`}
      alt=""
      className="w-36 sm:w-40 md:w-48 lg:60 rounded-lg shadow-lg shadow-gray-800 cursor-pointer"
      onClick={() => {
        console.log("clicked");
      }}
    />
  );
};

export default MovieCard;
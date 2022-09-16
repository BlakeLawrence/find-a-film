import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="flex-col justify-center items-center rounded-xl bg-gray-600 m-4 shadow-lg shadow-black hover:shadow-lg hover:shadow-[#1982c4]  hover:scale-105">
      <img
        className="rounded-t-xl w-full"
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/400"
        }
        alt={movie.Title}
      />
      <div className="mt-4 ">
        <div className="p-1">
          <h2 className="text-md">{movie.Title}:</h2>
          <span className="text-lg">{movie.Year}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

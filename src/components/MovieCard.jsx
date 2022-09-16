import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div
      className="flex-col justify-center 
     items-center rounded-xl bg-[#484848] m-4 shadow-lg shadow-black hover:shadow-lg hover:shadow-[#1982c4]  hover:scale-105"
    >
      <img
        className="rounded-t-xl w-full"
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/400"
        }
        alt={movie.Title}
      />
      <div>
        <div className="pl-2 text-[#d4d4d4] ">
          <h2 className="font-semibold text-md pt-1 ">{movie.Title}:</h2>
          <p className="text-[#b1b2b2] text-sm pb-2 ">{movie.Year}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

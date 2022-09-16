import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div
      className="flex-col justify-center 
     items-center rounded-xl bg-[#797979] m-4 shadow-lg shadow-black hover:shadow-lg hover:shadow-[#1982c4]  hover:scale-110"
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
        <div className="pl-1 ">
          <h2 className="text-lg pb-2 ">{movie.Title}:</h2>
          <p className="text-md">{movie.Year}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

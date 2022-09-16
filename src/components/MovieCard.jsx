import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="flex-col justify-center items-center rounded-xl bg-gray-600 m-4 hover:shadow-lg hover:shadow-[#1982c4] ">
      <img
        className="rounded-t-xl w-full hover:scale-105"
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
//{Title: 'Critters', Year: '1986', imdbID: 'tt0090887', Type: 'movie', Poster: for the image'}

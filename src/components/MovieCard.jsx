import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="flex-col justify-center items-center rounded-xl p-6 bg-gray-600 m-4">
      <img
        className="w-full hover:scale-105"
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/400"
        }
        alt={movie.Title}
      />
      <div className="mt-4 bg-gray-300 w-full">
        <div className="bg-gray-300 w-full">
          <h2 className="text-xl">{movie.Title}:</h2>
          <span className="text-xl">{movie.Year}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
//{Title: 'Critters', Year: '1986', imdbID: 'tt0090887', Type: 'movie', Poster: for the image'}

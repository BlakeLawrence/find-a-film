import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-[300px] ">
      <div className="w-full items-center ">
        <div className="bg-gray-300 h-[50px]">
          <h2 className="text-2xl">
            {movie.Title}: <span className="text-xl">{movie.Year}</span>
          </h2>
        </div>
        <img src={movie.Poster} alt={movie.Title} width="300px" />
        <div className="bg-gray-300 h-[50px]">
          <p className="text-xl">{movie.Type}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
//{Title: 'Critters', Year: '1986', imdbID: 'tt0090887', Type: 'movie', Poster: for the image'}

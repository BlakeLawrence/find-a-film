import React from "react";

const MovieCard = ({ movies }) => {
  return (
    <div>
      <div>
        <h2 className="text-3xl">{movies.Title}</h2>
      </div>
      <img src={movies.Poster} alt={movies.Title} />
    </div>
  );
};

export default MovieCard;
//{Title: 'Critters', Year: '1986', imdbID: 'tt0090887', Type: 'movie', Poster: for the image'}

import React from "react";

const MovieCard = ({ movies }) => {
  return (
    <div>
      <h2>
        {movies[0].Title}: {movies[0].Year}
      </h2>
    </div>
  );
};

export default MovieCard;

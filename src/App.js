import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";

function App() {
  const [movies, setMovies] = useState([]);

  //   const movieKey = process.env.REACT_APP_KEY;
  const url = `http://www.omdbapi.com?apikey=21eaf5cb`;

  const searchMovies = async (title) => {
    const response = await fetch(`${url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  console.log(movies);
  useEffect(() => {
    searchMovies("guardians of the galaxy");
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {/* conditional rendering to show mmovie cards if title available */}
      <div className=" grid sm:grid-cols-4 gap-4">
        {movies?.length > 0 ? (
          movies.map((movie) => <MovieCard movie={movie} />)
        ) : (
          <div>
            <h2 className="text-black text-3xl">No movies found</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

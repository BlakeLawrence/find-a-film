import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";

function App() {
  const [movies, setMovies] = useState({});

  //   const movieKey = process.env.REACT_APP_KEY;
  const url = `http://www.omdbapi.com?apikey=21eaf5cb`;

  const searchMovies = async (title) => {
    const response = await fetch(`${url}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search[0]);
  };
  console.log(movies);
  useEffect(() => {
    searchMovies("critters");
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1 className="text-blue-600 text-5xl">Hi</h1>
      <MovieCard movies={movies} />
    </div>
  );
}

export default App;

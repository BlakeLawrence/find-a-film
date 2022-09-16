import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";

function App() {
  const [movies, setMovies] = useState({});

  //   const movieKey = process.env.REACT_APP_KEY;
  const url = `http://www.omdbapi.com?apikey=21eaf5cb`;

  const searchMovies = async function (title) {
    const response = await fetch(`${url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("The mask");
  }, []);

  return (
    <div>
      <h1 className="text-blue-600 text-5xl">Hi</h1>
      <MovieCard movies={movies} />
    </div>
  );
}

export default App;

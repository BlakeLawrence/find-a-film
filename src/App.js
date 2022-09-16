import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import { AiOutlineSearch } from "react-icons/ai";

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
      <Navbar />

      {/* SEARCH BAR DIV */}
      <div className="flex justify-center items-center bg-[#102542]">
        <input
          className="h-[30px] rounded-xl w-1/3"
          value="superman"
          type="text"
          placeholder="search films"
        />
        <AiOutlineSearch size={20} />
      </div>

      {/* Movie Cards Grid  */}
      {/* conditional rendering to show mmovie cards if title available */}
      <div className=" bg-[#102542] grid sm:grid-cols-6 w-full h-full">
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

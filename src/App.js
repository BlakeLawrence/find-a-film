import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import { AiOutlineSearch } from "react-icons/ai";

function App() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("Guardians of the galaxy");

  //   const movieKey = process.env.REACT_APP_KEY;
  const key = process.env.REACT_APP_KEY;
  const url = `https://www.omdbapi.com?apikey=${key}`;

  const searchMovies = async (input) => {
    const response = await fetch(`${url}&s=${input}`);
    const data = await response.json();
    setMovies(data.Search);
    setInput("");
  };
  console.log(movies);
  useEffect(() => {
    searchMovies(input);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />

      {/* SEARCH BAR DIV */}
      <div className="flex justify-center items-center bg-[#102542] pb-8 pt-8">
        <div className="border border-[#EDAE49]  flex w-2/3 sm:w-1/3 rounded-xl justify-center pr-2 shadow-md shadow-[#EDAE49]">
          <input
            onChange={(e) => setInput(e.target.value)}
            className="h-[30px] rounded-xl w-full p-2 pl-4 mr-2 text-[#EDAE49] bg-[#102542] focus:outline-none "
            value={input}
            type="text"
            placeholder="search films"
          />
          <AiOutlineSearch
            className="text-[#EDAE49]"
            size={30}
            onClick={() => searchMovies(input)}
          />
        </div>
      </div>

      {/* Movie Cards Grid  */}
      {/* conditional rendering to show movie cards if title available */}
      <div className=" bg-[#102542] grid sm:grid-cols-4 lg:grid-cols-6 w-full h-full">
        {movies?.length > 0 ? (
          movies.map((movie) => <MovieCard movie={movie} />)
        ) : (
          <div className="pl-6 sm:pl-18 pt-64 pb-72 w-full h-[100px]">
            <h2 className="text-[#EDAE49] text-2xl sm:text-3xl animate-pulse">
              404 Error :<br />
              No movies found for this title
            </h2>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

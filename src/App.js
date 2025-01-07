// useState: React Hook used to manage state in functional components
// useEffect: React Hook used to handle side effects
import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

// Main functional React component
const App = () => {
  // searchTerm/movie: A piece of state to store input
  // setSearchTerm/setMovies: A function to update the value
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  // [] Dependency Array: Effect will only run once when the component mounts
  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    // fetch: A built-in JavaScript function to make HTTP requests
    const response = await fetch(`${API_URL}&s=${title}`);
    // Parses the response from the API into a JSON object
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
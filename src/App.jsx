import { useEffect, useState } from "react";
import Search from "./components/search.jsx";
import "./App.css";

const API_BASE_URL = "http://www.omdbapi.com/?";
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const fetchMovies = async () => {
    try {
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage("Error fetching movies. Please try again later.");
    }
  };

  useEffect(() => {}, []);
  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero-img.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span>You'll Enjoy
            without the Hassle
          </h1>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
      </div>
    </main>
  );
};

export default App;

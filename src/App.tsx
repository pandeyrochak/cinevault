import { useEffect, useState } from "react";
import "./App.css";
import { Header, Navbar, TrendingContent } from "./components/exports";
import { getTrending, getUpcoming } from "./utils/fetchFromAPI";

function App() {
  const [upcomingMovies, setupcomingMovies] = useState([]);
  const [trendingMovies, settrendingMovies] = useState([]);
  const [trendingShows, settrendingShows] = useState([]);
  useEffect(() => {
    // check if upcomingMovies is present in localStorage
    if (localStorage.getItem("upcomingMovies")) {
      setupcomingMovies(JSON.parse(localStorage.getItem("upcomingMovies")!));
    } else {
      getUpcoming("IN").then((data) => {
        setupcomingMovies(data);
        localStorage.setItem("upcomingMovies", JSON.stringify(data));
      });
    }
    // check if trendingMovies is present in localStorage
    if (localStorage.getItem("trendingMovies")) {
      settrendingMovies(JSON.parse(localStorage.getItem("trendingMovies")!));
    } else {
      getTrending("movie", "day").then((data) => {
        settrendingMovies(data);
        localStorage.setItem("trendingMovies", JSON.stringify(data));
      });
    }
    // check if trendingShows is present in localStorage
    if (localStorage.getItem("trendingShows")) {
      settrendingShows(JSON.parse(localStorage.getItem("trendingShows")!));
    } else {
      getTrending("tv", "day").then((data) => {
        settrendingShows(data);
        localStorage.setItem("trendingShows", JSON.stringify(data));
      });
    }
  }, []);

  return (
    <div className="App bg-gray-900 w-screen text-white pb-8 scroll-smooth">
      <Navbar />
      <Header upcomingMovies={upcomingMovies} />
      <TrendingContent trendingList={trendingMovies} mediaType="movies" />
      <TrendingContent trendingList={trendingShows} mediaType="shows" />
    </div>
  );
}

export default App;

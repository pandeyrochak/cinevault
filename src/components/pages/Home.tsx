import React, { useEffect, useState } from "react";
import { Header, TrendingContent } from "../exports";
import { getTrending, getUpcoming } from "../../utils/fetchFromAPI";

const Home = () => {
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
      getTrending("movie", "day", 1).then((data) => {
        settrendingMovies(data);
        localStorage.setItem("trendingMovies", JSON.stringify(data));
      });
    }
    // check if trendingShows is present in localStorage
    if (localStorage.getItem("trendingShows")) {
      settrendingShows(JSON.parse(localStorage.getItem("trendingShows")!));
    } else {
      getTrending("tv", "day", 1).then((data) => {
        settrendingShows(data);
        localStorage.setItem("trendingShows", JSON.stringify(data));
      });
    }
  }, []);
  return (
    <>
      <Header upcomingMovies={upcomingMovies} />
      <TrendingContent
        trendingList={trendingMovies}
        mediaType="movie"
        headingTitle="Trending"
      />
      <TrendingContent
        trendingList={trendingShows}
        mediaType="tv"
        headingTitle="Trending"
      />
    </>
  );
};

export default Home;

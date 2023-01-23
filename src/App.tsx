import { useEffect, useState } from "react";
import "./App.css";
import { Header, Navbar } from "./components/exports";
import { getUpcoming } from "./utils/fetchFromAPI";

function App() {
  const [upcomingMovies, setupcomingMovies] = useState([{}]);
  useEffect(() => {
    if (localStorage.getItem("upcomingMovies")) {
      setupcomingMovies(JSON.parse(localStorage.getItem("upcomingMovies")!));
    } else {
      getUpcoming("IN").then((data) => {
        setupcomingMovies(data);
        localStorage.setItem("upcomingMovies", JSON.stringify(data));
      });
    }
  }, []);

  return (
    <div className="App bg-gray-900 w-screen text-white">
      <Navbar />
      <Header upcomingMovies={upcomingMovies} />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import { Header, Navbar } from "./components/exports";
import { getUpcoming } from "./utils/fetchFromAPI";

function App() {
  const [upcomingMovies, setupcomingMovies] = useState([]);
  useEffect(() => {
    getUpcoming("IN").then((data) => {
      setupcomingMovies(data);
    });
  }, []);

  return (
    <div className="App bg-gray-900 w-screen text-white">
      <Navbar />
      <Header upcomingMovies={upcomingMovies} />
    </div>
  );
}

export default App;

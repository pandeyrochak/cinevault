import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, Home, Details, Discover, Footer } from "./components/exports";

function App() {
  useEffect(() => {
    const dataLastUpdated = localStorage.getItem("dataLastUpdated");
    if (dataLastUpdated) {
      const timeDiff = new Date().getTime() - parseInt(dataLastUpdated);
      if (timeDiff > 3600000) {
        localStorage.clear();
      }
    } else {
      localStorage.setItem("dataLastUpdated", new Date().getTime().toString());
    }
  });
  return (
    <div className="App w-screen scroll-smooth bg-gray-900 text-white">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:mediaType/:id" element={<Details />} />
          <Route path="/discover/:mediaType" element={<Discover />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

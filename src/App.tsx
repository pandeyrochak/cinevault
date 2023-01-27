import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, Home, Details, Discover, Footer } from "./components/exports";

function App() {
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

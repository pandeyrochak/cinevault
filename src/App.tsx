import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, Home, Details, Discover } from "./components/exports";

function App() {
  return (
    <div className="App bg-gray-900 w-screen text-white pb-8 scroll-smooth">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:mediaType/:id" element={<Details />} />
          <Route path="/discover/:mediaType" element={<Discover />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, Home, Details } from "./components/exports";

function App() {
  return (
    <div className="App bg-gray-900 w-screen text-white pb-8 scroll-smooth">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:media/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

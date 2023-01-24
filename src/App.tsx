import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, Home } from "./components/exports";

function App() {
  return (
    <div className="App bg-gray-900 w-screen text-white pb-8 scroll-smooth">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

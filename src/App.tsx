import React from "react";
import "./App.css";
import { Header, Navbar } from "./components/exports";
import { backdrop } from "./utils/constants";
function App() {
  return (
    <div className="App bg-gray-900 w-screen text-white">
      <Navbar />
      <Header backdrop={backdrop} />
    </div>
  );
}

export default App;

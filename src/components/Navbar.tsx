import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  const [isScrolling, setIsScrolling] = React.useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    });
  }, []);

  return (
    <nav
      className={`flex justify-between fixed w-full px-4 lg:px-10 py-4 z-10 ${
        isScrolling ? "backdrop-blur-md" : ""
      }`}
    >
      <Link to="/">
        <h5 className="font-semibold text-2xl md:text-3xl uppercase cursor-pointer">
          CineVault
        </h5>
      </Link>
      <ul className="hidden md:flex gap-8 items-center">
        <li className="cursor-pointer">
          <MagnifyingGlassIcon className="h-6 w-6" />
        </li>
        <Link to="/">
          <li className="cursor-pointer text-xl">Home</li>
        </Link>
        <Link to="/discover/movie">
          <li className="cursor-pointer text-xl">Movies</li>
        </Link>
        <Link to="/discover/tv">
          <li className="cursor-pointer text-xl">Shows</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;

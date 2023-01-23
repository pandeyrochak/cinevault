import React, { useEffect } from "react";
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
      <h5 className="font-semibold text-2xl md:text-3xl uppercase">
        CineVault
      </h5>
      <ul className="hidden md:flex gap-8 items-center">
        <li className="">
          <MagnifyingGlassIcon className="h-6 w-6" />
        </li>
        <li className="text-xl">Home</li>
        <li className="text-xl">Movies</li>
        <li className="text-xl">Shows</li>
      </ul>
    </nav>
  );
};

export default Navbar;

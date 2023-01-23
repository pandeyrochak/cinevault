import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  return (
    <nav className="flex justify-between fixed w-full px-4 md:px-10 py-4">
      <h5 className="font-semibold text-3xl uppercase">CineVault</h5>
      <ul className="hidden md:flex gap-3 items-center">
        <li className="text-xl">
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

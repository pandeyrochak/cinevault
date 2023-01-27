import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  Bars3CenterLeftIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";

const Navbar = () => {
  const [isScrolling, setIsScrolling] = React.useState(false);
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  const openNav = () => {
    setShowMobileNav(!showMobileNav);
  };

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
      className={`fixed z-10 flex w-full justify-between px-4 py-4 lg:px-10 ${
        isScrolling ? "backdrop-blur-md" : ""
      }`}
    >
      <Link to="/">
        <h5 className="cursor-pointer text-2xl font-semibold uppercase md:text-3xl">
          CineVault
        </h5>
      </Link>
      <ul className="hidden items-center gap-8 md:flex">
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
      {/* mobile navigation */}
      <Bars3CenterLeftIcon className="h-6 w-6 md:hidden" onClick={openNav} />

      <div
        className={`fixed top-0 z-10 flex h-screen w-screen items-center justify-center bg-gray-900 transition-all duration-200 ${
          showMobileNav ? "right-0" : "-right-full"
        }`}
      >
        <XMarkIcon
          className="absolute right-4 top-4 h-8 w-8 cursor-pointer "
          onClick={() => setShowMobileNav(false)}
        />
        <ul className="flex flex-col items-center gap-8">
          <li className="cursor-pointer">
            <MagnifyingGlassIcon className="h-8 w-8" />
          </li>
          <Link to="/" onClick={() => setShowMobileNav(false)}>
            <li className="cursor-pointer text-2xl">Home</li>
          </Link>
          <Link to="/discover/movie" onClick={() => setShowMobileNav(false)}>
            <li className="cursor-pointer text-2xl">Movies</li>
          </Link>
          <Link to="/discover/tv" onClick={() => setShowMobileNav(false)}>
            <li className="cursor-pointer text-2xl">Shows</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

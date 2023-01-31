import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  Bars3CenterLeftIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { ArrowLeftCircleIcon, HomeIcon } from "@heroicons/react/24/outline";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: 10 },
};
const variantsMobile = {
  openMobile: { opacity: 1 },
  closedMobile: { opacity: 0 },
};

const Navbar = () => {
  const location = useLocation().pathname;
  const [isHome, setIsHome] = React.useState(true);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  const [showSearchBar, setShowSearchBar] = React.useState(true);
  const searchInput = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const handleFocus = () => {
    setShowSearchBar(true);
  };
  const handleBlur = () => {
    setShowSearchBar(false);
  };
  const handleSearch = () => {
    const query = searchInput.current?.value ? searchInput.current.value : "";
    if (query.length > 2) {
      navigate({
        pathname: "/search",
        search: `?query=${query}`,
      });
    }
  };
  const openNav = () => {
    setShowMobileNav(!showMobileNav);
  };
  useEffect(() => {
    if (showSearchBar) {
      searchInput.current?.focus();
    }
  }, [showSearchBar]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    });
  }, []);
  // if location changes then check if it is home
  console.log(location);
  useEffect(() => {
    if (location === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [location]);

  return (
    <nav
      className={`fixed z-10 flex w-full items-center justify-between px-4 py-4 lg:px-10 ${
        isScrolling ? "backdrop-blur-md" : ""
      }`}
    >
      {/* back button for mobile */}
      {/* {!isHome && (
        <ArrowLeftCircleIcon
          className="block h-10 w-10 cursor-pointer text-white md:hidden"
          onClick={() => window.history.back()}
        />
      )} */}
      {location === "/search" ? (
        <HomeIcon
          className="block h-8 w-8 cursor-pointer text-white md:hidden"
          onClick={() => navigate("/")}
        />
      ) : (
        <ArrowLeftCircleIcon
          className={`${
            !isHome ? "visible" : "invisible"
          } block h-10 w-10 cursor-pointer text-white md:hidden`}
          onClick={() => window.history.back()}
        />
      )}
      <Link to="/">
        <h5 className="cursor-pointer text-2xl font-semibold uppercase md:text-3xl">
          CineVault
        </h5>
      </Link>
      <ul className="hidden items-center gap-8 md:flex">
        <motion.li
          animate={showSearchBar ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 0.2 }}
          className={`relative h-full rounded-full bg-white ${
            showSearchBar ? "block" : "hidden"
          }`}
        >
          <input
            ref={searchInput}
            type={"text"}
            name="search"
            id="search"
            placeholder="Search"
            className={`rounded-full bg-transparent py-1 pl-4 pr-5 leading-none text-gray-900 outline-none`}
            onBlur={handleBlur}
            onChange={handleSearch}
          />
          <MagnifyingGlassIcon
            className={` absolute right-3 top-1/2 h-6 w-6 -translate-y-1/2 text-gray-900`}
          />
        </motion.li>
        <MagnifyingGlassIcon
          className={` h-6 w-6 cursor-pointer ${
            showSearchBar ? "hidden" : "block"
          } `}
          onClick={handleFocus}
        />

        <Link to="/">
          <li className="cursor-pointer text-xl">Home</li>
        </Link>
        <Link to="/discover/movie?feedType=discover">
          <li className="cursor-pointer text-xl">Movies</li>
        </Link>
        <Link to="/discover/tv?feedType=discover">
          <li className="cursor-pointer text-xl">Shows</li>
        </Link>
      </ul>
      {/* mobile navigation */}
      <motion.div
        animate={showSearchBar ? "openMobile" : "closedMobile"}
        variants={variantsMobile}
        transition={{ duration: 0.2 }}
        className={`absolute top-4 right-14 z-10 mx-auto flex h-9 w-3/4 max-w-[280px] rounded-full border border-gray-400 bg-gray-900 ${
          showSearchBar ? "block" : "hidden"
        }`}
      >
        <input
          ref={searchInput}
          type={"text"}
          name="search"
          id="search"
          placeholder="Search"
          className={`rounded-full bg-transparent py-1 pl-4 pr-5 leading-none text-white outline-none`}
          onBlur={handleBlur}
          onChange={handleSearch}
        />
        <MagnifyingGlassIcon
          className={` absolute right-2 top-1/2 h-6  w-6 -translate-y-1/2 cursor-pointer `}
          onClick={handleFocus}
        />
      </motion.div>
      <MagnifyingGlassIcon
        className={` absolute right-16 block h-6 w-6 cursor-pointer md:hidden`}
        onClick={handleFocus}
      />
      <Bars3CenterLeftIcon
        className="h-6 w-6 rotate-180 transform md:hidden"
        onClick={openNav}
      />

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
          <Link to="/" onClick={() => setShowMobileNav(false)}>
            <li className="cursor-pointer text-2xl">Home</li>
          </Link>
          <Link
            to="/discover/movie?feedType=discover"
            onClick={() => setShowMobileNav(false)}
          >
            <li className="cursor-pointer text-2xl">Movies</li>
          </Link>
          <Link
            to="/discover/tv?feedType=discover"
            onClick={() => setShowMobileNav(false)}
          >
            <li className="cursor-pointer text-2xl">Shows</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

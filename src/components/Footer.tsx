import React from "react";

const Footer = () => {
  return (
    <div className="color-white text-md mt-8 flex flex-col items-start justify-between border-t border-gray-300 px-10 py-3 font-light md:items-center md:text-lg">
      <h5 className="hidden uppercase md:block">Cinevault</h5>
      <p className="md:md-0 mb-2">
        Created with <span className="text-red-500">♥️</span> by Rochak Pandey
      </p>

      <a
        href="https://www.themoviedb.org/"
        target="_blank"
        rel="noreferrer"
        className="text-sm"
      >
        Powered by
        <img
          src={`${process.env.PUBLIC_URL}/assets/blue_long_2.svg`}
          alt=""
          className="h-4"
        />
      </a>
    </div>
  );
};

export default Footer;

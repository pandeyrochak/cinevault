import React from "react";

const Footer = () => {
  return (
    <div className="color-white text-md mt-8 flex flex-col items-start justify-between border-t border-gray-700 px-10 py-7 font-light md:flex-row md:items-center md:text-lg">
      <h5 className="hidden uppercase md:block">Cinevault</h5>
      <div className="md:md-0 mb-2 flex flex-col">
        <div>
          Created with <span className="text-red-500">♥️</span> by &nbsp;
          <a
            href="https://peerlist.io/pandeyrochak"
            target="_blank"
            rel="noreferrer"
            className="border-b border-primary-yellow"
          >
            Rochak Pandey
          </a>
        </div>
      </div>

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

import React, { useEffect, useState } from "react";
import { DiscoverFeed, Pagination } from "../exports";
import { useParams } from "react-router-dom";
import { getDiscover } from "../../utils/fetchFromAPI";
const Discover = () => {
  const { mediaType } = useParams();
  const [currentPage, setcurrentPage] = useState(1);
  const [totalPages, settotalPages] = useState(1);
  const [pagesArray, setpagesArray] = useState(Array<number>);

  useEffect(() => {
    const pages = Array.from(Array(totalPages).keys(), (n) => n + 1);
    setpagesArray(pages);
  }, [totalPages]);

  const setCurrentPageHandler = (pageNumber: number) => {
    setcurrentPage(pageNumber);
  };

  const [discoverMedia, setDiscoverMedia] = React.useState([]);
  React.useEffect(() => {
    settotalPages(20);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    getDiscover(mediaType!, currentPage).then((data) => {
      if (!data) console.log("Error fetching data");
      else setDiscoverMedia(data);
    });
  }, [mediaType, currentPage]);
  return (
    <>
      <DiscoverFeed mediaInfo={discoverMedia} mediaType={mediaType!} />
      <Pagination
        currentPage={currentPage}
        pagesArray={pagesArray}
        setcurrentPage={setCurrentPageHandler}
      />
    </>
  );
};

export default Discover;

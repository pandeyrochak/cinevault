import React, { useEffect, useState } from "react";
import { DiscoverFeed, Pagination } from "../exports";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getDiscover } from "../../utils/fetchFromAPI";

const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

const Discover = () => {
  const navigate = useNavigate();
  let query = useQuery();
  const currentPage = query.get("page") ? parseInt(query.get("page")!) : 1;

  const { mediaType } = useParams();

  // states for the pagination
  const [totalPages, settotalPages] = useState(1);
  const [discoverMedia, setDiscoverMedia] = React.useState([]);
  const [pagesArray, setpagesArray] = useState(Array<number>);

  // handler for the pagination
  const setCurrentPageHandler = (pageNumber: number) => {
    navigate({
      pathname: `/discover/${mediaType}`,
      search: `?page=${pageNumber}`,
    });
  };
  // useEffect for the pagination
  useEffect(() => {
    const pages = Array.from(Array(totalPages).keys(), (n) => n + 1);
    setpagesArray(pages);
  }, [totalPages]);

  useEffect(() => {
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

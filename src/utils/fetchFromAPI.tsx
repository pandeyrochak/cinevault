const baseUrl = "https://api.themoviedb.org/3";

export const getTrending = async (
  mediaType: string,
  timeWindow: string,
  page: number
) => {
  const response = await fetch(
    `${baseUrl}/trending/${mediaType}/${timeWindow}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
  );
  const data = await response.json();
  return data.results;
};
// fetch upcoming movies and show from the API
export const getUpcoming = async (region?: string) => {
  const response = region
    ? await fetch(
        `${baseUrl}/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&region=${region}`
      )
    : await fetch(
        `${baseUrl}/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`
      );
  const data = await response.json();
  return data.results;
};
// fetch movies and shows from the API
export const getMediaInfo = async (mediatype: string, mediaId: string) => {
  // if (mediatype === "shows") mediatype = "tv";
  // if (mediatype === "movies") mediatype = "movie";
  const response = await fetch(
    `${baseUrl}/${mediatype}/${mediaId}?api_key=${process.env.REACT_APP_API_KEY}`
  );
  const data = await response.json();
  return data;
};

// get trailer from the API
export const getTrailer = async (mediatype: string, mediaId: string) => {
  // if (mediatype === "shows") mediatype = "tv";
  // if (mediatype === "movies") mediatype = "movie";
  const response = await fetch(
    `${baseUrl}/${mediatype}/${mediaId}/videos?api_key=${process.env.REACT_APP_API_KEY}`
  );
  const data = await response.json();

  return data.results.find((item: any) => item.type === "Trailer").key;
};

//discover movies
export const getDiscover = async (mediaType: string, page: number) => {
  const response = await fetch(
    `${baseUrl}/discover/${mediaType}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`
  );
  const data = await response.json();
  return data.results;
};

// get similar movies and shows
export const getSimilar = async (
  mediaType: string,
  page: number,
  mediaId: string
) => {
  const response = await fetch(
    `${baseUrl}/${mediaType}/${mediaId}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&adult=false&page=${page}`
  );
  const data = await response.json();
  return data.results;
};

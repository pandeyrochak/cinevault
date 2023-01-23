const baseUrl = "https://api.themoviedb.org/3";

export const getTrending = async (mediaType: string, timeWindow: string) => {
  const response = await fetch(
    `${baseUrl}/trending/${mediaType}/${timeWindow}?api_key=${process.env.REACT_APP_API_KEY}`
  );
  const data = await response.json();
  console.log(data.results);
  return data.results;
};
// fetch upcoming movies and show from the API
export const getUpcoming = async (region: string) => {
  const response = await fetch(
    `${baseUrl}/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&&region=${region}`
  );
  const data = await response.json();
  console.log(data.results);
  return data.results;
};

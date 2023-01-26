import { genres, languages } from "./constants";

export const getGenreList = (genreIds: any) => {
  return genreIds
    .map((id: number) => {
      return genres.find((genre) => genre.id === id)?.name;
    })
    .join(", ");
};

export const getLanguageName = (languageCode: string) => {
  return languages.find((lang) => lang.iso_639_1 === languageCode)
    ?.english_name;
};

export const formatDate = (date: string) => {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString("default", { month: "long" });
  const day = dateObj.getDate();
  return `${day} ${month}`;
};

export const getRunningTime = (runningTime: number) => {
  const hours = Math.floor(runningTime / 60);
  const minutes = runningTime - 60 * hours;
  return `${hours} hrs ${minutes} mins`;
};

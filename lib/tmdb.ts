import { GenreTMDB, MovieTMDB } from "@/types/movie";

export const TMDB_API_KEY = process.env.TMDB_API_KEY;
export const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export default async function getGenres(type: string): Promise<GenreTMDB[]> {
  const res = await fetch(
    `${TMDB_BASE_URL}/genre/${type}/list?api_key=${TMDB_API_KEY}&language=ru-RU`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TMDB_API_KEY}`,
      },
    },
  ).then((res) => res.json());

  return res.genres;
}

export async function fetchTrending(page: number = 1): Promise<MovieTMDB[]> {
  if (!TMDB_API_KEY) {
    throw new Error("API KEY is not defined");
  }

  const res = await fetch(
    `${TMDB_BASE_URL}/trending/all/week?api_key=${TMDB_API_KEY}&language=ru-RU&page=${page}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TMDB_API_KEY}`,
      },
    },
  )
    .then((res) => res.json())
    .catch((err) => err.message);

  return res.results;
}

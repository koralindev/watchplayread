import { GenreTMDB, MovieTMDB } from "@/types/movie";

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMDB_API_KEY}`,
  },
};

export default async function getGenres(type: string): Promise<GenreTMDB[]> {
  const res = await fetch(
    `${TMDB_BASE_URL}/genre/${type}/list?api_key=${TMDB_API_KEY}&language=ru-RU`,
    options,
  );

  if (!res.ok) {
    throw new Error(`TMDB error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  return data.genres ?? [];
}

export async function fetchTrending(page: number = 1): Promise<MovieTMDB[]> {
  if (!TMDB_API_KEY) {
    throw new Error("API KEY is not defined");
  }

  const res = await fetch(
    `${TMDB_BASE_URL}/trending/all/week?api_key=${TMDB_API_KEY}&language=ru-RU&page=${page}`,
    options,
  );

  if (!res.ok) {
    throw new Error(`TMDB error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  return data.results ?? [];
}

export async function fetchMovie(id: number): Promise<MovieTMDB> {
  if (!TMDB_API_KEY) {
    throw new Error("API KEY is not defined");
  }

  const res = await fetch(`${TMDB_BASE_URL}/movie/${id}`, options);

  if (!res.ok) {
    throw new Error(`TMDB error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  return data;
}

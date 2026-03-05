import { GenreTMDB, MovieTMDB } from "@/types/movie";

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_BASE_URL = "https://api.themoviedb.org/3/";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMDB_API_KEY}`,
  },
};

let genreMap: Map<number, string> | null = null;

export async function tmdbFetch<T>(endpoint: string): Promise<T> {
  const res = await fetch(
    `${TMDB_BASE_URL}/${endpoint}language=ru-RU`,
    options,
  );
  if (!res.ok) {
    throw new Error(`TMDB error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

export async function getGenres() {
  if (genreMap) return genreMap;

  const res = await tmdbFetch<{ genres: GenreTMDB[] }>("genre/movie/list?");
  genreMap = new Map(res.genres.map((genre) => [genre.id, genre.name]));

  return genreMap;
}

export async function getPopularMovies() {
  const [data, genreMap] = await Promise.all([
    tmdbFetch<{ results: MovieTMDB[] }>("movie/popular?limit=10&"),
    getGenres(),
  ]);

  return data.results
    .map((movie) => ({
      ...movie,
      genres: movie.genre_ids.map((id) => genreMap.get(id)),
    }))
    .slice(0, 8);
}

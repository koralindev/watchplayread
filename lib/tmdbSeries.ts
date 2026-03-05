import { GenreTMDB } from "@/types/movie";
import { SeriesTMDB } from "@/types/series";
import { tmdbFetch } from "@/lib/tmdbMovie";

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

async function getGenres() {
  if (genreMap) return genreMap;

  const res = await tmdbFetch<{ genres: GenreTMDB[] }>("genre/movie/list?");
  genreMap = new Map(res.genres.map((genre) => [genre.id, genre.name]));

  return genreMap;
}

export async function getPopularSeries() {
  const [data, genreMap] = await Promise.all([
    tmdbFetch<{ results: SeriesTMDB[] }>("tv/popular?limit=10&"),
    getGenres(),
  ]);

  return data.results
    .map((series) => ({
      ...series,
      genres: series.genre_ids.map((id) => genreMap.get(id)),
    }))
    .slice(0, 8);
}

import { MoviesResponse } from "@/types/movie";

export const POISKKINO_API_KEY = process.env.POISKKINO_API_KEY;
export const POISKKINO_BASE_URL = "https://api.poiskkino.dev/v1.5";

export async function fetchPopularMovies(
  page: number = 1,
): Promise<MoviesResponse> {
  const res = await fetch(
    `${POISKKINO_BASE_URL}/movie?selectFields=id%2Cname%2Ctype%2Crating%2CratingMpaa%2Cgenres%2Cposter%2Ctop250%2Cwatchability&notNullFields=name%2Cposter.url&limit=50`,
    {
      headers: {
        "X-API-KEY": POISKKINO_API_KEY as string,
      },
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Ошибка при получении фильмов");
  }
  return res.json();
}

import { MoviesResKinopoisk } from "@/types/movie";

export const KINOPOISK_API_KEY = process.env.KINOPOISK_API_KEY;
export const KINOPOISK_BASE_URL =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films";

export async function fetchTrending(
  page: number = 1,
): Promise<MoviesResKinopoisk> {
  if (!KINOPOISK_API_KEY) {
    throw new Error("API KEY is not defined");
  }

  const res = await fetch(
    `${KINOPOISK_BASE_URL}/collections?type=TOP_POPULAR_ALL&page=${page}`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": "1d65fd8e-ac5b-4bdc-8988-a7a1fe68ca48",
        "Content-Type": "application/json",
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Fetch error: ${res.status}`);
  }

  return res.json();
}

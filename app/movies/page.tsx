import { StarIcon } from "@/components/icons/hugeicons-star";
import getGenres, { fetchTrending } from "@/lib/tmdb";
import Image from "next/image";
import Link from "next/link";

/* 
TODO: 
- сделать теневую плашку под названия фильмов, чтобы не сливался текст с фоном.
- нормально закинуть жанры, вместо хардкода (подумать либо над контекстом, либо забубенеть зустенд\редакс)
- придумать что-то если будет в жанрах "боевик и приключения" (поправить верстку)
- сдвинуть блок с жанром немного влево, если нет рейтинга (либо перенести рейтинг вообще наверх)
*/

const propertyType: Record<string, string> = {
  movie: "кино",
  tv: "сериал",
};

export default async function MoviesCatalogPage() {
  const movies = await fetchTrending();
  const moviesGenres = await getGenres("movie");
  const tvGenres = await getGenres("tv");

  function createSlug(title: string) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  return (
    <div>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 mx-6 my-12 ">
        {movies.map((movie) => {
          const genreArr = movie.media_type === "tv" ? tvGenres : moviesGenres;
          const genreFind = genreArr.find(
            (genre) => genre.id === movie.genre_ids[0],
          );
          const genreName = genreFind ? genreFind.name : "Unknown";
          return (
            <li key={movie.id}>
              <Link
                href={`/movies/${movie.id}-${createSlug(
                  movie.original_name || movie.original_title || "name",
                )}`}
              >
                <div className="max-w-62.5 w-full relative rounded-4xl cursor-pointer">
                  <Image
                    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                    width={600}
                    height={400}
                    alt={movie.name || movie.title || "Постер"}
                    className="rounded-4xl"
                    unoptimized
                  />
                  <span className="absolute bottom-6 font-bold left-2">
                    {movie.name || movie.title}
                  </span>
                  <div className="absolute bottom-1 flex items-center text-[12px] left-2">
                    {movie.vote_average > 0 && (
                      <>
                        <StarIcon className="stroke-[#ffee24] fill-[#ffee24] absolute bottom-0.75" />
                        <span className="font-bold ml-5 mr-2 leading-0">
                          {movie.vote_average}
                        </span>
                        <span className="inline-block h-3.5 w-px bg-gray-400"></span>
                      </>
                    )}
                    <div className="text-zinc-300">
                      <span className=" pl-2 after:content-['·'] after:mx-1  after:text-zinc-300">
                        {genreName}
                      </span>
                      <span>{propertyType[movie.media_type]}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

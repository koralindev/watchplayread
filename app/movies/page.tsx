import { StarIcon } from "@/components/icons/hugeicons-star";
import { fetchPopularMovies } from "@/lib/kinopoisk";
import Image from "next/image";

export default async function MoviesPage() {
  const data = await fetchPopularMovies();

  const movies = data.docs;

  console.log(data);
  console.log(movies);

  return (
    <div>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 mx-6 my-12 ">
        {movies.map((movie) => (
          <li key={movie.id}>
            <div className="max-w-62.5 w-full relative rounded-4xl cursor-pointer">
              {movie.poster?.url && (
                <Image
                  src={movie.poster.url}
                  width={600}
                  height={400}
                  alt={movie.name}
                  className="rounded-4xl"
                />
              )}
              <span className="absolute bottom-6 font-bold left-2">
                {movie.name}
              </span>
              <div className="absolute bottom-1 flex items-center text-[12px] left-2">
                <StarIcon className="stroke-[#ffee24] fill-[#ffee24] absolute bottom-0.75" />
                <span className="font-bold ml-5 mr-2 leading-0">
                  {movie.rating?.kp}
                </span>
                <span className="inline-block h-3.5 w-px bg-gray-400"></span>
                <div className="text-zinc-300">
                  <span className=" pl-2 after:content-['·'] after:mx-1  after:text-zinc-300">
                    {movie.genres && movie.genres[0].name}
                  </span>
                  <span>{movie.type}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

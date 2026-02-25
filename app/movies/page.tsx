import { StarIcon } from "@/components/icons/hugeicons-star";
import { fetchTrending } from "@/lib/kinopoisk";
import Image from "next/image";

const propertyType: Record<string, string> = {
  FILM: "Кино",
  TV_SERIES: "Сериал",
  MINI_SERIES: "Мини-сериал",
};

export default async function MoviesPage() {
  const data = await fetchTrending();
  console.log(data);
  const movies = data.items;

  return (
    <div>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 mx-6 my-12 ">
        {movies.map((movie) => (
          <li key={movie.kinopoiskId}>
            <div className="max-w-62.5 w-full relative rounded-4xl cursor-pointer">
              <Image
                src={movie.posterUrlPreview}
                width={600}
                height={400}
                alt={movie.nameRu}
                className="rounded-4xl"
                unoptimized
              />
              <span className="absolute bottom-6 font-bold left-2">
                {movie.nameRu}
              </span>
              <div className="absolute bottom-1 flex items-center text-[12px] left-2">
                {(movie.ratingImdb || movie.ratingKinopoisk) && (
                  <>
                    <StarIcon className="stroke-[#ffee24] fill-[#ffee24] absolute bottom-0.75" />
                    <span className="font-bold ml-5 mr-2 leading-0">
                      {movie.ratingKinopoisk || movie.ratingImdb}
                    </span>
                    <span className="inline-block h-3.5 w-px bg-gray-400"></span>
                  </>
                )}
                <div className="text-zinc-300">
                  <span className=" pl-2 after:content-['·'] after:mx-1  after:text-zinc-300">
                    {movie.genres && movie.genres[0].genre}
                  </span>
                  <span>{propertyType[movie.type]}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

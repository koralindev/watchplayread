import { StarIcon } from "lucide-react";
import Image from "next/image";

import { getPopularMovies } from "@/lib/tmdbMovie";
import { getPopularSeries } from "@/lib/tmdbSeries";

/*TODO
- Сделать карусель (ui shadcn)

*/

export default async function HomePage() {
  const moviesPopular = await getPopularMovies();
  const seriesPopular = await getPopularSeries();

  return (
    <div className="ml-60 mr-9">
      <main className="ml-10 text-primary-foreground">
        <div>
          <div className="flex justify-between items-center py-8 cursor-grab active:cursor-grabbing">
            <h1 className="text-[28px]">Сегодня в тренде Кино</h1>
            <span className="text-foreground text-[16px] font-bold cursor-pointer">
              Смотреть все
            </span>
          </div>
          <div>
            <ul
              className="flex overflow-x-auto snap-x snap-mandatory cursor-grab active:cursor-grabbing
  select-none scroll-smooth mb-12 gap-4 no-scrollbar"
            >
              {moviesPopular.map((movie) => (
                <li key={movie.id} className="basis-1/4 shrink-0">
                  <div className="max-w-62.5 w-full relative rounded-4xl cursor-pointer">
                    <Image
                      src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                      width={600}
                      height={400}
                      alt={movie.title}
                      className="rounded-4xl overflow-hidden"
                      unoptimized
                    />
                    <div className="absolute top-0 flex items-center right-0 bg-[#212121]/30 backdrop-blur-[2.5px] px-2 py-1 rounded-tr-4xl rounded-bl-4xl">
                      <StarIcon className="stroke-[#ffee24] fill-[#ffee24]" />
                      <div className="font-bold ml-2 text-[16px]">
                        {movie.vote_average.toFixed(1)}
                      </div>
                    </div>
                    <div className="pl-4 absolute bottom-0 bg-linear-to-b to-black from-black/10 backdrop-blur-[1.5px] w-full py-2 rounded-b-4xl">
                      <div>{movie.title}</div>
                      <div className="text-[12px] text-zinc-400">
                        <span>{movie.genres[0]}</span>
                        {movie.genres[1] && (
                          <span className="before:content-['·'] before:mx-1  before:text-zinc-400">
                            {movie.genres[1]}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center py-8 cursor-grab active:cursor-grabbing">
            <h1 className="text-[28px]">Сегодня в тренде ТВ</h1>
            <span className="text-foreground text-[16px] font-bold cursor-pointer">
              Смотреть все
            </span>
          </div>
          <div>
            <ul
              className="flex overflow-x-auto snap-x snap-mandatory cursor-grab active:cursor-grabbing
  select-none scroll-smooth mb-12 gap-4 no-scrollbar"
            >
              {seriesPopular.map((series) => (
                <li key={series.id} className="basis-1/4 shrink-0">
                  <div className="max-w-62.5 w-full relative rounded-4xl cursor-pointer">
                    <Image
                      src={`https://image.tmdb.org/t/p/w342${series.poster_path}`}
                      width={600}
                      height={400}
                      alt={series.name}
                      className="rounded-4xl overflow-hidden"
                      unoptimized
                    />
                    <div className="absolute top-0 flex items-center right-0 bg-[#212121]/30 backdrop-blur-[2.5px] px-2 py-1 rounded-tr-4xl rounded-bl-4xl">
                      <StarIcon className="stroke-[#ffee24] fill-[#ffee24]" />
                      <div className="font-bold ml-2 text-[16px]">
                        {series.vote_average.toFixed(1)}
                      </div>
                    </div>
                    <div className="pl-4 absolute bottom-0 bg-linear-to-b to-black from-black/10 backdrop-blur-[1.5px] w-full py-2 rounded-b-4xl">
                      <div>{series.name}</div>
                      <div className="text-[12px] text-zinc-400">
                        <span>{series.genres[0]}</span>
                        {series.genres[1] && (
                          <span className="before:content-['·'] before:mx-1  before:text-zinc-400">
                            {series.genres[1]}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center py-8 cursor-grab active:cursor-grabbing">
            <h1 className="text-[28px]">Сегодня в тренде Игр</h1>
            <span className="text-foreground text-[16px] font-bold cursor-pointer">
              Смотреть все
            </span>
          </div>
          <div>
            <ul
              className="flex overflow-x-auto snap-x snap-mandatory cursor-grab active:cursor-grabbing
  select-none scroll-smooth mb-12 gap-4 no-scrollbar"
            >
              {moviesPopular.map((movie) => (
                <li key={movie.id} className="basis-1/4 shrink-0">
                  <div className="max-w-62.5 w-full relative rounded-4xl cursor-pointer">
                    <Image
                      src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                      width={600}
                      height={400}
                      alt={movie.title}
                      className="rounded-4xl overflow-hidden"
                      unoptimized
                    />
                    <div className="absolute top-0 flex items-center right-0 bg-[#212121]/30 backdrop-blur-[2.5px] px-2 py-1 rounded-tr-4xl rounded-bl-4xl">
                      <StarIcon className="stroke-[#ffee24] fill-[#ffee24]" />
                      <div className="font-bold ml-2 text-[16px]">
                        {movie.vote_average.toFixed(1)}
                      </div>
                    </div>
                    <div className="pl-4 absolute bottom-0 bg-linear-to-b to-black from-black/10 backdrop-blur-[1.5px] w-full py-2 rounded-b-4xl">
                      <div>{movie.title}</div>
                      <div className="text-[12px] text-zinc-400">
                        <span>{movie.genres[0]}</span>
                        {movie.genres[1] && (
                          <span className="before:content-['·'] before:mx-1  before:text-zinc-400">
                            {movie.genres[1]}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center py-8 cursor-grab active:cursor-grabbing">
            <h1 className="text-[28px]">Сегодня в тренде Книг</h1>
            <span className="text-foreground text-[16px] font-bold cursor-pointer">
              Смотреть все
            </span>
          </div>
          <div>
            <ul
              className="flex overflow-x-auto snap-x snap-mandatory cursor-grab active:cursor-grabbing
  select-none scroll-smooth mb-12 gap-4 no-scrollbar"
            >
              {moviesPopular.map((movie) => (
                <li key={movie.id} className="basis-1/4 shrink-0">
                  <div className="max-w-62.5 w-full relative rounded-4xl cursor-pointer">
                    <Image
                      src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                      width={600}
                      height={400}
                      alt={movie.title}
                      className="rounded-4xl overflow-hidden"
                      unoptimized
                    />
                    <div className="absolute top-0 flex items-center right-0 bg-[#212121]/30 backdrop-blur-[2.5px] px-2 py-1 rounded-tr-4xl rounded-bl-4xl">
                      <StarIcon className="stroke-[#ffee24] fill-[#ffee24]" />
                      <div className="font-bold ml-2 text-[16px]">
                        {movie.vote_average.toFixed(1)}
                      </div>
                    </div>
                    <div className="pl-4 absolute bottom-0 bg-linear-to-b to-black from-black/10 backdrop-blur-[1.5px] w-full py-2 rounded-b-4xl">
                      <div>{movie.title}</div>
                      <div className="text-[12px] text-zinc-400">
                        <span>{movie.genres[0]}</span>
                        {movie.genres[1] && (
                          <span className="before:content-['·'] before:mx-1  before:text-zinc-400">
                            {movie.genres[1]}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

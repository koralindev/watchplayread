"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Home07Icon } from "@/components/icons/hugeicons-home-07";
import { FilmRoll02Icon } from "@/components/icons/hugeicons-film-roll-02";
import { BookOpen02Icon } from "@/components/icons/hugeicons-book-open-02";
import { GameController03Icon } from "@/components/icons/hugeicons-game-controller-03";
import { Logout05Icon } from "@/components/icons/hugeicons-logout-05";
import { Tv01Icon } from "@/components/icons/hugeicons-tv-01";

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const current = pathname.split("/")[1] || "games";

  return (
    <header className="fixed flex flex-col w-[238px] h-screen bg-[#212121] rounded-r-[45px] pt-10 pb-18">
      <div className="ml-8 flex flex-col">
        <Image
          src={"/Logo.png"}
          width={100}
          height={80}
          alt={"Logo Viewniverse"}
          className="ml-10"
        />
        <div className="font-hachi text-2xl text-[#1C9CA3] mt-3">
          Viewniverse
        </div>
      </div>
      <nav className="ml-10 text-2xl text-[#666666] mt-12 flex flex-col flex-1">
        <ul className="">
          <li className="flex pt-8 pb-8 items-start">
            <Home07Icon className="stroke-[#666666] mr-3 w-7 h-7" />
            Главная
          </li>
          <li className="flex pt-8 pb-8 items-center">
            <FilmRoll02Icon className="stroke-[#666666] mr-3 w-7 h-7" />
            Кино
          </li>
          <li className="flex pt-8 pb-8 items-start">
            <Tv01Icon className="stroke-[#666666] mr-3 w-7 h-7" />
            Сериалы
          </li>
          <li className="flex pt-8 pb-8 items-start">
            <BookOpen02Icon className="stroke-[#666666] mr-3 w-7 h-7" />
            Книги
          </li>
          <li className="flex pt-8 pb-8 items-start">
            <GameController03Icon className="stroke-[#666666] mr-3 w-7 h-7" />
            Игры
          </li>
        </ul>
        <button className="mt-auto flex items-center pb-8">
          <Logout05Icon className="stroke-[#666666] mr-3 w-7 h-7" />
          Выйти
        </button>
      </nav>
    </header>
  );
};

"use client";

/*
TODO:
1. Добавить анимацию при hover
2. Добавить анимацию "выдвижения" менюшки
3. Анимация при hover на Logout
*/

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Home07Icon } from "@/components/icons/hugeicons-home-07";
import { FilmRoll02Icon } from "@/components/icons/hugeicons-film-roll-02";
import { BookOpen02Icon } from "@/components/icons/hugeicons-book-open-02";
import { GameController03Icon } from "@/components/icons/hugeicons-game-controller-03";
import { Logout05Icon } from "@/components/icons/hugeicons-logout-05";
import { Tv01Icon } from "@/components/icons/hugeicons-tv-01";
import { NavItem } from "@/components/ui/NavItem";

export const Header = () => {
  const menu = [
    {
      title: "Главная",
      icon: Home07Icon,
      href: "/",
    },
    {
      title: "Кино",
      icon: FilmRoll02Icon,
      href: "/movies",
    },
    {
      title: "Сериалы",
      icon: Tv01Icon,
      href: "/series",
    },
    {
      title: "Книги",
      icon: BookOpen02Icon,
      href: "/books",
    },
    {
      title: "Игры",
      icon: GameController03Icon,
      href: "/games",
    },
  ];

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
      <nav className="text-2xl mt-12 flex flex-col flex-1">
        <ul className="font-semibold">
          {menu.map((item) => (
            <NavItem key={item.title} title={item.title} icon={item.icon} />
          ))}
        </ul>
        <button className="mt-auto flex items-center pl-10 cursor-pointer hover:border-b">
          <Logout05Icon className=" mr-3 w-7 h-7" />
          Выйти
        </button>
      </nav>
    </header>
  );
};

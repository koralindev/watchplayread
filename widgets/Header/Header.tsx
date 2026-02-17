"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const current = pathname.split("/")[1] || "games";

  return (
    <header className="flex justify-between items-center py-6 px-8">
      <div className="mx-8">
        <div
          className="cursor-pointer font-hachi"
          onClick={() => router.push("/")}
        >
          WatchPlayRead
        </div>
      </div>
      <Tabs defaultValue="games">
        <TabsList className="flex justify-between gap-4 border-3 rounded-lg px-7 py-5.5">
          <TabsTrigger
            value="games"
            // onClick={() => router.push("/games")}
            className="cursor-pointer py-1.5"
          >
            Игры
          </TabsTrigger>
          <TabsTrigger
            value="movies"
            onClick={() => router.push("/movies")}
            className="cursor-pointer py-1.5"
          >
            Фильмы
          </TabsTrigger>
          <TabsTrigger
            value="books"
            // onClick={() => router.push("/books")}
            className="cursor-pointer py-1.5"
          >
            Книги
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div>
        <Button className="cursor-pointer mr-4">Войти</Button>
        <Button variant="secondary" className="cursor-pointer">
          Регистрация
        </Button>
      </div>
    </header>
  );
};

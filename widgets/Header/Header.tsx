"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname, useRouter } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const current = pathname.split("/")[1] || "games";

  return (
    <header className="flex justify-between items-center p-8 ">
      <div className="mx-8">
        <div
          className="cursor-pointer font-hachi"
          onClick={() => router.push("/")}
        >
          WatchPlayRead
        </div>
      </div>
      <Tabs defaultValue="games">
        <TabsList className="flex justify-between gap-4 border-3 rounded-lg py-2 px-7">
          <TabsTrigger
            value="games"
            // onClick={() => router.push("/games")}
            className="cursor-pointer"
          >
            Игры
          </TabsTrigger>
          <TabsTrigger
            value="games"
            // onClick={() => router.push("/movies")}
            className="cursor-pointer"
          >
            Фильмы
          </TabsTrigger>
          <TabsTrigger
            value="games"
            // onClick={() => router.push("/books")}
            className="cursor-pointer"
          >
            Книги
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="cursor-pointer">ЛК</div>
    </header>
  );
};

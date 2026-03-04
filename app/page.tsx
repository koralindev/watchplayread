import { StarIcon } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="ml-60">
      <main className="ml-10 text-primary-foreground">
        <div>
          <div className="">
            <h1 className="text-[28px] py-8">Сегодня в тренде Кино</h1>
            <span className="text-foreground text-[16px] font-bold">
              Смотреть все
            </span>
          </div>
          <div>
            <ul>
              <li>
                <div className="max-w-62.5 w-full relative rounded-4xl cursor-pointer">
                  <Image
                    src={"/testposter.jpg"}
                    width={600}
                    height={400}
                    alt={"Постер"}
                    className="rounded-4xl overflow-hidden"
                    unoptimized
                  />
                  <div className="absolute top-0 flex items-center right-0 bg-[#212121]/30 backdrop-blur-[2.5px] px-2 py-1 rounded-tr-4xl rounded-bl-4xl">
                    <StarIcon className="stroke-[#ffee24] fill-[#ffee24]" />
                    <div className="font-bold ml-2 text-[16px]">7.6</div>
                  </div>
                  <div className="pl-4 absolute bottom-0 bg-linear-to-b to-black from-black/0 backdrop-blur-[0.5px] w-full py-2 rounded-b-4xl">
                    <div>Маленькие женщины</div>
                    <div className="text-[12px] text-zinc-400">
                      <span className="after:content-['·'] after:mx-1  after:text-zinc-400">
                        Фантастика
                      </span>
                      <span>Мелодрама</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

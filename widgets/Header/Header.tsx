export const Header = () => {
    return(
        <header className="flex justify-between items-center p-8">
            <div className="mx-8"><div className="cursor-pointer font-hachi">WatchPlayRead</div></div>     
            <ul className="flex justify-between gap-2 font-comfortaa"><li className="cursor-pointer">Игры</li>
            <li className="cursor-pointer">Фильмы</li>
            <li className="cursor-pointer">Книги</li></ul>           
            <div className="cursor-pointer">ЛК</div>
        </header>
    );
};
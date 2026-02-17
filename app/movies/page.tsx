export default function MoviesPage() {
  return (
    <div>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 mx-6 my-12">
        <li>
          <div className="max-w-[250px] w-full relative">
            <img src="../testposter.jpg" alt="little womens" />
            <span className="absolute bottom-3">Маленькие женщины</span>
          </div>
        </li>
        <li>
          <div className="">
            <img src="../testposter.jpg" alt="little womens" />
          </div>
        </li>
        <li>
          <div className="">
            <img src="../testposter.jpg" alt="little womens" />
          </div>
        </li>
        <li>
          <div className="">
            <img src="../testposter.jpg" alt="little womens" />
          </div>
        </li>
        <li>
          <div className="">
            <img src="../testposter.jpg" alt="little womens" />
          </div>
        </li>
        <li>
          <div className="">
            <img src="../testposter.jpg" alt="little womens" />
          </div>
        </li>
      </ul>
    </div>
  );
}

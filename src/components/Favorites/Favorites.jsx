import SearchBar from "../Header/SearchBar/SearchBar";

export default function Favorites() {
  return (
    <>
      <header className="bg-slate-950 py-5 grid grid-cols-1 sm:grid-cols-3 items-center">
        <h1 className="text-white text-center text-4xl">
          Super<span className="text-amber-500">Buy</span>
        </h1>
        <SearchBar />
      </header>
    </>
  );
}

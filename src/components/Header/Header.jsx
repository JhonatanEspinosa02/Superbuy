import SearchBar from "./SearchBar/SearchBar";
import CustomerItem from "./Customer/CustomerItem";

export default function Header() {
  return (
    <header className="bg-slate-950 py-5 grid grid-cols-1 sm:grid-cols-3 items-center">
      <h1 className="text-white text-center text-4xl">
        Super<span className="text-amber-500">Buy</span>
      </h1>
      <SearchBar />
      <CustomerItem />
    </header>
  );
}

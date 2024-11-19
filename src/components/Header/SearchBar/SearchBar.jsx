import { GrFormSearch } from "react-icons/gr";

export default function SearchBar() {
  return (
    <>
      <label className="relative block">
        <span className="sr-only">Search</span>
        <button className="absolute inset-y-0 left-0 flex items-center pl-1">
          <GrFormSearch className="text-3xl" />
        </button>
        <input
          type="text"
          name="search"
          placeholder="Search for anything..."
          className="block bg-white w-full border border-amber-500 rounded-md py-2 pl-10 pr-3 shadow-sm focus:outline-none focus:ring-amber-500 focus:ring-2"
        />
      </label>
    </>
  );
}

import { FaRegStar, FaRegUserCircle } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";

export default function CustomerItem() {
  return (
    <div className="flex justify-center gap-10 items-center">
      <a
        href="#"
        className="flex justify-items-center gap-3 hover:bg-slate-900 p-3 rounded-lg"
      >
        <FaRegUserCircle className="text-white text-2xl" />
        <p className="text-white">Sign In</p>
      </a>
      <a
        href="#"
        className="flex justify-items-center gap-3 hover:bg-slate-900 p-3 rounded-lg"
      >
        <FaRegStar className="text-amber-500 text-2xl" />
        <p className="text-white">Favorites</p>
      </a>
      <a
        href="#"
        className="flex justify-items-center gap-3 hover:bg-slate-900 p-3 rounded-lg"
      >
        <MdOutlineAddShoppingCart className="text-white text-2xl" />
        <p className="text-white">Cart</p>
      </a>
    </div>
  );
}
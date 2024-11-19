import ButtonCard from "../ButtonCard/ButtonCard";
import ButtonFavorite from "../ButtonCard/ButtonFavorite";
import ButtonEye from "../ButtonCard/ButtonEye";
import { HashLoader } from "react-spinners";

export default function ProductCard({ title, price, images, category }) {
  return (
    <>
      <div className="bg-gray-100 mx-10 my-7 px-5 py-8 rounded-lg sm:mx-5 md:mx-2 md:my-4 lg:my-5 lg:mx-5 flex flex-col">
        <img className="rounded-xl" src={images[0]} alt={title} />
        <div className="mt-2 flex flex-col flex-grow">
          <h2 className="font-bold">{title}</h2>
          <p className="font-extralightn text-gray-400">{category.name}</p>
          <div className="flex justify-between mt-3">
            <div>
              <h2>${price}</h2>
            </div>
            <div className="flex justify-between gap-2">
              <ButtonFavorite />
              <ButtonEye />
            </div>
          </div>
        </div>
        <div className=" text-center mt-7">
          <ButtonCard />
        </div>
      </div>
    </>
  );
}

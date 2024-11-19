export default function ProductCard({ title, price, images }) {
  return (
    <div className="bg-gray-100 mx-10 my-7 px-5 py-8 rounded-lg sm:mx-5 md:mx-2 md:my-4 lg:my-5 lg:mx-5">
      <img className="rounded-xl" src={images[0]} alt={title} />
      <div className="mt-5">
        <h2 className="font-bold">{title}</h2>
        <h2>${price}</h2>
      </div>
    </div>
  );
}

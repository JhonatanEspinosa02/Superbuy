import { useFetchProduct } from "../../hooks/useGetProduct";
import ProductCard from "./ProductCard";
import Loader from "../Loader/Loader";

export default function Products() {
  const { products, loading } = useFetchProduct();

  return (
    <>
      {loading && <Loader />}
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-3 sm:py-5 md:grid-cols-3 lg:grid-cols-4 lg:px-14 lg:py-5">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}

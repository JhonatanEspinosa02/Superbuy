import { useState, useEffect } from "react";
import { ApiCustom } from "../../services/API/Api";
import ProductCard from "./ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const responseData = await ApiCustom();
      setProducts(responseData);
    };
    fetchProduct();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-3 sm:py-5 md:grid-cols-3 lg:grid-cols-4 lg:px-14 lg:py-5">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}

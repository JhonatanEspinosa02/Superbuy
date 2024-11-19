import { useEffect, useState } from "react";
import { ApiCustom } from "../services/API/Api";

export const useFetchProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    const responseData = await ApiCustom();
    setProducts(responseData);
    setLoading(false);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return {
    products,
    loading,
  };
};

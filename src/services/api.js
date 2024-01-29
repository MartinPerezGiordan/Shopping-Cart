import { useEffect, useState } from "react";

function useProducts() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=30")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Ups.. there has been an error ${res.status}`);
        }
        return res.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError(err);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}

export default useProducts;
import Header from "../components/Header";
import "./Home.css";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import useProducts from "../services/api";

const Home = ({ cartList, onListAdd }) => {
  const { data: products, loading, error } = useProducts();

  useEffect(() => {
    if (loading) {
      console.log("Loading products...");
    } else if (error) {
      console.error("Error fetching products:", error);
    }
  }, [loading, error]);

  return (
    <>
      <div className="container">
        <Header cartList={cartList} />
        <div className="hero">
          <h1>
            Indulge in Effortless Shopping from the Cozy Comfort of Your Home –
            Where Convenience Meets Style!
          </h1>
          <img src="../images/Bolsa.png" alt="" />
        </div>
      </div>

      <section>
        <h1>Products</h1>
        <div className="product-display">
          {products &&
            products.map((product, index) => (
              <ProductCard
                onListAdd={onListAdd}
                key={index}
                product={product}
              />
            ))}
        </div>
      </section>
    </>
  );
};

export default Home;

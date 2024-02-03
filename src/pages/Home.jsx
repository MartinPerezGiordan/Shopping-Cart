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
      <div className="img-container">
        <div className="container">
          <Header cartList={cartList} />
          <div className="hero">
            <div className="hero-info">
              <h1>
                Indulge in Effortless Shopping from the Cozy Comfort of Your
                Home
              </h1>
              <a className="big-btn" href="#s1">
                Start Shopping
              </a>
            </div>
          </div>
        </div>
      </div>

      <section id="s1">
        <h2>Products</h2>
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

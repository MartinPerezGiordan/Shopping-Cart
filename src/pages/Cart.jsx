import CartItemCard from "../components/CartItemCard";
import "./Cart.css";
import Header from "../components/Header";
import { useId } from "react";

const Cart = ({ cartList, onListChange, onListRemove }) => {
  return (
    <>
      <Header cartList={cartList}></Header>
      <h1>Cart</h1>
      <ul>
        {cartList
          .filter((item) => !item.isRemoved) // Filter out items with isRemoved: true
          .map((item, index) => (
            <CartItemCard
              onListChange={onListChange}
              onListRemove={onListRemove}
              item={item}
              key={index}
            />
          ))}
      </ul>
      <hr />
      <h2>Total: $1230</h2>
      <button onClick={() => alert("Successful buy")}>Checkout</button>
    </>
  );
};
export default Cart;

import CartItemCard from "../components/CartItemCard";
import "./Cart.css";
import Header from "../components/Header";

const Cart = ({ cartList, onListChange }) => {
  let cartItemCount = cartList.length;

  return (
    <>
      <Header cartItemCount={cartItemCount}></Header>
      <h1>Cart</h1>
      <ul>
        {cartList.map((item) => (
          <CartItemCard item={item} />
        ))}
      </ul>
      <hr />
      <h2>Total: $1230</h2>
      <button onClick={() => alert("Not implemented yet")}>Checkout</button>
    </>
  );
};
export default Cart;

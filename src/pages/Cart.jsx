import CartItemCard from "../components/CartItemCard";
import "./Cart.css";
import Header from "../components/Header";

const Cart = ({ cartList, onListAdd, onListRemove }) => {
  function calculateTotal() {
    let total = 0;
    cartList.forEach((item) => {
      if (!item.isRemoved) {
        total += item.price * item.quantity;
      }
    });

    return total.toFixed(2);
  }

  return (
    <>
      <Header cartList={cartList}></Header>
      <h1>Cart</h1>
      <ul>
        {cartList
          .filter((item) => !item.isRemoved) // Filter out items with isRemoved: true
          .map((item) => (
            <CartItemCard
              onListAdd={onListAdd}
              onListRemove={onListRemove}
              item={item}
              key={item.id}
            />
          ))}
      </ul>
      <hr />
      <h2>Total: ${calculateTotal()}</h2>
      <button
        onClick={() => {
          if (calculateTotal() > 0) {
            alert("Successful buy, your total is $" + calculateTotal());
          } else {
            alert("Your cart is empty");
          }
        }}
      >
        Checkout
      </button>
    </>
  );
};
export default Cart;

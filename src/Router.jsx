import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useState, useEffect } from "react";

const Router = () => {
  const [cartList, setCartList] = useState([]);

  const handleCartAdd = (newItem) => {
    setCartList((prevCartList) => {
      // Check if the item with the same ID already exists in the cart
      const itemExists = prevCartList.some((item) => item.id === newItem.id);

      // If the item exists, update its quantity; otherwise, add it to the cart
      return itemExists
        ? prevCartList.map((item) =>
            item.id === newItem.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  isRemoved: false,
                }
              : item
          )
        : [...prevCartList, { ...newItem, quantity: 1 }];
    });
  };

  useEffect(() => {
    console.log(cartList); // Log the updated cartList with quantity
  }, [cartList]);

  const handleCartRemove = (itemToRemove) => {
    setCartList((prevCartList) => {
      return prevCartList.map((item) => {
        if (item === itemToRemove && itemToRemove.quantity < 2) {
          return { ...item, quantity: 0, isRemoved: true };
        } else if (item === itemToRemove && itemToRemove.quantity >= 2) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          cartList={cartList}
          onListAdd={(newItem) => handleCartAdd(newItem)}
        />
      ),
    },
    {
      path: "/cart",
      element: (
        <Cart
          cartList={cartList}
          onListAdd={(newItem) => handleCartAdd(newItem)}
          onListRemove={(itemToRemove) => handleCartRemove(itemToRemove)}
        />
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;

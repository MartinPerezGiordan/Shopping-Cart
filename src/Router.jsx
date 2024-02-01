import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useState } from "react";

const Router = () => {
  const [cartList, setCartList] = useState([]);

  const handleCartChange = (newItem) => {
    setCartList((prevCartList) => [...prevCartList, newItem]);
  };

  const handleCartRemove = (itemToRemove) => {
    setCartList((prevCartList) =>
      prevCartList.map((item) =>
        item === itemToRemove ? { ...item, isRemoved: true } : item
      )
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          cartList={cartList}
          onListChange={(newItem) => handleCartChange(newItem)}
        />
      ),
    },
    {
      path: "/cart",
      element: (
        <Cart
          cartList={cartList}
          onListChange={(newItem) => handleCartChange(newItem)}
          onListRemove={(itemToRemove) => handleCartRemove(itemToRemove)}
        />
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;

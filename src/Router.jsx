import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";

const Router = () => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeItemFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/shop",
      element: <Shop addItem={addItemToCart}/>,
    }
  ]);

  return( 
    <RouterProvider router={router}>
      <Routes>
        {/* Render your routes here */}
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop addItem={addItemToCart} />} />
      </Routes>
    </RouterProvider>
  );
};

export default Router;
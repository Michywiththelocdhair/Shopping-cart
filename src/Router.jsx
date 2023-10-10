import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";
import Cart from "./Cart";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/shop",
      element: <Shop />,
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
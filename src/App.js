import "./App.css";
import MealView, { loader as mealLoader } from "./components/menu/MealView";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import Root from "./pages/Root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { sendCartData } from "./store/cart-action";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: ":mealId",
        id: "mealId",
        element: <MealView />,
        loader: mealLoader,
      },
      { path: "cart", element: <CartPage /> },
    ],
  },
]);
function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  useEffect(() => {
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return <RouterProvider router={router} />;
}

export default App;

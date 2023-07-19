import "./App.css";
import MealView, { loader as mealLoader } from "./components/menu/MealView";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import Root from "./pages/Root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { sendCartData, fetchCartData } from "./store/cart-action";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProfilePage from "./pages/ProfilePage";

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
      { path: "profile", element: <ProfilePage /> },
    ],
  },
]);
function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return <RouterProvider router={router} />;
}

export default App;

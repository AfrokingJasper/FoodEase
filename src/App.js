import "./App.css";
import MealView, { loader as mealLoader } from "./components/menu/MealView";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import Root from "./pages/Root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
  return <RouterProvider router={router} />;
}

export default App;

import "./App.css";
import HeroPage from "./pages/HeroPage";
import Root from "./pages/Root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ path: "/", element: <HeroPage /> }],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

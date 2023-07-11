import "./App.css";
import Root from "./pages/Root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([{ path: "/", element: <Root /> }]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

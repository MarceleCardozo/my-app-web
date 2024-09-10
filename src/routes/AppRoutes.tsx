import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}

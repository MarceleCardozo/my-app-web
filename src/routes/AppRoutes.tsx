import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/authentication/sign-in/SignIn";
import SignUp from "../pages/authentication/sign-up/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}

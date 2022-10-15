import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import { SignIn } from "./pages/SignIn";

export const RouteList = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/signin", element: <SignIn /> },
  ]);
};

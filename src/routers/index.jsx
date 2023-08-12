import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages";
import About from "../components/organisms/About";
import Contact from "../components/organisms/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

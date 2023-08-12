import { RouterProvider } from "react-router-dom";
import HomePage from "./pages";
import { router } from "./routers";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

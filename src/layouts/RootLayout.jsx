import { NavLink, Outlet } from "react-router-dom";
import Header from "../components/organisms/Header";
import { AiOutlineMenu } from "react-icons/ai";

export default function RootLayout() {
  return (
    <>
      <div className="bg-clr-1 text-clr-4">
        <div className="flex justify-center items-center">
          <div className="w-1/4">
            <Header />
          </div>

          <div className="w-2/4">
            <div className="flex">
              <div className="w-1/3">
                <NavLink>Home</NavLink>
              </div>
              <div className="w-1/3">
                <NavLink to={"/about"}>About</NavLink>
              </div>
              <div className="w-1/3">
                <NavLink to={"/contact"}>Contact</NavLink>
              </div>
            </div>
          </div>

          <div className="w-1/4 relative">
            <div className="absolute top-0 right-0">
              <AiOutlineMenu size={28} />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

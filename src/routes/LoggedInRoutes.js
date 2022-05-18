import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Login } from "../views/Login";

export default function LoggedInRoutes() {
  const user = useSelector((state) => state?.auth?.user);
  return user ? <Outlet /> : <Login />;
}

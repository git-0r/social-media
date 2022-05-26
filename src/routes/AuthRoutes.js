import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthRoutes() {
  const user = useSelector((state) => state?.auth?.user);

  return user ? <Navigate to="/" /> : <Outlet />;
}

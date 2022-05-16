import { useDispatch, useSelector } from "react-redux";
import { logout } from "../auth/authSlice";

export const Home = () => {
  const user = useSelector((state) => state?.auth?.user);
  const dispatch = useDispatch();
  const out = () => {
    localStorage.clear();
    dispatch(logout());
  };

  return (
    <>
      <h1>
        Welcome! {user?.username} {user?._id}
      </h1>
      <button onClick={out}>Logout</button>
    </>
  );
};

import styled from "styled-components";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Login } from "../views/Login";
import HomeLeft from "../components/home/HomeLeft";
import { HomeRight } from "../components/home/HomeRight";

export default function LoggedInRoutes() {
  const user = useSelector((state) => state?.auth?.user);
  return user ? (
    <Wrapper>
      <HomeLeft />
      <HomeCenter>
        <Outlet />
      </HomeCenter>
      <HomeRight />
    </Wrapper>
  ) : (
    <Login />
  );
}

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 25% 50% 25%;
  font-family: var(--ff-text);
  color: ${({ theme }) => theme.colorPrimary};
  background-color: ${({ theme }) => theme.bgSecondary};
  transition: all 0.5s linear;
  position: relative;
`;
const HomeCenter = styled.section`
  overflow-wrap: break-word;
  padding: 1rem 4rem;
`;

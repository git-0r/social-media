import styled from "styled-components";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import HomeLeft from "../components/home/HomeLeft";
import { HomeRight } from "../components/home/HomeRight";
import { medium } from "../styles/responsive";

export default function NotLoggedInRoutes() {
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
    <Wrapper>
      <div />
      <HomeCenter>
        <Outlet />
      </HomeCenter>
      <div />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  font-family: var(--ff-text);
  color: ${({ theme }) => theme.colorPrimary};
  background-color: ${({ theme }) => theme.bgSecondary};
  transition: all 0.5s linear;
  position: relative;
  ${medium({
    "grid-template-columns": "25% 50% 25%",
    display: "grid",
  })}
`;
const HomeCenter = styled.section`
  overflow-wrap: break-word;
  padding: 1rem 1rem 5rem 1rem;
  min-height: calc(100vh - 10rem);
  ${medium({
    margin: "0",
    padding: "1rem 4rem",
  })}
`;

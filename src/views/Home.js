import styled from "styled-components";
import HomeLeft from "../components/home/HomeLeft";
import { HomeRight } from "../components/home/HomeRight";
import CreatePost from "../components/create-post/CreatePost";
import Feed from "../components/home/Feed";

export const Home = () => {
  return (
    <Wrapper>
      <HomeLeft />
      <HomeCenter>
        <CreatePost />
        <Feed />
      </HomeCenter>
      <HomeRight />
    </Wrapper>
  );
};

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

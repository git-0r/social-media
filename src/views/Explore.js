import styled from "styled-components";
import HomeLeft from "../components/home/HomeLeft";
import { HomeRight } from "../components/home/HomeRight";
import ExploreFeed from "../components/explore/ExploreFeed";

const Explore = () => {
  return (
    <Wrapper>
      <HomeLeft />
      <HomeCenter>
        <ExploreFeed />
      </HomeCenter>
      <HomeRight />
    </Wrapper>
  );
};

export default Explore;

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

import styled from "styled-components";

export const HomeRight = () => {
  return <ContainerRight>{/* <h1>Coming Soon</h1> */}</ContainerRight>;
};

const ContainerRight = styled.section`
  overflow-wrap: break-word;
  position: sticky;
  top: 4rem;
  height: calc(100vh - 4rem);
`;

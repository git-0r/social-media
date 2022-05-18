import styled, { keyframes } from "styled-components";

const Loader = () => {
  return (
    <div>
      <Wrapper />
      <Text>Loading...</Text>
    </div>
  );
};
export default Loader;

const loader = keyframes`
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  `;

const Wrapper = styled.div`
  margin: 10px auto;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colorPrimary};
  position: relative;
  -webkit-animation: ${loader} 1.4s infinite linear;
  animation: ${loader} 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  &::before {
    width: 50%;
    height: 50%;
    background: ${({ theme }) => theme.colorPrimary};
    border-radius: 50%;
    position: absolute;
    top: 1rem;
    left: 0;
    content: "";
  }
`;

const Text = styled.p`
  margin: 0;
  text-align: center;
`;

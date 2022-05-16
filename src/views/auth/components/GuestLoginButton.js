import styled from "styled-components";
import { Button } from "../styles";

export const GuestLoginButton = ({ login }) => {
  return (
    <LoginButton onClick={login} value="guestLogin">
      Guest Login
    </LoginButton>
  );
};

const LoginButton = styled(Button)`
  background: inherit;
  color: inherit;
  margin: 1rem 0;
  width: fit-content;
  &:hover {
    background: initial;
  }
`;

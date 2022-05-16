import styled from "styled-components";

export const GuestLoginButton = ({ login }) => {
  return (
    <LoginButton onClick={login} value="guestLogin">
      Guest Login
    </LoginButton>
  );
};

const LoginButton = styled.button`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.5rem;
  font-family: inherit;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colorSecondary};
  transition: all 0.3s;
  background: inherit;
  color: inherit;
  margin: 1rem 0;
  width: fit-content;
  &:hover {
    background: initial;
  }
`;

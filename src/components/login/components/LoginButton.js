import styled from "styled-components";

export const LoginButton = () => {
  return (
    <Button>
      Login
      <ion-icon name="arrow-forward"></ion-icon>
    </Button>
  );
};

export const Button = styled.button`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.5rem;
  font-family: inherit;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.colorSecondary};
  color: ${({ theme }) => theme.bgSecondary};
  transition: all 0.3s;
  &:hover {
    color: ${({ theme }) => theme.bgPrimary};
    background: ${({ theme }) => theme.colorPrimary};
  }
`;

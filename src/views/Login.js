import styled from "styled-components";
import { LoginForm } from "../components/login/LoginForm";
import { medium } from "../styles/responsive";

export const Login = () => {
  return (
    <Wrapper>
      <SectionLeft>
        <PageTitle>Login ✨</PageTitle>
        <LoginForm />
      </SectionLeft>
      <SectionRight></SectionRight>
    </Wrapper>
  );
};

export const Wrapper = styled.main`
  display: flex;
  min-height: 100vh;
  font-family: var(--ff-text);
  color: ${({ theme }) => theme.colorPrimary};
  background-color: ${({ theme }) => theme.bgSecondary};
  transition: all 0.5s linear;
`;

export const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-family: var(--ff-heading);
`;

export const SectionLeft = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SectionRight = styled.section`
  flex: 1;
  display: none;
  background-image: url("https://res.cloudinary.com/clouduser/image/upload/v1651847175/social%20media/Selfie_yvq2dy.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  ${medium({ display: "block" })}
`;

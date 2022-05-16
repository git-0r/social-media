import { LoginForm } from "./LoginForm";
import { Wrapper, SectionLeft, SectionRight, PageTitle } from "../styles";

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

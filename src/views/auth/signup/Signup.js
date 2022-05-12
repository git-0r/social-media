import { SignupForm } from "./SignupForm";
import { Wrapper, SectionLeft, SectionRight, PageTitle } from "../styles";

export const Signup = () => {
  return (
    <Wrapper>
      <SectionLeft>
        <PageTitle>Signup ✨</PageTitle>
        <SignupForm />
      </SectionLeft>
      <SectionRight></SectionRight>
    </Wrapper>
  );
};

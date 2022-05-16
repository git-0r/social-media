import styled from "styled-components";
import { medium } from "../responsive";

export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${medium({ width: "70%" })}
`;

export const Wrapper = styled.main`
  display: flex;
  min-height: 100vh;
  font-family: var(--ff-text);
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
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

export const Label = styled.label`
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  font-family: inherit;
  border-radius: 5px;
  box-sizing: border-box;
  border: 1px solid var(--dark-color-primary);

  &:valid:not(:placeholder-shown) {
    outline: 1px solid var(--green-color);
    border: none;
  }
  &:invalid:not(:placeholder-shown) {
    outline: 1px solid var(--red-color);
    border: none;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const EmailInput = styled(Input)``;

export const PasswordInputContainer = styled.div`
  display: flex;
  align-items: center;
  /* TODO - password validation styles */
  /* & + .input-error-msg {
    margin: 0;
    color: red;
    display: none;
    font-size: 0.8rem;
  }
  &:invalid:not(:placeholder-shown) + .input-error-msg {
    display: block;
  } */
`;

export const PasswordInput = styled(Input)`
  &::-ms-reveal,
  &::-ms-clear {
    display: none;
  }
`;

export const PasswordEyeIcon = styled.div`
  cursor: pointer;
  margin-left: -50px;
`;

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
  border: 1px solid var(--dark-color-primary);
  background: var(--dark-color-primary);
  color: #fff;
  transition: all 0.3s;
  &:hover {
    background: var(--dark-bg-third);
  }
`;

export const LoginButton = styled(Button)``;

export const SignupButton = styled(Button)``;

export const FormOptions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

// container for Remember me, privacy policy
export const CheckboxContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 0.8rem;
  align-items: center;
`;
export const CheckboxInput = styled.input`
  width: 1rem;
  height: 1rem;
`;

export const Text = styled.p``;

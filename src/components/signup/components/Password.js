import styled from "styled-components";
import { useState } from "react";

export const Password = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <>
      <Label htmlFor="password">Password</Label>
      <PasswordInputContainer>
        <PasswordInput
          required
          id="password"
          name="password"
          placeholder="bisque@123"
          type={isPasswordVisible ? "text" : "password"}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        ></PasswordInput>
        <PasswordEyeIcon onClick={togglePassword}>
          <ion-icon
            name={isPasswordVisible ? "eye-outline" : "eye-off-outline"}
            size="large"
          ></ion-icon>
        </PasswordEyeIcon>
      </PasswordInputContainer>
    </>
  );
};

const Label = styled.label`
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
`;

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

export const PasswordInput = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  font-family: inherit;
  border-radius: 5px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.borderColor};

  &:valid:not(:placeholder-shown) {
    outline: 1px solid ${({ theme }) => theme.greenColor};
    border: none;
  }
  &:invalid:not(:placeholder-shown) {
    outline: 1px solid ${({ theme }) => theme.redColor};
    border: none;
  }

  &::-ms-reveal,
  &::-ms-clear {
    display: none;
  }
`;

export const PasswordEyeIcon = styled.div`
  cursor: pointer;
  margin-left: -50px;
`;

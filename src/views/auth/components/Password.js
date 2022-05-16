import { Label } from "../styles";
import { useState } from "react";
import {
  PasswordInputContainer,
  PasswordInput,
  PasswordEyeIcon,
} from "../styles";

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

import styled from "styled-components";
import { medium } from "../../styles/responsive";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/authSlice";
import {
  Email,
  Password,
  LoginButton,
  Rememberme,
  GuestLoginButton,
} from "./components";
import { useDispatch } from "react-redux";

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitLoginForm = (e) => {
    e.preventDefault();
    if (e.target.value === "guestLogin") {
      dispatch(login({ email: "abd@email.com", password: "dutt@Abd1" }));
    } else {
      const formData = Object.fromEntries(new FormData(e.target));
      dispatch(login(formData));
    }
    navigate("/");
  };

  return (
    <>
      <Form onSubmit={submitLoginForm}>
        <Email />
        <Password />
        <FormOptions>
          <Rememberme />
          <Link to="/fpassword">Forgot password</Link>
        </FormOptions>
        <LoginButton />
      </Form>
      <Text>
        Don't have an account?
        <Link to="/signup">Sign up for free</Link>
      </Text>
      <GuestLoginButton login={submitLoginForm} />
    </>
  );
};

const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${medium({ width: "70%" })}
`;

const FormOptions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.p``;

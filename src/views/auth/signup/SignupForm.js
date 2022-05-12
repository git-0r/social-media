import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Email,
  Name,
  Password,
  Username,
  Signupbutton,
  Privacypolicy,
} from "../components/index";
import { Form, Text } from "../styles";
import store from "../../../redux/store";
import { signup } from "../authSlice";

export const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const submitSignupForm = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = Object.fromEntries(new FormData(e.target));
    store.dispatch(signup(formData));
    setIsLoading(false);
    navigate("/");
  };
  return (
    <>
      <Form onSubmit={submitSignupForm}>
        <Name />
        <Email />
        <Username />
        <Password />
        <Privacypolicy />
        <Signupbutton isLoading={isLoading} />
      </Form>
      <Text>
        Already a member?
        <Link to="/login">Login</Link>
      </Text>
    </>
  );
};

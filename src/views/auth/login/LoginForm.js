import { Link, useNavigate } from "react-router-dom";
import store from "../../../redux/store";
import { login } from "../authSlice";
import {
  Email,
  Password,
  Loginbutton,
  Rememberme,
  GuestLoginButton,
} from "../components/index";
import { Form, FormOptions, Text } from "../styles";

export const LoginForm = () => {
  const navigate = useNavigate();

  const submitLoginForm = (e) => {
    e.preventDefault();
    if (e.target.value === "guestLogin") {
      store.dispatch(
        login({ email: "bisque@email.com", password: "Bisque@1" })
      );
    } else {
      const formData = Object.fromEntries(new FormData(e.target));
      store.dispatch(login(formData));
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
        <Loginbutton />
      </Form>
      <Text>
        Don't have an account?
        <Link to="/signup">Sign up for free</Link>
      </Text>
      <GuestLoginButton login={submitLoginForm} />
    </>
  );
};

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Email,
  Name,
  Password,
  Username,
  SignupButton,
  Privacypolicy,
} from "./components";
import { signup } from "../../redux/authSlice";
import styled from "styled-components";
import { medium } from "../../styles/responsive";
import { useDispatch } from "react-redux";

export const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitSignupForm = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    dispatch(signup(formData));
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
        <SignupButton />
      </Form>
      <Text>
        Already a member?
        <Link to="/login">Login</Link>
      </Text>
    </>
  );
};

export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${medium({ width: "70%" })}
`;

export const Text = styled.p``;

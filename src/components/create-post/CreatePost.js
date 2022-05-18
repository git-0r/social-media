import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import PostInput from "./PostInput";
import { useState } from "react";
import SubmitButton from "./SubmitButton";
import { create } from "../../redux/postSlice";

const CreatePost = () => {
  const { username, firstname, lastname, _id } = useSelector(
    (state) => state?.auth?.user
  );
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const submitPost = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    formData.username = username;
    formData.firstname = firstname;
    lastname && (formData.lastname = lastname);
    dispatch(create({ userId: _id, formData }));
    setInputValue("");
  };
  const updateInputValue = (e) => setInputValue(e.target.value);

  return (
    <Form onSubmit={submitPost}>
      <PostInput inputValue={inputValue} updateInputValue={updateInputValue} />
      <FlexContainer>
        <ion-icon name="happy-outline" size="large"></ion-icon>
        <ion-icon name="image-outline" size="large"></ion-icon>
        <ion-icon name="location-outline" size="large"></ion-icon>
        <SubmitButton />
      </FlexContainer>
    </Form>
  );
};

export default CreatePost;

const Form = styled.form`
  margin: 2rem 0;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

import styled from "styled-components";

const PostInput = ({ inputValue, updateInputValue }) => {
  return (
    <>
      <Input
        placeholder="How Are You Feeling Today?"
        minLength="3"
        name="content"
        required
        value={inputValue}
        onChange={updateInputValue}
      />
    </>
  );
};

export default PostInput;

const Input = styled.textarea`
  width: 100%;
  min-height: 15vh;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  resize: none;
  &:focus {
    outline: transparent;
  }
`;

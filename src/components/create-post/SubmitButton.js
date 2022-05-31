import { useSelector } from "react-redux";
import styled from "styled-components";

const SubmitButton = ({ inputValue }) => {
  const { status } = useSelector((state) => state?.post);

  return (
    <Button
      disabled={
        status === "pending" || inputValue.trim().length < 1 ? true : false
      }
    >
      Post
    </Button>
  );
};

export default SubmitButton;

const Button = styled.button`
  font-size: 1.5rem;
  font-family: inherit;
  padding: 0.2rem 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: #fafafa;
  margin-left: auto;
  background-color: ${({ theme }) => theme.blueColor};

  &:disabled {
    background-color: ${({ theme }) => theme.colorSecondary};
  }
`;

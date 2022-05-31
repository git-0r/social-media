import { useRef } from "react";
import styled from "styled-components";
import { postReplyService } from "../../../services/commentService";

const ReplyForm = ({ commentId, user, postId, setPostData }) => {
  const inputRef = useRef();
  const postReply = async (e) => {
    e.preventDefault();
    const reply = {
      parentId: commentId,
      postId,
      userId: user?._id,
      username: user?.username,
      firstname: user?.firstname,
      lastname: user?.lastname,
      content: e.target.content.value,
    };
    inputRef.current.reset();
    const data = await postReplyService({ userId: user?._id, reply });
    setPostData(data);
  };

  return (
    <Form onSubmit={postReply} ref={inputRef}>
      <ReplyInput required name="content" />
      <SubmitButton>
        <ion-icon name="send"></ion-icon>
      </SubmitButton>
    </Form>
  );
};

export default ReplyForm;

const Form = styled.form`
  display: flex;
  gap: 1rem;
`;
const ReplyInput = styled.input`
  width: 100%;
  height: 2rem;
  resize: none;
  font-size: 1rem;
  border: transparent;
  color: ${({ theme }) => theme.colorPrimary};
  background-color: ${({ theme }) => theme.bgPrimary};
  border-bottom: 2px solid ${({ theme }) => theme.colorSecondary};

  &:focus {
    outline: transparent;
  }
`;

const SubmitButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-family: inherit;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.whiteColor};
  background-color: ${({ theme }) => theme.blueColor};
`;

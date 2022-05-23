import { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { postCommentService } from "../../../services/commentService";

const CommentBox = ({ user, postId, setPostData }) => {
  const commentFormRef = useRef();

  const postComment = async (e) => {
    e.preventDefault();
    const comment = {
      postId,
      userId: user?._id,
      firstname: user?.firstname,
      lastname: user?.lastname,
      username: user?.username,
      content: e.target.content.value,
    };
    commentFormRef.current.reset();
    const data = await postCommentService({ userId: user?._id, comment });
    setPostData(data);
  };

  return (
    <CommentWrapper>
      {user ? (
        <CommentForm onSubmit={postComment} ref={commentFormRef}>
          <CommentInput name="content" />
          <SubmitButton>send</SubmitButton>
        </CommentForm>
      ) : (
        <Login to="/login">Login to comment</Login>
      )}
    </CommentWrapper>
  );
};

export default CommentBox;

const CommentWrapper = styled.div`
  margin: 1rem 0;
  padding: 2rem 1rem;
  border-radius: 1rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.bgPrimary};
  border: 1px solid ${({ theme }) => theme.borderColor};
`;

const CommentForm = styled.form`
  display: flex;
  gap: 1rem;
`;

const CommentInput = styled.textarea`
  width: 100%;
  height: 2rem;
  resize: none;
  font-size: 1.2rem;
  border: transparent;
  background-color: ${({ theme }) => theme.bgPrimary};
  border-bottom: 2px solid ${({ theme }) => theme.colorSecondary};

  &:focus {
    outline: transparent;
  }
`;

const SubmitButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-family: inherit;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.whiteColor};
  background-color: ${({ theme }) => theme.blueColor};
`;

const Login = styled(Link)`
  cursor: pointer;
  display: block;
  width: fit-content;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1.2rem;
  text-decoration: none;
  color: ${({ theme }) => theme.bgPrimary};
  background-color: ${({ theme }) => theme.blueColor};
`;

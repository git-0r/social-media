import styled from "styled-components";
import Avatar from "./Avatar";
import Name from "./Name";
import Reply from "./reply";
import ReplyForm from "./ReplyForm";

const Comment = ({ comment, user, formState, setFormState, setPostData }) => {
  return (
    <>
      <CommentWrapper>
        <Avatar />
        <CommentContainer>
          <PostHeader>
            <Name
              firstname={comment?.firstname}
              lastname={comment?.lastname}
              username={comment?.username}
            />
          </PostHeader>
          <CommentContent>{comment?.content} </CommentContent>
          {user && formState?._id !== comment?._id && (
            <ReplyText onClick={() => setFormState({ _id: comment?._id })}>
              Reply
            </ReplyText>
          )}
          {user && formState?._id === comment?._id && (
            <ReplyForm
              commentId={comment?._id}
              user={user}
              postId={comment?.postId}
              setPostData={setPostData}
            />
          )}
        </CommentContainer>
      </CommentWrapper>
      {comment?.replies?.length > 0 &&
        comment?.replies?.map((reply) => (
          <Reply key={reply?._id} reply={reply} />
        ))}
    </>
  );
};

export default Comment;

const CommentWrapper = styled.div`
  display: flex;
  margin: 2rem 0;
  gap: 1rem;
`;

const CommentContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.bgPrimary};
  border: 1px solid ${({ theme }) => theme.borderColor};
`;

const CommentContent = styled.p`
  margin: 0;
`;

const PostHeader = styled.header`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  gap: 1rem;
`;

const ReplyText = styled.p`
  margin: 0 0 0 auto;
  cursor: pointer;
  color: ${({ theme }) => theme.blueColor};
`;

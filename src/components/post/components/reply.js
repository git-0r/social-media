import styled from "styled-components";
import Avatar from "./Avatar";
import Name from "./Name";

const Reply = ({ reply }) => {
  return (
    <ReplyWrapper>
      <Avatar />
      <ReplyContainer>
        <PostHeader>
          <Name
            firstname={reply?.firstname}
            lastname={reply?.lastname}
            username={reply?.username}
          />
        </PostHeader>
        <ReplyContent>{reply?.content} </ReplyContent>
      </ReplyContainer>
    </ReplyWrapper>
  );
};
export default Reply;

const ReplyWrapper = styled.div`
  display: flex;
  margin: 2rem 0 2rem 4rem;
  gap: 1rem;
`;

const ReplyContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
`;

const PostHeader = styled.header`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  gap: 1rem;
`;

const ReplyContent = styled.p`
  margin: 0;
`;

import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDaysCount } from "../../hooks/useDaysCount";

const Post = ({ data }) => {
  const { username, post } = data;
  const [content, setContent] = useState();
  const daysCount = useDaysCount(content?.createdAt);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/post/` + post);
      const data = await res.json();
      setContent(data);
    })();
  }, []);
  return (
    <PostWrapper>
      <PostContainer>
        <PostHeader>
          <UserAvatarContainer>
            <UserAvatarImg
              loading="lazy"
              src="https://picsum.photos/50"
              alt="avatar"
            />
          </UserAvatarContainer>
          <Name>
            <FullName>
              {content?.firstname ?? (
                <PlaceholderText>"loading..."</PlaceholderText>
              )}{" "}
              {content?.lastname ?? (
                <PlaceholderText>"loading..."</PlaceholderText>
              )}
            </FullName>
            <Username>@{username}</Username>
          </Name>
          <ion-icon
            name="ellipsis-vertical-sharp"
            style={{ marginLeft: "auto" }}
            size="large"
          ></ion-icon>
        </PostHeader>
        <PostContent>
          {content?.content ?? <PlaceholderText>"loading..."</PlaceholderText>}
        </PostContent>
        <PostIcons>
          <ion-icon name="heart-outline" size="large"></ion-icon>
          <ion-icon name="chatbubble-outline" size="large"></ion-icon>
          <ion-icon name="paper-plane-outline" size="large"></ion-icon>
          <ion-icon
            style={{ marginLeft: "auto" }}
            name="bookmark-outline"
            size="large"
          ></ion-icon>
        </PostIcons>
        <DayPosted>{daysCount}</DayPosted>
      </PostContainer>
    </PostWrapper>
  );
};

export default Post;

const PostWrapper = styled.div`
  margin: 1rem 0;
  border-radius: 1rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.bgPrimary};
  border: 1px solid ${({ theme }) => theme.borderColor};
`;
const PostContainer = styled.div`
  padding: 2rem 1rem;
`;

const PostIcons = styled.div`
  margin-top: 1rem;
  margin-left: 60px;
  display: flex;
  gap: 1rem;
`;

const PostHeader = styled.header`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  gap: 1rem;
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
`;
const FullName = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 1.2rem;
`;
const Username = styled.p`
  display: inline-block;
  color: ${({ theme }) => theme.colorSecondary};
  margin: 0;
`;

const UserAvatarContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.bgSecondary};
`;

const UserAvatarImg = styled.img`
  border-radius: 50%;
  display: block;
`;

const PostContent = styled.div`
  margin-left: 60px;
  padding-bottom: 2rem;
`;

const PlaceholderText = styled.span`
  font-family: var(--ff-placeholder);
`;

const DayPosted = styled.p`
  float: right;
  color: ${({ theme }) => theme.colorSecondary};
`;

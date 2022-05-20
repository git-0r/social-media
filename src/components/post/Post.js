import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useDaysCount } from "../../hooks/useDaysCount";
import { remove } from "../../redux/postSlice";
import EditPost from "../edit-post/EditPost";
import Bookmark from "./components/Bookmark";
import Like from "./components/Like";

const Post = ({ post, menuState, setMenuState }) => {
  const { firstname, lastname, username, _id, createdAt, content } = post;
  const [editModal, setEditModal] = useState(false);
  const user = useSelector((state) => state?.auth?.user);
  const daysCount = useDaysCount(createdAt);
  const dispatch = useDispatch();

  const handlePostMenu = () => {
    setMenuState({ _id });
  };

  const deletePost = () => {
    dispatch(remove({ postId: _id, userId: user?._id }));
  };

  const toggleModal = () => {
    setEditModal((state) => !state);
  };

  return (
    <PostWrapper>
      {editModal && <EditPost post={post} toggleModal={toggleModal} />}
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
              {firstname} {lastname}
            </FullName>
            <Username>@{username}</Username>
          </Name>
          <PostMenuContainer>
            {menuState?._id === _id && user?.username === username && (
              <PostMenu>
                <p onClick={toggleModal}>Edit</p>
                <p onClick={deletePost}>Delete</p>
              </PostMenu>
            )}
            <PostMenuIcon onClick={handlePostMenu}>
              <ion-icon name="ellipsis-vertical-sharp" size="large"></ion-icon>
            </PostMenuIcon>
          </PostMenuContainer>
        </PostHeader>
        <PostContent>{content}</PostContent>
        <PostIcons>
          <Like postId={_id} />
          <ion-icon name="chatbubble-outline" size="large"></ion-icon>
          <ion-icon name="paper-plane-outline" size="large"></ion-icon>
          <Bookmark postId={_id} />
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

const DayPosted = styled.p`
  float: right;
  color: ${({ theme }) => theme.colorSecondary};
`;

const PostMenuContainer = styled.div`
  margin-left: auto;
  position: relative;
`;

const PostMenu = styled.div`
  position: absolute;
  right: 2rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
  color: ${({ theme }) => theme.bgPrimary};
  background-color: ${({ theme }) => theme.colorPrimary};

  & > p {
    margin: 0.5rem;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const PostMenuIcon = styled.div`
  cursor: pointer;
`;

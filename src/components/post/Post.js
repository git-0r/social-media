import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useDaysCount } from "../../hooks/useDaysCount";
import EditPost from "../edit-post/EditPost";
import Bookmark from "./components/Bookmark";
import Like from "./components/Like";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "./components/Avatar";
import Name from "./components/Name";
import Menu from "./components/Menu";

const Post = ({ post, menuState, setMenuState }) => {
  const { firstname, lastname, username, _id, createdAt, content } = post;
  const [editModal, setEditModal] = useState(false);
  const user = useSelector((state) => state?.auth?.user);
  const daysCount = useDaysCount(createdAt);
  const navigate = useNavigate();

  const toggleModal = () => {
    setEditModal((state) => !state);
  };

  const openPost = () => navigate(`/post/${_id}`);

  return (
    <PostWrapper>
      {editModal && <EditPost post={post} toggleModal={toggleModal} />}
      <PostContainer>
        <PostHeader>
          <Link to={`/profile/${username}`}>
            <Avatar />
          </Link>
          <Name firstname={firstname} lastname={lastname} username={username} />
          <Menu
            username={username}
            menuState={menuState}
            setMenuState={setMenuState}
            _id={_id}
            user={user}
            toggleModal={toggleModal}
          />
        </PostHeader>
        <PostContent onClick={openPost}>{content}</PostContent>
        <PostIcons>
          <Like postId={_id} />
          <ion-icon
            name="chatbubble-outline"
            onClick={openPost}
            size="large"
          ></ion-icon>
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
  cursor: pointer;
`;

const PostHeader = styled.header`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  gap: 1rem;
`;

const PostContent = styled.div`
  margin-left: 60px;
  padding-bottom: 2rem;
  cursor: pointer;
`;

const DayPosted = styled.p`
  float: right;
  color: ${({ theme }) => theme.colorSecondary};
`;

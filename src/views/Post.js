import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../components/post/components/Avatar";
import Bookmark from "../components/post/components/Bookmark";
import Comment from "../components/post/components/Comment";
import CommentBox from "../components/post/components/CommentBox";
import Like from "../components/post/components/Like";
import Name from "../components/post/components/Name";
import { useDaysCount } from "../hooks/useDaysCount";
import { useReplyForm } from "../hooks/useReplyForm";

const Post = () => {
  const user = useSelector((state) => state?.auth?.user);
  const { formState, setFormState } = useReplyForm();
  const { pathname } = useLocation();
  const postId = pathname.split("/")[2];
  const [postData, setPostData] = useState({});
  const {
    firstname,
    lastname,
    username,
    _id,
    createdAt,
    content,
    imageUrl,
    location,
    comments,
  } = postData;
  const daysCount = useDaysCount(createdAt);

  useEffect(() => {
    async function fetchPostData() {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/post/${postId}`
      );
      if (res.ok && res.status === 200) {
        setPostData(await res.json());
      }
    }
    fetchPostData();
  }, [postId]);

  return (
    <>
      <PostWrapper>
        <PostHeader>
          <Avatar />
          <Name firstname={firstname} lastname={lastname} username={username} />
        </PostHeader>
        <PostContent>
          {imageUrl && <PostImage src={imageUrl} alt="post" loading="lazy" />}
          {content}
        </PostContent>
        {user && (
          <PostIcons>
            <Like postId={_id} />
            <Bookmark postId={_id} />
          </PostIcons>
        )}
        {location && (
          <Location>
            <ion-icon name="location"></ion-icon>
            {location}
          </Location>
        )}
        <DayPosted>{daysCount}</DayPosted>
      </PostWrapper>
      <CommentsHeading>COMMENTS</CommentsHeading>
      <CommentBox user={user} postId={postId} setPostData={setPostData} />
      {comments?.length > 0 &&
        comments?.map((comment) => (
          <Comment
            key={comment?._id}
            comment={comment}
            user={user}
            formState={formState}
            setFormState={setFormState}
            setPostData={setPostData}
          />
        ))}
    </>
  );
};

export default Post;

const PostWrapper = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 1rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.bgPrimary};
  border: 1px solid ${({ theme }) => theme.borderColor};
`;

const PostHeader = styled.header`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  gap: 1rem;
`;

const PostContent = styled.div`
  margin-left: 60px;
  cursor: pointer;
`;

const CommentsHeading = styled.p`
  font-weight: 500;
`;

const PostIcons = styled.div`
  margin-top: 1rem;
  margin-left: 60px;
  display: flex;
  gap: 1rem;
`;

const DayPosted = styled.p`
  float: right;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colorSecondary};
`;

const PostImage = styled.img`
  width: 30%;
  object-fit: contain;
  display: block;
  margin: 0.5rem auto;
`;

const Location = styled.p`
  float: left;
  margin-left: 60px;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colorSecondary};
`;

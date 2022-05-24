import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import HomeLeft from "../components/home/HomeLeft";
import { HomeRight } from "../components/home/HomeRight";
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
  const daysCount = useDaysCount(postData?.createdAt);

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
    <Wrapper>
      <HomeLeft />
      <HomeCenter>
        <PostWrapper>
          <PostHeader>
            <Avatar />
            <Name
              firstname={postData?.firstname}
              lastname={postData?.lastname}
              username={postData?.username}
            />
          </PostHeader>
          <PostContent>{postData?.content}</PostContent>
          {postData?.id && (
            <PostIcons>
              <Like postId={postData?._id} />
              <Bookmark postId={postData?._id} />
            </PostIcons>
          )}
          <DayPosted>{daysCount}</DayPosted>
        </PostWrapper>
        <CommentsHeading>COMMENTS</CommentsHeading>
        <CommentBox user={user} postId={postId} setPostData={setPostData} />
        {postData?.comments?.length > 0 &&
          postData?.comments?.map((comment) => (
            <Comment
              key={comment?._id}
              comment={comment}
              user={user}
              formState={formState}
              setFormState={setFormState}
              setPostData={setPostData}
            />
          ))}
      </HomeCenter>
      <HomeRight />
    </Wrapper>
  );
};

export default Post;

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 25% 50% 25%;
  font-family: var(--ff-text);
  color: ${({ theme }) => theme.colorPrimary};
  background-color: ${({ theme }) => theme.bgSecondary};
  transition: all 0.5s linear;
  position: relative;
`;

const HomeCenter = styled.section`
  overflow-wrap: break-word;
  padding: 1rem 4rem;
`;

const PostWrapper = styled.div`
  margin: 1rem 0;
  padding: 2rem 1rem;
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
  padding-bottom: 2rem;
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

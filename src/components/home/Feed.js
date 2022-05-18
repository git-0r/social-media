import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import { fetchBookmarks } from "../../redux/bookmarkSlice";
import { fetchLikes } from "../../redux/likeSlice";
import Loader from "../../styles/loader";
import Post from "../post/Post";
import SortFeed from "./SortFeed";

const Feed = () => {
  const { content, status } = useSelector((state) => state?.feed);
  const { _id } = useSelector((state) => state?.auth?.user);
  const { bottomBoundryRef } = useInfiniteScroll();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLikes({ userId: _id }));
    dispatch(fetchBookmarks({ userId: _id }));
  }, [_id, dispatch]);

  return (
    <>
      <SortFeed />
      {content?.length > 0 &&
        content?.map((post) => <Post key={post._id} data={post} />)}
      <div ref={bottomBoundryRef} />
      {status === "pending" && <Loader />}
    </>
  );
};

export default Feed;

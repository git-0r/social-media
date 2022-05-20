import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import { fetchBookmarks } from "../../redux/bookmarkSlice";
import { fetchLikes } from "../../redux/likeSlice";
import Loader from "../../styles/loader";
import Post from "../post/Post";

const ExploreFeed = () => {
  const { content, status } = useSelector((state) => state?.exploreFeed);
  const { _id } = useSelector((state) => state?.auth?.user);
  const { bottomBoundryRef } = useInfiniteScroll("explore");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLikes({ userId: _id }));
    dispatch(fetchBookmarks({ userId: _id }));
  }, [_id, dispatch]);

  return (
    <>
      {content?.length > 0 &&
        content?.map((post) => <Post key={post._id} post={post} />)}
      <div ref={bottomBoundryRef} />
      {status === "pending" && <Loader />}
    </>
  );
};
export default ExploreFeed;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../components/post/Post";
import { usePostMenu } from "../hooks/usePostMenu";
import { fetchBookmarkedPosts, fetchBookmarks } from "../redux/bookmarkSlice";
import { fetchLikes } from "../redux/likeSlice";

const Bookmarks = () => {
  const { _id } = useSelector((state) => state?.auth?.user);
  const { posts } = useSelector((state) => state?.bookmarks);
  const { menuState, setMenuState } = usePostMenu();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookmarkedPosts({ userId: _id }));
    dispatch(fetchLikes({ userId: _id }));
    dispatch(fetchBookmarks({ userId: _id }));
  }, [_id, dispatch]);

  return (
    posts?.length > 0 &&
    posts?.map((post) => (
      <Post
        key={post._id}
        post={post}
        menuState={menuState}
        setMenuState={setMenuState}
      />
    ))
  );
};

export default Bookmarks;

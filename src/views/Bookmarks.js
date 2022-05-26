import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Post from "../components/post/Post";
import { usePostMenu } from "../hooks/usePostMenu";
import { token } from "../services";

const Bookmarks = () => {
  const { _id } = useSelector((state) => state?.auth?.user);
  const [posts, setPosts] = useState([]);
  const { menuState, setMenuState } = usePostMenu();

  useEffect(() => {
    async function getBookmarkedPosts() {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/bookmark/posts/${_id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token(),
          },
        }
      );
      const data = await res.json();
      setPosts(data);
    }
    getBookmarkedPosts();
  }, [_id]);
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

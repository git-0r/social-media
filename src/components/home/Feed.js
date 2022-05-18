import { useSelector } from "react-redux";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import Loader from "../../styles/loader";
import Post from "../post/Post";
import SortFeed from "./SortFeed";

const Feed = () => {
  const { content, status } = useSelector((state) => state?.feed);
  const { bottomBoundryRef } = useInfiniteScroll();

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

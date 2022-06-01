import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { bookmark } from "../../../redux/bookmarkSlice";

const Bookmark = ({ postId }) => {
  const user = useSelector((state) => state?.auth?.user);
  const { content } = useSelector((state) => state?.bookmarks);
  const dispatch = useDispatch();

  const bookmarkPost = () => {
    user?._id && dispatch(bookmark({ postId, userId: user?._id }));
  };

  return (
    <BookmarkIcon onClick={bookmarkPost}>
      <ion-icon
        name={content[postId] === "true" ? "bookmark" : "bookmark-outline"}
        size="large"
      ></ion-icon>
    </BookmarkIcon>
  );
};

export default Bookmark;

const BookmarkIcon = styled.div`
  margin-left: auto;
  cursor: pointer;

  & [name="bookmark"] {
    color: ${({ theme }) => theme.colorSecondary};
  }
`;

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { like } from "../../../redux/likeSlice";

const Like = ({ postId }) => {
  const { _id } = useSelector((state) => state?.auth?.user);
  const { content } = useSelector((state) => state?.likes);
  const dispatch = useDispatch();

  const likePost = () => {
    _id && dispatch(like({ postId, userId: _id }));
  };

  return (
    <LikeIcon onClick={likePost}>
      <ion-icon
        name={content[postId] === "true" ? "heart" : "heart-outline"}
        size="large"
      ></ion-icon>
    </LikeIcon>
  );
};

export default Like;

const LikeIcon = styled.div`
  cursor: pointer;

  & [name="heart"] {
    color: ${({ theme }) => theme.redColor};
  }
`;

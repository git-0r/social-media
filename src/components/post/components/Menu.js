import styled from "styled-components";
import { useDispatch } from "react-redux";
import { remove } from "../../../redux/postSlice";

const Menu = ({
  username,
  menuState,
  setMenuState,
  _id,
  user,
  toggleModal,
}) => {
  const dispatch = useDispatch();

  const handlePostMenu = () => setMenuState({ _id });

  const deletePost = () => dispatch(remove({ postId: _id, userId: user?._id }));

  return (
    <PostMenuContainer>
      {menuState?._id === _id && user?.username === username && (
        <PostMenu>
          <p onClick={toggleModal}>Edit</p>
          <p onClick={deletePost}>Delete</p>
        </PostMenu>
      )}
      <PostMenuIcon onClick={handlePostMenu}>
        <ion-icon name="ellipsis-vertical-sharp" size="large"></ion-icon>
      </PostMenuIcon>
    </PostMenuContainer>
  );
};

export default Menu;

const PostMenuContainer = styled.div`
  margin-left: auto;
  position: relative;
`;

const PostMenu = styled.div`
  position: absolute;
  right: 2rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
  color: ${({ theme }) => theme.bgPrimary};
  background-color: ${({ theme }) => theme.colorPrimary};

  & > p {
    margin: 0.5rem;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const PostMenuIcon = styled.div`
  cursor: pointer;
`;

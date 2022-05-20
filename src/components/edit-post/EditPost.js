import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { edit } from "../../redux/postSlice";

const EditPost = ({ post, toggleModal }) => {
  const dispatch = useDispatch();
  const { _id } = useSelector((state) => state?.auth?.user);

  const submitEditForm = (e) => {
    e.preventDefault();
    dispatch(
      edit({
        formData: { content: e.target.content.value, postId: post._id },
        userId: _id,
      })
    );
    toggleModal();
  };
  return (
    <MondalWrapper>
      <Heading>Edit post</Heading>
      <EditForm onSubmit={submitEditForm}>
        <ModalInput defaultValue={post?.content} name="content" />
        <Buttons>
          <SubmitButton>Save</SubmitButton>
          <CancelButton onClick={toggleModal}>Cancel</CancelButton>
        </Buttons>
      </EditForm>
    </MondalWrapper>
  );
};

export default EditPost;

const Heading = styled.h1`
  text-align: center;
`;
const MondalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  background-color: ${({ theme }) => theme.bgThird};
`;

const EditForm = styled.form`
  margin: 2rem auto;
  width: 60%;
`;

const ModalInput = styled.textarea`
  width: 90%;
  min-height: 30vh;
  display: block;
  margin: 1rem auto;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  resize: none;
  &:focus {
    outline: transparent;
  }
`;

const Buttons = styled.div`
  margin-right: 5%;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`;

const SubmitButton = styled.button`
  border: none;
  font-size: 1.2rem;
  font-family: inherit;
  border-radius: 0.5rem;
  color: inherit;
  padding: 0.5rem;
  display: block;
  cursor: pointer;
  background-color: ${({ theme }) => theme.greenColor};
`;

const CancelButton = styled.button`
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  font-family: inherit;
  border-radius: 0.5rem;
  color: inherit;
  padding: 0.5rem;
  display: block;
  background-color: ${({ theme }) => theme.lightBlueColor};
`;

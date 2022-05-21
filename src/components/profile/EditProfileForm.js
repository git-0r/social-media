import styled from "styled-components";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProfile } from "../../redux/authSlice";

const EditProfileForm = ({ setEditForm }) => {
  const { bio, portfoliourl, _id } = useSelector((state) => state?.auth?.user);

  const dispatch = useDispatch();
  const formRef = useRef();

  const submitEditForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    dispatch(editProfile({ _id, formData }));
    formRef.current.reset();
    setEditForm(false);
  };

  return (
    <EditForm onSubmit={submitEditForm} ref={formRef}>
      <Label htmlFor="image">Profile picture</Label>
      <ImageInput id="image" name="image" type="file" />
      <Label htmlFor="bio">Bio</Label>
      <BioInput
        id="bio"
        type="text"
        defaultValue={bio}
        required
        name="bio"
        minLength="10"
      />
      <Label htmlFor="portfoliourl" required minLength="5">
        Url
      </Label>
      <UrlInput
        id="portfoliourl"
        name="url"
        type="url"
        defaultValue={portfoliourl}
      />
      <SubmitButton>Submit</SubmitButton>
    </EditForm>
  );
};

export default EditProfileForm;

const EditForm = styled.form`
  display: flex;
  gap: 1rem;
  margin: 4rem 0;
  padding: 2rem;
  border-radius: 1rem;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgPrimary};
`;

const Label = styled.label``;
const ImageInput = styled.input``;
const BioInput = styled.input`
  width: 100%;
  min-height: 10vh;
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
const UrlInput = styled(BioInput)``;

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

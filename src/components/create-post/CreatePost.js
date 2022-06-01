import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import PostInput from "./PostInput";
import { useRef, useState } from "react";
import SubmitButton from "./SubmitButton";
import { create } from "../../redux/postSlice";
import EmojiPicker from "./EmojiPicker";
import UserLocation from "./UserLocation";
import { useLocation } from "../../hooks/useLocation";

const CreatePost = () => {
  const { username, firstname, lastname, _id } = useSelector(
    (state) => state?.auth?.user
  );
  const [inputValue, setInputValue] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const { getLocation, location } = useLocation();
  const inputRef = useRef(null);

  const removeImage = () => {
    URL.revokeObjectURL(image.tempURL);
    setImage(null);
  };

  const submitPost = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("content", inputValue.trim());
    formData.set("firstname", firstname);
    formData.set("lastname", lastname);
    formData.set("username", username);
    location &&
      formData.set(
        "location",
        `${location.locality}, ${location.region}, ${location.country}`
      );
    image && formData.set("image", image.original);
    dispatch(create({ userId: _id, formData }));
    setInputValue("");
    removeImage();
  };

  const updateInputValue = (e) => setInputValue(e.target.value);

  const handleImageUpload = (e) => {
    const isImage = e.target.files[0];
    if (isImage) {
      setImage({
        original: e.target.files[0],
        tempURL: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  return (
    <Form onSubmit={submitPost}>
      <PostWrapper>
        {image && (
          <PostImageWrapper>
            <PostImage src={image?.tempURL} alt="post" />
            <RemoveImage onClick={removeImage}>
              <ion-icon name="close-circle" size="large"></ion-icon>
            </RemoveImage>
          </PostImageWrapper>
        )}
        <PostInput
          ref={inputRef}
          inputValue={inputValue}
          updateInputValue={updateInputValue}
        />
        {location && (
          <Location>
            {location?.locality}, {location?.region}, {location?.country}
          </Location>
        )}
      </PostWrapper>
      <FlexContainer>
        <EmojiPicker
          inputRef={inputRef}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <FileSelector>
          <FileInputLabel htmlFor="file">
            <ion-icon name="image-outline" size="large"></ion-icon>
          </FileInputLabel>
          <FileInput
            type="file"
            id="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </FileSelector>
        <UserLocation getLocation={getLocation} />
        <SubmitButton inputValue={inputValue} />
      </FlexContainer>
    </Form>
  );
};

export default CreatePost;

const Form = styled.form`
  margin: 2rem 0;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const FileSelector = styled.div``;

const FileInputLabel = styled.label`
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.blueColor};
  }
`;
const FileInput = styled.input`
  display: none;
`;

const PostImageWrapper = styled.div`
  position: relative;
  width: fit-content;
  margin: 0 auto;
`;

const PostImage = styled.img`
  height: 40vh;
  object-fit: contain;
`;

const PostWrapper = styled.div`
  border-radius: 5px;
  padding: 0.5rem;
  margin: 1rem 0;
  border: 1px solid ${({ theme }) => theme.divider};
  background-color: ${({ theme }) => theme.whiteColor};
`;

const Location = styled.p`
  margin: 0;
  text-align: right;
  color: ${({ theme }) => theme.blueColor};
`;

const RemoveImage = styled.div`
  position: absolute;
  cursor: pointer;
  right: 0;
  top: 0;
`;

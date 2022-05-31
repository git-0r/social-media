import Picker from "emoji-picker-react";
import { useState } from "react";
import styled from "styled-components";

const EmojiPicker = ({ inputValue, setInputValue }) => {
  const [emojiPicker, setEmojiPicker] = useState(false);
  const onEmojiClick = (event, emojiObject) => {
    setInputValue(inputValue + emojiObject.emoji);
  };
  const toggleEmojiPicker = () => {
    setEmojiPicker((state) => !state);
  };

  return (
    <EmojiPickerWrapper>
      {emojiPicker && (
        <EmojiPickerContainer>
          <Picker onEmojiClick={onEmojiClick} native />
        </EmojiPickerContainer>
      )}
      <EmojiPickerIcon onClick={toggleEmojiPicker} aria-label="emoji picker">
        <ion-icon name="happy-outline" size="large"></ion-icon>
      </EmojiPickerIcon>
    </EmojiPickerWrapper>
  );
};

export default EmojiPicker;

const EmojiPickerWrapper = styled.div`
  display: inline-block;
  position: relative;
  z-index: 9;
`;

const EmojiPickerContainer = styled.div`
  position: absolute;
  top: 100%;
`;

const EmojiPickerIcon = styled.span`
  cursor: pointer;
`;

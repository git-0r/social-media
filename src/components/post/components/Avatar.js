import styled from "styled-components";

const Avatar = () => {
  return (
    <UserAvatarContainer>
      <UserAvatarImg
        loading="lazy"
        src="https://picsum.photos/50"
        alt="avatar"
      />
    </UserAvatarContainer>
  );
};

export default Avatar;

const UserAvatarContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.bgSecondary};
`;

const UserAvatarImg = styled.img`
  width: 100%;
  border-radius: 50%;
  display: block;
`;

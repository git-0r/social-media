import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeLeft from "../components/home/HomeLeft";
import { HomeRight } from "../components/home/HomeRight";
import EditProfileForm from "../components/profile/EditProfileForm";

const Profile = () => {
  const {
    firstname,
    lastname,
    username,
    createdAt,
    bio,
    avatar,
    portfoliourl,
  } = useSelector((state) => state?.auth?.user);

  const [editForm, setEditForm] = useState(false);

  const date = new Date(createdAt);
  const joinedOn = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;

  return (
    <Wrapper>
      <HomeLeft />
      <HomeCenter>
        <Header>
          <BackgroundImage
            src="https://picsum.photos/500/200"
            loading="lazy"
            alt="background"
          />
          <ProfilePicture
            src={avatar ?? "https://picsum.photos/100"}
            loading="lazy"
            alt="profile picture"
          />
          <Fullname>
            {firstname} {lastname}
          </Fullname>
          <Username>@{username}</Username>
        </Header>
        <Bio>{bio}</Bio>
        <EditProfileIcon onClick={() => setEditForm((state) => !state)}>
          <ion-icon name="settings-outline" size="large"></ion-icon>
        </EditProfileIcon>
        <UserInfo>
          <PortfolioUrl>
            <ion-icon name="link" size="large"></ion-icon>
            <Link to="#">{portfoliourl ?? "update your profile"}</Link>
          </PortfolioUrl>
          <JoinDate>
            <ion-icon name="calendar" size="large"></ion-icon> Joined on:{" "}
            {joinedOn}
          </JoinDate>
        </UserInfo>
        {editForm && <EditProfileForm setEditForm={setEditForm} />}
      </HomeCenter>
      <HomeRight />
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 25% 50% 25%;
  font-family: var(--ff-text);
  color: ${({ theme }) => theme.colorPrimary};
  background-color: ${({ theme }) => theme.bgSecondary};
  transition: all 0.5s linear;
  position: relative;
`;

const HomeCenter = styled.section`
  overflow-wrap: break-word;
  padding: 1rem 4rem;
`;

const Header = styled.header``;
const BackgroundImage = styled.img`
  width: 100%;
  margin-top: 1rem;
  border-radius: 1rem;
`;
const ProfilePicture = styled.img`
  border-radius: 50%;
  display: block;
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.colorSecondary};
  margin: -50px auto 0 auto;
`;

const Fullname = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const Username = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-top: 0;
  color: ${({ theme }) => theme.colorSecondary};
`;

const UserInfo = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
`;

const PortfolioUrl = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > a {
    width: 20ch;
  }
`;

const JoinDate = styled(PortfolioUrl)``;

const Bio = styled.p`
  text-align: center;
`;

const EditProfileIcon = styled.div`
  margin-left: auto;
  cursor: pointer;
  width: fit-content;
`;

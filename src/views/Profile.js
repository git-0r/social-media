import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import EditProfileForm from "../components/profile/EditProfileForm";

const Profile = () => {
  const currentUser = useSelector((state) => state?.auth?.user);
  const { pathname } = useLocation();
  const [editForm, setEditForm] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchUserProfile() {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/user/${pathname.split("/")[2]}`
      );
      const data = await res.json();
      setUser(data);
    }
    fetchUserProfile();
  }, [pathname]);
  const date = new Date(user?.createdAt);
  const joinedOn = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;

  return (
    <>
      <Header>
        <BackgroundImage
          src="https://picsum.photos/500/200"
          loading="lazy"
          alt="background"
        />
        <ProfilePicture
          src={user?.avatar ?? "https://picsum.photos/100"}
          loading="lazy"
          alt="profile picture"
        />
        <Fullname>
          {user?.firstname} {user?.lastname}
        </Fullname>
        <Username>@{user?.username}</Username>
      </Header>
      <Bio>{user?.bio}</Bio>
      {currentUser?._id === user?._id && (
        <EditProfileIcon onClick={() => setEditForm((state) => !state)}>
          <ion-icon name="settings-outline" size="large"></ion-icon>
        </EditProfileIcon>
      )}
      <UserInfo>
        <PortfolioUrl>
          <ion-icon name="link" size="large"></ion-icon>
          <Link to="#">{user?.portfoliourl ?? "update your profile"}</Link>
        </PortfolioUrl>
        <JoinDate>
          <ion-icon name="calendar" size="large"></ion-icon> Joined on:{" "}
          {joinedOn}
        </JoinDate>
      </UserInfo>
      {editForm && currentUser && <EditProfileForm setEditForm={setEditForm} />}
    </>
  );
};

export default Profile;

const Header = styled.header``;
const BackgroundImage = styled.img`
  width: 100%;
  height: 200px;
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
  flex-wrap: wrap;
  margin-top: 2rem;
  justify-content: space-between;
`;

const PortfolioUrl = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > a {
    width: 20ch;
    color: inherit;
    display: block;
    white-space: nowrap;
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
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

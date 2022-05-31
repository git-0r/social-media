import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../../redux/authSlice";
import { medium } from "../../styles/responsive";

const HomeLeft = () => {
  const user = useSelector((state) => state?.auth?.user);
  const dispatch = useDispatch();

  const out = () => {
    localStorage.clear();
    dispatch(logout());
  };

  const menuOptions = [
    {
      icon: "home",
      content: "Home",
      url: "/",
    },
    {
      icon: "planet",
      content: "Explore",
      url: "/explore",
    },
    {
      icon: "person",
      content: "Profile",
      url: `/profile/${user?.username}`,
    },
    {
      icon: "bookmark",
      content: "Bookmarks",
      url: `/bookmarks/${user?._id}`,
    },
  ];

  return (
    <ContainerLeft>
      {menuOptions.map(({ icon, content, url }) => (
        <MenuOption to={url} key={icon}>
          <ion-icon name={icon} size="large"></ion-icon>
          <MenuText>{content}</MenuText>
        </MenuOption>
      ))}
      <Logout>
        <Avatar
          loading="lazy"
          src={user?.avatar ?? "https://picsum.photos/50"}
          alt="avatar"
        />
        <UsernameWrapper>
          <Name>{user?.firstname}</Name>
          <Username>@{user?.username}</Username>
        </UsernameWrapper>
        <LogoutButton onClick={out}>
          <ion-icon name="log-out-outline" size="large"></ion-icon>
        </LogoutButton>
      </Logout>
      <LogoutBtnSmall onClick={out}>
        <ion-icon name="log-out" size="large"></ion-icon>
      </LogoutBtnSmall>
    </ContainerLeft>
  );
};

export default HomeLeft;

const ContainerLeft = styled.section`
  display: flex;
  justify-content: space-evenly;
  overflow-wrap: break-word;
  position: sticky;
  top: calc(100vh - 5rem);
  z-index: 10;
  height: fit-content;
  border-right: 1px solid ${({ theme }) => theme.borderColor};
  ${medium({
    top: "4rem",
    "flex-direction": "column",
    height: "calc(100vh - 8rem)",
    padding: "2rem",
  })};
  @media only screen and (max-width: 64em) {
    background-color: ${({ theme }) => theme.bgPrimary};
  }
`;

const Logout = styled.div`
  display: none;
  margin-top: auto;
  padding: 0.5rem 1rem;
  align-items: center;
  border-radius: 1rem;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.bgThird};
  ${medium({
    display: "flex",
  })};
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

const UsernameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Username = styled.p`
  margin: 0;
`;
const Name = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0;
`;

const LogoutButton = styled.button`
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
`;

const MenuOption = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 1rem;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  background-color: ${({ theme }) => theme.bgThird};
  @media only screen and (max-width: 64em) {
    background-color: ${({ theme }) => theme.bgPrimary};
  }
`;

const MenuText = styled.p`
  margin: 0;
  display: none;
  ${medium({ display: "block" })};
`;

const LogoutBtnSmall = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  cursor: pointer;
  color: inherit;
  ${medium({ display: "none" })};
`;

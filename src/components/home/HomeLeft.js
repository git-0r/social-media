import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { logout } from "../../redux/authSlice";

const HomeLeft = () => {
  const { firstname, username } = useSelector((state) => state?.auth?.user);
  const dispatch = useDispatch();
  const out = () => {
    localStorage.clear();
    dispatch(logout());
  };

  return (
    <ContainerLeft>
      <MenuOption>
        <ion-icon name="home" size="large"></ion-icon>
        Home
      </MenuOption>
      <MenuOption>
        <ion-icon name="planet" size="large"></ion-icon>
        Explore
      </MenuOption>
      <MenuOption>
        <ion-icon name="person" size="large"></ion-icon>
        Profile
      </MenuOption>
      <MenuOption>
        <ion-icon name="ellipsis-horizontal" size="large"></ion-icon>
        More
      </MenuOption>
      <Logout>
        <Avatar loading="lazy" src="https://picsum.photos/50" alt="avatar" />
        <UsernameWrapper>
          <Name>{firstname}</Name>
          <Username>@{username}</Username>
        </UsernameWrapper>
        <LogoutButton onClick={out}>
          <ion-icon name="log-out-outline" size="large"></ion-icon>
        </LogoutButton>
      </Logout>
    </ContainerLeft>
  );
};

export default HomeLeft;

const ContainerLeft = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  overflow-wrap: break-word;
  position: sticky;
  top: 4rem;
  height: calc(100vh - 10rem);
`;

const Logout = styled.div`
  display: flex;
  margin-top: auto;
  padding: 0.5rem 1rem;
  align-items: center;
  border-radius: 1rem;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.bgThird};
`;

const Avatar = styled.img`
  border-radius: 50%;
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
  cursor: pointer;
`;

const MenuOption = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 1rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.bgThird};
`;

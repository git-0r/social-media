import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = ({ theme, toggle }) => {
  return (
    <Nav>
      <Logo to="/">
        <ion-icon name="flash" size="large"></ion-icon>
        <p>Social</p>
      </Logo>
      <ThemeToggle onClick={toggle}>
        {theme === "light" ? (
          <ion-icon name="sunny" size="large"></ion-icon>
        ) : (
          <ion-icon name="moon-outline" size="large"></ion-icon>
        )}
      </ThemeToggle>
    </Nav>
  );
};

export default Navbar;

const Logo = styled(Link)`
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
  align-items: center;
  font-family: inherit;
  text-decoration: none;
  color: inherit;
`;

const Nav = styled.nav`
  display: flex;
  box-sizing: border-box;
  padding: 1rem;
  height: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  font-family: var(--ff-text);
  color: ${({ theme }) => theme.colorPrimary};
  background-color: ${({ theme }) => theme.bgPrimary};
  transition: all 0.5s linear;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const ThemeToggle = styled.button`
  border: none;
  margin-left: auto;
  cursor: pointer;
  color: inherit;
  background-color: inherit;
`;

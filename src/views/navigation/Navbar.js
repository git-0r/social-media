import { Nav, ThemeToggle } from "./styles";

const Navbar = ({ theme, toggle }) => {
  return (
    <Nav>
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

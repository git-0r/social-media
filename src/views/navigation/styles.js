import styled from "styled-components";

export const Nav = styled.nav`
  padding: 1rem;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
  transition: all 0.5s linear;
`;

export const ThemeToggle = styled.button`
  border: none;
  margin-left: 90%;
  cursor: pointer;
  color: inherit;
  background-color: inherit;
`;

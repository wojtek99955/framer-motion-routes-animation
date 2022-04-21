import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 1rem 1rem;
`;
const Logo = styled.div`
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;
const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    gap: 2rem;
  }
  li {
    color: white;
    font-size: 1.3rem;
    cursor: pointer;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>Animated Routes</Logo>
      <Nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;

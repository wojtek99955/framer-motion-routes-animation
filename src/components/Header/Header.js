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

const StyledNavLink = styled(NavLink)`
  color: White;
  text-decoration: none;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <StyledNavLink to="/">Animated Routes</StyledNavLink>
      </Logo>
      <Nav>
        <ul>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/about">About</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/contact">Contact</StyledNavLink>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;

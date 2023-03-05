import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLi = styled(Link)`
  color: #f29f05;
  text-align: center;
  text-decoration: none;
  margin: 1rem;
  font-size: 1.35rem;

  h1 {
    margin: 0;
    padding: 0;
    font-size: 1.9rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;

  div {
    display: flex;
    justify-content: space-evenly;
  }

  h1 {
    color: #f23030;
  }
`;

export default Nav;

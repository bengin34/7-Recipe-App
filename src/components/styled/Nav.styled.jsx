import styled from "styled-components";
import { Link } from "react-router-dom";

const breakpoints = {
  mobile: "320px",
  tablet: "768px",
  desktop: "1024px",
};

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

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.2rem;

    h1 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin: 0.5rem;
    font-size: 1rem;

    h1 {
      font-size: 1.2rem;
    }
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

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;

export default Nav;

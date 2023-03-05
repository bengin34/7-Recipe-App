import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 20rem;
  max-width: 20rem;
  max-height: 20rem;
  background-color: rgba(242, 159, 4, 0.6);
  /* border-radius: 1rem; */
  /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2) */

  h2 {
    display: flex;
    justify-content: center;
    align-items: ccenter;
    align-self: center;
    margin: 1rem 1rem;
    color: #f23030;
  }

  img {
    margin:0;
    width: 20rem;
    /* max-width: 10rem; */
    margin-top:0;
    max-height: 180px;
    /* max-height: 150px; */
    /* border-radius: 1rem; */
  }

  button {
    /* margin:1rem 1rem; */
    padding: 1rem 1rem;
    margin-bottom:1rem;
    border-radius: 1rem;
    font-size: 1.12rem;
    border: none;
    color: #f23030;
    background-color: rgba(37, 114, 100, 0.8);
  }
`;

export default Card;

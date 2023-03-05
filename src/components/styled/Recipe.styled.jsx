import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 20rem;
  max-width: 20rem;
  height: 25rem;
  background-color: rgba(242, 159, 4, 0.4);
  margin-bottom:10px;
  border:none;
  border-radius:2rem;


  h2 {
    display: flex;
    justify-content: center;
    align-items: ccenter;
    align-self: center;
    margin: 2rem 1rem;
    color: #f23030;
  }

  img {
    padding: 10px 10px;
    width: 18rem;
    height: 10rem;
    border-radius:2rem;
  }

  button {
    padding: 1rem 1rem;
    margin-bottom:1rem;
    border-radius: 1rem;
    font-size: 1.12rem;
    border: none;
    color: #f23030;
    background-color: rgba(37, 114, 100, 0.8);
  }
  button:hover{
    scale:1.12;
    background-color: rgba(37, 114, 100, 0.9);
  }
`;

export default Card;

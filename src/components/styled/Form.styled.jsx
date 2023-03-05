import styled from "styled-components";

const For = styled.form`
  display: block;
  margin: 1rem;

  input {
    height: 2rem;
    width: 12rem;
    font-size: 1.3rem;
    border-radius:1rem;
  

    @media (max-width: 768px) {
      width: 100%;
      padding: 0.5rem 0rem;
    }
  }

  button {
    background-color: #267365;
    width: 100px;
    color: #f2cb05;
    height: 2.2rem;
    margin: 0 0.3rem;
    font-size: 1rem;
    border-radius: 0.5rem;
    margin: 1rem 1rem;

    @media (max-width: 768px) {
      width: 100%;
      height: 3.4rem;
      text-align: center;
      font-size: 1.25rem;
      padding: 1rem 1rem;
      margin: 0.5rem 0;
    }
  }

  select {
    background-color: #f23030;
    margin: 1rem 1rem;
    width: 100px;
    margin-left: 1rem;
    color: #f29f05;
    height: 2.2rem; /* increased height */
    font-size: 1rem;
    border-radius: 0.5rem;
    border: #f29f05;

    @media (max-width: 768px) {
      width: 100%;
     font-size:1.15rem;
      height: 3.4rem;
      margin: 0.5rem 0;
    }
  }
`;

export default For;

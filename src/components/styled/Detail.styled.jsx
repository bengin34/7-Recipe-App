import styled from "styled-components";

const DetailsContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
 
 h1{
  color: rgba(242, 48, 48, 0.8)
 }

  .elements{
    display:flex;
    flex-wrap: wrap;
    gap:  2rem;
    justify-content: center;
    align-items: stretch;

    img{
      width: 100%;
      height: auto;
      margin: 3.5rem;
      border-radius: 0.8rem;
    }
  }

  .element{
    display:flex;
    flex-direction: column;
    align-items:center;
    max-width:300px;
    max-height: 600px;
    overflow: auto;
    font-size: 1.125rem;
    line-height:1.4;
    margin: 1rem;
  }

  @media (max-width: 768px) {
    .elements {
      flex-direction: column;
      align-items: center;

      img {
        max-width: 100%;
        max-height: 50%;
        margin: 1rem 0;
      }
    }

    .header{
      display:flex;
      justify-content:center;
      align-items:center;
    }

    .element {
      max-width: 100%;
      max-height: none;
      overflow: visible;
      margin: 2rem 0;
    }
  }
`;

export default DetailsContainer;


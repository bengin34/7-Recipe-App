import styled from "styled-components";

const DetailsContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
 
 
  .elements{
    display:flex;
    flex-grow: 1fr 1fr 1fr;

    img{
      max-width: 90%;
      max-height:50%;
      margin: 2rem 1rem;
      border-radius: 0.8rem;
    }
  }
  
  .element{
    display:flex;
    justify-content:center;
    /* align-items:center; */
    max-height: 600px;
    overflow: auto;
  }
`;

export default DetailsContainer;

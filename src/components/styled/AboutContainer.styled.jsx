
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: fit-content;

  img {
    width:30%;
    border: 2px solid rgba(242, 48, 48, 0.5);
    margin: 1rem 2rem;
    border-radius: 3rem;
    

    @media (max-width: 768px) {
      margin: 1rem;
      width:300px;
    }
  }
  img:hover{
    scale:1.1;
  }
  h4 {
    line-height: 2rem;
    border: 2px solid rgba(242, 48, 48, 0.5);;
    border-radius:2rem;
    padding: 2rem 2rem;

    @media (max-width: 768px) {
      padding: 1rem;
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default AboutContainer;

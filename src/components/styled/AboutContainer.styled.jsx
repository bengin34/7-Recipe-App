import styled from 'styled-components';

const AboutContainer  = styled.div`
 display:flex;
 flex-direction:row;
 justify-content:center;
 align-items:center;
 flex-wrap:wrap;
 height:fit-content;


 img{
    border:2px solid red;
    margin: 1rem 2rem;
    border-radius: 3rem;
 }

 h4{
    line-height:2rem;
    border: 2px solid red;
    padding: 2rem 2rem;
 }
`;

export default AboutContainer;

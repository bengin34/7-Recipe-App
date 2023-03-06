import styled from "styled-components";
// rgba(37, 114, 100, 1)
// rgba(242, 202, 4, 1)
// rgba(242, 159, 4, 1)
// rgba(242, 135, 4, 1)
// rgba(242, 48, 48, 1)

const ContactContainer = styled.div`
background-color:  rgba(242, 48, 48, 0.4);
border-radius: 20px;
padding: 40px;
margin-top:40px;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;

span:first-child {
font-size: 2rem;
font-weight: bold;
color: #212529;
text-align: center;
text-transform: uppercase;
}

span:last-child {
font-size: 1.5rem;
font-weight: bold;
color: #212529;
text-align: center;
text-transform: uppercase;
}

div {
font-size: 1.2rem;
color: rgba(242, 135, 4, 1);
text-align: center;
}

input {
width: 100%;
border: none;
background-color: #e9ecef;
padding: 15px;
border-radius: 10px;
font-size: 1.2rem;
margin-bottom: 20px;
color: #212529;


&::placeholder {
  color: #6c757d;
}

&:focus {
  outline: none;
  box-shadow: 0px 0px 10px #adb5bd;
}
}

button {
border: none;
background-color: #212529;
color: #fff;
font-size: 1.2rem;
font-weight: bold;
border-radius: 10px;
padding: 15px 30px;
cursor: pointer;
transition: all 0.2s ease-in-out;


&.app-form-button {
  margin-right: 10px;
}

&:hover {
  background-color: #495057;
}
}
`;

export default ContactContainer
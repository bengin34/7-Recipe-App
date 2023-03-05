import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  width:100%;
  height:90%;
  margin-top:3rem;
 
 

form{
  width:400px;
  height: 450px;
  border: 2px solid orange;
  border-radius: 3rem;
  padding: 3rem 3rem;
  background:  rgba(242, 135, 4, 0.4);
 
}


input{
  width: 90%;
	height: 20px;
	background: rgba(37, 114, 100, 0.3);
	justify-content: center;
	display: flex;
	margin: 4rem auto;
	padding: 10px;
	border: none;
	outline: none;
	border-radius: 5px;
}
input:hover{
	background:  rgba(37, 114, 100, 0.4);
}

button{
	width: 60%;
	height: 40px;
	margin: 10px auto;
	justify-content: center;
	display: block;
	color: #fff;
	background:  rgba(242, 48, 48, 0.6);
	font-size: 1em;
	font-weight: bold;
	margin-top: 20px;
	outline: none;
	border: none;
	border-radius: 5px;
	transition: .2s ease-in;
	cursor: pointer;
}
button:hover{
	background:  rgba(242, 48, 48, 0.9);
}
`;

export default LoginContainer;

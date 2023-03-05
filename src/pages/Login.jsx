import React from "react";
import { useNavigate } from "react-router-dom";
import LoginContainer from "../components/styled/LoginContainer.styled";

const Login = ({ isLoggedin, setIsLoggedin }) => {
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoggedin(!isLoggedin);
    navigate("/");
  };

  return (
    <LoginContainer>
    <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="USERNAME" required />
        </div>
        <div>
          <input type="password" placeholder="PASSWORD" required/>
        </div>

        <button type="submit">
          LOGIN
        </button>
      </form>
    </LoginContainer>
  );
};

export default Login;

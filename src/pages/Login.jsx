import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ isLoggedin, setIsLoggedin }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoggedin(!isLoggedin);
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="USERNAME" />
        </div>
        <div>
          <input type="password" placeholder="PASSWORD" />
        </div>

        <button type="submit" className="btn btn-primary">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;

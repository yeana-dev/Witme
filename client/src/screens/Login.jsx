import { Link } from "react-router-dom";
import { useState } from "react";
import "./style/Login.css";

function Login(props) {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <form
      className="login"
      onSubmit={(event) => {
        event.preventDefault();
        props.handleLogin(loginData);
      }}
    >
      <label>
        Username
        <input
          type="text"
          name="username"
          value={loginData.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
      <Link to="/register">Register Here</Link>
    </form>
  );
}

export default Login;

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
      className="user-input-container"
      onSubmit={(event) => {
        event.preventDefault();
        props.handleLogin(loginData);
      }}
    >
      <header>LOGIN</header>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={loginData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={loginData.password}
        onChange={handleChange}
      />
      <input type="submit" id="input-submit-button" value="Login" />
      <div id="sign-up-here">
        No account? <Link to="/register">Sign up here!</Link>
      </div>
    </form>
  );
}

export default Login;

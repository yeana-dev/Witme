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
      {props.loginError ? (
        // We created toggle state from MainContainer. If there is an error during login,
        // the toggle state changes to TRUE. We can display this error alert if the toggle state is true
        <div id="login-error">Invalid Username / Password!</div>
      ) : (
        // If the toggle state is false, we will need an empty div to make sure the layout don't get shifted.
        <div id="login-error-empty"></div>
      )}
      <input type="submit" id="input-submit-button" value="Login" />
      <div id="sign-up-here">
        No account? <Link to="/register">Sign up here!</Link>
      </div>
    </form>
  );
}

export default Login;

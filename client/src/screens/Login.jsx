import { Link } from "react-router-dom";
import { useState } from "react";

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
    <div className="login">
      <form
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
      </form>
      <Link to="/register">Register Here</Link>
    </div>
  );
}

export default Login;

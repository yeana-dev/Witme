import { useState } from "react";
import "./style/Register.css";

function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordLengthError, setPasswordLengthError] = useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPasswordLengthError(false);
    setPasswordConfirmError(false);
    if (formData.password.length < 6) {
      setPasswordLengthError(true);
    } else if (passwordConfirm !== formData.password) {
      setPasswordConfirmError(true);
    } else {
      setPasswordLengthError(false);
      setPasswordConfirmError(false);
      props.handleRegister(formData);
    }
  };
  return (
    <form
      className="user-input-container"
      onSubmit={(event) => handleSubmit(event)}
    >
      <header>SIGN UP</header>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password (Minimum 6 characters)"
        value={formData.password}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password Confirm"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <div id="signup-errors">
        <div>
          {passwordLengthError && "Password minimum 6 characters required"}
        </div>
        <div>{passwordConfirmError && "Passwords don't match"}</div>
      </div>
      <input type="submit" id="input-submit-button" />
    </form>
  );
}

export default Register;

import { useState } from "react";

function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <form
      className="user-input-container"
      onSubmit={(event) => {
        event.preventDefault();
        passwordConfirm === formData.password
          ? props.handleRegister(formData)
          : alert("Password not match");
      }}
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
      <input type="submit" id="input-submit-button" />
    </form>
  );
}

export default Register;

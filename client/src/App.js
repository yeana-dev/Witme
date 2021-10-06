import "./App.css";
import Layout from "./components/layout/Layout";
import MainContainer from "./container/MainContainer";
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./services/auth";

import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  };

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <MainContainer
          handleLogin={handleLogin}
          handleRegister={handleRegister}
          currentUser={currentUser}
        />
      </Layout>
    </div>
  );
}

export default App;

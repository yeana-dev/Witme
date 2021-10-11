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
  const [loginError, setLoginError] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    try {
      const userData = await loginUser(loginData);
      setCurrentUser(userData);
      setLoginError(false);
      history.push("/");
    } catch (error) {
      setLoginError(true);
    }
  };

  const handleRegister = async (registerData) => {
    try {
      const userData = await registerUser(registerData);
      setCurrentUser(userData);
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    history.push("/");
    removeToken();
  };

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <MainContainer
          handleLogin={handleLogin}
          handleRegister={handleRegister}
          currentUser={currentUser}
          loginError={loginError}
          setLoginError={setLoginError}
        />
      </Layout>
    </div>
  );
}

export default App;

import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const initalState = {
  isLoggedIn: false,
  user: null,
};
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    JSON.parse(sessionStorage.getItem("auth")) || initalState
  );

  const login = (user) => {
    setAuth({ isLoggedIn: true, user });
    sessionStorage.setItem(
      "auth",
      JSON.stringify({ isLoggedIn: true, user })
    );
  };

  const navigate = useNavigate();

  const logout = () => {
    setAuth(initalState);
    sessionStorage.clear();
    navigate("/");
  };

  const value = { login, logout, auth };

  return (<>
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
    </>
  );
}
export { AuthContext, AuthProvider };
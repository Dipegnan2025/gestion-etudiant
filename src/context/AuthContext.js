// src/context/AuthContext.js
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // ⚠️ Tu peux adapter cette condition
    if (email === "dipegnan@gmail.com" && password === "admin") {
      setUser({ email, role: "admin" }); // Ajout d'un rôle possible
      navigate("/");
    } else {
      alert("Identifiants incorrects");
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

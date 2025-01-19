import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ user: null, token: "" });

  // Set up axios default headers
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parsed = JSON.parse(data);
      console.log("Parsed auth data:", parsed); // Debugging
      setAuth({
        user: parsed.user,
        token: parsed.token,
      });

      // Set global Authorization header
      axios.defaults.headers.common["Authorization"] = `Bearer ${parsed.token}`;
      console.log("Global Authorization Header:", axios.defaults.headers.common["Authorization"]); // Debugging
    }
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };

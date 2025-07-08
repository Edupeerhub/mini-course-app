import { createContext, useState, useEffect, useRef } from "react";
import { authAPI } from "../services/authAPI";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const clearAuth = () => {
    setUserInfo(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const signUp = async (formData) => {
    try {
      const signUpResponse = await authAPI.register(formData);

      const token = signUpResponse.data.token;
      const user = signUpResponse.data.user;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setUserInfo(user);
      setToken(token);
      return { success: true };
    } catch (error) {
      console.error("Registration failed:", error.message);
      return {
        success: false,
        message: error.message || "Registration failed",
      };
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const loginResponse = await authAPI.login({ email, password });

      const token = loginResponse.data.token;
      const user = loginResponse.data.user;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setUserInfo(user);
      setToken(token);
      return { success: true };
    } catch (error) {
      console.error("Login failed:", error.message);
      return {
        success: false,
        message: error.message || "Login failed",
      };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    clearAuth();
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    console.log("AuthContext init:", { storedToken, userInfo, token });
    if (storedToken) {
      authAPI
        .getCurrentUser(storedToken)
        .then((response) => {
          setToken(storedToken);
          setUserInfo(response.data.user);
        })
        .catch((err) => {
          console.error("Auth failed:", err);
          clearAuth(); // reset token + user
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
    // if (storedToken) {
    //   try {
    //     const decoded = jwtDecode(storedToken);
    //     if (decoded.exp * 1000 > Date.now()) {
    //       setToken(storedToken);
    //       setUserInfo(decoded);
    //     } else {
    //       clearAuth();
    //     }
    //   } catch (error) {
    //     console.error("Auth initialization error:", error);
    //     clearAuth();
    //   }
    // }
    // setIsLoading(false);
  }, []);
  useEffect(() => {
    console.warn("Token updated:", token);
    console.warn("user updated:", userInfo);
  }, [token]);

  const contextValue = {
    userInfo,
    token,
    signUp,
    login,
    logout,
    isLoading,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

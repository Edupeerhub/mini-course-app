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

      const token = signUpResponse.token;
      const user = signUpResponse.user;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setUserInfo(user);
      setToken(token);
      return { success: true };
    } catch (error) {
      const errorData = await signUpResponse.catch(() => ({}));
      console.error(
        `Registration failed: ${errorData}, error from api: ${error}`
      );
      return {
        success: false,
        message: errorData.error || "Registration failed",
      };
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const loginResponse = await authAPI.login({ email, password });

      const token = loginResponse.token;
      const user = loginResponse.user;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setUserInfo(user);
      setToken(token);
      return { success: true };
    } catch (error) {
      const errorData = await loginResponse.catch(() => ({}));
      console.error(`Login failed: ${errorData}, error from api: ${error}`);
      return {
        success: false,
        message: errorData.error || "Login failed",
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
    // const storedUser = localStorage.getItem("user");

    if (storedToken) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 > Date.now()) {
          setUserInfo(decoded);
        } else {
          clearAuth();
        }
      } catch (error) {
        console.error("Auth initialization error:", error);
        clearAuth();
      } finally {
        setIsLoading(false);
      }
    }
  }, []);

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

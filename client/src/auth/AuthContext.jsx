import { createContext, useContext, useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 > Date.now()) {
          setUser(decoded);
        } else {
          localStorage.removeItem("token");
        }
      } catch (e) {
        localStorage.removeItem("token");
      }
    }
  }, []);

  const login = async ({ email, password }) => {
    // Mock login logic with roles
    const token = jwtEncode({ email, role: 'student', exp: Math.floor(Date.now() / 1000) + 3600 });
    setUser(jwtDecode(token));
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Mock jwtEncode for demonstration
const jwtEncode = (payload) => {
  return btoa(JSON.stringify(payload)) + '.' + btoa("signature");
};

export const useAuth = () => useContext(AuthContext);

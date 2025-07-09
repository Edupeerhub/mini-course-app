import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function PrivateRoute({ children }) {
  const { userInfo, token, isLoading } = useContext(AuthContext);
  // Don't render anything until auth is initialized
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!token || !userInfo) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

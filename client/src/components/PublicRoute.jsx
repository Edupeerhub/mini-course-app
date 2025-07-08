import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function PublicRoute({ children }) {
  const { userInfo, isLoading } = useContext(AuthContext);

  if (isLoading) return <div>Loading...</div>;

  if (userInfo) return <Navigate to="/courses" replace />;

  return children;
}

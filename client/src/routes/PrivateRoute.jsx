import { Navigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';

const PrivateRoute = ({ children, roles }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;
  if (roles && !roles.includes(user.role)) return <Navigate to="/unauthorized" />;

  return children;
};

export default PrivateRoute;

/src/pages/Unauthorized.jsx
const Unauthorized = () => (
  <div className="p-8 text-center">
    <h2 className="text-red-600 text-xl">Access Denied</h2>
    <p>You do not have permission to view this page.</p>
  </div>
);

export default Unauthorized;

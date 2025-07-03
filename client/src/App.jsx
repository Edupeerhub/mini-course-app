import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './routes/PrivateRoute';
import Unauthorized from './pages/Unauthorized';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/dashboard" element={
        <PrivateRoute roles={["student", "admin"]}>
          <Dashboard />
        </PrivateRoute>
      } />
    </Routes>
  );
}

export default App;
// src/App.jsx
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoute from "./components/PrivateRoute";
import { AuthContextProvider } from "./components/AuthContext";

function App() {
  return (
    <>
      {/* <Header /> */}
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="courses"
                element={
                  // <PrivateRoute>
                  // </PrivateRoute>
                  <Courses />
                }
              />
              <Route path="about" element={<About />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
          </Routes>
        </Router>
      </AuthContextProvider>
    </>
  );
}

export default App;

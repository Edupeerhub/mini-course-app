// src/App.jsx
import "./App.css";
import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/courseDetails";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/:id" element={<CourseDetails />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

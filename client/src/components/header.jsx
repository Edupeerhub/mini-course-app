import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const Header = () => {
  const { userInfo, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout();
  };
  const username = userInfo?.first_name;

  return (
    <>
      {/* Navbar */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-blue-600">
            🎓 CourseHub
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 items-center text-gray-700">
            {/* {username && ( */}
            <>
              <Link to="/courses" className="hover:text-blue-600">
                View Your Courses
              </Link>
              <a
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-1.5 rounded hover:bg-red-700"
              >
                Sign Out ({username})
              </a>
            </>
            {/* )} */}

            {!username && (
              <>
                <Link to="/login" className="hover:text-blue-600">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700"
                >
                  Sign Up
                </Link>
              </>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

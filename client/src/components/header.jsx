import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
            <Link to="/courses" className="hover:text-blue-600">
              Courses
            </Link>
            <Link to="/login" className="hover:text-blue-600">
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700"
            >
              Sign Up
            </Link>
            <Link to="/about" className="text-blue-700 hover:underline">
              About
            </Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2 text-gray-700">
            <Link to="/courses" className="block hover:text-blue-600">
              Courses
            </Link>
            <Link to="/login" className="block hover:text-blue-600">
              Login
            </Link>
            <Link
              to="/signup"
              className="block bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700"
            >
              Sign Up
            </Link>
            <Link to="/about" className="text-blue-700 hover:underline">
              About
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

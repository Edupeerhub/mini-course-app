// src/Layout.jsx
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-yellow-100">
      {/* Navbar */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-blue-600">🎓 CourseHub</Link>


          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 items-center text-gray-700">
            <Link to="/courses" className="hover:text-blue-600">Courses</Link>
            <Link to="/login" className="hover:text-blue-600">Login</Link>
            <Link to="/signup" className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700">Sign Up</Link>
            <Link to="/about" className="text-blue-700 hover:underline">About</Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2 text-gray-700">
            <Link to="/courses" className="block hover:text-blue-600">Courses</Link>
            <Link to="/login" className="block hover:text-blue-600">Login</Link>
            <Link to="/signup" className="block bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700">Sign Up</Link>
            <Link to="/about" className="text-blue-700 hover:underline">About</Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white text-center py-4 border-t text-sm text-gray-500">
        © {new Date().getFullYear()} CourseHub. All rights reserved.
      </footer>
    </div>
  );
}
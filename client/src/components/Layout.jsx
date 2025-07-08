// src/Layout.jsx
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const location = useLocation();
  const isCoursesPage = location.pathname.startsWith("/courses");

  return (
    <div className="min-h-screen flex flex-col bg-yellow-100">
      <Header />

      {/* Main Content */}
      <main
        className={`flex-grow px-4 py-4 overflow-auto ${
          isCoursesPage ? "" : "flex items-center justify-center"
        }`}
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

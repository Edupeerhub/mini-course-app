// src/Layout.jsx
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-yellow-100">
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

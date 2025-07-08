import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="bg-white text-center py-3 border-t text-sm text-gray-500">
        <div>© {new Date().getFullYear()} CourseHub. All rights reserved.</div>
        <div>
          <Link to="/about" className="text-blue-700 hover:underline">
            About
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="bg-white text-center py-4 border-t text-sm text-gray-500">
        © {new Date().getFullYear()} CourseHub. All rights reserved.
      </footer>
    </>
  );
};

export default Footer;

import React from "react";

const AddCourseButton = ({ onAddCourse }) => {
  return (
    <button
      onClick={onAddCourse}
      className="bg-blue-600 text-white px-4 py-1.5 rounded-lg mb-8 transition-colors hover:bg-blue-700"
    >
      Add Course
    </button>
  );
};

export default AddCourseButton;

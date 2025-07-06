import React, { useEffect, useState } from "react";
import AddCourseButton from "../components/AddCourseButton";

import Modal from "../hooks/useModal";
import { courseAPI } from "../services/courseAPI";

const Courses = () => {
  // This will be replaced with API calls later
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Introduction to Computer Science",
      courseCode: "CS101",
      description: "Basic programming concepts and algorithms",
    },
    {
      id: 2,
      title: "Data Structures",
      courseCode: "CS201",
      description: "Advanced data structures and their applications",
    },
    {
      id: 3,
      title: "Web Development",
      courseCode: "WEB301",
      description: "Frontend and backend web development",
    },
    {
      id: 4,
      title: "Database Systems",
      courseCode: "DB401",
      description: "Relational databases and SQL",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    courseCode: "",
    description: "",
  });

  const openModal = (type, course = null) => {
    setModalType(type);
    setSelectedCourse(course);
    if (type === "add") {
      setFormData({ title: "", courseCode: "", description: "" });
    } else if (type === "edit" && course) {
      setFormData({
        title: course.title,
        courseCode: course.courseCode,
        description: course.description,
      });
    }
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedCourse(null);
    setFormData({ title: "", courseCode: "", description: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.courseCode || !formData.description) {
      alert("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);

      if (modalType === "add") {
        const newCourse = await courseAPI.addCourse(formData);
        // setCourses((prev) => [...prev, newCourse]);
      } else if (modalType === "edit") {
        const updatedCourse = await courseAPI.updateCourse(
          selectedCourse.id,
          formData
        );
        // setCourses((prev) =>
        //   prev.map((course) =>
        //     course.id === selectedCourse.id ? updatedCourse : course
        //   )
        // );
      }

      closeModal();
      setError(null);
    } catch (err) {
      setError(
        modalType === "add" ? "Failed to add course" : "Failed to update course"
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (courseId) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        setLoading(true);
        await courseAPI.deleteCourse(courseId);
        // setCourses((prev) => prev.filter((course) => course.id !== courseId));
        setError(null);
      } catch (err) {
        setError("Failed to delete course");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  const getModalTitle = () => {
    switch (modalType) {
      case "add":
        return "Add Course";
      case "edit":
        return "Edit Course";
      case "view":
        return "Course Details";
      default:
        return "";
    }
  };

  const renderModalContent = () => {
    if (modalType === "view") {
      return (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Course Title
            </label>
            <p className="text-gray-900">{selectedCourse?.title}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Course Code
            </label>
            <p className="text-gray-900">{selectedCourse?.courseCode}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Course Description
            </label>
            <p className="text-gray-900">{selectedCourse?.description}</p>
          </div>
          <div className="flex justify-end pt-4">
            <button
              onClick={closeModal}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Course Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter course title"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Course Code
          </label>
          <input
            type="text"
            name="courseCode"
            value={formData.courseCode}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter course code"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Course Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter course description"
          />
        </div>
        <div className="flex justify-end gap-2 pt-4">
          <button
            type="button"
            onClick={closeModal}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors disabled:opacity-50"
          >
            {loading ? (
              <span className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                {modalType === "add" ? "Adding..." : "Updating..."}
              </span>
            ) : modalType === "add" ? (
              "Add Course"
            ) : (
              "Update Course"
            )}
          </button>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const coursesData = await courseAPI.getAllCourses();
        setCourses(coursesData);
        setError(null);
      } catch (err) {
        setError("Failed to load courses");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      <div className="max-w-6xl mx-auto p-2">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-2">
          Courses List
        </h2>
        <AddCourseButton onAddCourse={() => openModal("add")} />

        {loading ? (
          <div className="bg-white rounded-lg shadow-lg h-[20vh] flex items-center justify-center w-[full]">
            <div className="text-center w-full">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading courses...</p>
            </div>
          </div>
        ) : courses.length > 0 ? (
          <div className="bg-white rounded-lg shadow-lg overflow-auto max-h-[70vh]">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-gray-700 font-semibold">
                    Course Title
                  </th>
                  <th className="px-6 py-4 text-left text-gray-700 font-semibold">
                    Course Code
                  </th>
                  <th className="px-6 py-4 text-left text-gray-700 font-semibold">
                    Course Description
                  </th>
                  <th className="px-6 py-4 text-left text-gray-700 font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">{course.title}</td>
                    <td className="px-6 py-4 text-gray-700">
                      {course.courseCode}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {course.description}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => openModal("edit", course)}
                          className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded text-sm transition-colors"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => handleDelete(course.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm transition-colors"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => openModal("view", course)}
                          className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded text-sm transition-colors"
                        >
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg h-[70vh] flex items-center justify-center">
            <p className="text-gray-600">
              No Course found. Add to view your courses.
            </p>
          </div>
        )}
      </div>
      <Modal
        isOpen={modalType !== null}
        onClose={closeModal}
        title={getModalTitle()}
      >
        {renderModalContent()}
      </Modal>
    </>
  );
};

export default Courses;

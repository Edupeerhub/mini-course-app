const API_BASE_URL = "https://localhost:3000/api";

export const courseAPI = {
  // Get all courses
  getAllCourses: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/course`);
      if (!response.ok) throw new Error("Failed to fetch courses");
      return await response.json();
    } catch (error) {
      console.error("Error fetching courses:", error);
      throw error;
    }
  },

  // Add new course
  addCourse: async (courseData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/course`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(courseData),
      });
      if (!response.ok) throw new Error("Failed to add course");
      return await response.json();
    } catch (error) {
      console.error("Error adding course:", error);
      throw error;
    }
  },

  // Update course
  updateCourse: async (id, courseData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/course/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(courseData),
      });
      if (!response.ok) throw new Error("Failed to update course");
      return await response.json();
    } catch (error) {
      console.error("Error updating course:", error);
      throw error;
    }
  },

  // Delete course
  deleteCourse: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/course/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete course");
      return await response.json();
    } catch (error) {
      console.error("Error deleting course:", error);
      throw error;
    }
  },
};

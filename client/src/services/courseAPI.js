import { fetchWithAuth } from "../utils/fetchWithAuth";

const API_BASE_URL =
  import.meta.env.NODE_ENV === "production"
    ? import.meta.env.VITE_API_URL || ""
    : ""; // Empty string in dev = relative paths

export const courseAPI = {
  getAllCourses: async (token) => {
    return await fetchWithAuth(`/api/course`, token);
  },

  addCourse: async (courseData, token) => {
    return await fetchWithAuth(`/api/course`, token, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(courseData),
    });
  },

  updateCourse: async (id, courseData, token) => {
    return await fetchWithAuth(`/api/course/${id}`, token, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(courseData),
    });
  },

  deleteCourse: async (id, token) => {
    return await fetchWithAuth(`/api/course/${id}`, token, {
      method: "DELETE",
    });
  },
};

import { fetchWithAuth } from "../utils/fetchWithAuth";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const courseAPI = {
  getAllCourses: async (token) => {
    return await fetchWithAuth(`${API_BASE_URL}/course`, token);
  },

  addCourse: async (courseData, token) => {
    return await fetchWithAuth(`${API_BASE_URL}/course`, token, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(courseData),
    });
  },

  updateCourse: async (id, courseData, token) => {
    return await fetchWithAuth(`${API_BASE_URL}/course/${id}`, token, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(courseData),
    });
  },

  deleteCourse: async (id, token) => {
    return await fetchWithAuth(`${API_BASE_URL}/course/${id}`, token, {
      method: "DELETE",
    });
  },
};

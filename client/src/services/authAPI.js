const API_BASE_URL = import.meta.env.VITE_API_URL;

export const authAPI = {
  login: async (loginData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 201) {
        return await response.json();
      } else {
        throw new Error("Failed to login");
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
      throw error;
    }
  },

  register: async (registerData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        body: JSON.stringify(registerData),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) throw new Error("Failed to register");
      return await response.json();
    } catch (error) {
      console.error("Error fetching courses:", error);
      throw error;
    }
  },
};

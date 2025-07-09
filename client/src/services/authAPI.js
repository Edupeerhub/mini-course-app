const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? import.meta.env.VITE_API_URL || ""
    : ""; // Empty string in dev = relative paths

export const authAPI = {
  login: async (loginData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: { "Content-Type": "application/json" },
      });

      const responseData = await response.json();

      if (response.ok) {
        return responseData;
      } else {
        throw new Error(responseData.error || "Failed to login");
      }
    } catch (error) {
      // console.error("Login API error:", error);
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
      const responseData = await response.json();
      if (response.status === 201) {
        return responseData;
      } else {
        throw new Error(responseData.error || "Failed to register");
      }
    } catch (error) {
      // console.error("Register API error:", error);
      throw error;
    }
  },
  getCurrentUser: async (token) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Cache-Control": "no-cache",
        },
      });

      const responseData = await response.json();

      if (response.ok) {
        return responseData;
      } else {
        throw new Error(responseData.error || "Failed to fetch user");
      }
    } catch (error) {
      // console.error("Get current user API error:", error);
      throw error;
    }
  },
};

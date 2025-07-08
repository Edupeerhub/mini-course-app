export const fetchWithAuth = async (url, token, options = {}) => {
  try {
    if (!token) return { success: false, message: "No token available" };

    let response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      return { success: true, message: await response.json() };
    } else if (response.status === 401) {
      return { success: false, message: "Unauthorized" };
    } else {
      const errorData = await response.json().catch(() => ({}));
      return { success: false, message: errorData.error || "Fetch failed" };
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return { success: false, message: "Network error. Please try again." };
  }
};

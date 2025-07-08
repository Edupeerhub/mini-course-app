export const fetchWithAuth = async (url, token, options = {}) => {
  try {
    if (!token) return { success: false, message: "No token available" };

    const response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const contentType = response.headers.get("content-type") || "";

      const data = contentType.includes("application/json")
        ? await response.json()
        : null;

      return { success: true, message: data };
    } else {
      // Try to parse error response
      const errorData = await response.json().catch(() => null);

      const errorMessage =
        (errorData && (errorData.error || errorData.message)) ||
        `${response.status} ${response.statusText}` ||
        "Request failed";

      console.error("API Error:", {
        url,
        status: response.status,
        statusText: response.statusText,
        errorMessage,
      });

      return { success: false, message: errorMessage };
    }
  } catch (error) {
    // Usually a network failure or CORS issue
    console.error("Network or unexpected fetch error:", error);
    return {
      success: false,
      message: error.message || "Network error. Please try again.",
    };
  }
};
